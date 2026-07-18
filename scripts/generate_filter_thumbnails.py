from pathlib import Path
import re

import numpy as np
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
LUT_DIR = ROOT / "filters" / "luts"
SOURCE_IMAGE = ROOT / "filters" / "assets" / "filter-preview-source.png"
OUTPUT_DIR = ROOT / "filters" / "thumbs"


def parse_cube(path: Path):
    size = 0
    domain_min = np.array([0.0, 0.0, 0.0], dtype=np.float32)
    domain_max = np.array([1.0, 1.0, 1.0], dtype=np.float32)
    values = []

    for raw_line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = re.sub(r"#.*$", "", raw_line).strip()
        if not line:
            continue
        parts = line.split()
        command = parts[0].upper()
        if command == "LUT_3D_SIZE":
            size = int(parts[1])
        elif command == "DOMAIN_MIN":
            domain_min = np.array(parts[1:4], dtype=np.float32)
        elif command == "DOMAIN_MAX":
            domain_max = np.array(parts[1:4], dtype=np.float32)
        elif command == "LUT_3D_INPUT_RANGE":
            low, high = map(float, parts[1:3])
            domain_min[:] = low
            domain_max[:] = high
        else:
            try:
                color = [float(value) for value in parts[:3]]
            except (ValueError, IndexError):
                continue
            if len(color) == 3:
                values.append(color)

    if not 2 <= size <= 64 or len(values) < size**3:
        raise ValueError(f"LUT inválido: {path.name}")
    table = np.asarray(values[: size**3], dtype=np.float32).reshape(size, size, size, 3)
    return table, domain_min, domain_max


def apply_lut(image: np.ndarray, table: np.ndarray, domain_min: np.ndarray, domain_max: np.ndarray):
    size = table.shape[0]
    color = np.clip((image - domain_min) / np.maximum(domain_max - domain_min, 0.0001), 0.0, 1.0)
    coordinates = color * (size - 1)
    lower = np.floor(coordinates).astype(np.int32)
    upper = np.minimum(lower + 1, size - 1)
    fraction = coordinates - lower

    red0, green0, blue0 = lower[..., 0], lower[..., 1], lower[..., 2]
    red1, green1, blue1 = upper[..., 0], upper[..., 1], upper[..., 2]
    fr, fg, fb = fraction[..., 0:1], fraction[..., 1:2], fraction[..., 2:3]

    c000 = table[blue0, green0, red0]
    c100 = table[blue0, green0, red1]
    c010 = table[blue0, green1, red0]
    c110 = table[blue0, green1, red1]
    c001 = table[blue1, green0, red0]
    c101 = table[blue1, green0, red1]
    c011 = table[blue1, green1, red0]
    c111 = table[blue1, green1, red1]

    bottom = (c000 * (1 - fr) + c100 * fr) * (1 - fg) + (c010 * (1 - fr) + c110 * fr) * fg
    top = (c001 * (1 - fr) + c101 * fr) * (1 - fg) + (c011 * (1 - fr) + c111 * fr) * fg
    return np.clip(bottom * (1 - fb) + top * fb, 0.0, 1.0)


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE_IMAGE).convert("RGB")
    source = ImageOps.fit(source, (320, 180), method=Image.Resampling.LANCZOS)
    source_array = np.asarray(source, dtype=np.float32) / 255.0

    generated = 0
    for lut_path in sorted(LUT_DIR.glob("*.cube")):
        table, domain_min, domain_max = parse_cube(lut_path)
        result = apply_lut(source_array, table, domain_min, domain_max)
        image = Image.fromarray(np.round(result * 255).astype(np.uint8), "RGB")
        image.save(OUTPUT_DIR / f"{lut_path.stem}.webp", "WEBP", quality=76, method=4)
        generated += 1

    print(f"{generated} miniaturas geradas")


if __name__ == "__main__":
    main()

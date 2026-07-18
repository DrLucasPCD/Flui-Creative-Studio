#!/usr/bin/env python3
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = ROOT / "filters" / "catalog.json"

GROUPS = {
    "Natural & Pele": {
        "ava-614", "lut-thiago-rodrigues-basico-001", "milo-5", "teigen-28",
    },
    "Sol & Dourado": {
        "arabica-12", "bourbon-64", "domingo-145", "lut6",
        *{f"sunshine-{number:02d}{suffix}" for number in range(1, 6) for suffix in ("", "-s")},
    },
    "Frios & Atmosfera": {
        "byers-11", "contrail-35", "fusion-88", "hyla-68", "korben-214",
        "reeve-38", "trent-18", "vireo-37", "zed-32", "lut3", "lut7", "lut9",
        *{f"depression-{number:02d}{suffix}" for number in range(1, 6) for suffix in ("", "-s")},
    },
    "Cinema & Drama": {
        "azrael-93", "dark-shades-presetsstore-com", "django-25", "mckinnon-75",
        "paladin-1875", "lut10",
        *{f"foreshadowing-{number:02d}{suffix}" for number in range(1, 6) for suffix in ("", "-s")},
    },
    "Vintage & Anal\u00f3gico": {
        "faded-47", "folger-50", "lenox-340", "remy-24", "sprocket-231",
        "tweed-71", "lut1", "lut2", "lut5", "lut8",
    },
    "Cor & Impacto": {
        "chemical-168", "clouseau-54", "cobi-3", "lucky-64", "neon-770",
        "pasadena-21", "pitaya-15", "zeke-39", "lut4",
    },
    "Urbano & Editorial": {
        "clayton-33", "cubicle-99",
        *{f"suburbs-{number:02d}{suffix}" for number in range(1, 6) for suffix in ("", "-s")},
    },
}


def main():
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    collection_by_id = {
        preset_id: collection
        for collection, preset_ids in GROUPS.items()
        for preset_id in preset_ids
    }
    catalog_ids = {preset["id"] for preset in catalog}
    if catalog_ids != set(collection_by_id):
        missing = sorted(catalog_ids - set(collection_by_id))
        unknown = sorted(set(collection_by_id) - catalog_ids)
        raise SystemExit(f"Colecoes incompletas. Sem grupo: {missing}; desconhecidos: {unknown}")

    for preset in catalog:
        preset["collection"] = collection_by_id[preset["id"]]
    CATALOG_PATH.write_text(
        json.dumps(catalog, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()

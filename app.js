const SAMPLE_SCRIPT = `Você sabia que um simples beijo no rosto de um bebê pode levar ele para o hospital?

Parece exagero… mas não é.

O sistema imunológico do bebê ainda é imaturo.
Um vírus que em você causa só um resfriado… nele pode virar uma bronquiolite grave.

E não é só beijo.

Pegar na mão do bebê também transmite vírus — e adivinha pra onde essa mão vai depois?
Boca. Nariz. Olhos.

É assim que começa.

A bronquiolite, causada principalmente pelo vírus sincicial respiratório, é uma das principais causas de internação em bebês.

Então guarda isso:

Evite beijo no rosto.
Higienize as mãos antes de tocar.
E respeite o espaço do bebê.

Cuidar é proteger — mesmo quando parece “só carinho”.

E lembre-se: é no cérebro que os sonhos viram decisões —
e decisões moldam o nosso futuro`;

const elements = {
  videoInput: document.querySelector("#videoInput"),
  video: document.querySelector("#video"),
  videoShell: document.querySelector("#videoShell"),
  syncNextButton: document.querySelector("#syncNextButton"),
  syncNextTime: document.querySelector("#syncNextTime"),
  extendPreviousButton: document.querySelector("#extendPreviousButton"),
  extendPreviousTime: document.querySelector("#extendPreviousTime"),
  emptyVideo: document.querySelector("#emptyVideo"),
  scriptInput: document.querySelector("#scriptInput"),
  scriptCount: document.querySelector("#scriptCount"),
  sampleButton: document.querySelector("#sampleButton"),
  clearScriptButton: document.querySelector("#clearScriptButton"),
  captionLength: document.querySelector("#captionLength"),
  generateButton: document.querySelector("#generateButton"),
  autoCaptionButton: document.querySelector("#autoCaptionButton"),
  autoCaptionLabel: document.querySelector("#autoCaptionLabel"),
  captionOverlay: document.querySelector("#captionOverlay"),
  captionCompositionOverlay: document.querySelector("#captionCompositionOverlay"),
  captionComposer: document.querySelector("#captionComposer"),
  compositionPresetButtons: document.querySelectorAll("[data-composition-preset]"),
  captionPartButtons: document.querySelectorAll("[data-caption-part]"),
  captionPartEditor: document.querySelector("#captionPartEditor"),
  captionPartText: document.querySelector("#captionPartText"),
  captionPartStart: document.querySelector("#captionPartStart"),
  captionPartEnd: document.querySelector("#captionPartEnd"),
  captionPartScale: document.querySelector("#captionPartScale"),
  captionPartScaleValue: document.querySelector("#captionPartScaleValue"),
  captionPartMoveButtons: document.querySelectorAll("[data-caption-part-move]"),
  extendCaptionPart: document.querySelector("#extendCaptionPart"),
  removeCaptionComposition: document.querySelector("#removeCaptionComposition"),
  playButton: document.querySelector("#playButton"),
  playIcon: document.querySelector("#playIcon"),
  backButton: document.querySelector("#backButton"),
  forwardButton: document.querySelector("#forwardButton"),
  muteButton: document.querySelector("#muteButton"),
  fullscreenButton: document.querySelector("#fullscreenButton"),
  muteIcon: document.querySelector("#muteIcon"),
  seekBar: document.querySelector("#seekBar"),
  currentTime: document.querySelector("#currentTime"),
  duration: document.querySelector("#duration"),
  fontSize: document.querySelector("#fontSize"),
  fontSizeValue: document.querySelector("#fontSizeValue"),
  fontFamily: document.querySelector("#fontFamily"),
  captionAnimation: document.querySelector("#captionAnimation"),
  captionTransition: document.querySelector("#captionTransition"),
  captionCase: document.querySelector("#captionCase"),
  captionModeButtons: document.querySelectorAll("[data-caption-mode]"),
  captionPresetButtons: document.querySelectorAll("[data-caption-preset]"),
  captionTextColor: document.querySelector("#captionTextColor"),
  captionTextRgb: document.querySelector("#captionTextRgb"),
  captionHighlightColor: document.querySelector("#captionHighlightColor"),
  captionHighlightRgb: document.querySelector("#captionHighlightRgb"),
  captionBackgroundColor: document.querySelector("#captionBackgroundColor"),
  captionBackgroundRgb: document.querySelector("#captionBackgroundRgb"),
  colorSwatches: document.querySelectorAll("[data-caption-color]"),
  captionBackground: document.querySelector("#captionBackground"),
  captionShadow: document.querySelector("#captionShadow"),
  captionOutlineWidth: document.querySelector("#captionOutlineWidth"),
  captionOutlineValue: document.querySelector("#captionOutlineValue"),
  captionOutlineColor: document.querySelector("#captionOutlineColor"),
  captionLiveText: document.querySelector("#captionLiveText"),
  captionLiveCount: document.querySelector("#captionLiveCount"),
  positionButtons: document.querySelectorAll("[data-position]"),
  timelineEmpty: document.querySelector("#timelineEmpty"),
  cueList: document.querySelector("#cueList"),
  timingTools: document.querySelector("#timingTools"),
  linkTiming: document.querySelector("#linkTiming"),
  addCueButton: document.querySelector("#addCueButton"),
  exportFormat: document.querySelector("#exportFormat"),
  exportFrameRate: document.querySelector("#exportFrameRate"),
  exportColorMode: document.querySelector("#exportColorMode"),
  shortcutsButton: document.querySelector("#shortcutsButton"),
  shortcutsModal: document.querySelector("#shortcutsModal"),
  closeShortcutsButton: document.querySelector("#closeShortcutsButton"),
  quickMediaModal: document.querySelector("#quickMediaModal"),
  closeQuickMediaButton: document.querySelector("#closeQuickMediaButton"),
  quickMediaButtons: document.querySelectorAll("[data-quick-media]"),
  projectAspectButton: document.querySelector("#projectAspectButton"),
  projectAspectLabel: document.querySelector("#projectAspectLabel"),
  projectAspectShape: document.querySelector("#projectAspectShape"),
  projectAspectMenu: document.querySelector("#projectAspectMenu"),
  projectAspectButtons: document.querySelectorAll("[data-project-aspect]"),
  exportButton: document.querySelector("#exportButton"),
  projectStatus: document.querySelector("#projectStatus"),
  toast: document.querySelector("#toast"),
  exportModal: document.querySelector("#exportModal"),
  exportTitle: document.querySelector("#exportTitle"),
  exportStatus: document.querySelector("#exportStatus"),
  exportProgress: document.querySelector("#exportProgress"),
  exportPercent: document.querySelector("#exportPercent"),
  renderSymbol: document.querySelector("#renderSymbol"),
  renderProgress: document.querySelector("#renderProgress"),
  exportOptions: document.querySelector("#exportOptions"),
  includeCommercial: document.querySelector("#includeCommercial"),
  commercialVariant: document.querySelector("#commercialVariant"),
  startExportButton: document.querySelector("#startExportButton"),
  cancelExportButton: document.querySelector("#cancelExportButton"),
  saveExportButton: document.querySelector("#saveExportButton"),
  renderCanvas: document.querySelector("#renderCanvas"),
  cutTransitionOverlay: document.querySelector("#cutTransitionOverlay"),
  cutEditor: document.querySelector("#cutEditor"),
  cutButton: document.querySelector("#cutButton"),
  cutButtonLabel: document.querySelector("#cutButtonLabel"),
  cutMarkTime: document.querySelector("#cutMarkTime"),
  cutSelectedAudioButton: document.querySelector("#cutSelectedAudioButton"),
  cutSelectedAudioLabel: document.querySelector("#cutSelectedAudioLabel"),
  splitClipButton: document.querySelector("#splitClipButton"),
  splitClipLabel: document.querySelector("#splitClipLabel"),
  splitSelectedAudioButton: document.querySelector("#splitSelectedAudioButton"),
  undoCutButton: document.querySelector("#undoCutButton"),
  magneticCuts: document.querySelector("#magneticCuts"),
  cutTrack: document.querySelector("#cutTrack"),
  cutLayer: document.querySelector("#cutLayer"),
  cutPlayhead: document.querySelector("#cutPlayhead"),
  transitionPalette: document.querySelector("#transitionPalette"),
  lutInput: document.querySelector("#lutInput"),
  lutStatus: document.querySelector("#lutStatus"),
  lutIntensity: document.querySelector("#lutIntensity"),
  lutIntensityValue: document.querySelector("#lutIntensityValue"),
  removeLutButton: document.querySelector("#removeLutButton"),
  filterCatalogStatus: document.querySelector("#filterCatalogStatus"),
  filterTargetName: document.querySelector("#filterTargetName"),
  colorTargetName: document.querySelector("#colorTargetName"),
  filterSearchInput: document.querySelector("#filterSearchInput"),
  filterCollectionSelect: document.querySelector("#filterCollectionSelect"),
  filterPresetList: document.querySelector("#filterPresetList"),
  clearFilterPresetButton: document.querySelector("#clearFilterPresetButton"),
  applyFilterToTrack: document.querySelector("#applyFilterToTrack"),
  applyColorToTrack: document.querySelector("#applyColorToTrack"),
  lutPreviewCanvas: document.querySelector("#lutPreviewCanvas"),
  lutRenderCanvas: document.querySelector("#lutRenderCanvas"),
  toolTabs: document.querySelectorAll("[data-tool-tab]"),
  toolPanels: document.querySelectorAll("[data-tool-panel]"),
  adjustmentInputs: document.querySelectorAll("[data-video-adjustment]"),
  resetAdjustmentsButton: document.querySelector("#resetAdjustmentsButton"),
  mediaOverlayLayer: document.querySelector("#mediaOverlayLayer"),
  sequenceVideoInput: document.querySelector("#sequenceVideoInput"),
  overlayVideoInput: document.querySelector("#overlayVideoInput"),
  imageTrackInput: document.querySelector("#imageTrackInput"),
  audioTrackInput: document.querySelector("#audioTrackInput"),
  mediaTimeline: document.querySelector("#mediaTimeline"),
  videoGridButtons: document.querySelectorAll("[data-video-grid]"),
  videoGridPresets: document.querySelector("#videoGridPresets"),
  sequenceTrackLane: document.querySelector("#sequenceTrackLane"),
  audioTrackLane: document.querySelector("#audioTrackLane"),
  mediaPlayheads: document.querySelectorAll("[data-media-playhead]"),
  mediaInspectorEmpty: document.querySelector("#mediaInspectorEmpty"),
  mediaInspector: document.querySelector("#mediaInspector"),
  mediaInspectorName: document.querySelector("#mediaInspectorName"),
  mediaClipStart: document.querySelector("#mediaClipStart"),
  mediaClipEnd: document.querySelector("#mediaClipEnd"),
  mediaClipSize: document.querySelector("#mediaClipSize"),
  mediaClipSizeValue: document.querySelector("#mediaClipSizeValue"),
  mediaClipOpacity: document.querySelector("#mediaClipOpacity"),
  mediaClipOpacityValue: document.querySelector("#mediaClipOpacityValue"),
  mediaClipAnimation: document.querySelector("#mediaClipAnimation"),
  mediaClipVolume: document.querySelector("#mediaClipVolume"),
  mediaClipVolumeValue: document.querySelector("#mediaClipVolumeValue"),
  mediaClipSpeed: document.querySelector("#mediaClipSpeed"),
  toggleAudioLinkButton: document.querySelector("#toggleAudioLinkButton"),
  mediaFadeIn: document.querySelector("#mediaFadeIn"),
  mediaFadeInValue: document.querySelector("#mediaFadeInValue"),
  mediaFadeOut: document.querySelector("#mediaFadeOut"),
  mediaFadeOutValue: document.querySelector("#mediaFadeOutValue"),
  overlayInspectorControls: document.querySelectorAll("[data-overlay-control]"),
  volumeInspectorControls: document.querySelectorAll("[data-volume-control]"),
  speedInspectorControls: document.querySelectorAll("[data-speed-control]"),
  fadeInspectorControls: document.querySelectorAll("[data-fade-control]"),
  videoInspectorControls: document.querySelectorAll("[data-video-control]"),
  extractAudioButton: document.querySelector("#extractAudioButton"),
  duplicateMediaClipButton: document.querySelector("#duplicateMediaClipButton"),
  deleteMediaClipButton: document.querySelector("#deleteMediaClipButton"),
  cueInspectorEmpty: document.querySelector("#cueInspectorEmpty"),
  cueInspector: document.querySelector("#cueInspector"),
  activeCueText: document.querySelector("#activeCueText"),
  activeCueStart: document.querySelector("#activeCueStart"),
  activeCueEnd: document.querySelector("#activeCueEnd"),
  deleteActiveCueButton: document.querySelector("#deleteActiveCueButton"),
  stage: document.querySelector("#videoEditor"),
  editorTools: document.querySelector(".editor-tools"),
  scriptEditor: document.querySelector("#scriptEditor"),
  reviewEditor: document.querySelector("#reviewEditor"),
  mobileTabs: document.querySelectorAll("[data-mobile-target]"),
};

const DEFAULT_VIDEO_ADJUSTMENTS = Object.freeze({
  exposure: 0,
  brightness: 0,
  contrast: 0,
  saturation: 0,
  vibrance: 0,
  temperature: 0,
  warmth: 0,
  tint: 0,
  highlights: 0,
  shadows: 0,
  blacks: 0,
});

const state = {
  videoUrl: null,
  videoFile: null,
  videoName: "legendas",
  cues: [],
  autoCaptionBusy: false,
  activeCue: -1,
  toastTimer: null,
  recorder: null,
  exporting: false,
  exportPreparing: false,
  exportCanceled: false,
  audioContext: null,
  audioSource: null,
  mainAudioGain: null,
  audioDestination: null,
  wakeLock: null,
  pendingExport: null,
  previewFrame: null,
  previewFrameType: null,
  captionPosition: { x: 50, y: 66, preset: "editorial" },
  captionPositions: {
    vertical: { x: 50, y: 66, preset: "editorial" },
    horizontal: { x: 50, y: 84, preset: "editorial" },
  },
  captionMode: "phrase",
  captionPreset: "editorial",
  captionTemplate: "editorial",
  captionCompositions: [],
  activeCaptionPart: "group",
  draggingCaptionPart: null,
  draggingCaption: false,
  cuts: [],
  cutStart: null,
  cutTargetKey: null,
  cutTargetName: "V1",
  cutTargetClipId: null,
  cutSequence: 0,
  selectedVideoTransition: "fade",
  cutTransition: null,
  cutTransitionTimer: null,
  cutMenuController: null,
  isCutSeeking: false,
  lut: null,
  lutPreviewRenderer: null,
  lutExportSurfaces: new Map(),
  lutPresets: [],
  activeLutPresetId: null,
  lutIntensity: 100,
  fitCanvas: null,
  optimizedOutput: null,
  videoAdjustments: { ...DEFAULT_VIDEO_ADJUSTMENTS },
  applyFilterToTrack: false,
  applyColorToTrack: false,
  sequenceClips: [],
  activeSequenceIndex: 0,
  overlayVideoClips: [],
  videoTrackOrder: [],
  pendingVideoTrackId: null,
  imageClips: [],
  audioClips: [],
  audioTrackOrder: ["audio-base"],
  pendingAudioTrackId: null,
  narrationRecorder: null,
  narrationStream: null,
  narrationTrackId: null,
  narrationStart: 0,
  narrationChunks: [],
  narrationCounter: 0,
  narrationCaptionBusy: false,
  narrationEndHandler: null,
  hiddenVideoTrackIds: new Set(),
  hiddenAudioTrackIds: new Set(),
  selectedMediaClipId: null,
  selectedMediaSegmentKey: null,
  draggingMediaOverlay: null,
  resizingMediaOverlay: null,
  pinchingMediaOverlay: null,
  draggingTimelineClip: null,
  trimmingTimelineClip: null,
  activeVideoDropTarget: null,
  activeAudioDropTarget: null,
  audioTrackNodes: new Map(),
  splitHistory: [],
  undoInProgress: false,
  isSequenceSwitching: false,
  projectEndSignaled: false,
  videoGridMode: 1,
  videoGridClipIds: [],
  videoGridLayout: "auto",
  projectAspect: "source",
  gridCellCanvas: null,
  draggingGridCell: null,
  timelineZoom: 1,
  restoredVideoSignature: null,
};

const PROJECT_ASPECTS = Object.freeze({
  "9:16": 9 / 16,
  "16:9": 16 / 9,
  "1:1": 1,
  "4:5": 4 / 5,
});

const COMMERCIAL_EXPORTS = Object.freeze({
  vertical: {
    url: "./assets/flui-commercial-vertical.mp4",
    name: "Flui Creative Studio - comercial vertical.mp4",
    label: "Vertical 9:16 · 10 segundos",
  },
  horizontal: {
    url: "./assets/flui-commercial-horizontal.mp4",
    name: "Flui Creative Studio - comercial horizontal.mp4",
    label: "Horizontal 16:9 · 10 segundos",
  },
});

let autoCaptionTranscriberPromise = null;
const TRANSFORMERS_MODULE_URL = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js";
const AUTO_CAPTION_MODEL = "onnx-community/whisper-base";
const EDITORIAL_DESIGN_VERSION = 2;
const DEFAULT_CAPTION_POSITIONS = {
  vertical: { x: 50, y: 66, preset: "editorial" },
  horizontal: { x: 50, y: 84, preset: "editorial" },
};
const CAPTION_VERTICAL_LIMITS = {
  vertical: { min: 4, max: 96 },
  horizontal: { min: 5, max: 95 },
};
const GLOBAL_CAPTION_POSITION_PRESETS = {
  vertical: {
    top: { x: 50, y: 46 },
    center: { x: 50, y: 58 },
    bottom: { x: 50, y: 70 },
  },
  horizontal: {
    top: { x: 50, y: 14 },
    center: { x: 50, y: 50 },
    bottom: { x: 50, y: 84 },
  },
};
const IMPACT_STOP_WORDS = new Set("a ao aos as ate com como da das de do dos e ela ele eles em entre era essa esse esta este eu foi ha isso ja mais mas me mesmo meu minha na nao nas nem no nos nos o os ou para pela pelo por porque que se sem ser seu sua so tambem tem um uma voce voces".split(" "));
const IMPACT_TERMS = new Set("agora atencao cerebro cuidado decisao decisoes descobrir escolha escolhas essencial evitar futuro grave hospital importante nunca perigo proteger protecao resultado risco saude segredo sempre solucao sonhos urgente virus".split(" "));
const IMPACT_WORD_CACHE = new Map();

const FONT_FAMILIES = {
  strong: '"Arial Black", "Helvetica Neue", Arial, sans-serif',
  clean: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  rounded: '"Arial Rounded MT Bold", "Avenir Next", Arial, sans-serif',
  impact: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
  condensed: '"Arial Narrow", "Helvetica Neue Condensed Bold", Impact, sans-serif',
  futura: 'Futura, "Avenir Next", "Helvetica Neue", sans-serif',
  trebuchet: '"Trebuchet MS", "Avenir Next", Arial, sans-serif',
  editorial: 'Georgia, "Times New Roman", serif',
  baskerville: 'Baskerville, Georgia, "Times New Roman", serif',
  palatino: 'Palatino, "Palatino Linotype", Georgia, serif',
  script: '"Snell Roundhand", "Apple Chancery", Georgia, cursive',
  mono: '"Courier New", Courier, monospace',
};

const CAPTION_STYLE_PRESETS = {
  editorial: {
    mode: "phrase", template: "editorial", font: "Helvetica Neue", size: 36, animation: "editorial", transition: "fade",
    text: "#ffffff", highlight: "#43ddc3", background: false, outline: 0, shadow: true, textCase: "normal",
  },
  clean: {
    mode: "phrase", template: "normal", font: "clean", size: 36, animation: "fade", transition: "fade",
    text: "#ffffff", highlight: "#f0b64d", background: false, outline: 2, shadow: true, textCase: "normal",
  },
  impact: {
    mode: "word", template: "normal", font: "strong", size: 48, animation: "pop", transition: "cut",
    text: "#ffffff", highlight: "#f0b64d", background: false, outline: 4, shadow: true, textCase: "normal",
  },
  karaoke: {
    mode: "karaoke", template: "normal", font: "rounded", size: 38, animation: "pop", transition: "fade",
    text: "#ffffff", highlight: "#f5d547", background: false, outline: 3, shadow: true, textCase: "normal",
  },
  duo: {
    mode: "phrase", template: "duo", font: "strong", size: 43, animation: "slide", transition: "fade",
    text: "#ffffff", highlight: "#ffffff", background: false, outline: 1, shadow: true, textCase: "normal",
  },
  banner: {
    mode: "phrase", template: "normal", font: "condensed", size: 39, animation: "slide", transition: "cut",
    text: "#ffffff", highlight: "#ffffff", background: true, outline: 0, shadow: false, textCase: "upper",
  },
};

function composeEditorLayout() {
  if (!elements.stage || elements.stage.querySelector(".preview-column")) return;
  const previewColumn = document.createElement("div");
  previewColumn.className = "preview-column";
  previewColumn.append(
    elements.videoShell,
    document.querySelector(".player-controls"),
  );
  elements.videoShell.append(elements.fullscreenButton);
  const alignmentGuides = document.createElement("div");
  alignmentGuides.className = "alignment-guides";
  alignmentGuides.setAttribute("aria-hidden", "true");
  alignmentGuides.innerHTML = '<i class="vertical"></i><i class="horizontal"></i>';
  elements.videoShell.append(alignmentGuides);
  elements.alignmentGuides = alignmentGuides;
  elements.stage.prepend(previewColumn);

  const timelineHeading = elements.reviewEditor.querySelector(".timeline-heading");
  const timelineZoomControls = document.createElement("div");
  timelineZoomControls.className = "timeline-zoom-controls";
  timelineZoomControls.innerHTML = `
    <button type="button" data-timeline-zoom-step="-0.5" title="Diminuir zoom" aria-label="Diminuir zoom da timeline">−</button>
    <input type="range" min="1" max="8" step="0.25" value="1" aria-label="Zoom da timeline" />
    <button type="button" data-timeline-zoom-step="0.5" title="Aumentar zoom" aria-label="Aumentar zoom da timeline">＋</button>
    <output>1×</output>`;
  elements.reviewEditor.append(timelineZoomControls);
  elements.timelineZoomControls = timelineZoomControls;
  elements.timelineZoom = timelineZoomControls.querySelector('input[type="range"]');
  elements.timelineZoomValue = timelineZoomControls.querySelector("output");
  elements.timelineZoom.addEventListener("input", () => applyTimelineZoom(elements.timelineZoom.value));
  timelineZoomControls.querySelectorAll("[data-timeline-zoom-step]").forEach((button) => {
    button.addEventListener("click", () => {
      applyTimelineZoom(state.timelineZoom + Number(button.dataset.timelineZoomStep));
    });
  });
  timelineHeading.after(elements.cutEditor, elements.mediaTimeline);

  const cutRow = document.createElement("div");
  cutRow.className = "media-track-row cut-track-row";
  const cutLabel = document.createElement("span");
  cutLabel.textContent = "Cortes";
  const cutLane = document.createElement("div");
  cutLane.className = "media-track-lane unified-cut-lane";
  cutLane.append(elements.cutTrack);
  cutRow.append(cutLabel, cutLane);
  elements.mediaTimeline.prepend(cutRow);
  elements.cutEditor.append(elements.transitionPalette);
  document.querySelector("#cutTimeline")?.remove();

  const captionRow = document.createElement("div");
  captionRow.className = "media-track-row caption-track-row";
  const captionLabel = document.createElement("span");
  captionLabel.textContent = "Legendas";
  const captionLane = document.createElement("div");
  captionLane.className = "media-track-lane caption-track-lane";
  captionLane.append(elements.timelineEmpty, elements.cueList);
  captionRow.append(captionLabel, captionLane);
  elements.mediaTimeline.append(captionRow);
  const reviewPanel = elements.editorTools.querySelector('[data-tool-panel="review"]');
  reviewPanel.prepend(document.querySelector(".quick-sync-actions"));
  reviewPanel.append(elements.timingTools);
  const captionPanel = elements.editorTools.querySelector('[data-tool-panel="caption"]');
  const captionColorbar = elements.editorTools.querySelector(".caption-colorbar");
  const captionQuickRow = captionPanel?.querySelector(".caption-quick-row");
  if (captionPanel && captionColorbar && captionQuickRow) captionPanel.insertBefore(captionColorbar, captionQuickRow);
  elements.editorTools.append(elements.scriptEditor);
  elements.stage.append(elements.editorTools, elements.reviewEditor);

  const trackActions = [
    [elements.sequenceTrackLane, elements.sequenceVideoInput, "Adicionar vídeo ou imagem à faixa V1"],
    [elements.audioTrackLane, elements.audioTrackInput, "Adicionar áudio ou extrair de vídeo"],
  ];
  trackActions.forEach(([lane, input, label]) => {
    const trackLabel = lane.closest(".media-track-row")?.firstElementChild;
    if (!trackLabel) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "track-add-button";
    button.textContent = "+";
    button.title = label;
    button.setAttribute("aria-label", label);
    button.addEventListener("click", () => input.click());
    trackLabel.append(button);
  });

  elements.sequenceTrackLane.addEventListener("dragover", (event) => {
    if (!visualFilesFromTransfer(event.dataTransfer).length) return;
    event.preventDefault();
    elements.sequenceTrackLane.classList.add("drop-active");
  });
  elements.sequenceTrackLane.addEventListener("dragleave", () => elements.sequenceTrackLane.classList.remove("drop-active"));
  elements.sequenceTrackLane.addEventListener("drop", async (event) => {
    const files = visualFilesFromTransfer(event.dataTransfer);
    if (!files.length) return;
    event.preventDefault();
    elements.sequenceTrackLane.classList.remove("drop-active");
    const bounds = elements.sequenceTrackLane.getBoundingClientRect();
    const start = clamp((event.clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration();
    await addVisualClips(files, "base", start);
  });

  elements.audioTrackLane.addEventListener("dragover", (event) => {
    if (!audioFilesFromTransfer(event.dataTransfer).length) return;
    event.preventDefault();
    elements.audioTrackLane.classList.add("drop-active");
  });
  elements.audioTrackLane.addEventListener("dragleave", () => elements.audioTrackLane.classList.remove("drop-active"));
  elements.audioTrackLane.addEventListener("drop", async (event) => {
    const files = audioFilesFromTransfer(event.dataTransfer);
    if (!files.length) return;
    event.preventDefault();
    elements.audioTrackLane.classList.remove("drop-active");
    const bounds = elements.audioTrackLane.getBoundingClientRect();
    const start = clamp((event.clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration();
    await addAudioClips(files, "audio-base", start);
  });

  [
    [elements.sequenceTrackLane, "video", "base", "V1"],
    [elements.audioTrackLane, "audio", "audio-base", "A1"],
  ].forEach(([lane, kind, trackId, label]) => {
    const trackLabel = lane.closest(".media-track-row")?.firstElementChild;
    const addButton = trackLabel?.querySelector(".track-add-button");
    if (trackLabel) trackLabel.insertBefore(createTrackVisibilityButton(kind, trackId, label), addButton || null);
  });
  appendAudioTrackActions(
    elements.audioTrackLane.closest(".media-track-row")?.firstElementChild,
    "audio-base",
    "A1",
  );

  const captionAddButton = document.createElement("button");
  captionAddButton.type = "button";
  captionAddButton.className = "track-add-button";
  captionAddButton.textContent = "+";
  captionAddButton.title = "Adicionar legenda no tempo atual";
  captionAddButton.setAttribute("aria-label", "Adicionar legenda no tempo atual");
  captionAddButton.addEventListener("click", addCue);
  captionLabel.append(captionAddButton);

  const toolTabs = elements.editorTools.querySelector(".tool-tabs");
  const mainEditor = document.createElement("section");
  mainEditor.className = "main-editor";
  const editorBody = document.createElement("div");
  editorBody.className = "editor-body";
  editorBody.append(elements.editorTools, previewColumn);
  mainEditor.append(toolTabs, editorBody);

  const sideNav = document.createElement("nav");
  sideNav.className = "desktop-side-nav";
  sideNav.setAttribute("aria-label", "Ferramentas principais");
  const sideItems = [
    ["Editar", "✎", "caption"],
    ["Mídia", "□", "media"],
    ["Filtros", "◐", "filters"],
    ["Estilos", "◉", "caption"],
    ["Legenda", "T", "caption"],
    ["Áudio", "♫", "media"],
    ["Transições", "⋈", "media"],
    ["Configurações", "⚙", "color"],
    ["Atalhos", "⌨", "shortcuts"],
  ];
  sideItems.forEach(([label, icon, target], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === 0 ? "active" : "";
    button.dataset.sideTarget = target;
    button.innerHTML = `<span aria-hidden="true">${icon}</span><small>${label}</small>`;
    button.addEventListener("click", () => {
      if (target === "shortcuts") {
        elements.shortcutsButton.click();
        return;
      }
      document.querySelector(`[data-tool-tab="${target}"]`)?.click();
      sideNav.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      elements.stage.classList.remove("mobile-menu-open");
    });
    sideNav.append(button);
  });

  const propertiesPanel = document.createElement("aside");
  propertiesPanel.className = "properties-panel";
  propertiesPanel.setAttribute("aria-label", "Propriedades");
  propertiesPanel.innerHTML = `
    <div class="properties-heading"><h2>Propriedades</h2><button id="deleteSelectedMediaAction" type="button" hidden aria-label="Excluir mídia selecionada" title="Excluir mídia selecionada">⌫</button></div>
    <section><h3>Transformar</h3>
      <label><span id="propertyScaleLabel">Tamanho da fonte</span><input id="propertyScale" type="range" min="8" max="200" value="36" aria-label="Tamanho da fonte"><output id="propertyScaleValue">36 px</output></label>
      <div class="property-inline"><label>Posição X<input id="propertyX" type="number" value="50"></label><label>Y<input id="propertyY" type="number" value="50"></label></div>
      <label>Girar <input id="propertyRotation" type="number" min="-180" max="180" value="0"><span>°</span></label>
    </section>
    <section><h3>Aparência</h3>
      <label>Opacidade <input id="propertyOpacity" type="range" min="0" max="100" value="100"><output id="propertyOpacityValue">100%</output></label>
      <label>Raio do fundo <input id="propertyRadius" type="range" min="0" max="32" value="10"><output id="propertyRadiusValue">10</output></label>
    </section>
    <section><h3>Espaçamento</h3>
      <div class="property-inline"><label>Entre linhas<input id="propertyLineHeight" type="number" min="0.8" max="2" step="0.1" value="1.2"></label><label>Entre letras<input type="number" value="0" disabled></label></div>
    </section>
    <section class="property-sync"><h3>Sincronização</h3>
      <div class="property-inline"><label>Início<input id="propertyStart" type="number" min="0" step="0.1" value="0"></label><label>Fim<input id="propertyEnd" type="number" min="0" step="0.1" value="0"></label></div>
      <button id="propertyAutoSync" type="button">≋ &nbsp; Ajustar automaticamente</button>
    </section>`;

  const mobileMenuButton = document.createElement("button");
  mobileMenuButton.type = "button";
  mobileMenuButton.className = "mobile-menu-button";
  mobileMenuButton.title = "Abrir ferramentas";
  mobileMenuButton.setAttribute("aria-label", "Abrir ferramentas");
  mobileMenuButton.textContent = "☰";
  mobileMenuButton.addEventListener("click", () => {
    const open = mobileProjectDrawer.classList.toggle("open");
    elements.stage.classList.toggle("mobile-menu-open", open);
    mobileMenuButton.setAttribute("aria-expanded", String(open));
  });
  document.querySelector(".topbar")?.prepend(mobileMenuButton);

  const mobileProjectDrawer = document.createElement("section");
  mobileProjectDrawer.className = "mobile-project-drawer";
  mobileProjectDrawer.innerHTML = `
    <strong>Adicionar mídia</strong>
    <div class="mobile-add-grid"></div>
    <div class="mobile-aspect-picker" aria-label="Proporção do projeto">
      <span>Proporção</span>
      ${[["source", "Original"], ["9:16", "9:16"], ["16:9", "16:9"], ["1:1", "1:1"], ["4:5", "4:5"]]
        .map(([value, label]) => `<button type="button" data-project-aspect="${value}"><i class="ratio-shape ${value === "source" ? "ratio-source" : `ratio-${value.replace(":", "-")}`}"></i>${label}</button>`)
        .join("")}
    </div>
    <label>Resolução<select></select></label>
    <label>Frame rate<select></select></label>
    <label>Faixa dinâmica<select></select></label>`;
  [["＋ Vídeo", elements.sequenceVideoInput], ["▧ Foto", elements.imageTrackInput], ["♫ Áudio/vídeo", elements.audioTrackInput]]
    .forEach(([label, input]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => input.click());
      mobileProjectDrawer.querySelector(".mobile-add-grid").append(button);
    });
  const drawerSelects = mobileProjectDrawer.querySelectorAll("select");
  [elements.exportFormat, elements.exportFrameRate, elements.exportColorMode].forEach((source, index) => {
    drawerSelects[index].innerHTML = source.innerHTML;
    drawerSelects[index].value = source.value;
    drawerSelects[index].addEventListener("change", () => {
      source.value = drawerSelects[index].value;
      source.dispatchEvent(new Event("change"));
    });
  });
  mobileProjectDrawer.querySelectorAll("[data-project-aspect]").forEach((button) => {
    button.addEventListener("click", () => setProjectAspect(button.dataset.projectAspect));
  });
  document.body.append(mobileProjectDrawer);

  const mobileSheetHeading = document.createElement("div");
  mobileSheetHeading.className = "mobile-sheet-heading";
  mobileSheetHeading.innerHTML = '<button class="sheet-grabber" type="button" aria-label="Ocultar painel"></button><span class="sheet-icon">T</span><strong>Legenda</strong><i></i><small>Editando</small><button class="mobile-sheet-delete" type="button" aria-label="Excluir legenda">⌫</button>';
  const mobileDeleteButton = mobileSheetHeading.querySelector(".mobile-sheet-delete");
  mobileDeleteButton.addEventListener("click", () => {
    if (mobileDeleteButton.dataset.target === "media") deleteSelectedMediaClip();
    else deleteActiveCue();
  });
  let sheetDragStart = null;
  let sheetDragFromHandle = false;
  mobileSheetHeading.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button:not(.sheet-grabber)") || event.clientY - mobileSheetHeading.getBoundingClientRect().top > 24) return;
    sheetDragStart = event.clientY;
    sheetDragFromHandle = Boolean(event.target.closest(".sheet-grabber"));
    mobileSheetHeading.setPointerCapture?.(event.pointerId);
  });
  mobileSheetHeading.addEventListener("pointermove", (event) => {
    if (sheetDragStart === null) return;
    elements.editorTools.style.transform = `translateY(${Math.max(0, event.clientY - sheetDragStart)}px)`;
  });
  const finishSheetDrag = (event) => {
    if (sheetDragStart === null) return;
    const distance = event.clientY - sheetDragStart;
    sheetDragStart = null;
    elements.editorTools.style.transform = "";
    if (distance > 48 || sheetDragFromHandle) elements.stage.classList.add("tools-collapsed");
    sheetDragFromHandle = false;
    mobileSheetHeading.releasePointerCapture?.(event.pointerId);
  };
  mobileSheetHeading.addEventListener("pointerup", finishSheetDrag);
  mobileSheetHeading.addEventListener("pointercancel", finishSheetDrag);
  mobileSheetHeading.querySelector(".sheet-grabber").addEventListener("click", () => elements.stage.classList.add("tools-collapsed"));
  elements.editorTools.prepend(mobileSheetHeading);

  elements.stage.prepend(sideNav, mainEditor, propertiesPanel);
  elements.stage.append(elements.reviewEditor);
  propertiesPanel.querySelector("#deleteSelectedMediaAction").addEventListener("click", deleteSelectedMediaClip);

  const syncPropertyValues = () => updatePropertiesPanel();
  propertiesPanel.querySelector("#propertyScale").addEventListener("input", (event) => {
    const clip = propertiesMediaClip();
    if (clip && ["image", "video"].includes(clip.type)) {
      clip.size = Number(event.target.value);
      elements.mediaClipSize.value = event.target.value;
    } else {
      elements.fontSize.value = String(clamp(Number(event.target.value), 8, 200));
      elements.fontSize.dispatchEvent(new Event("input"));
    }
    updateMediaPreview();
    syncPropertyValues();
  });
  ["X", "Y"].forEach((axis) => propertiesPanel.querySelector(`#property${axis}`).addEventListener("change", (event) => {
    const clip = propertiesMediaClip();
    const value = clamp(Number(event.target.value) || 0, 0, 100);
    if (clip && ["image", "video"].includes(clip.type)) clip[axis.toLowerCase()] = value;
    else setCaptionPosition(
      axis === "X" ? value : state.captionPosition.x,
      axis === "Y" ? value : state.captionPosition.y,
      "custom",
      false,
    );
    updateMediaPreview();
    applyCaptionPositionStyles();
    saveLocalProject();
  }));
  propertiesPanel.querySelector("#propertyRotation").addEventListener("change", (event) => {
    const clip = propertiesMediaClip();
    if (clip && ["image", "video"].includes(clip.type)) clip.rotation = clamp(Number(event.target.value) || 0, -180, 180);
    updateMediaPreview();
    saveLocalProject();
  });
  propertiesPanel.querySelector("#propertyOpacity").addEventListener("input", (event) => {
    const clip = propertiesMediaClip();
    if (clip && ["image", "video"].includes(clip.type)) clip.opacity = Number(event.target.value) / 100;
    updateMediaPreview();
    syncPropertyValues();
  });
  propertiesPanel.querySelector("#propertyRadius").addEventListener("input", (event) => {
    elements.captionOverlay.style.borderRadius = `${event.target.value}px`;
    propertiesPanel.querySelector("#propertyRadiusValue").value = event.target.value;
  });
  propertiesPanel.querySelector("#propertyLineHeight").addEventListener("change", (event) => {
    elements.captionOverlay.style.lineHeight = String(clamp(Number(event.target.value) || 1.2, 0.8, 2));
  });
  propertiesPanel.querySelector("#propertyStart").addEventListener("change", (event) => {
    if (state.cues[state.activeCue]) updateCueStart(state.activeCue, Number(event.target.value) || 0);
  });
  propertiesPanel.querySelector("#propertyEnd").addEventListener("change", (event) => {
    if (state.cues[state.activeCue]) updateCueEnd(state.activeCue, Number(event.target.value) || 0);
  });
  propertiesPanel.querySelector("#propertyAutoSync").addEventListener("click", () => elements.syncNextButton.click());
}

composeEditorLayout();

function timelineBaseLaneWidth() {
  const labelWidth = window.innerWidth <= 760 ? 112 : 124;
  const minimum = window.innerWidth <= 760 ? 600 : 512;
  return Math.max(minimum, elements.mediaTimeline.clientWidth - labelWidth - 24);
}

function applyTimelineZoom(value, preserveCursor = true) {
  const lane = elements.sequenceTrackLane;
  const scroller = elements.mediaTimeline;
  if (!lane || !scroller) return;
  const duration = Math.max(0.1, projectDuration() || 1);
  const cursorRatio = clamp(projectCurrentTime() / duration);
  const oldBounds = lane.getBoundingClientRect();
  const oldAnchor = oldBounds.left + oldBounds.width * cursorRatio;
  state.timelineZoom = clamp(Number(value) || 1, 1, 8);
  const laneWidth = Math.round(timelineBaseLaneWidth() * state.timelineZoom);
  scroller.style.setProperty("--timeline-lane-width", `${laneWidth}px`);
  elements.timelineZoom.value = String(state.timelineZoom);
  elements.timelineZoomValue.value = `${String(state.timelineZoom).replace(".", ",")}×`;
  scroller.classList.toggle("timeline-zoomed", state.timelineZoom > 1.05);
  requestAnimationFrame(() => {
    if (preserveCursor) {
      const newBounds = lane.getBoundingClientRect();
      const newAnchor = newBounds.left + newBounds.width * cursorRatio;
      scroller.scrollLeft += newAnchor - oldAnchor;
    }
    if (state.timelineZoom > 1.2) ensureTimelineFrames();
  });
}

function refreshSequenceTiming() {
  let cursor = 0;
  state.sequenceClips.forEach((clip) => {
    clip.start = cursor;
    clip.end = cursor + (Number(clip.duration) || 0);
    const rate = clipPlaybackRate(clip);
    const trimIn = Math.max(0, Number(clip.trimInSource) || 0) / rate;
    const trimOut = Math.max(0, Number(clip.trimOutSource) || 0) / rate;
    clip.trimStart = clip.start + Math.min(trimIn, Math.max(0, clip.duration - 0.1));
    clip.trimEnd = clip.end - Math.min(trimOut, Math.max(0, clip.duration - 0.1 - trimIn));
    updateSequenceTrimCut(clip, "start", clip.start, clip.trimStart);
    updateSequenceTrimCut(clip, "end", clip.trimEnd, clip.end);
    cursor = clip.end;
  });
  return cursor;
}

function mediaContentEnd(clip) {
  if (!clip) return 0;
  if (clip.type === "sequence") return visibleSequenceSegments(clip).at(-1)?.end || 0;
  const segments = visibleTrackClipSegments(clip);
  if (segments === null) return clipEffectiveEnd(clip);
  return segments.at(-1)?.end || 0;
}

function projectDuration() {
  const sourceDuration = refreshSequenceTiming();
  const contentEnd = allMediaClips().reduce((maximum, clip) => Math.max(maximum, mediaContentEnd(clip)), 0);
  if (contentEnd > 0) return contentEnd;
  return sourceDuration || elements.video.duration || 0;
}

function activeSequenceClip() {
  return state.sequenceClips[state.activeSequenceIndex] || null;
}

function baseTrackVisibleAtTime(time) {
  if (!trackIsVisible("video", "base")) return false;
  return !state.cuts.some((cut) => (
    isBaseCut(cut)
    && cut.ripple === false
    && time >= cut.start
    && time < cut.end
  ));
}

function mediaElementStart(media) {
  try {
    if (!media?.seekable?.length) return null;
    const start = Number(media.seekable.start(0));
    return Number.isFinite(start) ? Math.max(0, start) : null;
  } catch {
    return null;
  }
}

function clipBrowserMediaStart(clip, media = null) {
  const detected = mediaElementStart(media);
  if (detected !== null) {
    if (clip) clip.browserMediaStart = detected;
    return detected;
  }
  return Math.max(0, Number(clip?.browserMediaStart) || 0);
}

function mediaElementPlayableDuration(media, clip = null) {
  const start = clipBrowserMediaStart(clip, media);
  try {
    if (media?.seekable?.length) {
      const end = Number(media.seekable.end(media.seekable.length - 1));
      if (Number.isFinite(end) && end > start) return end - start;
    }
  } catch {
    // Fall back to the metadata duration when Safari has not exposed ranges yet.
  }
  return Math.max(0, (Number(media?.duration) || 0) - start);
}

function updateClipBrowserTiming(clip, media) {
  if (!clip || !media) return;
  const detectedStart = mediaElementStart(media);
  if (detectedStart === null) return;
  const previousSourceDuration = Number(clip.sourceDuration) || Number(media.duration) || 0;
  const previousFullSpan = Math.max(0, previousSourceDuration - (clip.sourceOffset || 0));
  const canNormalizeDuration = clip.type === "sequence"
    && !clip.splitFrom
    && (!(Number(clip.duration) > 0) || Math.abs(Number(clip.duration) - previousFullSpan) < 0.12);
  clip.browserMediaStart = detectedStart;
  const playableDuration = mediaElementPlayableDuration(media, clip);
  if (playableDuration > 0) clip.sourceDuration = playableDuration;
  if (canNormalizeDuration && playableDuration > 0) {
    clip.duration = Math.max(0, playableDuration - (clip.sourceOffset || 0));
    clip.sourceSpan = clip.duration * clipPlaybackRate(clip);
  }
}

function projectCurrentTime() {
  const clip = activeSequenceClip();
  const browserStart = clipBrowserMediaStart(clip, elements.video);
  return (clip?.start || 0) + Math.max(0, (elements.video.currentTime || 0) - browserStart - (clip?.sourceOffset || 0)) / clipPlaybackRate(clip);
}

function sequenceLocationAt(time) {
  const duration = projectDuration();
  const target = clamp(time, 0, Math.max(0, duration - 0.001));
  let index = state.sequenceClips.findIndex((clip) => target >= clip.start && target < clip.end);
  if (index < 0) index = Math.max(0, state.sequenceClips.length - 1);
  const clip = state.sequenceClips[index];
  return { index, localTime: Math.max(0, target - (clip?.start || 0)) };
}

function waitForVideoMetadata() {
  return new Promise((resolve, reject) => {
    if (elements.video.readyState >= 1) return resolve();
    elements.video.addEventListener("loadedmetadata", resolve, { once: true });
    elements.video.addEventListener("error", () => reject(new Error("Não foi possível abrir este vídeo.")), { once: true });
  });
}

function videoFileSignature(file) {
  if (!file) return null;
  return `${file.name}:${file.size}:${file.lastModified || 0}`;
}

function waitForMediaCanPlay(media, timeout = 1800) {
  if (media.readyState >= 3) return Promise.resolve();
  return new Promise((resolve) => {
    let timer;
    const finish = () => {
      clearTimeout(timer);
      media.removeEventListener("canplay", finish);
      resolve();
    };
    timer = setTimeout(finish, timeout);
    media.addEventListener("canplay", finish, { once: true });
  });
}

async function continueSequencePlayback(projectTime) {
  primeSecondaryMediaForPlayback(projectTime);
  try {
    await elements.video.play();
  } catch {
    await waitForMediaCanPlay(elements.video);
    await elements.video.play();
  }
  updateMediaPreview();
}

function waitForMediaSeek(media, time, timeout = 1800) {
  if (!media) return Promise.resolve();
  const duration = Number.isFinite(media.duration) ? media.duration : Math.max(0, time);
  const target = clamp(time, 0, duration);
  if (!media.seeking && Math.abs((media.currentTime || 0) - target) <= 0.015) return Promise.resolve();
  return new Promise((resolve) => {
    let settled = false;
    let timer;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      media.removeEventListener("seeked", finish);
      resolve();
    };
    timer = setTimeout(finish, timeout);
    media.addEventListener("seeked", finish, { once: true });
    try {
      media.currentTime = target;
    } catch {
      finish();
    }
  });
}

async function seekSecondaryMediaToProjectTime(time) {
  const activeMedia = [
    ...state.overlayVideoClips
      .filter((clip) => clipIsActiveAtTime(clip, time))
      .flatMap((clip) => [[clip, clip.mediaElement], [clip, clip.audioElement]].filter(([, media]) => media)),
    ...state.audioClips
      .filter((clip) => clipIsActiveAtTime(clip, time))
      .map((clip) => [clip, clip.audioElement]),
  ];
  await Promise.allSettled(activeMedia.map(([clip, media]) => (
    waitForMediaSeek(media, clipBrowserMediaTimeAtTimeline(clip, time, media))
  )));
}

function primeSecondaryMediaForPlayback(time) {
  const activeMedia = [
    ...state.overlayVideoClips
      .filter((clip) => clipIsActiveAtTime(clip, time))
      .flatMap((clip) => [[clip, clip.mediaElement], [clip, clip.audioElement]].filter(([, media]) => media)),
    ...state.audioClips
      .filter((clip) => clipIsActiveAtTime(clip, time))
      .map((clip) => [clip, clip.audioElement]),
  ];
  activeMedia.forEach(([clip, media]) => {
    const target = clamp(clipBrowserMediaTimeAtTimeline(clip, time, media), 0, media.duration || Infinity);
    if (!media.seeking && Math.abs((media.currentTime || 0) - target) > 0.02) {
      try {
        media.currentTime = target;
      } catch {
        // Safari can reject a seek until metadata is ready; normal sync retries it.
      }
    }
    media.playbackRate = clipPlaybackRate(clip);
  });
}

async function seekProjectTime(time, autoplay = false) {
  state.projectEndSignaled = false;
  if (!state.sequenceClips.length) {
    elements.video.currentTime = clamp(time, 0, elements.video.duration || 0);
    return;
  }
  const { index, localTime } = sequenceLocationAt(time);
  const clip = state.sequenceClips[index];
  if (index !== state.activeSequenceIndex || elements.video.src !== clip.url) {
    elements.video.pause();
    state.activeSequenceIndex = index;
    elements.video.src = clip.url;
    await waitForVideoMetadata();
  }
  elements.video.volume = state.mainAudioGain ? 1 : clamp(clip.volume ?? 1);
  if (state.mainAudioGain) state.mainAudioGain.gain.value = clamp(clip.volume ?? 1, 0, 2);
  elements.video.playbackRate = clipPlaybackRate(clip);
  const projectTime = clamp(time, 0, projectDuration());
  const mediaTime = clipBrowserMediaStart(clip, elements.video)
    + (clip.sourceOffset || 0)
    + localTime * clipPlaybackRate(clip);
  await waitForMediaSeek(elements.video, mediaTime);
  updateClipBrowserTiming(clip, elements.video);
  refreshSequenceTiming();
  await seekSecondaryMediaToProjectTime(projectTime);
  if (autoplay) await elements.video.play().catch(() => {});
  updatePlayer();
}

function captionFontFamily() {
  const selected = elements.fontFamily.value;
  return FONT_FAMILIES[selected] || `"${selected.replaceAll('"', '')}", "Helvetica Neue", Arial, sans-serif`;
}

function transformCaptionCase(text) {
  if (elements.captionCase.value === "upper") return text.toLocaleUpperCase("pt-BR");
  if (elements.captionCase.value === "lower") return text.toLocaleLowerCase("pt-BR");
  return text;
}

function normalizedCaptionWord(word) {
  return word.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9%]/g, "");
}

function captionImpactWordIndex(text) {
  if (IMPACT_WORD_CACHE.has(text)) return IMPACT_WORD_CACHE.get(text);
  const words = text.trim().split(/\s+/).filter(Boolean);
  let winner = -1;
  let bestScore = -Infinity;
  words.forEach((word, index) => {
    const normalized = normalizedCaptionWord(word);
    if (!normalized || IMPACT_STOP_WORDS.has(normalized)) return;
    let score = Math.min(normalized.length, 10) * 0.18;
    if (/\d|%/.test(word)) score += 8;
    if (IMPACT_TERMS.has(normalized)) score += 6;
    if (/[!?]$/.test(word)) score += 2;
    if (word.length > 2 && word === word.toLocaleUpperCase("pt-BR")) score += 2;
    if (index === words.length - 1) score += 0.8;
    if (score > bestScore) {
      winner = index;
      bestScore = score;
    }
  });
  IMPACT_WORD_CACHE.set(text, winner);
  return winner;
}

const CAPTION_COMPOSITION_ROLES = ["lead", "impact", "support"];
const CAPTION_COMPOSITION_PRESETS = Object.freeze({
  stacked: {
    vertical: {
      lead: { x: 50, y: -7 }, impact: { x: 50, y: 0 }, support: { x: 50, y: 8 },
    },
    horizontal: {
      lead: { x: 50, y: -7 }, impact: { x: 50, y: 0 }, support: { x: 50, y: 8 },
    },
    scales: { lead: 0.78, impact: 1.65, support: 0.7 },
  },
  hero: {
    vertical: {
      lead: { x: 50, y: 0 }, impact: { x: 50, y: -25 }, support: { x: 50, y: 9 },
    },
    horizontal: {
      lead: { x: 50, y: 0 }, impact: { x: 76, y: -10 }, support: { x: 50, y: 9 },
    },
    scales: { lead: 0.82, impact: 1.82, support: 0.68 },
  },
  split: {
    vertical: {
      lead: { x: 40, y: -8 }, impact: { x: 58, y: 0 }, support: { x: 54, y: 9 },
    },
    horizontal: {
      lead: { x: 36, y: -6 }, impact: { x: 63, y: 0 }, support: { x: 58, y: 8 },
    },
    scales: { lead: 0.76, impact: 1.55, support: 0.68 },
  },
});

function compositionForCue(cue = state.cues[state.activeCue]) {
  if (!cue) return null;
  return state.captionCompositions.find((composition) => composition.cueId === cue.id) || null;
}

function compositionPart(composition, role = state.activeCaptionPart) {
  if (!composition || role === "group") return null;
  return composition.parts.find((part) => part.role === role) || null;
}

function compositionTextParts(text, preset) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return { lead: "", impact: "", support: "" };
  const impactIndex = Math.max(0, captionImpactWordIndex(text));
  const impact = words[impactIndex] || words[words.length - 1];
  if (preset === "hero") {
    return { lead: text.trim(), impact, support: "" };
  }
  return {
    lead: words.slice(0, impactIndex).join(" "),
    impact,
    support: words.slice(impactIndex + 1).join(" "),
  };
}

function defaultCompositionPosition(cue, preset, role, format) {
  const base = captionPositionForDimensions(
    format === "vertical" ? 1080 : 1920,
    format === "vertical" ? 1920 : 1080,
    cue,
  );
  const offset = CAPTION_COMPOSITION_PRESETS[preset][format][role];
  return {
    x: clamp(role === "impact" && preset === "hero" && format === "horizontal" ? offset.x : base.x + offset.x - 50, 4, 96),
    y: clamp(base.y + offset.y, 3, 97),
  };
}

function createCaptionComposition(preset = "stacked") {
  const cue = state.cues[state.activeCue];
  const definition = CAPTION_COMPOSITION_PRESETS[preset];
  if (!cue || !definition) {
    showToast("Selecione uma legenda para criar a composição.");
    return;
  }
  const textParts = compositionTextParts(cue.text, preset);
  const frameRate = Math.max(24, Number(elements.exportFrameRate.value) || 30);
  const impactDelay = 2.5 / frameRate;
  const previous = compositionForCue(cue);
  const composition = {
    id: previous?.id || crypto.randomUUID(),
    cueId: cue.id,
    preset,
    parts: CAPTION_COMPOSITION_ROLES.map((role) => {
      const oldPart = previous?.parts.find((part) => part.role === role);
      return {
        id: oldPart?.id || crypto.randomUUID(),
        role,
        text: textParts[role],
        start: role === "impact" && (textParts.lead || textParts.support)
          ? Math.min(cue.end - 0.05, cue.start + impactDelay)
          : cue.start,
        end: cue.end,
        scale: definition.scales[role],
        positions: {
          vertical: defaultCompositionPosition(cue, preset, role, "vertical"),
          horizontal: defaultCompositionPosition(cue, preset, role, "horizontal"),
        },
      };
    }),
  };
  if (previous) state.captionCompositions.splice(state.captionCompositions.indexOf(previous), 1, composition);
  else state.captionCompositions.push(composition);
  state.activeCaptionPart = preset === "hero" ? "impact" : "group";
  updateCaptionCompositionEditor();
  updateCaption();
  renderCues();
  saveLocalProject();
  showToast("Composição criada. Arraste cada parte no preview.");
}

function sanitizeCaptionCompositions(compositions) {
  if (!Array.isArray(compositions)) return [];
  const cueIds = new Set(state.cues.map((cue) => cue.id));
  return compositions.flatMap((composition) => {
    if (!composition || !cueIds.has(composition.cueId) || !CAPTION_COMPOSITION_PRESETS[composition.preset]) return [];
    const parts = CAPTION_COMPOSITION_ROLES.flatMap((role) => {
      const part = composition.parts?.find((item) => item?.role === role);
      if (!part) return [];
      const positions = {};
      ["vertical", "horizontal"].forEach((format) => {
        const position = part.positions?.[format] || { x: 50, y: 50 };
        positions[format] = {
          x: clamp(Number(position.x) || 50, 3, 97),
          y: clamp(Number(position.y) || 50, 3, 97),
        };
      });
      return [{
        id: typeof part.id === "string" ? part.id : crypto.randomUUID(),
        role,
        text: String(part.text || "").slice(0, 120),
        start: Math.max(0, Number(part.start) || 0),
        end: Math.max(Number(part.start) + 0.05, Number(part.end) || 0.05),
        scale: clamp(Number(part.scale) || 1, 0.5, 2.2),
        positions,
      }];
    });
    if (parts.length !== CAPTION_COMPOSITION_ROLES.length) return [];
    return [{
      id: typeof composition.id === "string" ? composition.id : crypto.randomUUID(),
      cueId: composition.cueId,
      preset: composition.preset,
      parts,
    }];
  });
}

function activeCompositionPartsAt(time) {
  return state.captionCompositions.flatMap((composition) => composition.parts
    .filter((part) => part.text.trim() && time >= part.start && time < part.end)
    .map((part) => ({ composition, part })));
}

function setActiveCaptionPart(role) {
  state.activeCaptionPart = ["group", ...CAPTION_COMPOSITION_ROLES].includes(role) ? role : "group";
  updateCaptionCompositionEditor();
  updateCaption();
}

function updateCaptionCompositionEditor() {
  const cue = state.cues[state.activeCue];
  const composition = compositionForCue(cue);
  const part = compositionPart(composition);
  elements.removeCaptionComposition.disabled = !composition;
  elements.compositionPresetButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.compositionPreset === composition?.preset);
  });
  elements.captionPartButtons.forEach((button) => {
    const active = button.dataset.captionPart === state.activeCaptionPart;
    button.classList.toggle("active", active);
    button.disabled = !composition;
    button.setAttribute("aria-pressed", String(active));
  });
  elements.captionPartEditor.hidden = !part;
  if (!part) return;
  if (document.activeElement !== elements.captionPartText) elements.captionPartText.value = part.text;
  if (document.activeElement !== elements.captionPartStart) elements.captionPartStart.value = part.start.toFixed(2);
  if (document.activeElement !== elements.captionPartEnd) elements.captionPartEnd.value = part.end.toFixed(2);
  elements.captionPartScale.value = String(Math.round(part.scale * 100));
  elements.captionPartScaleValue.value = `${Math.round(part.scale * 100)}%`;
}

function removeCaptionComposition() {
  const composition = compositionForCue();
  if (!composition) return;
  state.captionCompositions.splice(state.captionCompositions.indexOf(composition), 1);
  state.activeCaptionPart = "group";
  updateCaptionCompositionEditor();
  updateCaption();
  renderCues();
  saveLocalProject();
  showToast("Legenda voltou ao modo normal.");
}

function updateSelectedCaptionPart(changes, persist = true) {
  const part = compositionPart(compositionForCue());
  if (!part) return;
  Object.assign(part, changes);
  if (part.end <= part.start) part.end = part.start + 0.05;
  updateCaptionCompositionEditor();
  updateCaption();
  if (persist) saveLocalProject();
}

function moveCaptionCompositionPart(direction, amount = 2) {
  const composition = compositionForCue();
  if (!composition) return;
  const format = captionFormatForDimensions();
  const delta = {
    left: [-amount, 0], right: [amount, 0], up: [0, -amount], down: [0, amount],
  }[direction];
  if (!delta) return;
  const parts = state.activeCaptionPart === "group"
    ? composition.parts
    : [compositionPart(composition)].filter(Boolean);
  parts.forEach((part) => {
    const position = part.positions[format];
    position.x = clamp(position.x + delta[0], 3, 97);
    position.y = clamp(position.y + delta[1], 3, 97);
  });
  updateCaption();
  saveLocalProject();
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - clamp(value), 3);
}

function editorialImpactMotion(cue, time, distance = 10) {
  const frameRate = Math.max(24, Number(elements.exportFrameRate.value) || 30);
  const elapsed = Math.max(0, time - cue.start - 2.5 / frameRate);
  const progress = easeOutCubic(elapsed / 0.22);
  const overshoot = progress < 0.72
    ? 0.86 + (1.05 - 0.86) * easeOutCubic(progress / 0.72)
    : 1.05 - 0.05 * easeOutCubic((progress - 0.72) / 0.28);
  return {
    alpha: progress,
    scale: overshoot,
    y: (1 - progress) * distance,
  };
}

function currentCaptionWordIndex(cue, time) {
  const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return 0;
  const progress = clamp((time - cue.start) / Math.max(0.1, cue.end - cue.start));
  return Math.min(words.length - 1, Math.floor(progress * words.length));
}

function captionFormatForDimensions(width, height) {
  const aspect = width && height ? width / height : projectAspectRatio();
  return aspect >= 1 ? "horizontal" : "vertical";
}

function scaledCaptionFontSize(renderedHeight, format = captionFormatForDimensions()) {
  const selectedSize = clamp(Number(elements.fontSize.value) || 36, 8, 200);
  const referenceHeight = format === "vertical" ? 1920 : 1080;
  // The selected value is measured at the reference resolution and scaled identically in preview and export.
  return Math.max(0.5, selectedSize * renderedHeight / referenceHeight);
}

function captionPositionForDimensions(width, height, cue = state.cues[state.activeCue]) {
  const format = captionFormatForDimensions(width, height);
  if (cue?.captionPositions?.[format]) return cue.captionPositions[format];
  return state.captionPositions?.[format] || DEFAULT_CAPTION_POSITIONS[format];
}

function rememberCaptionPosition() {
  const format = captionFormatForDimensions();
  const cue = state.cues[state.activeCue];
  if (cue) {
    cue.captionPositions ||= {};
    cue.captionPositions[format] = { ...state.captionPosition };
  } else {
    state.captionPositions[format] = { ...state.captionPosition };
  }
}

function activateCaptionComposition(width = elements.video.videoWidth, height = elements.video.videoHeight, cue = state.cues[state.activeCue]) {
  state.captionPosition = { ...captionPositionForDimensions(width, height, cue) };
}

const CAPTION_PRESETS = {
  top: { x: 50, y: 12 },
  center: { x: 50, y: 50 },
  bottom: { x: 50, y: 88 },
};

function applyCaptionPositionStyles(cue = state.cues[state.activeCue]) {
  const shellWidth = elements.videoShell.clientWidth;
  const shellHeight = elements.videoShell.clientHeight;
  const videoWidth = elements.video.videoWidth;
  const videoHeight = elements.video.videoHeight;
  const format = captionFormatForDimensions(videoWidth, videoHeight);
  const { x, y, preset } = captionPositionForDimensions(videoWidth, videoHeight, cue);
  state.captionPosition = { x, y, preset };
  const scale = videoWidth && videoHeight ? Math.min(shellWidth / videoWidth, shellHeight / videoHeight) : 0;
  const renderedWidth = scale ? videoWidth * scale : shellWidth;
  const renderedHeight = scale ? videoHeight * scale : shellHeight;
  const offsetX = (shellWidth - renderedWidth) / 2;
  const offsetY = (shellHeight - renderedHeight) / 2;
  const safeWidth = renderedWidth * (format === "vertical" ? 0.84 : 0.9);
  elements.captionOverlay.classList.remove("position-top", "position-center", "position-bottom");
  elements.captionOverlay.dataset.format = format;
  elements.captionOverlay.style.left = `${offsetX + renderedWidth * x / 100}px`;
  elements.captionOverlay.style.top = `${offsetY + renderedHeight * y / 100}px`;
  elements.captionOverlay.style.width = `${Math.max(80, safeWidth)}px`;
  elements.captionOverlay.style.maxWidth = `${Math.max(80, safeWidth)}px`;
  elements.captionOverlay.style.fontSize = `${scaledCaptionFontSize(renderedHeight, format)}px`;
  elements.captionOverlay.style.bottom = "auto";
  elements.positionButtons.forEach((button) => button.classList.toggle("active", button.dataset.position === preset));
  applyCaptionCompositionPositionStyles();
}

function applyCaptionCompositionPositionStyles() {
  const shellWidth = elements.videoShell.clientWidth;
  const shellHeight = elements.videoShell.clientHeight;
  const videoWidth = elements.video.videoWidth;
  const videoHeight = elements.video.videoHeight;
  const format = captionFormatForDimensions(videoWidth, videoHeight);
  const scale = videoWidth && videoHeight ? Math.min(shellWidth / videoWidth, shellHeight / videoHeight) : 0;
  const renderedWidth = scale ? videoWidth * scale : shellWidth;
  const renderedHeight = scale ? videoHeight * scale : shellHeight;
  const offsetX = (shellWidth - renderedWidth) / 2;
  const offsetY = (shellHeight - renderedHeight) / 2;
  elements.captionCompositionOverlay.dataset.format = format;
  elements.captionCompositionOverlay.style.left = `${offsetX}px`;
  elements.captionCompositionOverlay.style.top = `${offsetY}px`;
  elements.captionCompositionOverlay.style.width = `${renderedWidth}px`;
  elements.captionCompositionOverlay.style.height = `${renderedHeight}px`;
  elements.captionCompositionOverlay.style.fontSize = `${scaledCaptionFontSize(renderedHeight, format)}px`;
  elements.captionCompositionOverlay.style.fontFamily = captionFontFamily();
}

function setCaptionPosition(x, y, preset = "custom", persist = true) {
  const format = captionFormatForDimensions();
  const verticalLimits = CAPTION_VERTICAL_LIMITS[format];
  state.captionPosition = {
    x: clamp(x, format === "vertical" ? 8 : 5, format === "vertical" ? 92 : 95),
    y: clamp(y, verticalLimits.min, verticalLimits.max),
    preset,
  };
  rememberCaptionPosition();
  applyCaptionPositionStyles();
  updateCaption();
  if (persist) saveLocalProject();
}

function setGlobalCaptionPosition(action) {
  const format = captionFormatForDimensions();
  const previous = state.captionPositions?.[format] || DEFAULT_CAPTION_POSITIONS[format];
  const { min: minY, max: maxY } = CAPTION_VERTICAL_LIMITS[format];
  const requestedDelta = action === "top"
    ? -3
    : action === "bottom"
      ? 3
      : (GLOBAL_CAPTION_POSITION_PRESETS[format]?.center?.y ?? previous.y) - previous.y;
  const nextY = clamp(previous.y + requestedDelta, minY, maxY);
  const appliedDelta = nextY - previous.y;
  if (!appliedDelta) {
    showToast(action === "top" ? "A legenda já está no limite superior." : action === "bottom" ? "A legenda já está no limite inferior." : "As legendas já estão centralizadas.");
    return;
  }
  const position = { ...previous, y: nextY, preset: action === "center" ? "center" : "custom" };
  state.captionPositions[format] = position;
  state.cues.forEach((cue) => {
    const cuePosition = cue.captionPositions?.[format] || previous;
    cue.captionPositions ||= {};
    cue.captionPositions[format] = {
      ...cuePosition,
      y: clamp(cuePosition.y + appliedDelta, minY, maxY),
      preset: "custom",
    };
  });
  state.captionCompositions.forEach((composition) => {
    composition.parts.forEach((part) => {
      const partPosition = part.positions?.[format];
      if (partPosition) partPosition.y = clamp(partPosition.y + appliedDelta, minY, maxY);
    });
  });
  state.captionPosition = { ...captionPositionForDimensions() };
  applyCaptionPositionStyles();
  updatePropertiesPanel();
  updateCaption();
  saveLocalProject();
  showToast(action === "top" ? "Legendas movidas para cima." : action === "bottom" ? "Legendas movidas para baixo." : "Legendas centralizadas.");
}

function wordCount(text) {
  const words = text.trim().match(/\S+/g);
  return words ? words.length : 0;
}

function formatClock(seconds) {
  if (!Number.isFinite(seconds)) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
}

function formatTimestamp(seconds, separator = ",") {
  const safeSeconds = Math.max(0, Number(seconds) || 0);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = Math.floor(safeSeconds % 60);
  const millis = Math.round((safeSeconds - Math.floor(safeSeconds)) * 1000);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}${separator}${String(millis).padStart(3, "0")}`;
}

function showToast(message) {
  clearTimeout(state.toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  state.toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

function setStatus(message, ready = false) {
  elements.projectStatus.querySelector("span:last-child").textContent = message;
  elements.projectStatus.classList.toggle("ready", ready);
}

function updateAutoCaptionAvailability() {
  elements.autoCaptionButton.disabled = state.autoCaptionBusy || !state.videoFile;
  elements.autoCaptionButton.setAttribute("aria-busy", String(state.autoCaptionBusy));
}

function updateScriptState() {
  const count = wordCount(elements.scriptInput.value);
  elements.scriptCount.textContent = `${count} ${count === 1 ? "palavra" : "palavras"}`;
  elements.generateButton.disabled = !elements.video.src || count === 0;
  updateAutoCaptionAvailability();
  saveLocalProject();
}

function splitLongPart(text, maxLength) {
  const words = text.split(/\s+/).filter(Boolean);
  const parts = [];
  let current = "";

  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxLength && current) {
      parts.push(current);
      current = word;
    } else {
      current = candidate;
    }
  });

  if (current) parts.push(current);
  return parts;
}

function segmentScript(text, lengthMode) {
  const limits = { short: 38, balanced: 56, long: 76 };
  const maxLength = limits[lengthMode] || limits.balanced;
  const normalized = text
    .replace(/\*\*/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();

  const sentences = normalized
    .split(/(?<=[.!?…:])\s+|\n+/u)
    .map((part) => part.trim())
    .filter(Boolean);

  const result = [];
  sentences.forEach((sentence) => {
    if (sentence.length <= maxLength) {
      result.push(sentence);
      return;
    }

    const clauses = sentence.split(/(?<=[,;—–])\s+/u).filter(Boolean);
    clauses.forEach((clause) => result.push(...splitLongPart(clause, maxLength)));
  });

  return result;
}

function setAutoCaptionProgress(label) {
  elements.autoCaptionLabel.textContent = label;
  setStatus(label);
}

function normalizeSpeechAudio(audio) {
  if (!audio.length) return audio;
  let mean = 0;
  for (let index = 0; index < audio.length; index += 1) mean += audio[index];
  mean /= audio.length;
  let energy = 0;
  let peak = 0;
  for (let index = 0; index < audio.length; index += 1) {
    const centered = audio[index] - mean;
    audio[index] = centered;
    energy += centered * centered;
    peak = Math.max(peak, Math.abs(centered));
  }
  const rms = Math.sqrt(energy / audio.length);
  if (rms < 0.00001 || peak < 0.00001) return audio;
  const gain = Math.min(8, 0.14 / rms, 0.98 / peak);
  if (Math.abs(gain - 1) > 0.01) {
    for (let index = 0; index < audio.length; index += 1) audio[index] *= gain;
  }
  return audio;
}

function resampleMonoChannels(channels, sourceRate, duration) {
  const targetRate = 16000;
  const output = new Float32Array(Math.max(1, Math.round(duration * targetRate)));
  const ratio = sourceRate / targetRate;
  for (let index = 0; index < output.length; index += 1) {
    const position = index * ratio;
    const left = Math.min(channels[0].length - 1, Math.floor(position));
    const right = Math.min(channels[0].length - 1, left + 1);
    const mix = position - left;
    let sample = 0;
    channels.forEach((channel) => {
      sample += channel[left] + (channel[right] - channel[left]) * mix;
    });
    output[index] = sample / channels.length;
  }
  return normalizeSpeechAudio(output);
}

async function resampleAudioBuffer(decoded) {
  const OfflineAudioContextClass = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OfflineAudioContextClass) {
    const channels = Array.from({ length: decoded.numberOfChannels }, (_, index) => decoded.getChannelData(index));
    return resampleMonoChannels(channels, decoded.sampleRate, decoded.duration);
  }
  const mono = new Float32Array(decoded.length);
  for (let channel = 0; channel < decoded.numberOfChannels; channel += 1) {
    const samples = decoded.getChannelData(channel);
    for (let index = 0; index < samples.length; index += 1) mono[index] += samples[index] / decoded.numberOfChannels;
  }
  const targetRate = 16000;
  const offline = new OfflineAudioContextClass(1, Math.max(1, Math.round(decoded.duration * targetRate)), targetRate);
  const buffer = offline.createBuffer(1, mono.length, decoded.sampleRate);
  buffer.copyToChannel(mono, 0);
  const source = offline.createBufferSource();
  source.buffer = buffer;
  source.connect(offline.destination);
  source.start();
  const rendered = await offline.startRendering();
  return normalizeSpeechAudio(new Float32Array(rendered.getChannelData(0)));
}

async function decodeVideoAudioWithMediabunny(file) {
  const mediabunny = await import("./vendor/mediabunny-1.48.1.min.mjs");
  const input = new mediabunny.Input({
    formats: mediabunny.ALL_FORMATS,
    source: new mediabunny.BlobSource(file, { useStreamReader: false }),
  });
  try {
    const track = await input.getPrimaryAudioTrack();
    if (!track || !(await track.canDecode())) throw new Error("audio-track");
    const sink = new mediabunny.AudioBufferSink(track);
    const chunks = [];
    let sampleRate = 0;
    let channelCount = 0;
    let totalFrames = 0;
    for await (const wrapped of sink.buffers()) {
      const buffer = wrapped.buffer;
      sampleRate ||= buffer.sampleRate;
      channelCount ||= buffer.numberOfChannels;
      const channels = Array.from({ length: buffer.numberOfChannels }, (_, channel) => new Float32Array(buffer.getChannelData(channel)));
      chunks.push(channels);
      totalFrames += buffer.length;
    }
    if (!chunks.length || !sampleRate || !channelCount) throw new Error("audio-track");
    const channels = Array.from({ length: channelCount }, () => new Float32Array(totalFrames));
    let offset = 0;
    chunks.forEach((chunk) => {
      chunk.forEach((samples, channel) => channels[channel].set(samples, offset));
      offset += chunk[0].length;
    });
    return resampleMonoChannels(channels, sampleRate, totalFrames / sampleRate);
  } finally {
    input.dispose();
  }
}

async function decodeAudioBufferWithMediabunny(file, context) {
  const mediabunny = await import("./vendor/mediabunny-1.48.1.min.mjs");
  const input = new mediabunny.Input({
    formats: mediabunny.ALL_FORMATS,
    source: new mediabunny.BlobSource(file, {
      useStreamReader: true,
      maxCacheSize: isIOSDevice() ? 2 * 1024 * 1024 : 4 * 1024 * 1024,
    }),
  });
  try {
    const track = await input.getPrimaryAudioTrack();
    if (!track || !(await track.canDecode())) throw new Error("Este vídeo não possui áudio decodificável.");
    const sink = new mediabunny.AudioBufferSink(track);
    const chunks = [];
    let sampleRate = 0;
    let channelCount = 0;
    let totalFrames = 0;
    for await (const wrapped of sink.buffers()) {
      const buffer = wrapped.buffer;
      if (!buffer?.length) continue;
      sampleRate ||= buffer.sampleRate;
      channelCount ||= buffer.numberOfChannels;
      if (buffer.sampleRate !== sampleRate || buffer.numberOfChannels !== channelCount) {
        throw new Error("O formato do áudio muda durante o vídeo.");
      }
      chunks.push(Array.from(
        { length: channelCount },
        (_, channel) => new Float32Array(buffer.getChannelData(channel)),
      ));
      totalFrames += buffer.length;
    }
    if (!chunks.length || !sampleRate || !channelCount) {
      throw new Error("O vídeo não retornou amostras de áudio.");
    }
    const decoded = context.createBuffer(channelCount, totalFrames, sampleRate);
    let offset = 0;
    chunks.forEach((chunk) => {
      chunk.forEach((samples, channel) => decoded.copyToChannel(samples, channel, offset));
      offset += chunk[0].length;
    });
    return decoded;
  } finally {
    input.dispose();
  }
}

async function decodeAudioBufferForMix(file, context) {
  const videoContainer = file?.type?.startsWith("video/")
    || /\.(?:mp4|mov|m4v|webm)$/i.test(file?.name || "");
  if (videoContainer) {
    try {
      return await decodeAudioBufferWithMediabunny(file, context);
    } catch (error) {
      console.warn(`Decodificação precisa de áudio indisponível para ${file?.name || "vídeo"}`, error);
    }
  }
  try {
    return await context.decodeAudioData(await file.arrayBuffer());
  } catch (error) {
    if (videoContainer) throw error;
    return decodeAudioBufferWithMediabunny(file, context);
  }
}

async function decodeVideoAudio(file) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return decodeVideoAudioWithMediabunny(file);
  const context = new AudioContextClass();
  try {
    const decoded = await context.decodeAudioData(await file.arrayBuffer());
    return await resampleAudioBuffer(decoded);
  } catch {
    return decodeVideoAudioWithMediabunny(file);
  } finally {
    context.close().catch(() => {});
  }
}

async function getAutoCaptionTranscriber() {
  if (!autoCaptionTranscriberPromise) {
    autoCaptionTranscriberPromise = import(TRANSFORMERS_MODULE_URL)
      .then(({ env, pipeline }) => {
        env.allowLocalModels = false;
        return pipeline("automatic-speech-recognition", AUTO_CAPTION_MODEL, {
          device: "wasm",
          dtype: "q8",
          progress_callback: (progress) => {
            if (progress.status !== "progress" || !Number.isFinite(progress.progress)) return;
            const normalized = progress.progress <= 1 ? progress.progress * 100 : progress.progress;
            const label = `Baixando modelo ${Math.round(normalized)}%`;
            if (state.narrationCaptionBusy) setStatus(`Narração · ${label}`);
            else setAutoCaptionProgress(label);
          },
        });
      })
      .catch((error) => {
        autoCaptionTranscriberPromise = null;
        throw error;
      });
  }
  return autoCaptionTranscriberPromise;
}

function distributedTranscriptionCues(text, clip) {
  const parts = segmentScript(text, elements.captionLength.value);
  if (!parts.length) return [];
  const duration = Math.max(0.1, Number(clip.duration) || 0.1);
  const weights = parts.map((part) => Math.max(1, wordCount(part)));
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let cursor = Number(clip.start) || 0;
  return parts.map((part, index) => {
    const start = cursor;
    const end = index === parts.length - 1
      ? (Number(clip.start) || 0) + duration
      : start + duration * weights[index] / totalWeight;
    cursor = end;
    return { start, end, text: part };
  });
}

function timestampedTranscriptionCues(result, clip) {
  const chunks = Array.isArray(result?.chunks) ? result.chunks : [];
  if (!chunks.length) return distributedTranscriptionCues(result?.text || "", clip);
  const rate = clipPlaybackRate(clip);
  const sourceStart = Math.max(0, Number(clip.sourceOffset) || 0);
  const sourceEnd = sourceStart + Math.max(0.1, Number(clip.duration) || 0.1) * rate;
  const projectStart = Number(clip.start) || 0;
  const limits = {
    short: { chars: 30, seconds: 3.2 },
    balanced: { chars: 46, seconds: 4.4 },
    long: { chars: 64, seconds: 5.8 },
  };
  const limit = limits[elements.captionLength.value] || limits.balanced;
  const fragments = chunks.flatMap((chunk) => {
    const text = String(chunk.text || "").trim();
    const timestamp = Array.isArray(chunk.timestamp) ? chunk.timestamp : [];
    const rawStart = Number(timestamp[0]);
    const rawEnd = Number(timestamp[1]);
    if (!text || !Number.isFinite(rawStart)) return [];
    const end = Number.isFinite(rawEnd) ? rawEnd : rawStart + Math.max(0.16, text.length * 0.055);
    if (end <= sourceStart || rawStart >= sourceEnd) return [];
    const parts = segmentScript(text, elements.captionLength.value);
    const weights = parts.map((part) => Math.max(1, wordCount(part)));
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let cursor = rawStart;
    return parts.flatMap((part, index) => {
      const partEnd = index === parts.length - 1
        ? end
        : cursor + (end - rawStart) * weights[index] / totalWeight;
      const partStart = cursor;
      cursor = partEnd;
      if (partEnd <= sourceStart || partStart >= sourceEnd) return [];
      return [{
        text: part,
        start: projectStart + (Math.max(sourceStart, partStart) - sourceStart) / rate,
        end: projectStart + (Math.min(sourceEnd, partEnd) - sourceStart) / rate,
      }];
    });
  });
  const deduplicatedFragments = [];
  fragments.forEach((fragment) => {
    const previous = deduplicatedFragments.at(-1);
    const normalized = fragment.text.toLocaleLowerCase("pt-BR").replace(/[^\p{L}\p{N}]+/gu, "");
    const previousNormalized = previous?.text.toLocaleLowerCase("pt-BR").replace(/[^\p{L}\p{N}]+/gu, "");
    if (previous && normalized && normalized === previousNormalized && fragment.start <= previous.end + 0.35) {
      previous.end = Math.max(previous.end, fragment.end);
      return;
    }
    deduplicatedFragments.push(fragment);
  });
  const cues = [];
  let current = null;
  deduplicatedFragments.forEach((fragment) => {
    const candidate = current ? `${current.text} ${fragment.text}` : fragment.text;
    const gap = current ? fragment.start - current.end : 0;
    const split = current && (candidate.length > limit.chars || fragment.end - current.start > limit.seconds || gap > 0.8);
    if (split) {
      cues.push(current);
      current = null;
    }
    if (!current) current = { ...fragment };
    else {
      current.text = candidate;
      current.end = Math.max(current.end, fragment.end);
    }
  });
  if (current) cues.push(current);
  return cues;
}

async function generateAutomaticCaptions() {
  if (!state.videoFile || state.autoCaptionBusy) return;
  if (state.cues.length && !window.confirm("Substituir as legendas atuais pelas legendas automáticas?")) return;
  state.autoCaptionBusy = true;
  updateAutoCaptionAvailability();
  setAutoCaptionProgress("Preparando áudio...");
  const originalCues = state.cues;
  const originalCompositions = state.captionCompositions;
  try {
    const transcriber = await getAutoCaptionTranscriber();
    const cache = new Map();
    const generated = [];
    const clips = state.sequenceClips.filter((clip) => clip.file);
    for (let index = 0; index < clips.length; index += 1) {
      const clip = clips[index];
      setAutoCaptionProgress(`Transcrevendo ${index + 1} de ${clips.length}...`);
      let result = cache.get(clip.file);
      if (!result) {
        const audio = await decodeVideoAudio(clip.file);
        result = await transcriber(audio, {
          language: "portuguese",
          task: "transcribe",
          chunk_length_s: 30,
          stride_length_s: 5,
          return_timestamps: true,
          temperature: 0,
          do_sample: false,
          no_repeat_ngram_size: 3,
        });
        cache.set(clip.file, result);
      }
      generated.push(...timestampedTranscriptionCues(result, clip));
    }
    if (!generated.length) throw new Error("empty-transcription");
    state.cues = generated
      .sort((first, second) => first.start - second.start)
      .map((cue) => ({ ...cue, id: crypto.randomUUID(), end: Math.max(cue.start + 0.1, cue.end) }));
    state.captionCompositions = [];
    state.activeCue = 0;
    renderCues();
    updateCaption();
    saveLocalProject();
    setStatus(`${state.cues.length} legendas automáticas`, true);
    showToast("Legendas automáticas prontas para revisão.");
  } catch (error) {
    state.cues = originalCues;
    state.captionCompositions = originalCompositions;
    console.error("Falha na legenda automática", error);
    showToast(error?.message === "empty-transcription"
      ? "Não foi possível identificar fala neste vídeo."
      : "Não foi possível gerar. Verifique a internet e tente novamente.");
    setStatus("Legenda automática indisponível");
  } finally {
    state.autoCaptionBusy = false;
    elements.autoCaptionLabel.textContent = "Gerar legenda automática";
    updateAutoCaptionAvailability();
  }
}

function narrationClipForTrack(trackId) {
  const selected = selectedMediaClip();
  if (selected?.type === "audio" && selected.isNarration
    && (selected.trackId || "audio-base") === trackId) return selected;
  const current = projectCurrentTime();
  const narrations = state.audioClips
    .filter((clip) => clip.isNarration && (clip.trackId || "audio-base") === trackId)
    .sort((first, second) => first.start - second.start);
  return narrations.find((clip) => clipIsActiveAtTime(clip, current)) || narrations.at(-1) || null;
}

async function generateNarrationCaptions(trackId) {
  if (state.narrationCaptionBusy || state.autoCaptionBusy || state.narrationRecorder) return;
  const clip = narrationClipForTrack(trackId);
  if (!clip?.file) {
    showToast("Grave ou selecione uma narração nesta faixa.");
    return;
  }
  const clipEnd = clipEffectiveEnd(clip);
  const overlapping = state.cues.some((cue) => cue.start < clipEnd && cue.end > clip.start);
  if (overlapping && !window.confirm("Substituir somente as legendas que coincidem com esta narração?")) return;

  const originalCues = state.cues;
  state.narrationCaptionBusy = true;
  updateAudioTrackActionButtons();
  setStatus("Preparando narração para transcrição...");
  try {
    const transcriber = await getAutoCaptionTranscriber();
    setStatus("Transcrevendo narração...");
    const audio = await decodeVideoAudio(clip.file);
    const result = await transcriber(audio, {
      language: "portuguese",
      task: "transcribe",
      chunk_length_s: 30,
      stride_length_s: 5,
      return_timestamps: true,
      temperature: 0,
      do_sample: false,
      no_repeat_ngram_size: 3,
    });
    const timingClip = {
      ...clip,
      duration: Math.max(0.1, clipEnd - clip.start),
    };
    const generated = timestampedTranscriptionCues(result, timingClip)
      .map((cue) => ({
        ...cue,
        id: crypto.randomUUID(),
        start: Math.max(clip.start, cue.start),
        end: Math.min(clipEnd, Math.max(cue.start + 0.1, cue.end)),
        narrationClipId: clip.id,
      }))
      .filter((cue) => cue.end > cue.start);
    if (!generated.length) throw new Error("empty-transcription");
    state.cues = [
      ...state.cues.filter((cue) => cue.end <= clip.start || cue.start >= clipEnd),
      ...generated,
    ].sort((first, second) => first.start - second.start);
    state.captionCompositions = sanitizeCaptionCompositions(state.captionCompositions);
    state.activeCue = Math.max(0, state.cues.findIndex((cue) => cue.narrationClipId === clip.id));
    renderCues();
    updateCaption();
    saveLocalProject();
    setStatus(`${generated.length} legendas sincronizadas com a narração`, true);
    showToast("Legendas da narração prontas para revisão.");
  } catch (error) {
    state.cues = originalCues;
    console.error("Falha ao legendar narração", error);
    showToast(error?.message === "empty-transcription"
      ? "Não foi possível identificar fala nesta narração."
      : "Não foi possível transcrever a narração.");
    setStatus("Transcrição da narração indisponível");
  } finally {
    state.narrationCaptionBusy = false;
    updateAudioTrackActionButtons();
  }
}

function synchronizeScript() {
  const duration = projectDuration();
  const parts = segmentScript(elements.scriptInput.value, elements.captionLength.value);

  if (!Number.isFinite(duration) || duration <= 0 || parts.length === 0) {
    showToast("Abra um vídeo e adicione o roteiro.");
    return;
  }

  const weights = parts.map((text) => Math.max(wordCount(text), 2));
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const gap = parts.length > 1 ? Math.min(0.12, duration / parts.length / 8) : 0;
  const speakingTime = Math.max(duration - gap * (parts.length - 1), duration * 0.85);
  let cursor = 0;

  state.cues = parts.map((text, index) => {
    const calculatedDuration = (speakingTime * weights[index]) / totalWeight;
    const start = cursor;
    const end = index === parts.length - 1 ? duration : Math.min(duration, start + calculatedDuration);
    cursor = end + gap;
    return { id: crypto.randomUUID(), start, end, text };
  });
  state.captionCompositions = [];

  state.activeCue = 0;
  renderCues();
  updateCaption();
  saveLocalProject();
  setStatus(`${state.cues.length} trechos sincronizados`, true);
  showToast("Roteiro sincronizado. Agora revise os tempos.");
}

function selectCue(index, seek = true) {
  if (!state.cues[index]) return;
  state.activeCue = index;
  state.selectedMediaClipId = null;
  state.selectedMediaSegmentKey = null;
  if (seek) seekProjectTime(state.cues[index].start).catch(() => {});
  updateCaption();
  document.querySelectorAll(".cue").forEach((cue, cueIndex) => {
    cue.classList.toggle("active", cueIndex === index);
  });
  document.querySelectorAll(".media-clip-block.selected").forEach((clip) => clip.classList.remove("selected"));
  activateCaptionComposition(undefined, undefined, state.cues[index]);
  applyCaptionPositionStyles(state.cues[index]);
  updateMediaInspector();
  updateMediaPreview();
  updateCueInspector();
  updateCaptionCompositionEditor();
}

function shiftCueRange(startIndex, requestedDelta) {
  if (!state.cues[startIndex] || !requestedDelta) return;
  const firstCue = state.cues[startIndex];
  const minimumDelta = -firstCue.start;
  const delta = Math.max(minimumDelta, requestedDelta);
  const shiftedCueIds = new Set(state.cues.slice(startIndex).map((cue) => cue.id));

  state.cues.slice(startIndex).forEach((cue) => {
    cue.start = Math.max(0, cue.start + delta);
    cue.end = Math.max(cue.start + 0.1, cue.end + delta);
  });
  state.captionCompositions
    .filter((composition) => shiftedCueIds.has(composition.cueId))
    .flatMap((composition) => composition.parts)
    .forEach((part) => {
      part.start = Math.max(0, part.start + delta);
      part.end = Math.max(part.start + 0.05, part.end + delta);
    });
}

function updateCueStart(index, value) {
  const cue = state.cues[index];
  if (!cue) return;
  const previousStart = cue.start;

  if (elements.linkTiming.checked) {
    shiftCueRange(index, value - cue.start);
  } else {
    cue.start = Math.min(value, cue.end - 0.1);
    const composition = compositionForCue(cue);
    composition?.parts.forEach((part) => {
      if (Math.abs(part.start - previousStart) < 0.06) part.start = cue.start;
    });
  }
  renderCues();
  selectCue(index);
  saveLocalProject();
}

function updateCueEnd(index, value) {
  const cue = state.cues[index];
  if (!cue) return;
  const previousEnd = cue.end;
  const videoDuration = projectDuration() || Infinity;
  cue.end = Math.min(videoDuration, Math.max(value, cue.start + 0.1));
  const composition = compositionForCue(cue);
  composition?.parts.forEach((part) => {
    if (Math.abs(part.end - previousEnd) < 0.06) part.end = cue.end;
  });

  if (state.cues[index + 1]) {
    const nextStart = cue.end;
    shiftCueRange(index + 1, nextStart - state.cues[index + 1].start);
  }
  renderCues();
  selectCue(index);
  saveLocalProject();
}

function renderCues() {
  elements.cueList.replaceChildren();
  const hasCues = state.cues.length > 0;
  elements.timelineEmpty.hidden = hasCues;
  elements.timingTools.hidden = !hasCues;
  elements.addCueButton.disabled = !elements.video.src;
  elements.exportButton.disabled = !elements.video.src;
  elements.syncNextButton.disabled = !hasCues || !elements.video.src;
  elements.extendPreviousButton.disabled = !hasCues || !elements.video.src;

  const duration = Math.max(0.1, projectDuration() || 1);
  state.cues.forEach((cue, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `cue cue-track-block${index === state.activeCue ? " active" : ""}${compositionForCue(cue) ? " has-composition" : ""}`;
    item.dataset.cueId = cue.id;
    item.style.left = `${clamp(cue.start / duration) * 100}%`;
    item.style.width = `${Math.max(1.5, clamp((cue.end - cue.start) / duration) * 100)}%`;
    item.textContent = cue.text;
    item.title = `${formatClock(cue.start)} · ${cue.text}`;
    item.addEventListener("click", () => {
      selectCue(index);
      activateToolTab("review");
    });
    elements.cueList.append(item);
  });
  updateCueInspector();
}

function updateCueInspector() {
  const cue = state.cues[state.activeCue];
  elements.cueInspector.hidden = !cue;
  elements.cueInspectorEmpty.hidden = Boolean(cue);
  if (!cue) {
    if (elements.captionLiveText) {
      elements.captionLiveText.value = "";
      elements.captionLiveText.disabled = true;
      elements.captionLiveCount.value = "0 / 120";
    }
    updateMobileDeleteButton();
    updatePropertiesPanel();
    updateCaptionCompositionEditor();
    return;
  }
  if (document.activeElement !== elements.activeCueText) elements.activeCueText.value = cue.text;
  if (elements.captionLiveText && document.activeElement !== elements.captionLiveText) {
    elements.captionLiveText.disabled = false;
    elements.captionLiveText.value = cue.text;
  }
  if (elements.captionLiveCount) elements.captionLiveCount.value = `${cue.text.length} / 120`;
  if (document.activeElement !== elements.activeCueStart) elements.activeCueStart.value = cue.start.toFixed(1);
  if (document.activeElement !== elements.activeCueEnd) elements.activeCueEnd.value = cue.end.toFixed(1);
  updateMobileDeleteButton();
  updatePropertiesPanel();
  updateCaptionCompositionEditor();
}

function clamp(value, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function clipPlaybackRate(clip) {
  return clamp(Number(clip?.playbackRate) || 1, 0.25, 5);
}

function clipTimelineSpan(clip) {
  if (!clip) return 0;
  return Math.max(0, clip.type === "sequence" ? Number(clip.duration) || 0 : Number(clip.end) - Number(clip.start));
}

function clipSourceSpan(clip) {
  if (!clip) return 0;
  const stored = Number(clip.sourceSpan);
  if (stored > 0) return stored;
  clip.sourceSpan = clipTimelineSpan(clip) * clipPlaybackRate(clip);
  return clip.sourceSpan;
}

function clipMediaTimeAtTimeline(clip, time) {
  const timelineOffset = Math.max(0, clipSourceTimeAtTimeline(clip, time) - clip.start);
  return (clip.sourceOffset || 0) + timelineOffset * clipPlaybackRate(clip);
}

function clipBrowserMediaTimeAtTimeline(clip, time, media = null) {
  return clipBrowserMediaStart(clip, media) + clipMediaTimeAtTimeline(clip, time);
}

function applyPlaybackRateToClip(clip, rate) {
  if (!clip || !["sequence", "video", "audio"].includes(clip.type)) return;
  const sourceSpan = clipSourceSpan(clip);
  clip.playbackRate = clamp(Number(rate) || 1, 0.25, 5);
  const timelineSpan = Math.max(0.05, sourceSpan / clip.playbackRate);
  if (clip.type === "sequence") clip.duration = timelineSpan;
  else clip.end = Math.min(projectDuration() || clip.start + timelineSpan, clip.start + timelineSpan);
}

function setClipPlaybackRate(clip, rate, synchronizeLinked = true) {
  applyPlaybackRateToClip(clip, rate);
  if (!synchronizeLinked || !clip) return;
  if (["sequence", "video"].includes(clip.type)) {
    state.audioClips
      .filter((audio) => audio.extractedFrom === clip.id && audio.linkedSpeed !== false)
      .forEach((audio) => {
        audio.sourceSpan = clipSourceSpan(clip);
        audio.sourceOffset = clip.sourceOffset || 0;
        audio.start = clip.start;
        applyPlaybackRateToClip(audio, clip.playbackRate);
      });
  } else if (clip.type === "audio" && clip.extractedFrom && clip.linkedSpeed !== false) {
    const sourceVideo = allMediaClips().find((item) => item.id === clip.extractedFrom);
    if (sourceVideo) {
      applyPlaybackRateToClip(sourceVideo, clip.playbackRate);
      clip.sourceSpan = clipSourceSpan(sourceVideo);
      clip.sourceOffset = sourceVideo.sourceOffset || 0;
      clip.start = sourceVideo.start;
      applyPlaybackRateToClip(clip, sourceVideo.playbackRate);
    }
  }
  refreshSequenceTiming();
}

function parseCubeLut(source, fileName) {
  let size = 0;
  let title = fileName.replace(/\.cube$/i, "");
  let domainMin = [0, 0, 0];
  let domainMax = [1, 1, 1];
  const values = [];

  source.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) return;
    const parts = line.split(/\s+/);
    const command = parts[0].toUpperCase();

    if (command === "TITLE") {
      title = line.slice(parts[0].length).trim().replace(/^['\"]|['\"]$/g, "") || title;
      return;
    }
    if (command === "LUT_1D_SIZE") {
      throw new Error("LUT 1D ainda não é compatível. Use um arquivo LUT 3D.");
    }
    if (command === "LUT_3D_SIZE") {
      size = Number(parts[1]);
      return;
    }
    if (command === "DOMAIN_MIN" || command === "DOMAIN_MAX") {
      const domain = parts.slice(1, 4).map(Number);
      if (domain.length === 3 && domain.every(Number.isFinite)) {
        if (command === "DOMAIN_MIN") domainMin = domain;
        else domainMax = domain;
      }
      return;
    }
    if (command === "LUT_3D_INPUT_RANGE") {
      const range = parts.slice(1, 3).map(Number);
      if (range.length === 2 && range.every(Number.isFinite)) {
        domainMin = [range[0], range[0], range[0]];
        domainMax = [range[1], range[1], range[1]];
      }
      return;
    }

    const color = parts.slice(0, 3).map(Number);
    if (color.length === 3 && color.every(Number.isFinite)) values.push(...color);
  });

  if (!Number.isInteger(size) || size < 2 || size > 64) {
    throw new Error("O arquivo precisa ter LUT_3D_SIZE entre 2 e 64.");
  }
  const expectedValues = size * size * size * 3;
  if (values.length < expectedValues) {
    throw new Error(`LUT incompleto: esperado ${size ** 3} cores.`);
  }

  const pixels = new Uint8Array(size * size * size * 4);
  for (let blue = 0; blue < size; blue += 1) {
    for (let green = 0; green < size; green += 1) {
      for (let red = 0; red < size; red += 1) {
        const sourceIndex = blue * size * size + green * size + red;
        const textureIndex = green * size * size + blue * size + red;
        pixels[textureIndex * 4] = Math.round(clamp(values[sourceIndex * 3]) * 255);
        pixels[textureIndex * 4 + 1] = Math.round(clamp(values[sourceIndex * 3 + 1]) * 255);
        pixels[textureIndex * 4 + 2] = Math.round(clamp(values[sourceIndex * 3 + 2]) * 255);
        pixels[textureIndex * 4 + 3] = 255;
      }
    }
  }

  return {
    id: crypto.randomUUID(),
    name: title,
    fileName,
    size,
    domainMin,
    domainMax,
    pixels,
  };
}

function compileLutShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || "Falha ao preparar o efeito de cor.";
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

function createLutRenderer(canvas, preserveDrawingBuffer = false) {
  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    depth: false,
    preserveDrawingBuffer,
  });
  if (!gl) throw new Error("Este navegador não oferece aceleração gráfica para LUTs.");
  try {
    gl.drawingBufferColorSpace = "srgb";
    if ("unpackColorSpace" in gl) gl.unpackColorSpace = "srgb";
  } catch {
    // Older Safari versions already use sRGB as the WebGL default.
  }
  gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.BROWSER_DEFAULT_WEBGL);

  const vertexShader = compileLutShader(gl, gl.VERTEX_SHADER, `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `);
  const fragmentShader = compileLutShader(gl, gl.FRAGMENT_SHADER, `
    precision highp float;
    uniform sampler2D u_video;
    uniform sampler2D u_lut;
    uniform float u_lutSize;
    uniform float u_intensity;
    uniform float u_hasLut;
    uniform vec3 u_domainMin;
    uniform vec3 u_domainMax;
    uniform float u_exposure;
    uniform float u_brightness;
    uniform float u_contrast;
    uniform float u_saturation;
    uniform float u_vibrance;
    uniform float u_temperature;
    uniform float u_warmth;
    uniform float u_tint;
    uniform float u_highlights;
    uniform float u_shadows;
    uniform float u_blacks;
    varying vec2 v_texCoord;

    vec3 lookupLut(vec3 sourceColor) {
      vec3 color = clamp((sourceColor - u_domainMin) / max(u_domainMax - u_domainMin, vec3(0.0001)), 0.0, 1.0);
      float blue = color.b * (u_lutSize - 1.0);
      float slice0 = floor(blue);
      float slice1 = min(slice0 + 1.0, u_lutSize - 1.0);
      float textureWidth = u_lutSize * u_lutSize;
      float x0 = (slice0 * u_lutSize + color.r * (u_lutSize - 1.0) + 0.5) / textureWidth;
      float x1 = (slice1 * u_lutSize + color.r * (u_lutSize - 1.0) + 0.5) / textureWidth;
      float y = (color.g * (u_lutSize - 1.0) + 0.5) / u_lutSize;
      vec3 color0 = texture2D(u_lut, vec2(x0, y)).rgb;
      vec3 color1 = texture2D(u_lut, vec2(x1, y)).rgb;
      return mix(color0, color1, fract(blue));
    }

    vec3 applyAdjustments(vec3 color) {
      color *= pow(2.0, u_exposure);
      color += u_brightness * 0.22;
      float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color += u_highlights * luminance * luminance * 0.34;
      color += u_shadows * pow(max(0.0, 1.0 - luminance), 2.0) * 0.28;
      color -= u_blacks * (1.0 - smoothstep(0.0, 0.45, luminance)) * 0.22;
      color = (color - 0.5) * (1.0 + u_contrast) + 0.5;
      luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color = mix(vec3(luminance), color, max(0.0, 1.0 + u_saturation));
      float colorRange = max(color.r, max(color.g, color.b)) - min(color.r, min(color.g, color.b));
      color = mix(vec3(luminance), color, max(0.0, 1.0 + u_vibrance * (1.0 - colorRange)));
      color += vec3(0.10, 0.02, -0.11) * u_temperature;
      color += vec3(0.08, 0.035, -0.075) * u_warmth;
      color += vec3(0.055, -0.08, 0.055) * u_tint;
      return clamp(color, 0.0, 1.0);
    }

    void main() {
      vec4 original = texture2D(u_video, v_texCoord);
      vec3 graded = original.rgb;
      if (u_hasLut > 0.5) graded = mix(graded, lookupLut(graded), u_intensity);
      gl_FragColor = vec4(applyAdjustments(graded), 1.0);
    }
  `);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "Falha ao ativar o efeito de cor.");
  }

  gl.useProgram(program);
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1, 1, -1, -1, 1,
    -1, 1, 1, -1, 1, 1,
  ]), gl.STATIC_DRAW);
  const positionLocation = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    0, 0, 1, 0, 0, 1,
    0, 1, 1, 0, 1, 1,
  ]), gl.STATIC_DRAW);
  const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
  gl.enableVertexAttribArray(texCoordLocation);
  gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

  const videoTexture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, videoTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform1i(gl.getUniformLocation(program, "u_video"), 0);

  const lutTexture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, lutTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform1i(gl.getUniformLocation(program, "u_lut"), 1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));

  return {
    gl,
    program,
    videoTexture,
    lutTexture,
    lutId: null,
    sizeLocation: gl.getUniformLocation(program, "u_lutSize"),
    intensityLocation: gl.getUniformLocation(program, "u_intensity"),
    hasLutLocation: gl.getUniformLocation(program, "u_hasLut"),
    domainMinLocation: gl.getUniformLocation(program, "u_domainMin"),
    domainMaxLocation: gl.getUniformLocation(program, "u_domainMax"),
    adjustmentLocations: Object.fromEntries(
      Object.keys(DEFAULT_VIDEO_ADJUSTMENTS).map((name) => [name, gl.getUniformLocation(program, `u_${name}`)]),
    ),
    preserveDrawingBuffer,
  };
}

function filterTargetClip() {
  const selected = selectedMediaClip();
  if (["sequence", "video"].includes(selected?.type)) return selected;
  return activeSequenceClip();
}

function isPrimarySequenceClip(clip) {
  return clip?.type === "sequence" && clip === state.sequenceClips[0];
}

function videoTrackIdForClip(clip) {
  return clip?.type === "sequence" ? "base" : clip?.trackId || "base";
}

function videoTrackLabelForClip(clip) {
  const trackId = videoTrackIdForClip(clip);
  if (trackId === "base") return "V1";
  const index = state.videoTrackOrder.indexOf(trackId);
  return `V${index >= 0 ? index + 2 : 2}`;
}

function videoClipsInSameTrack(clip) {
  const trackId = videoTrackIdForClip(clip);
  return [
    ...(trackId === "base" ? state.sequenceClips.filter((item) => !item.exportCommercial) : []),
    ...state.overlayVideoClips.filter((item) => (
      item.type === "video" && videoTrackIdForClip(item) === trackId
    )),
  ];
}

function colorProfileForClip(clip = filterTargetClip()) {
  const legacyPrimary = !clip || isPrimarySequenceClip(clip);
  return {
    lut: clip?.lut ?? (legacyPrimary ? state.lut : null),
    presetId: clip?.lutPresetId ?? (legacyPrimary ? state.activeLutPresetId : null),
    intensity: clamp(Number(clip?.lutIntensity ?? (legacyPrimary ? state.lutIntensity : 100)) || 0, 0, 100),
    adjustments: {
      ...DEFAULT_VIDEO_ADJUSTMENTS,
      ...(clip?.videoAdjustments || (legacyPrimary ? state.videoAdjustments : null) || {}),
    },
  };
}

function profileHasVideoAdjustments(profile) {
  return Object.values(profile?.adjustments || {}).some((value) => Math.abs(Number(value) || 0) > 0.0001);
}

function colorProfileHasEffects(profile) {
  return Boolean(profile?.lut && Number(profile.intensity) > 0) || profileHasVideoAdjustments(profile);
}

function setClipColorProfile(clip, changes) {
  if (clip) {
    if (Object.hasOwn(changes, "lut")) clip.lut = changes.lut;
    if (Object.hasOwn(changes, "presetId")) clip.lutPresetId = changes.presetId;
    if (Object.hasOwn(changes, "intensity")) clip.lutIntensity = changes.intensity;
    if (Object.hasOwn(changes, "adjustments")) clip.videoAdjustments = { ...changes.adjustments };
  }
  if (!clip || isPrimarySequenceClip(clip)) {
    if (Object.hasOwn(changes, "lut")) state.lut = changes.lut;
    if (Object.hasOwn(changes, "presetId")) state.activeLutPresetId = changes.presetId;
    if (Object.hasOwn(changes, "intensity")) state.lutIntensity = changes.intensity;
    if (Object.hasOwn(changes, "adjustments")) state.videoAdjustments = { ...changes.adjustments };
  }
}

function setScopedColorProfile(target, changes, scope) {
  const applyToTrack = scope === "filter" ? state.applyFilterToTrack : state.applyColorToTrack;
  const targets = applyToTrack ? videoClipsInSameTrack(target) : [target].filter(Boolean);
  if (!targets.length) {
    setClipColorProfile(target, changes);
    return;
  }
  targets.forEach((clip) => setClipColorProfile(clip, changes));
}

function applyCurrentProfileToTrack(scope) {
  const target = filterTargetClip();
  if (!target) return;
  const profile = colorProfileForClip(target);
  if (scope === "filter") {
    setScopedColorProfile(target, {
      lut: profile.lut,
      presetId: profile.presetId,
      intensity: profile.intensity,
    }, "filter");
  } else {
    setScopedColorProfile(target, { adjustments: profile.adjustments }, "color");
  }
  state.lutPreviewRenderer = null;
  updateLutControls();
  drawLutPreview();
  saveLocalProject();
  showToast(`${scope === "filter" ? "Filtro" : "Ajustes"} aplicado a todos os vídeos da track ${videoTrackLabelForClip(target)}.`);
}

function exportLutSurfaceForClip(clip) {
  // Safari on iPhone is much more stable with one reusable WebGL surface.
  // Each frame uploads the current clip's LUT and uniforms before drawing.
  const key = isIOSDevice() ? "ios-shared" : clip?.id || "base";
  let surface = state.lutExportSurfaces.get(key);
  if (surface) return surface;
  const canvas = document.createElement("canvas");
  const safeKey = String(key).replace(/[^a-z0-9]/gi, "");
  surface = { canvas, rendererKey: `lutExportRenderer_${safeKey || "base"}` };
  state.lutExportSurfaces.set(key, surface);
  return surface;
}

function renderExportColorFrame(source, clip, width, height, profile = colorProfileForClip(clip)) {
  if (!colorProfileHasEffects(profile)) return source;
  const surface = exportLutSurfaceForClip(clip);
  return drawLutFrame(surface.canvas, surface.rendererKey, width, height, source, profile)
    ? surface.canvas
    : source;
}

function drawLutFrame(canvas, rendererKey, width, height, source = elements.video, profile = colorProfileForClip(activeSequenceClip())) {
  const sourceReady = source === elements.video
    ? elements.video.readyState >= 2
    : Boolean(source?.width || source?.videoWidth);
  const hasLut = Boolean(profile?.lut && Number(profile.intensity) > 0);
  if ((!hasLut && !profileHasVideoAdjustments(profile)) || !sourceReady) return false;
  if (!state[rendererKey]) {
    state[rendererKey] = createLutRenderer(canvas, rendererKey.startsWith("lutExportRenderer"));
  }
  const renderer = state[rendererKey];
  const { gl } = renderer;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  gl.viewport(0, 0, width, height);
  gl.useProgram(renderer.program);
  gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.BROWSER_DEFAULT_WEBGL);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, renderer.videoTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

  if (hasLut && renderer.lutId !== profile.lut.id) {
    if (profile.lut.size * profile.lut.size > gl.getParameter(gl.MAX_TEXTURE_SIZE)) {
      throw new Error("Este LUT é grande demais para a memória gráfica deste aparelho.");
    }
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, renderer.lutTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      profile.lut.size * profile.lut.size,
      profile.lut.size,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      profile.lut.pixels,
    );
    renderer.lutId = profile.lut.id;
  }

  gl.uniform1f(renderer.hasLutLocation, hasLut ? 1 : 0);
  gl.uniform1f(renderer.sizeLocation, hasLut ? profile.lut.size : 2);
  gl.uniform1f(renderer.intensityLocation, hasLut ? Number(profile.intensity) / 100 : 0);
  gl.uniform3fv(renderer.domainMinLocation, hasLut ? profile.lut.domainMin : [0, 0, 0]);
  gl.uniform3fv(renderer.domainMaxLocation, hasLut ? profile.lut.domainMax : [1, 1, 1]);
  Object.entries(profile.adjustments).forEach(([name, value]) => {
    gl.uniform1f(renderer.adjustmentLocations[name], (Number(value) || 0) / 100);
  });
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  if (renderer.preserveDrawingBuffer) gl.finish();
  else gl.flush();
  return true;
}

function drawLutPreview() {
  const baseProfile = colorProfileForClip(activeSequenceClip());
  if (!colorProfileHasEffects(baseProfile) || !elements.video.videoWidth) {
    elements.lutPreviewCanvas.hidden = true;
  } else {
    const sourceWidth = elements.video.videoWidth;
    const sourceHeight = elements.video.videoHeight;
    const maxDimension = /iPad|iPhone|iPod/.test(navigator.userAgent) ? 960 : 1280;
    const scale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
    try {
      const rendered = drawLutFrame(
        elements.lutPreviewCanvas,
        "lutPreviewRenderer",
        Math.max(2, Math.round(sourceWidth * scale)),
        Math.max(2, Math.round(sourceHeight * scale)),
        elements.video,
        baseProfile,
      );
      elements.lutPreviewCanvas.hidden = !rendered;
    } catch (error) {
      console.error(error);
      removeLut(false, activeSequenceClip());
      showToast(error.message || "Não foi possível aplicar este LUT.");
    }
  }
  drawOverlayFilterPreviews();
}

function updateLutControls() {
  const target = filterTargetClip();
  const profile = colorProfileForClip(target);
  const hasLut = Boolean(profile.lut);
  const trackLabel = videoTrackLabelForClip(target);
  elements.lutStatus.textContent = hasLut ? `${profile.lut.name} · ${profile.lut.size}³` : "Sem LUT";
  if (elements.filterTargetName) {
    elements.filterTargetName.textContent = state.applyFilterToTrack
      ? `Aplicando em toda a track ${trackLabel}`
      : target?.name ? `Aplicando em: ${target.name}` : "Aplicando em: vídeo principal";
  }
  if (elements.colorTargetName) {
    elements.colorTargetName.textContent = state.applyColorToTrack
      ? `Ajustando toda a track ${trackLabel}`
      : target?.name ? `Ajustando: ${target.name}` : "Ajustando: vídeo principal";
  }
  elements.lutIntensity.value = String(profile.intensity);
  elements.lutIntensity.disabled = !hasLut;
  elements.removeLutButton.disabled = !hasLut;
  elements.lutIntensityValue.value = `${elements.lutIntensity.value}%`;
  elements.clearFilterPresetButton?.classList.toggle("active", !hasLut);
  elements.adjustmentInputs.forEach((input) => {
    const value = Number(profile.adjustments[input.dataset.videoAdjustment]) || 0;
    input.value = String(value);
    if (input.nextElementSibling) input.nextElementSibling.value = String(value);
  });
  renderFilterPresets();
  if (!hasLut && !profileHasVideoAdjustments(profile) && isPrimarySequenceClip(target)) elements.lutPreviewCanvas.hidden = true;
}

async function loadLut(file) {
  if (!file) return;
  const target = filterTargetClip();
  try {
    const lut = parseCubeLut(await file.text(), file.name);
    setScopedColorProfile(target, { lut, presetId: null, intensity: 100 }, "filter");
    state.lutPreviewRenderer = null;
    updateLutControls();
    drawLutPreview();
    saveLocalProject();
    showToast(`LUT ${lut.name} aplicado em ${target?.name || "vídeo principal"}.`);
  } catch (error) {
    console.error(error);
    elements.lutInput.value = "";
    showToast(error.message || "Não foi possível abrir este LUT.");
  }
}

function removeLut(notify = true, target = filterTargetClip()) {
  const hadLut = Boolean(colorProfileForClip(target).lut);
  setScopedColorProfile(target, { lut: null, presetId: null }, "filter");
  elements.lutInput.value = "";
  updateLutControls();
  drawLutPreview();
  saveLocalProject();
  if (notify && hadLut) showToast(`Filtro removido de ${target?.name || "vídeo principal"}.`);
}

function normalizedFilterText(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function visibleLutPresets() {
  const query = normalizedFilterText(elements.filterSearchInput?.value);
  const collection = elements.filterCollectionSelect?.value || "all";
  return state.lutPresets.filter((preset) => (
    (collection === "all" || preset.collection === collection)
    && (!query || normalizedFilterText(`${preset.name} ${preset.collection}`).includes(query))
  ));
}

function renderFilterPresets() {
  if (!elements.filterPresetList) return;
  const presets = visibleLutPresets();
  const fragment = document.createDocumentFragment();
  presets.forEach((preset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-preset-card";
    const activePresetId = colorProfileForClip().presetId;
    button.classList.toggle("active", activePresetId === preset.id);
    button.setAttribute("aria-pressed", String(activePresetId === preset.id));
    button.setAttribute("aria-label", `Aplicar filtro ${preset.name}`);

    const image = document.createElement("img");
    image.src = encodeURI(preset.thumbnail);
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    const label = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = preset.name;
    const collection = document.createElement("small");
    collection.textContent = preset.collection;
    label.append(name, collection);
    button.append(image, label);
    button.addEventListener("click", () => loadLutPreset(preset, button));
    fragment.append(button);
  });

  if (!presets.length) {
    const empty = document.createElement("p");
    empty.className = "filter-preset-empty";
    empty.textContent = "Nenhum filtro encontrado.";
    fragment.append(empty);
  }
  elements.filterPresetList.replaceChildren(fragment);
  if (elements.filterCatalogStatus) {
    elements.filterCatalogStatus.textContent = `${presets.length} de ${state.lutPresets.length}`;
  }
}

async function loadLutPreset(preset, trigger = null, target = filterTargetClip()) {
  if (!preset) return;
  trigger?.classList.add("loading");
  trigger && (trigger.disabled = true);
  try {
    const response = await fetch(encodeURI(preset.path));
    if (!response.ok) throw new Error("Não foi possível baixar este filtro.");
    const fileName = decodeURIComponent(preset.path.split("/").at(-1));
    const lut = parseCubeLut(await response.text(), fileName);
    lut.name = preset.name;
    setScopedColorProfile(target, {
      lut,
      presetId: preset.id,
      intensity: colorProfileForClip(target).intensity || 100,
    }, "filter");
    state.lutPreviewRenderer = null;
    updateLutControls();
    drawLutPreview();
    saveLocalProject();
    showToast(`Filtro ${preset.name} aplicado em ${target?.name || "vídeo principal"}.`);
  } catch (error) {
    console.error(error);
    showToast(error.message || "Não foi possível aplicar este filtro.");
  } finally {
    trigger?.classList.remove("loading");
    if (trigger) trigger.disabled = false;
  }
}

async function loadFilterCatalog() {
  if (!elements.filterPresetList) return;
  try {
    const response = await fetch("/filters/catalog.json");
    if (!response.ok) throw new Error("Catálogo de filtros indisponível.");
    state.lutPresets = await response.json();
    const collections = [...new Set(state.lutPresets.map((preset) => preset.collection))];
    collections.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      elements.filterCollectionSelect.append(option);
    });
    renderFilterPresets();
    const savedPreset = state.lutPresets.find((preset) => preset.id === state.activeLutPresetId);
    if (savedPreset) await loadLutPreset(savedPreset, null, state.sequenceClips[0] || null);
  } catch (error) {
    console.error(error);
    elements.filterCatalogStatus.textContent = "Indisponível";
    elements.filterPresetList.innerHTML = '<p class="filter-preset-empty">Não foi possível abrir os filtros.</p>';
  }
}

function easeOutBack(value) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
}

function captionTextAt(cue, time) {
  const text = transformCaptionCase(cue.text);
  if (state.captionMode !== "word") return text;
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "";
  return words[currentCaptionWordIndex(cue, time)];
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((part) => part + part).join("") : value;
  const number = Number.parseInt(normalized, 16);
  const red = (number >> 16) & 255;
  const green = (number >> 8) & 255;
  const blue = number & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function applyCaptionColors() {
  const editorial = state.captionTemplate === "editorial";
  elements.captionOverlay.style.color = elements.captionTextColor.value;
  elements.captionOverlay.style.setProperty("--caption-highlight", elements.captionHighlightColor.value);
  elements.captionOverlay.style.backgroundColor = elements.captionBackground.checked && !editorial
    ? hexToRgba(elements.captionBackgroundColor.value, 0.74)
    : "transparent";
  const outlineWidth = Number(elements.captionOutlineWidth.value) || 0;
  elements.captionOutlineValue.value = String(outlineWidth);
  elements.captionOverlay.style.webkitTextStroke = outlineWidth && !editorial
    ? `${Math.max(1, outlineWidth * 0.55)}px ${elements.captionOutlineColor.value}`
    : "0 transparent";
  elements.captionOverlay.style.textShadow = elements.captionShadow.checked
    ? editorial ? "0 0.11em 0.28em rgba(0, 0, 0, 0.5)" : "0 2px 7px rgba(0, 0, 0, 0.88)"
    : "none";
  elements.colorSwatches.forEach((button) => {
    button.classList.toggle("active", button.dataset.captionColor.toLowerCase() === elements.captionTextColor.value.toLowerCase());
  });
}

function rgbTextFromHex(hex) {
  const value = hex.replace("#", "");
  const number = Number.parseInt(value, 16);
  return `${(number >> 16) & 255}, ${(number >> 8) & 255}, ${number & 255}`;
}

function hexFromRgbText(text) {
  const values = text.match(/-?\d+(?:\.\d+)?/g)?.slice(0, 3).map(Number);
  if (!values || values.length !== 3 || values.some((value) => !Number.isFinite(value))) return null;
  return `#${values.map((value) => Math.round(clamp(value, 0, 255)).toString(16).padStart(2, "0")).join("")}`;
}

function syncCaptionColor(colorInput, rgbInput, source = "color") {
  if (source === "rgb") {
    const parsed = hexFromRgbText(rgbInput.value);
    if (!parsed) return false;
    colorInput.value = parsed;
  }
  rgbInput.value = rgbTextFromHex(colorInput.value);
  applyCaptionColors();
  updateCaption();
  saveLocalProject();
  return true;
}

function setCaptionMode(mode, persist = true) {
  state.captionMode = ["phrase", "word", "karaoke"].includes(mode) ? mode : "phrase";
  elements.captionModeButtons.forEach((button) => {
    const active = button.dataset.captionMode === state.captionMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateCaption();
  if (persist) saveLocalProject();
}

function applyCaptionPreset(name, persist = true) {
  const preset = CAPTION_STYLE_PRESETS[name];
  if (!preset) return;
  state.captionPreset = name;
  state.captionTemplate = preset.template;
  elements.fontFamily.value = preset.font;
  elements.fontSize.value = String(preset.size);
  elements.fontSizeValue.value = `${preset.size} px`;
  elements.captionAnimation.value = preset.animation;
  elements.captionTransition.value = preset.transition;
  elements.captionTextColor.value = preset.text;
  elements.captionHighlightColor.value = preset.highlight;
  elements.captionBackground.checked = preset.background;
  elements.captionOutlineWidth.value = String(preset.outline);
  elements.captionShadow.checked = preset.shadow;
  elements.captionCase.value = preset.textCase;
  elements.captionOverlay.style.fontFamily = captionFontFamily();
  elements.captionOverlay.classList.toggle("has-background", preset.background);
  elements.captionOverlay.classList.toggle("template-editorial", preset.template === "editorial");
  elements.captionOverlay.classList.toggle("template-duo", preset.template === "duo");
  elements.captionPresetButtons.forEach((button) => {
    const active = button.dataset.captionPreset === name;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  setCaptionMode(preset.mode, false);
  elements.captionTextRgb.value = rgbTextFromHex(preset.text);
  elements.captionHighlightRgb.value = rgbTextFromHex(preset.highlight);
  applyCaptionColors();
  applyCaptionPositionStyles();
  updateCaption();
  if (persist) {
    saveLocalProject();
    showToast(`Estilo ${name === "duo" ? "Dupla" : buttonLabelForPreset(name)} aplicado.`);
  }
}

function buttonLabelForPreset(name) {
  return elements.captionPresetButtons
    ? Array.from(elements.captionPresetButtons).find((button) => button.dataset.captionPreset === name)?.querySelector("strong")?.textContent || name
    : name;
}

function renderCaptionPreviewText(cue, time, text) {
  elements.captionOverlay.classList.toggle("template-duo", state.captionTemplate === "duo");
  elements.captionOverlay.classList.toggle("template-editorial", state.captionTemplate === "editorial");
  if (state.captionTemplate === "editorial") {
    const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
    const impactIndex = captionImpactWordIndex(cue.text);
    const impactMotion = editorialImpactMotion(cue, time, 8);
    const renderKey = `${cue.id}:${elements.captionCase.value}:${cue.text}:${impactIndex}`;
    if (elements.captionOverlay.dataset.editorialKey !== renderKey) {
      const content = [];
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.className = `editorial-word${index === impactIndex ? " impact" : ""}`;
        span.textContent = word;
        content.push(span);
        if (index < words.length - 1) content.push(document.createTextNode(" "));
      });
      elements.captionOverlay.replaceChildren(...content);
      elements.captionOverlay.dataset.editorialKey = renderKey;
    }
    const impact = elements.captionOverlay.querySelector(".editorial-word.impact");
    impact?.style.setProperty("--impact-alpha", impactMotion.alpha);
    impact?.style.setProperty("--impact-scale", impactMotion.scale);
    impact?.style.setProperty("--impact-y", `${impactMotion.y}px`);
    return;
  }
  delete elements.captionOverlay.dataset.editorialKey;
  if (state.captionTemplate === "duo") {
    const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
    const splitAt = Math.max(1, Math.floor(words.length / 2));
    elements.captionOverlay.replaceChildren();
    const primary = document.createElement("span");
    primary.className = "duo-primary";
    primary.textContent = words.slice(0, splitAt).join(" ");
    const accent = document.createElement("span");
    accent.className = "duo-accent";
    accent.textContent = words.slice(splitAt).join(" ") || words[0] || "";
    elements.captionOverlay.append(primary, accent);
    return;
  }

  if (state.captionMode === "karaoke") {
    const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
    const currentIndex = currentCaptionWordIndex(cue, time);
    elements.captionOverlay.replaceChildren(...words.map((word, index) => {
      const span = document.createElement("span");
      span.className = `caption-word${index === currentIndex ? " current" : ""}`;
      span.textContent = word;
      return span;
    }));
    return;
  }

  elements.captionOverlay.textContent = text;
}

function compositionPartMotion(part, time) {
  const duration = Math.max(0.05, part.end - part.start);
  const entryDuration = Math.min(0.22, duration * 0.42);
  const exitDuration = Math.min(0.15, duration * 0.3);
  const entry = easeOutCubic(clamp((time - part.start) / entryDuration));
  const exit = clamp((part.end - time) / exitDuration);
  let scale = 0.92 + 0.08 * entry;
  let y = (1 - entry) * 0.3;
  if (part.role === "impact") {
    scale = entry < 0.72
      ? 0.86 + (1.05 - 0.86) * easeOutCubic(entry / 0.72)
      : 1.05 - 0.05 * easeOutCubic((entry - 0.72) / 0.28);
    y = (1 - entry) * 0.42;
  }
  return {
    alpha: entry * exit,
    scale,
    y,
    blur: (1 - entry) * 0.08,
  };
}

function renderCaptionCompositionPreview(time) {
  const active = activeCompositionPartsAt(time);
  if (!active.length) {
    elements.captionCompositionOverlay.hidden = true;
    elements.captionCompositionOverlay.replaceChildren();
    delete elements.captionCompositionOverlay.dataset.renderKey;
    return false;
  }
  applyCaptionCompositionPositionStyles();
  const format = elements.captionCompositionOverlay.dataset.format || captionFormatForDimensions();
  const renderKey = active.map(({ composition, part }) => `${composition.id}:${part.id}:${part.text}`).join("|");
  if (elements.captionCompositionOverlay.dataset.renderKey !== renderKey) {
    const nodes = active.map(({ composition, part }) => {
      const node = document.createElement("span");
      node.className = `caption-composition-part role-${part.role}`;
      node.dataset.compositionId = composition.id;
      node.dataset.partId = part.id;
      node.dataset.role = part.role;
      node.textContent = transformCaptionCase(part.text);
      return node;
    });
    elements.captionCompositionOverlay.replaceChildren(...nodes);
    elements.captionCompositionOverlay.dataset.renderKey = renderKey;
  }
  active.forEach(({ composition, part }) => {
    const node = Array.from(elements.captionCompositionOverlay.children)
      .find((item) => item.dataset.partId === part.id);
    if (!node) return;
    const position = part.positions[format] || part.positions.vertical;
    const motion = compositionPartMotion(part, time);
    const selected = composition.cueId === state.cues[state.activeCue]?.id
      && (state.activeCaptionPart === "group" || state.activeCaptionPart === part.role);
    node.classList.toggle("selected", selected);
    node.style.left = `${position.x}%`;
    node.style.top = `${position.y}%`;
    node.style.fontSize = `${part.scale}em`;
    node.style.color = part.role === "impact" ? elements.captionHighlightColor.value : elements.captionTextColor.value;
    node.style.opacity = String(motion.alpha);
    node.style.filter = motion.blur ? `blur(${motion.blur}em)` : "none";
    node.style.transform = `translate(-50%, -50%) translateY(${motion.y}em) scale(${motion.scale})`;
  });
  elements.captionCompositionOverlay.hidden = false;
  return true;
}

function captionMotion(cue, time, motionDistance = 24) {
  const duration = Math.max(0.1, cue.end - cue.start);
  const elapsed = clamp(time - cue.start, 0, duration);
  const remaining = clamp(cue.end - time, 0, duration);
  const editorial = elements.captionAnimation.value === "editorial";
  const entryDuration = editorial ? Math.min(0.22, duration * 0.38) : Math.min(0.45, duration * 0.32);
  const exitDuration = editorial ? Math.min(0.15, duration * 0.28) : Math.min(0.32, duration * 0.25);
  const entryProgress = clamp(elapsed / entryDuration);
  const exitProgress = clamp(remaining / exitDuration);
  let alpha = 1;
  let scale = 1;
  let y = 0;
  let blur = 0;
  let text = captionTextAt(cue, time);

  switch (elements.captionAnimation.value) {
    case "editorial": {
      const eased = easeOutCubic(entryProgress);
      alpha *= eased;
      scale *= 0.92 + 0.08 * eased;
      y += (1 - eased) * motionDistance * 0.18;
      blur = (1 - eased) * 1.8;
      break;
    }
    case "fade":
      alpha *= entryProgress;
      break;
    case "pop":
      scale *= 0.72 + 0.28 * easeOutBack(entryProgress);
      alpha *= entryProgress;
      break;
    case "bounce":
      scale *= 0.78 + 0.22 * easeOutBack(entryProgress);
      y -= Math.sin(entryProgress * Math.PI) * motionDistance * 0.45;
      alpha *= entryProgress;
      break;
    case "slide":
      y += (1 - entryProgress) * motionDistance;
      alpha *= entryProgress;
      break;
    case "typewriter": {
      const visibleCharacters = Math.max(1, Math.ceil(text.length * clamp(elapsed / Math.min(1.4, duration * 0.7))));
      text = text.slice(0, visibleCharacters);
      break;
    }
    case "words": {
      if (state.captionMode !== "phrase") break;
      const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
      const revealDuration = Math.min(2.5, duration * 0.75);
      const revealed = Math.max(1, Math.ceil(words.length * clamp(elapsed / revealDuration)));
      text = words.slice(0, revealed).join(" ");
      break;
    }
  }

  switch (elements.captionTransition.value) {
    case "fade":
      alpha *= exitProgress;
      if (editorial) scale *= 1 + 0.02 * (1 - easeOutCubic(exitProgress));
      break;
    case "slide":
      y -= (1 - exitProgress) * motionDistance;
      alpha *= exitProgress;
      break;
    case "zoom":
      scale *= 0.86 + 0.14 * exitProgress;
      alpha *= exitProgress;
      break;
  }

  return { alpha, scale, y, blur, text };
}

function applyPreviewMotion(cue, time) {
  const motion = captionMotion(cue, time, 24);
  renderCaptionPreviewText(cue, time, motion.text);
  elements.captionOverlay.style.opacity = String(motion.alpha);
  elements.captionOverlay.style.transform = `translate(-50%, -50%) translateY(${motion.y}px) scale(${motion.scale})`;
  elements.captionOverlay.style.filter = motion.blur ? `blur(${motion.blur}px)` : "none";
}

function keepCueVisibleInsideList(cueElement) {
  if (!cueElement || elements.cueList.clientHeight <= 0) return;
  const listBounds = elements.cueList.getBoundingClientRect();
  const cueBounds = cueElement.getBoundingClientRect();
  const inset = 8;
  if (cueBounds.left < listBounds.left + inset) {
    elements.cueList.scrollLeft -= listBounds.left + inset - cueBounds.left;
  } else if (cueBounds.right > listBounds.right - inset) {
    elements.cueList.scrollLeft += cueBounds.right - (listBounds.right - inset);
  }
}

function updateCaption() {
  const current = projectCurrentTime();
  const activeIndex = state.cues.findIndex((cue) => current >= cue.start && current < cue.end);
  renderCaptionCompositionPreview(current);

  if (activeIndex >= 0) {
    const activeCue = state.cues[activeIndex];
    const cueChanged = state.activeCue !== activeIndex;
    if (cueChanged) {
      state.activeCue = activeIndex;
      activateCaptionComposition(undefined, undefined, activeCue);
      applyCaptionPositionStyles(activeCue);
    }
    const composition = compositionForCue(activeCue);
    if (composition) {
      elements.captionOverlay.hidden = true;
    } else {
      applyPreviewMotion(activeCue, current);
      elements.captionOverlay.hidden = false;
    }
    if (cueChanged || !elements.cueList.children[activeIndex]?.classList.contains("active")) {
      document.querySelectorAll(".cue").forEach((cue, index) => cue.classList.toggle("active", index === activeIndex));
      const activeElement = elements.cueList.children[activeIndex];
      keepCueVisibleInsideList(activeElement);
      updateCueInspector();
    }
  } else {
    elements.captionOverlay.hidden = true;
    elements.captionOverlay.style.opacity = "1";
    elements.captionOverlay.style.filter = "none";
  }
}

function updatePlayer() {
  const duration = projectDuration();
  const current = projectCurrentTime();
  const displayTime = Math.min(current, duration);
  elements.currentTime.textContent = formatClock(displayTime);
  elements.syncNextTime.textContent = formatClock(displayTime);
  elements.extendPreviousTime.textContent = formatClock(displayTime);
  elements.duration.textContent = formatClock(duration);
  elements.currentTime.dataset.duration = formatClock(duration);
  elements.seekBar.value = duration ? String(clamp(current / duration) * 100) : "0";
  elements.cutPlayhead.style.left = duration ? `${clamp(current / duration) * 100}%` : "0%";
  if (state.cutStart === null) elements.cutMarkTime.textContent = formatClock(displayTime);
  elements.playIcon.textContent = elements.video.paused ? "▶" : "Ⅱ";
  elements.playButton.title = elements.video.paused ? "Reproduzir" : "Pausar";
  updateCaption();
  updateMediaPreview(current);
  if (elements.video.paused && !state.exporting) drawLutPreview();
}

function runPreviewMotion() {
  if (elements.video.paused || state.exporting) {
    state.previewFrame = null;
    state.previewFrameType = null;
    return;
  }
  updateCaption();
  drawLutPreview();
  updateMediaPreview();
  schedulePreviewMotion();
}

function schedulePreviewMotion() {
  if (typeof elements.video.requestVideoFrameCallback === "function") {
    state.previewFrameType = "video";
    state.previewFrame = elements.video.requestVideoFrameCallback(runPreviewMotion);
  } else {
    state.previewFrameType = "animation";
    state.previewFrame = requestAnimationFrame(runPreviewMotion);
  }
}

function startPreviewMotion() {
  if (!state.previewFrame) schedulePreviewMotion();
}

function stopPreviewMotion() {
  if (state.previewFrame && state.previewFrameType === "video") {
    elements.video.cancelVideoFrameCallback?.(state.previewFrame);
  } else if (state.previewFrame) {
    cancelAnimationFrame(state.previewFrame);
  }
  state.previewFrame = null;
  state.previewFrameType = null;
  updatePlayer();
}

function loadVideo(file) {
  if (!file) return;
  cancelNarrationRecording();
  const incomingSignature = videoFileSignature(file);
  const currentSignature = videoFileSignature(state.videoFile);
  const reopeningRestoredProject = !state.videoFile && state.restoredVideoSignature === incomingSignature;
  const reopeningCurrentVideo = Boolean(state.videoFile) && currentSignature === incomingSignature;
  const resetTimeline = !reopeningRestoredProject && !reopeningCurrentVideo;
  state.sequenceClips.forEach((clip) => URL.revokeObjectURL(clip.url));
  [...state.overlayVideoClips, ...state.imageClips, ...state.audioClips].forEach((clip) => {
    clip.audioElement?.pause();
    clip.mediaElement?.pause();
    clip.element?.remove();
    clip.filterCanvas?.remove();
    if (clip.filterRendererKey) delete state[clip.filterRendererKey];
    URL.revokeObjectURL(clip.url);
  });
  state.audioTrackNodes.forEach(({ source, gain }) => {
    source.disconnect();
    gain.disconnect();
  });
  state.audioTrackNodes.clear();
  state.overlayVideoClips = [];
  state.videoTrackOrder = [];
  state.imageClips = [];
  state.audioClips = [];
  state.audioTrackOrder = ["audio-base"];
  state.videoGridMode = 1;
  state.videoGridClipIds = [];
  state.videoGridLayout = "auto";
  updateVideoGridButtons();
  state.splitHistory = [];
  state.hiddenVideoTrackIds.clear();
  state.hiddenAudioTrackIds.clear();
  if (resetTimeline) {
    state.cuts = [];
    state.cues = [];
    state.captionCompositions = [];
    state.activeCue = -1;
  }
  state.videoFile = file;
  state.restoredVideoSignature = incomingSignature;
  state.videoUrl = URL.createObjectURL(file);
  state.videoName = file.name.replace(/\.[^.]+$/, "") || "legendas";
  state.sequenceClips = [{
    id: crypto.randomUUID(),
    type: "sequence",
    name: file.name,
    file,
    url: state.videoUrl,
    duration: 0,
    start: 0,
    end: 0,
    volume: 1,
    playbackRate: 1,
    sourceSpan: 0,
    lut: state.lut,
    lutPresetId: state.activeLutPresetId,
    lutIntensity: state.lutIntensity,
    videoAdjustments: { ...state.videoAdjustments },
  }];
  state.activeSequenceIndex = 0;
  state.selectedMediaClipId = state.sequenceClips[0].id;
  state.selectedMediaSegmentKey = null;
  elements.video.src = state.videoUrl;
  elements.videoShell.classList.add("has-video");
  elements.emptyVideo.hidden = true;
  setStatus("Carregando vídeo...");
  updateAutoCaptionAvailability();
  saveLocalProject();
}

function allMediaClips() {
  return [...state.sequenceClips, ...state.overlayVideoClips, ...state.imageClips, ...state.audioClips];
}

function selectedMediaClip() {
  return allMediaClips().find((clip) => clip.id === state.selectedMediaClipId) || null;
}

function propertiesMediaClip() {
  const activeTool = Array.from(elements.toolTabs).find((button) => button.classList.contains("active"))?.dataset.toolTab;
  return activeTool === "media" ? selectedMediaClip() : null;
}

function fittedOverlaySize(media) {
  const sourceWidth = media?.videoWidth || media?.naturalWidth || 0;
  const sourceHeight = media?.videoHeight || media?.naturalHeight || 0;
  const base = activeSequenceClip()?.videoElement || elements.video;
  const baseWidth = base?.videoWidth || elements.video.videoWidth || elements.videoShell.clientWidth;
  const baseHeight = base?.videoHeight || elements.video.videoHeight || elements.videoShell.clientHeight;
  if (!sourceWidth || !sourceHeight || !baseWidth || !baseHeight) return 100;
  const sourceAspect = sourceWidth / sourceHeight;
  const frameAspect = baseWidth / baseHeight;
  return Math.round(clamp(100 * Math.min(1, sourceAspect / frameAspect), 10, 100));
}

function applyCenterMagnet(x, y) {
  const threshold = 3;
  const snapX = Math.abs(x - 50) <= threshold;
  const snapY = Math.abs(y - 50) <= threshold;
  elements.alignmentGuides?.classList.toggle("show-vertical", snapX);
  elements.alignmentGuides?.classList.toggle("show-horizontal", snapY);
  return { x: snapX ? 50 : x, y: snapY ? 50 : y };
}

function hideAlignmentGuides() {
  elements.alignmentGuides?.classList.remove("show-vertical", "show-horizontal");
}

function updateMobileDeleteButton(toolName = null) {
  const button = document.querySelector(".mobile-sheet-delete");
  if (!button) return;
  const activeTool = toolName || [...elements.toolTabs]
    .find((item) => item.classList.contains("active"))?.dataset.toolTab;
  const targetsMedia = activeTool === "media" && Boolean(selectedMediaClip());
  const targetsCue = ["caption", "review"].includes(activeTool) && Boolean(state.cues[state.activeCue]);
  button.hidden = !targetsMedia && !targetsCue;
  button.disabled = button.hidden;
  button.dataset.target = targetsMedia ? "media" : "cue";
  button.setAttribute("aria-label", targetsMedia ? "Excluir mídia selecionada" : "Excluir legenda selecionada");
}

function activateToolTab(name) {
  elements.toolTabs.forEach((button) => {
    const active = button.dataset.toolTab === name;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  elements.toolPanels.forEach((panel) => (panel.hidden = panel.dataset.toolPanel !== name));
  elements.stage?.classList.toggle("review-focus", name === "review");
  const labels = {
    caption: ["T", "Legenda"],
    color: ["◉", "Cor"],
    media: ["▣", "Mídia"],
    review: ["✓", "Revisão"],
    script: ["▤", "Roteiro"],
  };
  const heading = document.querySelector(".mobile-sheet-heading");
  if (heading && labels[name]) {
    heading.querySelector(".sheet-icon").textContent = labels[name][0];
    heading.querySelector("strong").textContent = labels[name][1];
    updateMobileDeleteButton(name);
  }
  document.querySelectorAll(".desktop-side-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.sideTarget === name);
  });
  updatePropertiesPanel();
}

function updatePropertiesPanel() {
  const panel = document.querySelector(".properties-panel");
  if (!panel) return;
  const clip = propertiesMediaClip();
  const overlay = clip && ["image", "video"].includes(clip.type) ? clip : null;
  const cue = state.cues[state.activeCue];
  const scale = overlay ? Number(overlay.size) || 100 : Number(elements.fontSize.value) || 36;
  const x = overlay ? Number(overlay.x) || 50 : Number(state.captionPosition.x) || 50;
  const y = overlay ? Number(overlay.y) || 50 : Number(state.captionPosition.y) || 50;
  const opacity = overlay ? Math.round((overlay.opacity ?? 1) * 100) : 100;
  const setValue = (selector, value) => {
    const input = panel.querySelector(selector);
    if (input && document.activeElement !== input) input.value = String(value);
  };
  const scaleInput = panel.querySelector("#propertyScale");
  const scaleLabel = panel.querySelector("#propertyScaleLabel");
  scaleInput.min = overlay ? "10" : "8";
  scaleInput.max = overlay ? "150" : "200";
  scaleInput.setAttribute("aria-label", overlay ? "Escala da mídia" : "Tamanho da fonte");
  scaleLabel.textContent = overlay ? "Escala" : "Tamanho da fonte";
  setValue("#propertyScale", clamp(scale, overlay ? 10 : 8, overlay ? 150 : 200));
  setValue("#propertyX", clamp(x, 0, 100).toFixed(0));
  setValue("#propertyY", clamp(y, 0, 100).toFixed(0));
  setValue("#propertyRotation", overlay ? overlay.rotation || 0 : 0);
  setValue("#propertyOpacity", opacity);
  setValue("#propertyStart", cue ? cue.start.toFixed(1) : 0);
  setValue("#propertyEnd", cue ? cue.end.toFixed(1) : 0);
  panel.querySelector("#propertyScaleValue").value = overlay ? `${Math.round(scale)}%` : `${Math.round(scale)} px`;
  panel.querySelector("#propertyOpacityValue").value = `${opacity}%`;
  const deleteAction = panel.querySelector("#deleteSelectedMediaAction");
  if (deleteAction) {
    deleteAction.hidden = !clip;
    deleteAction.disabled = false;
  }
  panel.querySelector(".property-sync").classList.toggle("is-disabled", !cue);
  panel.querySelectorAll(".property-sync input, .property-sync button").forEach((control) => (control.disabled = !cue));
}

function trackTransitionAtTime(clip, time) {
  const cut = state.cuts.find((item) => {
    if (item.ripple === false || isBaseCut(item) || (item.targetKey || "base") !== cutKeyForClip(clip)) return false;
    const duration = item.transition === "flash" ? 0.32 : 0.44;
    return time >= item.start && time < item.start + duration;
  });
  if (!cut) return null;
  const duration = cut.transition === "flash" ? 0.32 : 0.44;
  return { type: cut.transition, progress: clamp((time - cut.start) / duration) };
}

function mediaSegmentKey(segment) {
  return `${segment.start.toFixed(3)}:${segment.end.toFixed(3)}`;
}

function editableSegmentsForClip(clip) {
  if (clip.type === "sequence") return visibleSequenceSegments(clip);
  const splitSegments = visibleTrackClipSegments(clip);
  if (splitSegments?.length) return splitSegments;
  return [{ start: clip.start, end: clipEffectiveEnd(clip) }];
}

function segmentFadeSettings(clip, segment) {
  clip.segmentFades ||= {};
  const key = mediaSegmentKey(segment);
  clip.segmentFades[key] ||= { fadeIn: 0, fadeOut: 0 };
  return clip.segmentFades[key];
}

function clipHasFadeAutomation(clip) {
  return Object.values(clip?.segmentFades || {}).some((fade) => (
    (Number(fade.fadeIn) || 0) > 0 || (Number(fade.fadeOut) || 0) > 0
  ));
}

function segmentFadeFactor(segment, settings, time) {
  const fadeIn = Math.max(0, Number(settings?.fadeIn) || 0);
  const fadeOut = Math.max(0, Number(settings?.fadeOut) || 0);
  const inFactor = fadeIn ? clamp((time - segment.start) / fadeIn) : 1;
  const outFactor = fadeOut ? clamp((segment.end - time) / fadeOut) : 1;
  return Math.min(inFactor, outFactor);
}

function selectedSegmentForClip(clip) {
  const segments = editableSegmentsForClip(clip);
  return segments.find((segment) => mediaSegmentKey(segment) === state.selectedMediaSegmentKey)
    || segments.find((segment) => projectCurrentTime() >= segment.start && projectCurrentTime() < segment.end)
    || segments[0]
    || { start: clip.start, end: clip.end };
}

function clipFadeFactor(clip, time) {
  if (!clip || !["sequence", "video", "audio"].includes(clip.type)) return 1;
  const segment = editableSegmentsForClip(clip).find((item) => time >= item.start && time < item.end);
  if (!segment) return 1;
  return segmentFadeFactor(segment, segmentFadeSettings(clip, segment), time);
}

function mediaClipAnimation(clip, time) {
  const entryProgress = clamp((time - clip.start) / 0.32);
  let opacity = clip.opacity ?? 1;
  let scale = 1;
  let offsetX = 0;
  if (clip.animation === "fade") opacity *= entryProgress;
  if (clip.animation === "pop") {
    opacity *= entryProgress;
    scale = 0.72 + 0.28 * easeOutBack(entryProgress);
  }
  if (clip.animation === "slide") {
    opacity *= entryProgress;
    offsetX = (1 - entryProgress) * 8;
  }
  if (clip.type === "video") opacity *= clipFadeFactor(clip, time);
  const trackTransition = trackTransitionAtTime(clip, time);
  if (trackTransition && trackTransition.type !== "cut") {
    if (trackTransition.type === "fade") opacity *= trackTransition.progress;
    if (trackTransition.type === "flash") opacity *= 0.45 + trackTransition.progress * 0.55;
    if (trackTransition.type === "zoom") scale *= 1.08 - trackTransition.progress * 0.08;
  }
  return { opacity, scale, offsetX };
}

function renderMediaOverlayElements() {
  const overlayClips = orderedVisualClips();
  const knownIds = new Set(overlayClips.map((clip) => clip.id));
  elements.mediaOverlayLayer.querySelectorAll("[data-media-clip-id]").forEach((node) => {
    if (!knownIds.has(node.dataset.mediaClipId)) node.remove();
  });

  overlayClips.forEach((clip) => {
    const media = clip.type === "video" ? clip.mediaElement : clip.image;
    const layerIndex = clip.id === state.selectedMediaClipId
      ? 200
      : 10 + Math.max(-1, state.videoTrackOrder.indexOf(clip.trackId));
    media.style.zIndex = String(layerIndex);
    if (!clip.element?.isConnected) {
      media.className = `media-overlay-image${clip.type === "video" ? " media-overlay-video" : ""}`;
      if (clip.type === "image") {
        media.alt = "";
        media.draggable = false;
      }
      media.dataset.mediaClipId = clip.id;
      media.addEventListener("pointerdown", (event) => {
        if (state.pinchingMediaOverlay?.clipId === clip.id) return;
        event.preventDefault();
        elements.video.pause();
        selectMediaClip(clip.id, true);
        const bounds = elements.videoShell.getBoundingClientRect();
        state.draggingMediaOverlay = { clipId: clip.id, bounds };
        media.classList.add("dragging");
        media.setPointerCapture?.(event.pointerId);
      });
      media.addEventListener("pointermove", (event) => {
        if (state.draggingMediaOverlay?.clipId !== clip.id || state.pinchingMediaOverlay) return;
        const { bounds } = state.draggingMediaOverlay;
        const next = applyCenterMagnet(
          clamp(((event.clientX - bounds.left) / bounds.width) * 100, 0, 100),
          clamp(((event.clientY - bounds.top) / bounds.height) * 100, 0, 100),
        );
        clip.x = next.x;
        clip.y = next.y;
        updateMediaPreview();
      });
      const finishDrag = (event) => {
        if (state.draggingMediaOverlay?.clipId !== clip.id) return;
        state.draggingMediaOverlay = null;
        hideAlignmentGuides();
        media.classList.remove("dragging");
        if (media.hasPointerCapture?.(event.pointerId)) media.releasePointerCapture(event.pointerId);
        saveLocalProject();
      };
      media.addEventListener("pointerup", finishDrag);
      media.addEventListener("pointercancel", finishDrag);
      const touchDistance = (touches) => Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
      media.addEventListener("touchstart", (event) => {
        if (event.touches.length !== 2) return;
        event.preventDefault();
        state.draggingMediaOverlay = null;
        hideAlignmentGuides();
        media.classList.remove("dragging");
        selectMediaClip(clip.id, true);
        state.pinchingMediaOverlay = { clipId: clip.id, distance: touchDistance(event.touches), size: clip.size };
      }, { passive: false });
      media.addEventListener("touchmove", (event) => {
        const pinch = state.pinchingMediaOverlay;
        if (!pinch || pinch.clipId !== clip.id || event.touches.length !== 2) return;
        event.preventDefault();
        clip.size = clamp(pinch.size * touchDistance(event.touches) / Math.max(1, pinch.distance), 10, 150);
        elements.mediaClipSize.value = String(clip.size);
        elements.mediaClipSizeValue.value = `${Math.round(clip.size)}%`;
        updateMediaPreview();
      }, { passive: false });
      media.addEventListener("touchend", (event) => {
        if (state.pinchingMediaOverlay?.clipId !== clip.id || event.touches.length >= 2) return;
        state.pinchingMediaOverlay = null;
        saveLocalProject();
      }, { passive: false });
      clip.element = media;
      elements.mediaOverlayLayer.append(media);
    }

    if (clip.type === "video" && !clip.filterCanvas?.isConnected) {
      const canvas = document.createElement("canvas");
      canvas.className = "media-overlay-image media-overlay-video media-filter-canvas";
      canvas.dataset.filterClipId = clip.id;
      canvas.hidden = true;
      clip.filterCanvas = canvas;
      clip.filterRendererKey = `clipFilterRenderer_${clip.id.replaceAll("-", "")}`;
      elements.mediaOverlayLayer.append(canvas);
    }
    if (clip.filterCanvas) clip.filterCanvas.style.zIndex = String(layerIndex + 1);

    if (!clip.resizeHandle?.isConnected) {
      const handle = document.createElement("button");
      handle.type = "button";
      handle.className = "media-resize-handle";
      handle.dataset.mediaClipId = clip.id;
      handle.title = "Arraste para redimensionar";
      handle.setAttribute("aria-label", "Redimensionar camada");
      handle.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        event.stopPropagation();
        elements.video.pause();
        selectMediaClip(clip.id, true);
        const bounds = elements.videoShell.getBoundingClientRect();
        const centerX = bounds.left + bounds.width * clip.x / 100;
        const centerY = bounds.top + bounds.height * clip.y / 100;
        state.resizingMediaOverlay = {
          clipId: clip.id,
          centerX,
          centerY,
          distance: Math.max(1, Math.hypot(event.clientX - centerX, event.clientY - centerY)),
          size: clip.size,
        };
        handle.setPointerCapture?.(event.pointerId);
      });
      handle.addEventListener("pointermove", (event) => {
        const resize = state.resizingMediaOverlay;
        if (!resize || resize.clipId !== clip.id) return;
        const distance = Math.hypot(event.clientX - resize.centerX, event.clientY - resize.centerY);
        clip.size = clamp(resize.size * distance / resize.distance, 10, 150);
        elements.mediaClipSize.value = String(clip.size);
        elements.mediaClipSizeValue.value = `${Math.round(clip.size)}%`;
        updateMediaPreview();
      });
      const finishResize = (event) => {
        if (state.resizingMediaOverlay?.clipId !== clip.id) return;
        state.resizingMediaOverlay = null;
        if (handle.hasPointerCapture?.(event.pointerId)) handle.releasePointerCapture(event.pointerId);
        saveLocalProject();
      };
      handle.addEventListener("pointerup", finishResize);
      handle.addEventListener("pointercancel", finishResize);
      clip.resizeHandle = handle;
      elements.mediaOverlayLayer.append(handle);
    }
    clip.resizeHandle.style.zIndex = String(layerIndex + 2);
  });
}

function drawOverlayFilterPreviews(time = projectCurrentTime()) {
  state.overlayVideoClips.forEach((clip) => {
    const canvas = clip.filterCanvas;
    const source = clip.mediaElement;
    const profile = colorProfileForClip(clip);
    const active = clipIsActiveAtTime(clip, time) && colorProfileHasEffects(profile) && source?.readyState >= 2;
    if (!canvas || !active) {
      if (canvas) canvas.hidden = true;
      return;
    }
    const sourceWidth = source.videoWidth;
    const sourceHeight = source.videoHeight;
    const maxDimension = /iPad|iPhone|iPod/.test(navigator.userAgent) ? 960 : 1280;
    const scale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
    try {
      const rendered = drawLutFrame(
        canvas,
        clip.filterRendererKey,
        Math.max(2, Math.round(sourceWidth * scale)),
        Math.max(2, Math.round(sourceHeight * scale)),
        source,
        profile,
      );
      canvas.hidden = !rendered;
    } catch (error) {
      console.error(error);
      canvas.hidden = true;
    }
  });
}

function previewPrimaryVideoClip(time) {
  const selected = selectedMediaClip();
  if (selected?.type === "sequence"
    && clipTrackIsVisible(selected)
    && time >= selected.start && time < selected.end) return selected;
  if (selected?.type === "video" && clipIsActiveAtTime(selected, time)) return selected;
  const topOverlay = [...orderedOverlayVideoClips()].reverse().find((clip) => clipIsActiveAtTime(clip, time));
  if (topOverlay) return topOverlay;
  return state.sequenceClips.find((clip) => clipTrackIsVisible(clip) && time >= clip.start && time < clip.end) || null;
}

function sourceProjectAspectRatio() {
  const sourceWidth = state.sequenceClips[0]?.width || elements.video.videoWidth || 1080;
  const sourceHeight = state.sequenceClips[0]?.height || elements.video.videoHeight || 1920;
  return sourceWidth / Math.max(1, sourceHeight);
}

function projectAspectRatio() {
  return PROJECT_ASPECTS[state.projectAspect] || sourceProjectAspectRatio();
}

function commercialExportVariant() {
  return projectAspectRatio() <= 1 ? "vertical" : "horizontal";
}

function updateCommercialVariantLabel() {
  if (!elements.commercialVariant) return;
  const commercial = COMMERCIAL_EXPORTS[commercialExportVariant()];
  elements.commercialVariant.textContent = elements.includeCommercial.checked
    ? `${commercial.label} · escolhido automaticamente`
    : "O vídeo será exportado sem o comercial";
}

function updateProjectAspectControls() {
  const preset = PROJECT_ASPECTS[state.projectAspect] ? state.projectAspect : "source";
  const label = preset === "source" ? "Original" : preset;
  elements.projectAspectLabel.textContent = label;
  elements.projectAspectShape.className = `ratio-shape ${preset === "source" ? "ratio-source" : `ratio-${preset.replace(":", "-")}`}`;
  document.querySelectorAll("[data-project-aspect]").forEach((button) => {
    const active = button.dataset.projectAspect === preset;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const aspect = projectAspectRatio();
  elements.videoShell.style.setProperty("--video-aspect", `${aspect}`);
  renderVideoGridPresets();
  updateMediaPreview();
  applyCaptionPositionStyles();
  updateCommercialVariantLabel();
}

function setProjectAspect(preset) {
  state.projectAspect = PROJECT_ASPECTS[preset] ? preset : "source";
  elements.projectAspectMenu.hidden = true;
  elements.projectAspectButton.setAttribute("aria-expanded", "false");
  updateProjectAspectControls();
  saveLocalProject();
}

function resolvedVideoGridLayout(count, aspect, layout = state.videoGridLayout) {
  if (layout !== "auto") return layout;
  if (count === 2) return aspect >= 1 ? "columns" : "rows";
  if (count === 3) return aspect >= 1 ? "hero-left" : "hero-top";
  return "quad";
}

function videoGridSlots(count, aspect = projectAspectRatio(), layout = state.videoGridLayout) {
  const resolved = resolvedVideoGridLayout(count, aspect, layout);
  if (resolved === "columns") {
    return Array.from({ length: count }, (_, index) => ({
      x: index * 100 / count, y: 0, width: 100 / count, height: 100,
    }));
  }
  if (resolved === "rows") {
    return Array.from({ length: count }, (_, index) => ({
      x: 0, y: index * 100 / count, width: 100, height: 100 / count,
    }));
  }
  if (count === 3 && resolved === "hero-left") {
    return [
      { x: 0, y: 0, width: 66.667, height: 100 },
      { x: 66.667, y: 0, width: 33.333, height: 50 },
      { x: 66.667, y: 50, width: 33.333, height: 50 },
    ];
  }
  if (count === 3 && resolved === "hero-top") {
    return [
      { x: 0, y: 0, width: 100, height: 62 },
      { x: 0, y: 62, width: 50, height: 38 },
      { x: 50, y: 62, width: 50, height: 38 },
    ];
  }
  return [
    { x: 0, y: 0, width: 50, height: 50 },
    { x: 50, y: 0, width: 50, height: 50 },
    { x: 0, y: 50, width: 50, height: 50 },
    { x: 50, y: 50, width: 50, height: 50 },
  ].slice(0, count);
}

function gridLayoutChoices(count) {
  if (count === 2) return [["auto", "Automático"], ["columns", "Lado a lado"], ["rows", "Empilhado"]];
  if (count === 3) return [["auto", "Automático"], ["hero-left", "Destaque lateral"], ["hero-top", "Destaque superior"], ["columns", "Colunas"]];
  return [["auto", "Automático"], ["quad", "Mosaico"], ["columns", "Colunas"], ["rows", "Empilhado"]];
}

function renderVideoGridPresets() {
  if (!elements.videoGridPresets) return;
  elements.videoGridPresets.replaceChildren();
  elements.videoGridPresets.hidden = state.videoGridMode < 2;
  if (state.videoGridMode < 2) return;
  gridLayoutChoices(state.videoGridMode).forEach(([layout, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "grid-preset-button";
    button.classList.toggle("active", state.videoGridLayout === layout);
    button.setAttribute("aria-pressed", String(state.videoGridLayout === layout));
    button.title = label;
    const diagram = document.createElement("span");
    diagram.className = "grid-layout-diagram";
    videoGridSlots(state.videoGridMode, projectAspectRatio(), layout).forEach((slot) => {
      const cell = document.createElement("i");
      cell.style.left = `${slot.x}%`;
      cell.style.top = `${slot.y}%`;
      cell.style.width = `${slot.width}%`;
      cell.style.height = `${slot.height}%`;
      diagram.append(cell);
    });
    const text = document.createElement("span");
    text.textContent = label;
    button.append(diagram, text);
    button.addEventListener("click", () => {
      state.videoGridLayout = layout;
      renderVideoGridPresets();
      updateMediaPreview();
      saveLocalProject();
    });
    elements.videoGridPresets.append(button);
  });
}

function activeGridVideoCandidates(time = projectCurrentTime()) {
  const baseClip = state.sequenceClips.find((clip) => clipIsActiveAtTime(clip, time));
  const overlays = orderedOverlayVideoClips().filter((clip) => clipIsActiveAtTime(clip, time));
  const candidates = [
    ...(baseClip ? [{ key: "base", clip: baseClip, type: "base", source: elements.video }] : []),
    ...overlays.map((clip) => ({ key: clip.id, clip, type: "overlay", source: clip.mediaElement })),
  ];
  const selectedIndex = candidates.findIndex(({ clip }) => clip.id === state.selectedMediaClipId);
  if (selectedIndex > 0) candidates.unshift(candidates.splice(selectedIndex, 1)[0]);
  return candidates;
}

function activeVideoGrid(time = projectCurrentTime()) {
  if (state.videoGridMode < 2) return null;
  const candidates = activeGridVideoCandidates(time);
  const byKey = new Map(candidates.map((item) => [item.key, item]));
  const participants = state.videoGridClipIds.map((key) => byKey.get(key)).filter(Boolean);
  if (participants.length !== state.videoGridMode) return null;
  return { participants, keys: new Set(participants.map((item) => item.key)) };
}

function updateVideoGridButtons() {
  elements.videoGridButtons.forEach((button) => {
    const active = Number(button.dataset.videoGrid) === state.videoGridMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderVideoGridPresets();
}

function gridFocusForClip(clip) {
  const x = Number(clip?.gridFocusX);
  const y = Number(clip?.gridFocusY);
  return {
    x: clamp(Number.isFinite(x) ? x : 50, 0, 100),
    y: clamp(Number.isFinite(y) ? y : 50, 0, 100),
  };
}

function setGridElementRect(element, slot, clip = null) {
  const focus = gridFocusForClip(clip);
  element.style.inset = "auto";
  element.style.left = `${slot.x}%`;
  element.style.top = `${slot.y}%`;
  element.style.width = `${slot.width}%`;
  element.style.height = `${slot.height}%`;
  element.style.transform = "none";
  element.style.objectFit = "cover";
  element.style.objectPosition = `${focus.x}% ${focus.y}%`;
}

function resetGridElementRect(element, base = false) {
  ["inset", "left", "top", "right", "bottom", "width", "height", "transform", "objectFit", "objectPosition"].forEach((name) => {
    element.style[name] = "";
  });
  if (!base) element.style.height = "auto";
}

function gridParticipantSourceSize(item) {
  const source = item?.type === "base" ? elements.video : item?.source;
  return {
    width: source?.videoWidth || item?.clip?.width || 0,
    height: source?.videoHeight || item?.clip?.height || 0,
  };
}

function applyGridFocusToPreview(item) {
  const focus = gridFocusForClip(item?.clip);
  const value = `${focus.x}% ${focus.y}%`;
  if (item?.type === "base") {
    elements.video.style.objectPosition = value;
    elements.lutPreviewCanvas.style.objectPosition = value;
  } else if (item?.clip?.element) {
    item.clip.element.style.objectPosition = value;
  }
}

function renderGridInteractionHandles(grid, slots) {
  const activeKeys = new Set((grid?.participants || []).map((item) => item.key));
  elements.mediaOverlayLayer.querySelectorAll(".grid-cell-control").forEach((control) => {
    if (!activeKeys.has(control.dataset.gridKey)) control.remove();
  });
  if (!grid?.participants?.length) return;

  grid.participants.forEach((item, index) => {
    const slot = slots[index];
    if (!slot) return;
    const selector = `.grid-cell-control[data-grid-key="${CSS.escape(item.key)}"]`;
    let control = elements.mediaOverlayLayer.querySelector(selector);
    if (!control) {
      control = document.createElement("button");
      control.type = "button";
      control.className = "grid-cell-control";
      control.dataset.gridKey = item.key;
      control.addEventListener("pointerdown", (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        const current = activeVideoGrid()?.participants.find((candidate) => candidate.key === control.dataset.gridKey);
        if (!current) return;
        event.preventDefault();
        event.stopPropagation();
        elements.video.pause();
        const focus = gridFocusForClip(current.clip);
        state.draggingGridCell = {
          key: current.key,
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          focusX: focus.x,
          focusY: focus.y,
          bounds: control.getBoundingClientRect(),
        };
        control.classList.add("dragging");
        control.setPointerCapture?.(event.pointerId);
        selectMediaClip(current.clip.id, true);
      });
      control.addEventListener("pointermove", (event) => {
        const drag = state.draggingGridCell;
        if (!drag || drag.key !== control.dataset.gridKey) return;
        const current = activeVideoGrid()?.participants.find((candidate) => candidate.key === drag.key);
        if (!current) return;
        const source = gridParticipantSourceSize(current);
        const targetAspect = drag.bounds.width / Math.max(1, drag.bounds.height);
        const sourceAspect = source.width / Math.max(1, source.height);
        let focusX = drag.focusX;
        let focusY = drag.focusY;
        if (sourceAspect > targetAspect) {
          const renderedWidth = drag.bounds.height * sourceAspect;
          const overflow = Math.max(1, renderedWidth - drag.bounds.width);
          focusX = clamp(drag.focusX - ((event.clientX - drag.startX) / overflow) * 100, 0, 100);
        } else if (sourceAspect < targetAspect) {
          const renderedHeight = drag.bounds.width / Math.max(0.0001, sourceAspect);
          const overflow = Math.max(1, renderedHeight - drag.bounds.height);
          focusY = clamp(drag.focusY - ((event.clientY - drag.startY) / overflow) * 100, 0, 100);
        }
        current.clip.gridFocusX = focusX;
        current.clip.gridFocusY = focusY;
        applyGridFocusToPreview(current);
      });
      const finish = (event) => {
        if (state.draggingGridCell?.key !== control.dataset.gridKey) return;
        state.draggingGridCell = null;
        control.classList.remove("dragging");
        if (control.hasPointerCapture?.(event.pointerId)) control.releasePointerCapture(event.pointerId);
        saveLocalProject();
      };
      control.addEventListener("pointerup", finish);
      control.addEventListener("pointercancel", finish);
      control.addEventListener("keydown", (event) => {
        const current = activeVideoGrid()?.participants.find((candidate) => candidate.key === control.dataset.gridKey);
        if (!event.altKey || !current || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
        event.preventDefault();
        const focus = gridFocusForClip(current.clip);
        current.clip.gridFocusX = clamp(focus.x + (event.key === "ArrowLeft" ? -3 : event.key === "ArrowRight" ? 3 : 0), 0, 100);
        current.clip.gridFocusY = clamp(focus.y + (event.key === "ArrowUp" ? -3 : event.key === "ArrowDown" ? 3 : 0), 0, 100);
        applyGridFocusToPreview(current);
        saveLocalProject();
      });
      elements.mediaOverlayLayer.append(control);
    }
    control.style.left = `${slot.x}%`;
    control.style.top = `${slot.y}%`;
    control.style.width = `${slot.width}%`;
    control.style.height = `${slot.height}%`;
    control.classList.toggle("selected", item.clip.id === state.selectedMediaClipId);
    control.setAttribute("aria-label", `Reposicionar ${item.clip.name || `vídeo ${index + 1}`} dentro da grade`);
  });
}

function applyVideoGrid(count) {
  const next = clamp(Math.round(Number(count) || 1), 1, 4);
  if (next === 1) {
    state.videoGridMode = 1;
    state.videoGridClipIds = [];
    state.videoGridLayout = "auto";
    updateVideoGridButtons();
    updateMediaPreview();
    saveLocalProject();
    showToast("Layout livre restaurado.");
    return;
  }
  const candidates = activeGridVideoCandidates();
  if (candidates.length < next) {
    showToast(`Sobreponha ${next} vídeos neste momento da timeline para criar a grade.`);
    return;
  }
  state.videoGridMode = next;
  state.videoGridClipIds = candidates.slice(0, next).map((item) => item.key);
  state.videoGridLayout = "auto";
  updateVideoGridButtons();
  updateMediaPreview();
  saveLocalProject();
  showToast(`Grade com ${next} vídeos aplicada.`);
}

function setClipPreviewPlayback(clip, mediaElement, shouldPlay, channel = "media") {
  if (!mediaElement) return;
  const shouldPlayKey = channel === "audio" ? "previewAudioShouldPlay" : "previewShouldPlay";
  const promiseKey = channel === "audio" ? "previewAudioPlayPromise" : "previewPlayPromise";
  clip[shouldPlayKey] = shouldPlay;
  if (!shouldPlay) {
    if (!mediaElement.paused) mediaElement.pause();
    return;
  }
  if (!mediaElement.paused || clip[promiseKey]) return;
  const playPromise = mediaElement.play();
  clip[promiseKey] = playPromise;
  Promise.resolve(playPromise)
    .catch(() => {})
    .finally(() => {
      if (clip[promiseKey] === playPromise) clip[promiseKey] = null;
      if (!clip[shouldPlayKey]) mediaElement.pause();
    });
}

function syncOverlayVideoAudio(clip, time, shouldPlay) {
  const audioElement = clip.audioElement || clip.mediaElement;
  if (!audioElement) return;
  if (!shouldPlay) {
    clip.previewAudioWasActive = false;
    audioElement.playbackRate = 1;
    setClipPreviewPlayback(clip, audioElement, false, "audio");
    return;
  }
  const localTime = clamp(clipBrowserMediaTimeAtTimeline(clip, time, audioElement), 0, audioElement.duration || Infinity);
  const drift = localTime - (audioElement.currentTime || 0);
  const hardSync = !clip.previewAudioWasActive || elements.video.paused || Math.abs(drift) > 0.45;
  if (hardSync && !audioElement.seeking && Math.abs(drift) > (elements.video.paused ? 0.015 : 0.08)) {
    audioElement.currentTime = localTime;
  }
  clip.previewAudioWasActive = true;
  audioElement.playbackRate = clipPlaybackRate(clip);
  const graphNode = state.audioTrackNodes.get(clip.id);
  const transition = trackTransitionAtTime(clip, time);
  const transitionGain = (transition?.type === "fade" ? transition.progress : 1) * clipFadeFactor(clip, time);
  audioElement.volume = graphNode ? 1 : clamp((clip.volume ?? 1) * transitionGain, 0, 1);
  if (graphNode) graphNode.gain.gain.value = clamp((clip.volume ?? 1) * transitionGain, 0, 2);
  setClipPreviewPlayback(clip, audioElement, !elements.video.paused, "audio");
}

function updateMediaPreview(time = projectCurrentTime()) {
  const duration = projectDuration();
  const baseGap = state.cuts.some((cut) => isBaseCut(cut) && cut.ripple === false && time >= cut.start && time < cut.end);
  const baseHidden = baseGap || !trackIsVisible("video", "base");
  const grid = activeVideoGrid(time);
  const gridActive = Boolean(grid && grid.participants.length);
  const gridSlots = gridActive
    ? videoGridSlots(state.videoGridMode, projectAspectRatio())
    : [];
  const baseGridIndex = gridActive ? grid.participants.findIndex((item) => item.key === "base") : -1;
  const primaryVideo = state.exporting ? null : previewPrimaryVideoClip(time);
  const focusBaseVideo = primaryVideo?.type === "sequence" && !baseHidden;
  elements.videoShell.classList.toggle("base-video-gap", baseHidden);
  const baseFade = clipFadeFactor(activeSequenceClip(), time);
  const baseOpacity = baseHidden || (gridActive && baseGridIndex < 0) ? 0 : baseFade;
  elements.video.style.opacity = String(baseOpacity);
  elements.lutPreviewCanvas.style.opacity = String(baseOpacity);
  const baseVolume = baseHidden ? 0 : clamp((activeSequenceClip()?.volume ?? 1) * baseFade, 0, 2);
  if (state.mainAudioGain) state.mainAudioGain.gain.value = baseVolume;
  else elements.video.volume = clamp(baseVolume, 0, 1);
  elements.video.playbackRate = clipPlaybackRate(activeSequenceClip());
  elements.mediaTimeline.querySelectorAll("[data-media-playhead]").forEach((playhead) => {
    playhead.style.left = duration ? `${clamp(time / duration) * 100}%` : "0%";
  });
  renderMediaOverlayElements();
  elements.videoShell.classList.toggle("video-grid-active", gridActive);
  if (gridActive && baseGridIndex >= 0) {
    const baseItem = grid.participants[baseGridIndex];
    setGridElementRect(elements.video, gridSlots[baseGridIndex], baseItem.clip);
    setGridElementRect(elements.lutPreviewCanvas, gridSlots[baseGridIndex], baseItem.clip);
  } else {
    resetGridElementRect(elements.video, true);
    resetGridElementRect(elements.lutPreviewCanvas, true);
  }
  orderedVisualClips().forEach((clip) => {
    const active = clipIsActiveAtTime(clip, time);
    if (!clip.element) return;
    const gridIndex = gridActive ? grid.participants.findIndex((item) => item.key === clip.id) : -1;
    const gridVideo = clip.type === "video" && gridIndex >= 0;
    const fullSizeVideo = clip.type === "video" && (clip.size ?? 100) >= 95;
    const previewActive = gridActive && clip.type === "video"
      ? active && gridVideo
      : active && (!fullSizeVideo || clip.id === primaryVideo?.id);
    if (clip.type === "video") syncOverlayVideoAudio(clip, time, active);
    clip.element.hidden = !previewActive;
    const filteredVideo = clip.type === "video" && colorProfileHasEffects(colorProfileForClip(clip));
    if (clip.filterCanvas) clip.filterCanvas.hidden = !previewActive || !filteredVideo;
    if (clip.resizeHandle) clip.resizeHandle.hidden = gridActive || !previewActive || clip.id !== state.selectedMediaClipId;
    if (!active || (clip.type === "video" && !previewActive)) {
      if (clip.type === "video") {
        clip.previewWasActive = false;
        clip.mediaElement.playbackRate = 1;
        setClipPreviewPlayback(clip, clip.mediaElement, false);
      }
      return;
    }
    const motion = mediaClipAnimation(clip, time);
    if (gridVideo) {
      setGridElementRect(clip.element, gridSlots[gridIndex], clip);
      if (clip.filterCanvas) setGridElementRect(clip.filterCanvas, gridSlots[gridIndex], clip);
    } else {
      resetGridElementRect(clip.element);
      clip.element.style.left = `${clip.x}%`;
      clip.element.style.top = `${clip.y}%`;
      clip.element.style.width = `${clip.size}%`;
      if (clip.filterCanvas) {
        resetGridElementRect(clip.filterCanvas);
        clip.filterCanvas.style.left = `${clip.x}%`;
        clip.filterCanvas.style.top = `${clip.y}%`;
        clip.filterCanvas.style.width = `${clip.size}%`;
      }
    }
    clip.element.style.opacity = String(filteredVideo ? 0 : motion.opacity);
    if (clip.filterCanvas) clip.filterCanvas.style.opacity = String(motion.opacity);
    if (!gridVideo) {
      const transform = `translate(-50%, -50%) translateX(${motion.offsetX}%) rotate(${clip.rotation || 0}deg) scale(${motion.scale})`;
      clip.element.style.transform = transform;
      if (clip.filterCanvas) clip.filterCanvas.style.transform = transform;
    }
    clip.element.classList.toggle("selected", clip.id === state.selectedMediaClipId);
    clip.filterCanvas?.classList.toggle("selected", clip.id === state.selectedMediaClipId);
    if (clip.resizeHandle && !clip.resizeHandle.hidden) {
      const sourceWidth = clip.type === "video" ? clip.mediaElement.videoWidth : clip.image.naturalWidth;
      const sourceHeight = clip.type === "video" ? clip.mediaElement.videoHeight : clip.image.naturalHeight;
      const shellBounds = elements.videoShell.getBoundingClientRect();
      const heightPercent = sourceWidth && shellBounds.height
        ? clip.size * (sourceHeight / sourceWidth) * (shellBounds.width / shellBounds.height)
        : clip.size;
      clip.resizeHandle.style.left = `${clamp(clip.x + clip.size / 2, 3, 97)}%`;
      clip.resizeHandle.style.top = `${clamp(clip.y + heightPercent / 2, 3, 97)}%`;
    }
    if (clip.type === "video") {
      const localTime = clamp(clipBrowserMediaTimeAtTimeline(clip, time, clip.mediaElement), 0, clip.mediaElement.duration || Infinity);
      const drift = localTime - (clip.mediaElement.currentTime || 0);
      const hardSyncThreshold = gridVideo ? 0.28 : 0.6;
      const hardSync = !clip.previewWasActive || elements.video.paused || Math.abs(drift) > hardSyncThreshold;
      if (hardSync && !clip.mediaElement.seeking && Math.abs(drift) > (elements.video.paused ? 0.015 : 0.08)) {
        clip.mediaElement.currentTime = localTime;
      }
      clip.previewWasActive = true;
      const rate = clipPlaybackRate(clip);
      if (Math.abs(clip.mediaElement.playbackRate - rate) > 0.004) {
        clip.mediaElement.playbackRate = rate;
      }
      setClipPreviewPlayback(clip, clip.mediaElement, !elements.video.paused);
    }
  });
  renderGridInteractionHandles(gridActive ? grid : null, gridSlots);
  syncAudioClips(time);
}

function drawSourceCover(context, source, x, y, width, height, focus = { x: 50, y: 50 }) {
  const sourceWidth = source?.videoWidth || source?.naturalWidth || source?.width;
  const sourceHeight = source?.videoHeight || source?.naturalHeight || source?.height;
  if (!sourceWidth || !sourceHeight || width <= 0 || height <= 0) return false;
  const sourceAspect = sourceWidth / sourceHeight;
  const targetAspect = width / height;
  let sx = 0;
  let sy = 0;
  let sw = sourceWidth;
  let sh = sourceHeight;
  if (sourceAspect > targetAspect) {
    sw = sourceHeight * targetAspect;
    sx = (sourceWidth - sw) * clamp((Number(focus.x) || 0) / 100, 0, 1);
  } else {
    sh = sourceWidth / targetAspect;
    sy = (sourceHeight - sh) * clamp((Number(focus.y) || 0) / 100, 0, 1);
  }
  context.drawImage(source, sx, sy, sw, sh, x, y, width, height);
  return true;
}

function drawVideoGridFrame(context, width, height, time, baseSource = elements.video, sourceOverrides = null) {
  const grid = activeVideoGrid(time);
  if (!grid?.participants.length) return false;
  const slots = videoGridSlots(state.videoGridMode, width / height);
  grid.participants.forEach((item, index) => {
    const slot = slots[index];
    if (!slot) return;
    const x = Math.round(width * slot.x / 100);
    const y = Math.round(height * slot.y / 100);
    const cellWidth = Math.max(1, Math.round(width * slot.width / 100));
    const cellHeight = Math.max(1, Math.round(height * slot.height / 100));
    let source = item.type === "base" ? baseSource : sourceOverrides?.get(item.key) || item.source;
    let focus = gridFocusForClip(item.clip);
    let opacity = item.type === "base"
      ? (baseTrackVisibleAtTime(time) ? clipFadeFactor(item.clip, time) : 0)
      : mediaClipAnimation(item.clip, time).opacity;

    const colorProfile = colorProfileForClip(item.clip);
    if (colorProfileHasEffects(colorProfile)) {
      if (!state.gridCellCanvas) state.gridCellCanvas = document.createElement("canvas");
      const cell = state.gridCellCanvas;
      cell.width = cellWidth;
      cell.height = cellHeight;
      const cellContext = srgb2dContext(cell);
      cellContext.fillStyle = "#000";
      cellContext.fillRect(0, 0, cellWidth, cellHeight);
      drawSourceCover(cellContext, source, 0, 0, cellWidth, cellHeight, focus);
      source = renderExportColorFrame(cell, item.clip, cellWidth, cellHeight, colorProfile);
      focus = { x: 50, y: 50 };
    }

    context.save();
    context.beginPath();
    context.rect(x, y, cellWidth, cellHeight);
    context.clip();
    context.globalAlpha = opacity;
    drawSourceCover(context, source, x, y, cellWidth, cellHeight, focus);
    context.restore();
  });
  return true;
}

function drawImageOverlays(context, width, height, time, sourceOverrides = null) {
  const gridActive = Boolean(activeVideoGrid(time)?.participants.length);
  orderedVisualClips().forEach((clip) => {
    if (gridActive && clip.type === "video") return;
    let source = clip.type === "video"
      ? sourceOverrides?.get(clip.id) || clip.mediaElement
      : clip.image;
    const sourceWidth = source?.videoWidth || source?.naturalWidth;
    const sourceHeight = source?.videoHeight || source?.naturalHeight;
    if (!clipIsActiveAtTime(clip, time) || !sourceWidth || !sourceHeight) return;
    if (clip.type === "video") {
      const profile = colorProfileForClip(clip);
      if (colorProfileHasEffects(profile)) {
        const scale = Math.min(1, Math.max(width, height) / Math.max(sourceWidth, sourceHeight));
        const filterWidth = Math.max(2, Math.round(sourceWidth * scale));
        const filterHeight = Math.max(2, Math.round(sourceHeight * scale));
        source = renderExportColorFrame(source, clip, filterWidth, filterHeight, profile);
      }
    }
    const motion = mediaClipAnimation(clip, time);
    const drawWidth = width * (clip.size / 100) * motion.scale;
    const drawHeight = drawWidth * (sourceHeight / sourceWidth);
    const centerX = width * (clip.x / 100) + drawWidth * (motion.offsetX / 100);
    const centerY = height * (clip.y / 100);
    context.save();
    context.globalAlpha = motion.opacity;
    context.translate(centerX, centerY);
    context.rotate(((clip.rotation || 0) * Math.PI) / 180);
    context.drawImage(source, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
    context.restore();
  });
}

function syncAudioClips(time = projectCurrentTime()) {
  state.audioClips.forEach((clip) => {
    const audio = clip.audioElement;
    if (!audio) return;
    const active = clipIsActiveAtTime(clip, time);
    if (!active) {
      clip.previewWasActive = false;
      audio.playbackRate = 1;
      setClipPreviewPlayback(clip, audio, false);
      return;
    }
    const localTime = clamp(clipBrowserMediaTimeAtTimeline(clip, time, audio), 0, audio.duration || Infinity);
    const drift = localTime - (audio.currentTime || 0);
    const hardSync = !clip.previewWasActive || elements.video.paused || Math.abs(drift) > 0.9;
    if (hardSync && !audio.seeking && Math.abs(drift) > (elements.video.paused ? 0.015 : 0.08)) audio.currentTime = localTime;
    clip.previewWasActive = true;
    const rate = clipPlaybackRate(clip);
    if (Math.abs(audio.playbackRate - rate) > 0.004) audio.playbackRate = rate;
    const graphNode = state.audioTrackNodes.get(clip.id);
    const transition = trackTransitionAtTime(clip, time);
    const transitionGain = (transition?.type === "fade" ? transition.progress : 1) * clipFadeFactor(clip, time);
    if (graphNode) {
      audio.volume = 1;
      graphNode.gain.gain.value = clamp((clip.volume ?? 1) * transitionGain, 0, 2);
    } else {
      audio.volume = clamp((clip.volume ?? 1) * transitionGain, 0, 1);
    }
    setClipPreviewPlayback(clip, audio, !elements.video.paused);
  });
}

function createTrackAddButton(label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "track-add-button";
  button.textContent = "+";
  button.title = label;
  button.setAttribute("aria-label", label);
  button.addEventListener("click", onClick);
  return button;
}

function createAudioTrackActionButton(action, trackId, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `track-audio-action-button track-${action}-button`;
  button.dataset.audioAction = action;
  button.dataset.audioTrackId = trackId;
  if (action === "narrate") {
    const recordingHere = Boolean(state.narrationRecorder && state.narrationTrackId === trackId);
    button.textContent = recordingHere ? "■" : "●";
    button.classList.toggle("recording", recordingHere);
    button.title = recordingHere ? `Finalizar narração na faixa ${label}` : `Gravar narração na faixa ${label}`;
    button.setAttribute("aria-pressed", String(recordingHere));
    button.addEventListener("click", () => toggleNarrationRecording(trackId));
  } else {
    button.textContent = "CC";
    button.title = `Gerar legendas da narração na faixa ${label}`;
    button.disabled = state.narrationCaptionBusy;
    button.addEventListener("click", () => generateNarrationCaptions(trackId));
  }
  button.setAttribute("aria-label", button.title);
  return button;
}

function appendAudioTrackActions(trackLabel, trackId, label) {
  if (!trackLabel || trackLabel.querySelector('[data-audio-action="narrate"]')) return;
  trackLabel.append(
    createAudioTrackActionButton("narrate", trackId, label),
    createAudioTrackActionButton("captions", trackId, label),
  );
}

function updateAudioTrackActionButtons() {
  document.querySelectorAll('[data-audio-action="narrate"]').forEach((button) => {
    const recordingHere = Boolean(state.narrationRecorder && state.narrationTrackId === button.dataset.audioTrackId);
    button.textContent = recordingHere ? "■" : "●";
    button.classList.toggle("recording", recordingHere);
    button.setAttribute("aria-pressed", String(recordingHere));
    button.title = recordingHere ? "Finalizar narração" : "Gravar narração";
    button.setAttribute("aria-label", button.title);
  });
  document.querySelectorAll('[data-audio-action="captions"]').forEach((button) => {
    button.disabled = state.narrationCaptionBusy || Boolean(state.narrationRecorder);
  });
}

function trackIsVisible(kind, trackId) {
  const hiddenTracks = kind === "audio" ? state.hiddenAudioTrackIds : state.hiddenVideoTrackIds;
  return !hiddenTracks.has(trackId);
}

function createTrackVisibilityButton(kind, trackId, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "track-visibility-button";
  const update = () => {
    const visible = trackIsVisible(kind, trackId);
    button.textContent = visible ? "◉" : "○";
    button.title = `${visible ? "Ocultar" : "Exibir"} faixa ${label}`;
    button.setAttribute("aria-label", button.title);
    button.setAttribute("aria-pressed", String(visible));
  };
  update();
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const hiddenTracks = kind === "audio" ? state.hiddenAudioTrackIds : state.hiddenVideoTrackIds;
    if (hiddenTracks.has(trackId)) hiddenTracks.delete(trackId);
    else hiddenTracks.add(trackId);
    update();
    renderMediaTracks();
    saveLocalProject();
    showToast(`${label} ${trackIsVisible(kind, trackId) ? "visível" : "oculta"}.`);
  });
  return button;
}

function clipTrackIsVisible(clip) {
  if (!clip) return false;
  if (clip.type === "sequence") return trackIsVisible("video", "base");
  if (["video", "image"].includes(clip.type)) return trackIsVisible("video", clip.trackId || "base");
  if (clip.type === "audio") return trackIsVisible("audio", clip.trackId || "audio-base");
  return true;
}

function clipOutputVolume(clip) {
  return clipTrackIsVisible(clip) ? clip.volume ?? 1 : 0;
}

function ensureVideoTrack(trackId = null, insertIndex = state.videoTrackOrder.length) {
  if (trackId === "base") return "base";
  if (trackId && state.videoTrackOrder.includes(trackId)) return trackId;
  const id = trackId || crypto.randomUUID();
  state.videoTrackOrder.splice(clamp(insertIndex, 0, state.videoTrackOrder.length), 0, id);
  return id;
}

function visualTrackClips(trackId) {
  return [...state.overlayVideoClips, ...state.imageClips]
    .filter((clip) => (clip.trackId || "base") === trackId);
}

function visualTrackContentEnd(trackId) {
  const clips = trackId === "base"
    ? [...state.sequenceClips, ...visualTrackClips("base")]
    : visualTrackClips(trackId);
  return clips.reduce((maximum, clip) => Math.max(maximum, mediaContentEnd(clip)), 0);
}

function imageCanExtendTrack(clip) {
  if (clip?.type !== "image") return false;
  return clipEffectiveEnd(clip) >= visualTrackContentEnd(clip.trackId || "base") - 0.03;
}

function cleanupEmptyVideoTracks() {
  const usedTracks = new Set([...state.overlayVideoClips, ...state.imageClips]
    .map((clip) => clip.trackId)
    .filter((trackId) => trackId && trackId !== "base"));
  state.videoTrackOrder.filter((id) => !usedTracks.has(id)).forEach((id) => state.hiddenVideoTrackIds.delete(id));
  state.videoTrackOrder = state.videoTrackOrder.filter((id) => usedTracks.has(id));
}

function orderedOverlayVideoClips() {
  const order = new Map([["base", -1], ...state.videoTrackOrder.map((id, index) => [id, index])]);
  return [...state.overlayVideoClips].sort((a, b) => (order.get(a.trackId || "base") ?? 0) - (order.get(b.trackId || "base") ?? 0));
}

function orderedVisualClips() {
  const order = new Map([["base", -1], ...state.videoTrackOrder.map((id, index) => [id, index])]);
  return [...state.overlayVideoClips, ...state.imageClips]
    .sort((a, b) => (order.get(a.trackId || "base") ?? 0) - (order.get(b.trackId || "base") ?? 0));
}

function visualFilesFromTransfer(dataTransfer) {
  return Array.from(dataTransfer?.files || []).filter((file) => (
    file.type.startsWith("video/") || file.type.startsWith("image/") || /\.mov$/i.test(file.name)
  ));
}

function renderVideoTrackStructure() {
  elements.mediaTimeline.querySelectorAll(".dynamic-video-track-row, .video-track-insert-zone").forEach((node) => node.remove());
  const audioRow = elements.audioTrackLane.closest(".media-track-row");
  const fragment = document.createDocumentFragment();

  const appendInsertZone = (insertIndex) => {
    const zone = document.createElement("div");
    zone.className = "video-track-insert-zone";
    zone.dataset.videoInsertIndex = String(insertIndex);
    const spacer = document.createElement("span");
    const target = document.createElement("i");
    target.textContent = "+ nova faixa visual";
    zone.append(spacer, target);
    zone.addEventListener("dragover", (event) => {
      if (!visualFilesFromTransfer(event.dataTransfer).length) return;
      event.preventDefault();
      zone.classList.add("active");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("active"));
    zone.addEventListener("drop", async (event) => {
      const files = visualFilesFromTransfer(event.dataTransfer);
      if (!files.length) return;
      event.preventDefault();
      const trackId = ensureVideoTrack(null, insertIndex);
      await addVisualClips(files, trackId, projectCurrentTime());
    });
    fragment.append(zone);
  };

  appendInsertZone(0);
  state.videoTrackOrder.forEach((trackId, index) => {
    const row = document.createElement("div");
    row.className = "media-track-row dynamic-video-track-row";
    row.classList.toggle("track-hidden", !trackIsVisible("video", trackId));
    const label = document.createElement("span");
    label.append(
      `V${index + 2}`,
      createTrackVisibilityButton("video", trackId, `V${index + 2}`),
      createTrackAddButton(`Adicionar vídeo ou imagem à faixa V${index + 2}`, () => {
        state.pendingVideoTrackId = trackId;
        elements.overlayVideoInput.click();
      }),
    );
    const lane = document.createElement("div");
    lane.className = "media-track-lane dynamic-video-track-lane";
    lane.dataset.videoTrackId = trackId;
    const playhead = document.createElement("i");
    playhead.className = "media-playhead";
    playhead.dataset.mediaPlayhead = "";
    lane.append(playhead);
    lane.addEventListener("dragover", (event) => {
      if (!visualFilesFromTransfer(event.dataTransfer).length) return;
      event.preventDefault();
      lane.classList.add("drop-active");
    });
    lane.addEventListener("dragleave", () => lane.classList.remove("drop-active"));
    lane.addEventListener("drop", async (event) => {
      const files = visualFilesFromTransfer(event.dataTransfer);
      if (!files.length) return;
      event.preventDefault();
      const bounds = lane.getBoundingClientRect();
      const start = clamp((event.clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration();
      await addVisualClips(files, trackId, start);
    });
    row.append(label, lane);
    fragment.append(row);
    appendInsertZone(index + 1);
  });
  audioRow.before(fragment);
}

function ensureAudioTrack(trackId = "audio-base", insertIndex = state.audioTrackOrder.length) {
  if (trackId && state.audioTrackOrder.includes(trackId)) return trackId;
  const id = trackId || crypto.randomUUID();
  state.audioTrackOrder.splice(clamp(insertIndex, 1, state.audioTrackOrder.length), 0, id);
  return id;
}

function cleanupEmptyAudioTracks() {
  const usedTracks = new Set(state.audioClips.map((clip) => clip.trackId || "audio-base"));
  state.audioTrackOrder.slice(1).filter((id) => !usedTracks.has(id)).forEach((id) => state.hiddenAudioTrackIds.delete(id));
  state.audioTrackOrder = ["audio-base", ...state.audioTrackOrder.slice(1).filter((id) => usedTracks.has(id))];
}

function fileIsVideo(file) {
  return Boolean(file && (file.type.startsWith("video/") || /\.(mov|mp4|m4v|webm)$/i.test(file.name)));
}

function fileCanProvideAudio(file) {
  return Boolean(file && (file.type.startsWith("audio/") || fileIsVideo(file)));
}

function audioFilesFromTransfer(dataTransfer) {
  return Array.from(dataTransfer?.files || []).filter(fileCanProvideAudio);
}

function renderAudioTrackStructure() {
  elements.mediaTimeline.querySelectorAll(".dynamic-audio-track-row, .audio-track-insert-zone").forEach((node) => node.remove());
  if (!state.audioTrackOrder.includes("audio-base")) state.audioTrackOrder.unshift("audio-base");
  const baseRow = elements.audioTrackLane.closest(".media-track-row");
  baseRow?.classList.toggle("track-hidden", !trackIsVisible("audio", "audio-base"));
  const fragment = document.createDocumentFragment();

  const appendInsertZone = (insertIndex) => {
    const zone = document.createElement("div");
    zone.className = "audio-track-insert-zone";
    zone.dataset.audioInsertIndex = String(insertIndex);
    const spacer = document.createElement("span");
    const target = document.createElement("i");
    target.textContent = "+ nova faixa de áudio";
    zone.append(spacer, target);
    zone.addEventListener("dragover", (event) => {
      if (!audioFilesFromTransfer(event.dataTransfer).length) return;
      event.preventDefault();
      zone.classList.add("active");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("active"));
    zone.addEventListener("drop", async (event) => {
      const files = audioFilesFromTransfer(event.dataTransfer);
      if (!files.length) return;
      event.preventDefault();
      const trackId = ensureAudioTrack(null, insertIndex);
      await addAudioClips(files, trackId, projectCurrentTime());
    });
    fragment.append(zone);
  };

  appendInsertZone(1);
  state.audioTrackOrder.slice(1).forEach((trackId, offset) => {
    const trackNumber = offset + 2;
    const row = document.createElement("div");
    row.className = "media-track-row dynamic-audio-track-row";
    row.classList.toggle("track-hidden", !trackIsVisible("audio", trackId));
    const label = document.createElement("span");
    label.append(
      `A${trackNumber}`,
      createTrackVisibilityButton("audio", trackId, `A${trackNumber}`),
      createTrackAddButton(`Adicionar áudio ou extrair vídeo na faixa A${trackNumber}`, () => {
        state.pendingAudioTrackId = trackId;
        elements.audioTrackInput.click();
      }),
      createAudioTrackActionButton("narrate", trackId, `A${trackNumber}`),
      createAudioTrackActionButton("captions", trackId, `A${trackNumber}`),
    );
    const lane = document.createElement("div");
    lane.className = "media-track-lane dynamic-audio-track-lane";
    lane.dataset.audioTrackId = trackId;
    const playhead = document.createElement("i");
    playhead.className = "media-playhead";
    playhead.dataset.mediaPlayhead = "";
    lane.append(playhead);
    lane.addEventListener("dragover", (event) => {
      if (!audioFilesFromTransfer(event.dataTransfer).length) return;
      event.preventDefault();
      lane.classList.add("drop-active");
    });
    lane.addEventListener("dragleave", () => lane.classList.remove("drop-active"));
    lane.addEventListener("drop", async (event) => {
      const files = audioFilesFromTransfer(event.dataTransfer);
      if (!files.length) return;
      event.preventDefault();
      const bounds = lane.getBoundingClientRect();
      const start = clamp((event.clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration();
      await addAudioClips(files, trackId, start);
    });
    row.append(label, lane);
    fragment.append(row);
    appendInsertZone(offset + 2);
  });
  baseRow?.after(fragment);
  updateAudioTrackActionButtons();
}

function videoDropTargetAt(clientY) {
  const zones = Array.from(elements.mediaTimeline.querySelectorAll(".video-track-insert-zone"));
  const closestZone = zones
    .map((node) => {
      const bounds = node.getBoundingClientRect();
      return { node, distance: Math.abs(clientY - (bounds.top + bounds.bottom) / 2) };
    })
    .sort((a, b) => a.distance - b.distance)[0];
  if (closestZone?.distance <= 16) {
    return { type: "insert", node: closestZone.node, index: Number(closestZone.node.dataset.videoInsertIndex) || 0 };
  }
  const lane = Array.from(elements.mediaTimeline.querySelectorAll(".sequence-track-lane, .dynamic-video-track-lane")).find((node) => {
    const bounds = node.getBoundingClientRect();
    return clientY >= bounds.top && clientY <= bounds.bottom;
  });
  return lane ? { type: "track", node: lane, trackId: lane.dataset.videoTrackId } : null;
}

function showVideoDropTarget(target) {
  elements.mediaTimeline.querySelectorAll(".video-track-insert-zone.active, .sequence-track-lane.drop-active, .dynamic-video-track-lane.drop-active")
    .forEach((node) => node.classList.remove("active", "drop-active"));
  state.activeVideoDropTarget = target;
  if (target?.type === "insert") target.node.classList.add("active");
  if (target?.type === "track") target.node.classList.add("drop-active");
}

function audioDropTargetAt(clientY) {
  const zones = Array.from(elements.mediaTimeline.querySelectorAll(".audio-track-insert-zone"));
  const closestZone = zones
    .map((node) => {
      const bounds = node.getBoundingClientRect();
      return { node, distance: Math.abs(clientY - (bounds.top + bounds.bottom) / 2) };
    })
    .sort((a, b) => a.distance - b.distance)[0];
  if (closestZone?.distance <= 16) {
    return { type: "insert", node: closestZone.node, index: Number(closestZone.node.dataset.audioInsertIndex) || 1 };
  }
  const lane = Array.from(elements.mediaTimeline.querySelectorAll(".dynamic-audio-track-lane")).find((node) => {
    const bounds = node.getBoundingClientRect();
    return clientY >= bounds.top && clientY <= bounds.bottom;
  });
  return lane ? { type: "track", node: lane, trackId: lane.dataset.audioTrackId } : null;
}

function showAudioDropTarget(target) {
  elements.mediaTimeline.querySelectorAll(".audio-track-insert-zone.active, .dynamic-audio-track-lane.drop-active")
    .forEach((node) => node.classList.remove("active", "drop-active"));
  state.activeAudioDropTarget = target;
  if (target?.type === "insert") target.node.classList.add("active");
  if (target?.type === "track") target.node.classList.add("drop-active");
}

function timelineTimeAtClientX(clientX) {
  const bounds = elements.sequenceTrackLane.getBoundingClientRect();
  return clamp((clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration();
}

let pendingPlayheadSeek = null;
let playheadSeekInFlight = false;

async function flushPlayheadSeek() {
  if (playheadSeekInFlight) return;
  playheadSeekInFlight = true;
  while (pendingPlayheadSeek !== null) {
    const target = pendingPlayheadSeek;
    pendingPlayheadSeek = null;
    await seekProjectTime(target, false).catch(() => {});
  }
  playheadSeekInFlight = false;
}

function queuePlayheadSeek(time) {
  pendingPlayheadSeek = clamp(time, 0, projectDuration());
  flushPlayheadSeek();
}

function attachDraggablePlayhead(container, selector, trackForHandle) {
  container.addEventListener("pointerdown", (event) => {
    const handle = event.target.closest(selector);
    if (!handle || !projectDuration()) return;
    const track = trackForHandle(handle);
    if (!track) return;
    event.preventDefault();
    event.stopPropagation();
    elements.video.pause();
    state.draggingTimelinePlayhead = { pointerId: event.pointerId, handle, track };
    handle.classList.add("dragging");
    handle.setPointerCapture?.(event.pointerId);
    const bounds = track.getBoundingClientRect();
    queuePlayheadSeek(((event.clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration());
  });
  container.addEventListener("pointermove", (event) => {
    const drag = state.draggingTimelinePlayhead;
    if (!drag || drag.pointerId !== event.pointerId || !container.contains(drag.handle)) return;
    event.preventDefault();
    const bounds = drag.track.getBoundingClientRect();
    queuePlayheadSeek(((event.clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration());
  });
  const finish = (event) => {
    const drag = state.draggingTimelinePlayhead;
    if (!drag || drag.pointerId !== event.pointerId || !container.contains(drag.handle)) return;
    const bounds = drag.track.getBoundingClientRect();
    queuePlayheadSeek(((event.clientX - bounds.left) / Math.max(1, bounds.width)) * projectDuration());
    drag.handle.classList.remove("dragging");
    drag.handle.releasePointerCapture?.(event.pointerId);
    state.draggingTimelinePlayhead = null;
  };
  container.addEventListener("pointerup", finish);
  container.addEventListener("pointercancel", finish);
}

attachDraggablePlayhead(elements.cutTrack, "#cutPlayhead", () => elements.cutTrack);
attachDraggablePlayhead(elements.mediaTimeline, "[data-media-playhead]", (handle) => handle.parentElement);

function sourceDurationForClip(clip) {
  if (clip.type === "sequence") return Number(clip.sourceDuration) || Number(clip.file?.duration) || Infinity;
  if (clip.type === "video") return Number(clip.mediaElement?.duration) || Infinity;
  if (clip.type === "audio") return Number(clip.audioElement?.duration) || Infinity;
  return Infinity;
}

function synchronizeLinkedAudioGeometry(videoClip) {
  if (!["sequence", "video"].includes(videoClip.type)) return;
  const visibleStart = videoClip.type === "sequence" ? videoClip.trimStart ?? videoClip.start : videoClip.start;
  const visibleEnd = videoClip.type === "sequence" ? videoClip.trimEnd ?? videoClip.end : videoClip.end;
  state.audioClips
    .filter((audio) => audio.extractedFrom === videoClip.id && audio.linkedSpeed !== false)
    .forEach((audio) => {
      audio.start = visibleStart;
      audio.end = visibleEnd;
      audio.sourceOffset = (videoClip.sourceOffset || 0) + (visibleStart - videoClip.start) * clipPlaybackRate(videoClip);
      audio.sourceSpan = (visibleEnd - visibleStart) * clipPlaybackRate(videoClip);
      audio.playbackRate = clipPlaybackRate(videoClip);
    });
}

function updateSequenceTrimCut(clip, edge, start, end) {
  const existing = state.cuts.find((cut) => cut.trimClipId === clip.id && cut.trimEdge === edge);
  if (end - start < 0.02) {
    if (existing) state.cuts = state.cuts.filter((cut) => cut !== existing);
    return;
  }
  if (existing) {
    existing.start = start;
    existing.end = end;
    return;
  }
  state.cutSequence += 1;
  state.cuts.push({
    id: crypto.randomUUID(),
    start,
    end,
    transition: "cut",
    ripple: false,
    targetKey: "base",
    targetName: "V1",
    trimClipId: clip.id,
    trimEdge: edge,
    sequence: state.cutSequence,
  });
}

function attachClipTrimHandles(block, clip, type, duration, segment = null) {
  const effectiveStart = clip.type === "sequence" ? clip.trimStart ?? clip.start : clip.start;
  const effectiveEnd = clip.type === "sequence" ? clip.trimEnd ?? clip.end : clipEffectiveEnd(clip);
  const displayStart = segment?.start ?? clip.start;
  const displayEnd = segment?.end ?? effectiveEnd;
  const edges = [];
  if (Math.abs(displayStart - effectiveStart) < 0.03) edges.push("start");
  if (Math.abs(displayEnd - effectiveEnd) < 0.03) edges.push("end");

  edges.forEach((edge) => {
    const handle = document.createElement("span");
    handle.className = `clip-trim-handle ${edge}`;
    handle.tabIndex = 0;
    handle.setAttribute("role", "separator");
    handle.setAttribute("aria-label", `${edge === "start" ? "Aparar início" : "Aparar final"} de ${clip.name}`);
    handle.addEventListener("click", (event) => event.stopPropagation());
    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      state.draggingTimelineClip = null;
      state.selectedMediaClipId = clip.id;
      state.selectedMediaSegmentKey = mediaSegmentKey({ start: displayStart, end: displayEnd });
      if (clip.type === "audio" && clip.extractedFrom && clip.linkedSpeed !== false) clip.linkedSpeed = false;
      state.trimmingTimelineClip = {
        clipId: clip.id,
        edge,
        pointerId: event.pointerId,
        startX: event.clientX,
        laneWidth: block.parentElement.clientWidth,
        timelineDuration: duration,
        initialStart: effectiveStart,
        initialEnd: effectiveEnd,
        initialDuration: Number(clip.duration) || clip.end - clip.start,
        initialSourceOffset: Number(clip.sourceOffset) || 0,
        initialSourceSpan: clipSourceSpan(clip),
        canExtendTimeline: imageCanExtendTrack(clip),
      };
      block.classList.add("trimming");
      handle.setPointerCapture?.(event.pointerId);
    });
    handle.addEventListener("pointermove", (event) => {
      const trim = state.trimmingTimelineClip;
      if (!trim || trim.clipId !== clip.id || trim.edge !== edge) return;
      const delta = ((event.clientX - trim.startX) / Math.max(1, trim.laneWidth)) * trim.timelineDuration;
      const rate = clipPlaybackRate(clip);
      const minimumLength = 0.1;

      if (clip.type === "sequence") {
        if (edge === "start") {
          clip.trimStart = clamp(trim.initialStart + delta, clip.start, trim.initialEnd - minimumLength);
          clip.trimInSource = (clip.trimStart - clip.start) * rate;
          updateSequenceTrimCut(clip, "start", clip.start, clip.trimStart);
        } else {
          clip.trimEnd = clamp(trim.initialEnd + delta, trim.initialStart + minimumLength, clip.end);
          clip.trimOutSource = (clip.end - clip.trimEnd) * rate;
          updateSequenceTrimCut(clip, "end", clip.trimEnd, clip.end);
        }
      } else if (type === "image") {
        if (edge === "start") clip.start = clamp(trim.initialStart + delta, 0, trim.initialEnd - minimumLength);
        else {
          const maximumEnd = trim.canExtendTimeline
            ? Math.max(duration, trim.initialEnd + Math.max(0, delta))
            : duration;
          clip.end = clamp(trim.initialEnd + delta, trim.initialStart + minimumLength, maximumEnd);
        }
      } else if (["video", "audio"].includes(type)) {
        if (edge === "start") {
          const minimumStart = Math.max(0, trim.initialStart - trim.initialSourceOffset / rate);
          clip.start = clamp(trim.initialStart + delta, minimumStart, trim.initialEnd - minimumLength);
          const sourceDelta = (clip.start - trim.initialStart) * rate;
          clip.sourceOffset = trim.initialSourceOffset + sourceDelta;
          clip.sourceSpan = trim.initialSourceSpan - sourceDelta;
        } else {
          const sourceDuration = sourceDurationForClip(clip);
          const available = sourceDuration - trim.initialSourceOffset - trim.initialSourceSpan;
          const maximumEnd = Math.min(duration, trim.initialEnd + (Number.isFinite(available) ? Math.max(0, available / rate) : duration));
          clip.end = clamp(trim.initialEnd + delta, trim.initialStart + minimumLength, maximumEnd);
          clip.sourceSpan = trim.initialSourceSpan + (clip.end - trim.initialEnd) * rate;
        }
      }
      synchronizeLinkedAudioGeometry(clip);
      const start = clip.type === "sequence" ? clip.trimStart ?? clip.start : clip.start;
      const end = clip.type === "sequence" ? clip.trimEnd ?? clip.end : clip.end;
      block.style.left = `${clamp(start / Math.max(0.1, projectDuration())) * 100}%`;
      block.style.width = `${Math.max(1.5, clamp((end - start) / Math.max(0.1, projectDuration())) * 100)}%`;
      elements.mediaClipStart.value = start.toFixed(1);
      elements.mediaClipEnd.value = end.toFixed(1);
      updateMediaPreview();
    });
    const finishTrim = (event) => {
      if (state.trimmingTimelineClip?.clipId !== clip.id) return;
      state.trimmingTimelineClip = null;
      block.classList.remove("trimming");
      if (handle.hasPointerCapture?.(event.pointerId)) handle.releasePointerCapture(event.pointerId);
      refreshSequenceTiming();
      renderMediaTracks();
      renderCuts();
      const duration = projectDuration();
      if (projectCurrentTime() > duration) {
        seekProjectTime(Math.max(0, duration - 0.001), false).catch(() => updatePlayer());
      } else {
        updatePlayer();
      }
      saveLocalProject();
      showToast(`${edge === "start" ? "Início" : "Final"} aparado. Arraste de volta para recuperar.`);
    };
    handle.addEventListener("pointerup", finishTrim);
    handle.addEventListener("pointercancel", finishTrim);
    block.append(handle);
  });
}

function decorateTimelineClipBlock(block, clip, labelText) {
  if (clip.timelineFrames?.length) {
    const strip = document.createElement("span");
    strip.className = "timeline-frame-strip";
    clip.timelineFrames.forEach((frame) => {
      const thumbnail = document.createElement("i");
      thumbnail.style.backgroundImage = `url("${frame}")`;
      strip.append(thumbnail);
    });
    block.append(strip);
  } else if (clip.thumbnail) {
    block.style.backgroundImage = `url("${clip.thumbnail}")`;
  }
  const label = document.createElement("span");
  label.className = "media-clip-label";
  label.textContent = labelText;
  block.append(label);
}

function mediaClipBlock(clip, type, duration, segment = null) {
  const displayStart = segment?.start ?? clip.start;
  const displayEnd = segment?.end ?? clip.end;
  const segmentKey = mediaSegmentKey({ start: displayStart, end: displayEnd });
  const block = document.createElement("button");
  block.type = "button";
  const selected = clip.id === state.selectedMediaClipId
    && (!state.selectedMediaSegmentKey || state.selectedMediaSegmentKey === segmentKey);
  block.className = `media-clip-block ${type}${selected ? " selected" : ""}`;
  block.classList.toggle("split-start", Boolean(clip.splitFrom));
  block.dataset.clipId = clip.id;
  decorateTimelineClipBlock(block, clip, clip.name);
  block.style.left = `${clamp(displayStart / duration) * 100}%`;
  block.style.width = `${Math.max(1.5, clamp((displayEnd - displayStart) / duration) * 100)}%`;
  block.title = `${clip.name}: ${formatClock(displayStart)} a ${formatClock(displayEnd)}`;
  block.addEventListener("click", () => selectMediaClip(clip.id, true, segmentKey));
  block.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    const lane = block.parentElement;
    state.selectedMediaClipId = clip.id;
    state.selectedMediaSegmentKey = segmentKey;
    activateToolTab("media");
    elements.mediaTimeline.querySelectorAll(".media-clip-block").forEach((item) => item.classList.toggle("selected", item === block));
    updateMediaInspector();
    updateMediaPreview();
    state.draggingTimelineClip = {
      clipId: clip.id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      initialStart: clip.start,
      duration: clip.end - clip.start,
      laneWidth: lane.clientWidth,
      block,
      moved: false,
      magneticCutId: null,
    };
    if (["video", "image"].includes(type)) elements.mediaTimeline.classList.add("dragging-video-clip");
    if (type === "audio") elements.mediaTimeline.classList.add("dragging-audio-clip");
    block.setPointerCapture?.(event.pointerId);
  });
  block.addEventListener("pointermove", (event) => {
    const drag = state.draggingTimelineClip;
    if (!drag || drag.clipId !== clip.id) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    drag.moved ||= Math.hypot(deltaX, deltaY) > 5;
    if (["video", "image", "audio"].includes(type) && segment && Math.abs(deltaX) > Math.abs(deltaY) + 3) {
      if (["video", "image"].includes(type)) showVideoDropTarget(null);
      else showAudioDropTarget(null);
      const deltaTime = (deltaX / Math.max(1, drag.laneWidth)) * duration;
      const adjacentCut = state.cuts.find((cut) => {
        if (cut.ripple !== false || (cut.targetKey || "base") !== cutKeyForClip(clip)) return false;
        return Math.abs(cut.end - segment.start) < 0.03 || Math.abs(cut.start - segment.end) < 0.03;
      });
      let snapX = deltaX;
      let magneticCutId = null;
      if (adjacentCut) {
        const gapDuration = adjacentCut.end - adjacentCut.start;
        const movingAfterGap = Math.abs(adjacentCut.end - segment.start) < 0.03;
        const requiredDelta = movingAfterGap ? -gapDuration : gapDuration;
        const threshold = Math.max(0.18, (16 / Math.max(1, drag.laneWidth)) * duration);
        if (Math.abs(deltaTime - requiredDelta) <= threshold) {
          snapX = (requiredDelta / duration) * drag.laneWidth;
          magneticCutId = adjacentCut.id;
        }
      }
      if (magneticCutId !== drag.magneticCutId && magneticCutId) navigator.vibrate?.(12);
      drag.magneticCutId = magneticCutId;
      block.classList.toggle("magnetic-snap", Boolean(magneticCutId));
      elements.cutLayer.querySelectorAll(".cut-region").forEach((region) => {
        region.classList.toggle("magnetic-target", region.dataset.cutId === magneticCutId);
      });
      block.style.transform = `translateX(${snapX}px)`;
      return;
    }
    drag.magneticCutId = null;
    elements.cutLayer.querySelectorAll(".cut-region.magnetic-target")
      .forEach((region) => region.classList.remove("magnetic-target"));
    const delta = ((event.clientX - drag.startX) / Math.max(1, drag.laneWidth)) * duration;
    if (!segment) {
      let nextStart = clamp(drag.initialStart + delta, 0, Math.max(0, duration - drag.duration));
      if (elements.magneticCuts.checked && ["video", "image", "audio"].includes(type)) {
        const siblings = type === "audio"
          ? state.audioClips.filter((item) => item !== clip && (item.trackId || "audio-base") === (clip.trackId || "audio-base"))
          : visualTrackClips(clip.trackId || "base").filter((item) => item !== clip);
        const boundaries = [0, duration, ...siblings.flatMap((item) => [item.start, item.end])];
        const threshold = Math.max(0.08, (14 / Math.max(1, drag.laneWidth)) * duration);
        const candidates = boundaries.flatMap((boundary) => [
          { start: boundary, distance: Math.abs(nextStart - boundary) },
          { start: boundary - drag.duration, distance: Math.abs(nextStart + drag.duration - boundary) },
        ]).sort((a, b) => a.distance - b.distance);
        if (candidates[0]?.distance <= threshold) nextStart = clamp(candidates[0].start, 0, Math.max(0, duration - drag.duration));
        block.classList.toggle("magnetic-snap", candidates[0]?.distance <= threshold);
      }
      clip.start = nextStart;
      clip.end = clip.start + drag.duration;
      block.style.left = `${clamp(clip.start / duration) * 100}%`;
    }
    if (["video", "image"].includes(type) && drag.moved) {
      block.style.transform = `translateY(${deltaY}px)`;
      showVideoDropTarget(videoDropTargetAt(event.clientY));
    }
    if (type === "audio" && drag.moved && Math.abs(deltaY) > 5) {
      block.style.transform = `translateY(${deltaY}px)`;
      showAudioDropTarget(audioDropTargetAt(event.clientY));
    }
    elements.mediaClipStart.value = clip.start.toFixed(1);
    elements.mediaClipEnd.value = clip.end.toFixed(1);
    updateMediaPreview();
  });
  const finishDrag = (event) => {
    const drag = state.draggingTimelineClip;
    if (drag?.clipId !== clip.id) return;
    const dropTarget = ["video", "image"].includes(type)
      ? state.activeVideoDropTarget
      : type === "audio"
        ? state.activeAudioDropTarget
        : null;
    const magneticCutId = drag.magneticCutId;
    state.draggingTimelineClip = null;
    block.style.transform = "";
    block.classList.remove("magnetic-snap");
    elements.cutLayer.querySelectorAll(".cut-region.magnetic-target")
      .forEach((region) => region.classList.remove("magnetic-target"));
    elements.mediaTimeline.classList.remove("dragging-video-clip");
    elements.mediaTimeline.classList.remove("dragging-audio-clip");
    showVideoDropTarget(null);
    showAudioDropTarget(null);
    if (block.hasPointerCapture?.(event.pointerId)) block.releasePointerCapture(event.pointerId);
    if (magneticCutId) {
      joinCutMagnetically(magneticCutId);
    } else if (dropTarget?.type === "insert") {
      clip.trackId = type === "audio"
        ? ensureAudioTrack(null, dropTarget.index)
        : ensureVideoTrack(null, dropTarget.index);
      if (type === "audio") cleanupEmptyAudioTracks();
      else cleanupEmptyVideoTracks();
      showToast(`Nova faixa de ${type === "audio" ? "áudio" : "mídia visual"} criada.`);
    } else if (dropTarget?.type === "track" && dropTarget.trackId !== clip.trackId) {
      clip.trackId = dropTarget.trackId;
      if (type === "audio") cleanupEmptyAudioTracks();
      else cleanupEmptyVideoTracks();
      showToast("Clipe movido para outra faixa.");
    } else if (!drag.moved) {
      const current = projectCurrentTime();
      if (current < clip.start - 0.01 || current >= clipEffectiveEnd(clip) - 0.01) {
        seekProjectTime(Math.min(clipEffectiveEnd(clip) - 0.001, clip.start + 0.02), false).catch(() => {});
      }
    }
    renderMediaTracks();
    updatePlayer();
    saveLocalProject();
  };
  block.addEventListener("pointerup", finishDrag);
  block.addEventListener("pointercancel", finishDrag);
  attachClipTrimHandles(block, clip, type, duration, segment);
  return block;
}

async function promoteSequenceClipToVideoTrack(clip, dropTarget, dropTime, segmentStart = clip.start, segmentEnd = clip.end) {
  const sourceIndex = state.sequenceClips.findIndex((item) => item.id === clip.id);
  if (sourceIndex < 0) return;
  const mediaElement = await loadVideoElement(clip.url, true);
  const audioElement = createClipAudioElement(clip.url);
  const sourceStart = segmentStart;
  const sourceEnd = segmentEnd;
  const trackId = dropTarget.type === "insert"
    ? ensureVideoTrack(null, dropTarget.index)
    : dropTarget.trackId;
  const duration = projectDuration();
  const start = clamp(dropTime, 0, Math.max(0, duration - 0.1));
  const overlayClip = {
    ...clip,
    id: crypto.randomUUID(),
    type: "video",
    mediaElement,
    audioElement,
    trackId,
    start,
    end: Math.min(duration, start + (sourceEnd - sourceStart)),
    sourceOffset: Math.max(0, sourceStart - clip.start),
    x: 50,
    y: 50,
    size: fittedOverlaySize(mediaElement),
    opacity: 1,
    animation: "none",
    segmentFades: {},
    sharedUrl: true,
    sourceSequenceClipId: clip.id,
  };
  state.overlayVideoClips.push(overlayClip);
  state.selectedMediaClipId = overlayClip.id;
  const alreadyEmpty = state.cuts.some((cut) => isBaseCut(cut) && cut.ripple === false && sourceStart >= cut.start && sourceEnd <= cut.end);
  if (!alreadyEmpty) {
    state.cutSequence += 1;
    state.cuts.push({
      id: crypto.randomUUID(),
      start: sourceStart,
      end: sourceEnd,
      transition: "cut",
      ripple: false,
      targetKey: "base",
      targetName: "V1",
      layerMove: true,
      sequence: state.cutSequence,
    });
    state.cuts.sort((first, second) => first.start - second.start);
  }
  cleanupEmptyVideoTracks();
  renderMediaTracks();
  renderCues();
  renderCuts();
  updatePlayer();
  saveLocalProject();
  showToast(`Clipe movido visualmente para V${state.videoTrackOrder.indexOf(trackId) + 2}.`);
}

function sequenceClipBlock(clip, index, duration, segment = { start: clip.start, end: clip.end }) {
  const segmentKey = mediaSegmentKey(segment);
  const block = document.createElement("button");
  block.type = "button";
  const selected = clip.id === state.selectedMediaClipId
    && (!state.selectedMediaSegmentKey || state.selectedMediaSegmentKey === segmentKey);
  block.className = `media-clip-block sequence${selected ? " selected" : ""}`;
  block.classList.toggle("split-start", Boolean(clip.splitFrom));
  block.dataset.clipId = clip.id;
  block.style.left = `${clamp(segment.start / duration) * 100}%`;
  block.style.width = `${Math.max(1.5, clamp((segment.end - segment.start) / duration) * 100)}%`;
  decorateTimelineClipBlock(block, clip, `${index + 1} · ${clip.name}`);
  block.title = `${clip.name} · volume ${Math.round((clip.volume ?? 1) * 100)}%`;
  const selectClip = () => {
    selectMediaClip(clip.id, true, segmentKey);
  };
  block.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    state.draggingTimelineClip = {
      clipId: clip.id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      laneWidth: elements.sequenceTrackLane.clientWidth,
      moved: false,
      magneticCutId: null,
      block,
    };
    state.selectedMediaClipId = clip.id;
    state.selectedMediaSegmentKey = segmentKey;
    elements.mediaTimeline.classList.add("dragging-video-clip");
    block.setPointerCapture?.(event.pointerId);
  });
  block.addEventListener("pointermove", (event) => {
    const drag = state.draggingTimelineClip;
    if (!drag || drag.clipId !== clip.id) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    drag.moved ||= Math.hypot(deltaX, deltaY) > 5;
    if (!drag.moved) return;
    if (Math.abs(deltaX) > Math.abs(deltaY) + 3) {
      showVideoDropTarget(null);
      const deltaTime = (deltaX / Math.max(1, drag.laneWidth)) * duration;
      const adjacentCut = state.cuts.find((cut) => {
        if (!isBaseCut(cut) || cut.ripple !== false) return false;
        return Math.abs(cut.end - segment.start) < 0.03 || Math.abs(cut.start - segment.end) < 0.03;
      });
      let snapX = deltaX;
      let magneticCutId = null;
      if (adjacentCut) {
        const gapDuration = adjacentCut.end - adjacentCut.start;
        const movingAfterGap = Math.abs(adjacentCut.end - segment.start) < 0.03;
        const requiredDelta = movingAfterGap ? -gapDuration : gapDuration;
        const threshold = Math.max(0.18, (16 / Math.max(1, drag.laneWidth)) * duration);
        if (Math.abs(deltaTime - requiredDelta) <= threshold) {
          snapX = (requiredDelta / duration) * drag.laneWidth;
          magneticCutId = adjacentCut.id;
        }
      }
      if (magneticCutId !== drag.magneticCutId && magneticCutId) navigator.vibrate?.(12);
      drag.magneticCutId = magneticCutId;
      block.classList.toggle("magnetic-snap", Boolean(magneticCutId));
      elements.cutLayer.querySelectorAll(".cut-region").forEach((region) => {
        region.classList.toggle("magnetic-target", region.dataset.cutId === magneticCutId);
      });
      block.style.transform = `translateX(${snapX}px)`;
      drag.horizontal = true;
      return;
    }
    drag.magneticCutId = null;
    block.classList.remove("magnetic-snap");
    elements.cutLayer.querySelectorAll(".cut-region.magnetic-target")
      .forEach((region) => region.classList.remove("magnetic-target"));
    block.style.transform = `translateY(${deltaY}px)`;
    showVideoDropTarget(videoDropTargetAt(event.clientY));
  });
  const finishDrag = (event) => {
    const drag = state.draggingTimelineClip;
    if (!drag || drag.clipId !== clip.id) return;
    const dropTarget = state.activeVideoDropTarget;
    const dropTime = timelineTimeAtClientX(event.clientX);
    const magneticCutId = drag.magneticCutId;
    state.draggingTimelineClip = null;
    block.style.transform = "";
    block.classList.remove("magnetic-snap");
    elements.cutLayer.querySelectorAll(".cut-region.magnetic-target")
      .forEach((region) => region.classList.remove("magnetic-target"));
    elements.mediaTimeline.classList.remove("dragging-video-clip");
    showVideoDropTarget(null);
    if (block.hasPointerCapture?.(event.pointerId)) block.releasePointerCapture(event.pointerId);
    if (magneticCutId) {
      joinCutMagnetically(magneticCutId);
    } else if (drag.moved && dropTarget) {
      promoteSequenceClipToVideoTrack(clip, dropTarget, dropTime, segment.start, segment.end)
        .catch((error) => showToast(error.message));
    } else if (drag.moved && drag.horizontal) {
      const laneBounds = elements.sequenceTrackLane.getBoundingClientRect();
      const oldIndex = state.sequenceClips.findIndex((item) => item.id === clip.id);
      const targetIndex = clamp(
        Math.floor(((event.clientX - laneBounds.left) / Math.max(1, laneBounds.width)) * state.sequenceClips.length),
        0,
        state.sequenceClips.length - 1,
      );
      state.sequenceClips.splice(oldIndex, 1);
      state.sequenceClips.splice(targetIndex, 0, clip);
      refreshSequenceTiming();
      renderMediaTracks();
      seekProjectTime(clip.start).catch(() => {});
      saveLocalProject();
      showToast("Parte movida na sequência.");
    } else if (!drag.moved) {
      selectClip();
    }
  };
  block.addEventListener("pointerup", finishDrag);
  block.addEventListener("pointercancel", finishDrag);
  attachClipTrimHandles(block, clip, "sequence", duration, segment);
  return block;
}

function visibleSequenceSegments(clip) {
  const gaps = state.cuts
    .filter((cut) => isBaseCut(cut) && cut.ripple === false && cut.start < clip.end && cut.end > clip.start)
    .sort((a, b) => a.start - b.start);
  const segments = [];
  let cursor = clip.start;
  gaps.forEach((gap) => {
    const start = clamp(gap.start, clip.start, clip.end);
    const end = clamp(gap.end, start, clip.end);
    if (start - cursor >= 0.05) segments.push({ start: cursor, end: start });
    cursor = Math.max(cursor, end);
  });
  if (clip.end - cursor >= 0.05) segments.push({ start: cursor, end: clip.end });
  return segments;
}

function visibleTrackClipSegments(clip) {
  const gaps = state.cuts
    .filter((cut) => cut.ripple === false && (cut.targetKey || "base") === cutKeyForClip(clip) && cut.start < clip.end && cut.end > clip.start)
    .sort((a, b) => a.start - b.start);
  if (!gaps.length) return null;
  const segments = [];
  let cursor = clip.start;
  gaps.forEach((gap) => {
    const start = clamp(gap.start, clip.start, clip.end);
    const end = clamp(gap.end, start, clip.end);
    if (start - cursor >= 0.05) segments.push({ start: cursor, end: start });
    cursor = Math.max(cursor, end);
  });
  if (clip.end - cursor >= 0.05) segments.push({ start: cursor, end: clip.end });
  return segments;
}

function appendTrackGap(lane, cut, duration) {
  if (cut.layerMove) return;
  const gap = document.createElement("span");
  gap.className = "base-track-gap";
  gap.style.left = `${clamp(cut.start / duration) * 100}%`;
  gap.style.width = `${clamp((cut.end - cut.start) / duration) * 100}%`;
  gap.textContent = "vazio";
  gap.title = `${cut.targetName || "Faixa"}: espaço mantido de ${formatClock(cut.start)} a ${formatClock(cut.end)}`;
  lane.append(gap);
  const choose = document.createElement("button");
  choose.type = "button";
  choose.className = "cut-point join-indicator gap-transition-indicator";
  choose.style.left = `${clamp(cut.start / duration) * 100}%`;
  choose.textContent = "◇";
  choose.title = "Unir e escolher transição";
  choose.addEventListener("click", () => {
    cut.ripple = true;
    cut.transition = "cut";
    renderCuts();
    renderMediaTracks();
    saveLocalProject();
    const anchor = elements.mediaTimeline.querySelector(`.join-indicator[data-cut-id="${cut.id}"]`);
    if (anchor) openCutTransitionMenu(cut, anchor);
  });
  lane.append(choose);
}

function appendContextualTrackGap(lane, start, end, duration) {
  if (!lane || end - start < 0.05) return;
  const gap = document.createElement("span");
  gap.className = "video-context-gap";
  gap.style.left = `${clamp(start / duration) * 100}%`;
  gap.style.width = `${clamp((end - start) / duration) * 100}%`;
  gap.title = `Sem vídeo nesta faixa · ${formatClock(start)}–${formatClock(end)}`;
  lane.prepend(gap);
}

function renderContextualVideoGaps(duration) {
  const allVideoClips = [
    ...state.sequenceClips.map((clip) => ({ ...clip, trackId: "base" })),
    ...state.overlayVideoClips,
    ...state.imageClips,
  ];
  const globalEnd = duration;
  state.videoTrackOrder.forEach((trackId) => {
    const lane = elements.mediaTimeline.querySelector(`[data-video-track-id="${trackId}"]`);
    const clips = visualTrackClips(trackId)
      .sort((first, second) => first.start - second.start);
    if (!lane || !clips.length) return;
    for (let index = 1; index < clips.length; index += 1) {
      appendContextualTrackGap(lane, clipEffectiveEnd(clips[index - 1]), clips[index].start, duration);
    }
    const lastEnd = Math.min(duration, mediaContentEnd(clips.at(-1)));
    const anotherTrackContinues = allVideoClips.some((clip) => (
      clip.trackId !== trackId && mediaContentEnd(clip) > lastEnd + 0.05
    ));
    if (anotherTrackContinues) appendContextualTrackGap(lane, lastEnd, globalEnd, duration);
  });
}

function appendTrackJoinIndicator(lane, cut, duration) {
  const point = document.createElement("button");
  point.type = "button";
  point.className = "cut-point join-indicator track-join-indicator";
  point.style.left = `${clamp(cut.start / duration) * 100}%`;
  point.dataset.cutId = cut.id;
  point.textContent = "◇";
  point.title = `${cut.targetName || "Faixa"}: escolher transição`;
  point.setAttribute("aria-label", `Escolher transição da junção em ${cut.targetName || "faixa"}`);
  point.addEventListener("click", () => openCutTransitionMenu(cut, point));
  point.addEventListener("dragover", (event) => {
    event.preventDefault();
    point.classList.add("drag-over");
  });
  point.addEventListener("dragleave", () => point.classList.remove("drag-over"));
  point.addEventListener("drop", (event) => {
    event.preventDefault();
    event.stopPropagation();
    point.classList.remove("drag-over");
    applyTransitionToCut(cut.id, event.dataTransfer.getData("text/video-transition") || state.selectedVideoTransition);
  });
  lane.append(point);
}

function syncTimelineJunctions() {
  const desired = [];
  const addJunction = (from, to, targetKey, targetName, time) => {
    if (!from || !to || Math.abs(time - to.start) > 0.06) return;
    desired.push({
      key: `${targetKey}:${from.id}:${to.id}`,
      fromClipId: from.id,
      toClipId: to.id,
      targetKey,
      targetName,
      time,
    });
  };

  const baseClips = [...state.sequenceClips, ...visualTrackClips("base")]
    .sort((first, second) => first.start - second.start);
  for (let index = 0; index < baseClips.length - 1; index += 1) {
    const from = baseClips[index];
    const to = baseClips[index + 1];
    addJunction(from, to, "base", "V1", mediaContentEnd(from));
  }

  state.videoTrackOrder.forEach((trackId, trackIndex) => {
    const clips = visualTrackClips(trackId)
      .sort((first, second) => first.start - second.start);
    for (let index = 0; index < clips.length - 1; index += 1) {
      const from = clips[index];
      const to = clips[index + 1];
      addJunction(from, to, `video:${trackId}`, `V${trackIndex + 2}`, clipEffectiveEnd(from));
    }
  });

  const desiredKeys = new Set(desired.map((item) => item.key));
  state.cuts = state.cuts.filter((cut) => !cut.junction || desiredKeys.has(cut.junctionKey));
  desired.forEach((item) => {
    let cut = state.cuts.find((candidate) => candidate.junction && candidate.junctionKey === item.key);
    if (!cut) {
      cut = {
        id: crypto.randomUUID(),
        junction: true,
        junctionKey: item.key,
        transition: "cut",
        ripple: true,
        sequence: 0,
      };
      state.cuts.push(cut);
    }
    Object.assign(cut, {
      start: item.time,
      end: item.time,
      fromClipId: item.fromClipId,
      toClipId: item.toClipId,
      targetKey: item.targetKey,
      targetName: item.targetName,
    });
  });
  state.cuts.sort((first, second) => first.start - second.start);
}

function renderMediaTracks() {
  const duration = Math.max(0.1, projectDuration() || 1);
  refreshSequenceTiming();
  syncTimelineJunctions();
  const selectedClip = selectedMediaClip();
  if (selectedClip && ["audio", "video", "image", "sequence"].includes(selectedClip.type)) {
    state.selectedMediaSegmentKey = mediaSegmentKey(selectedSegmentForClip(selectedClip));
  }
  renderVideoTrackStructure();
  renderAudioTrackStructure();
  elements.sequenceTrackLane.closest(".media-track-row")
    ?.classList.toggle("track-hidden", !trackIsVisible("video", "base"));
  elements.sequenceTrackLane.querySelectorAll(".media-clip-block, .base-track-gap, .video-context-gap, .join-indicator").forEach((block) => block.remove());
  elements.mediaTimeline.querySelectorAll(".dynamic-video-track-lane")
    .forEach((lane) => lane.querySelectorAll(".media-clip-block, .base-track-gap, .video-context-gap, .join-indicator").forEach((block) => block.remove()));
  elements.mediaTimeline.querySelectorAll(".dynamic-audio-track-lane")
    .forEach((lane) => lane.querySelectorAll(".media-clip-block, .base-track-gap, .join-indicator").forEach((block) => block.remove()));
  state.sequenceClips.forEach((clip, index) => {
    visibleSequenceSegments(clip).forEach((segment) => {
      elements.sequenceTrackLane.append(sequenceClipBlock(clip, index, duration, segment));
    });
  });
  visualTrackClips("base").forEach((clip) => {
    const segments = visibleTrackClipSegments(clip);
    if (segments) segments.forEach((segment) => elements.sequenceTrackLane.append(mediaClipBlock(clip, clip.type, duration, segment)));
    else elements.sequenceTrackLane.append(mediaClipBlock(clip, clip.type, duration));
  });
  state.cuts.filter((cut) => isBaseCut(cut) && cut.ripple === false && !cut.layerMove)
    .forEach((cut) => appendTrackGap(elements.sequenceTrackLane, cut, duration));
  state.cuts.filter((cut) => isBaseCut(cut) && cut.ripple !== false && !cut.layerMove)
    .forEach((cut) => appendTrackJoinIndicator(elements.sequenceTrackLane, cut, duration));
  state.videoTrackOrder.forEach((trackId) => {
    const lane = elements.mediaTimeline.querySelector(`[data-video-track-id="${trackId}"]`);
    visualTrackClips(trackId).forEach((clip) => {
      const segments = visibleTrackClipSegments(clip);
      if (segments) segments.forEach((segment) => lane?.append(mediaClipBlock(clip, clip.type, duration, segment)));
      else lane?.append(mediaClipBlock(clip, clip.type, duration));
    });
    state.cuts.filter((cut) => cut.ripple === false && !cut.layerMove && (cut.targetKey || "base") === `video:${trackId}`)
      .forEach((cut) => lane && appendTrackGap(lane, cut, duration));
    state.cuts.filter((cut) => cut.ripple !== false && !cut.layerMove && cut.targetKey === `video:${trackId}`)
      .forEach((cut) => lane && appendTrackJoinIndicator(lane, cut, duration));
  });
  renderContextualVideoGaps(duration);
  state.audioTrackOrder.forEach((trackId) => {
    const lane = elements.mediaTimeline.querySelector(`[data-audio-track-id="${trackId}"]`);
    state.audioClips.filter((clip) => (clip.trackId || "audio-base") === trackId).forEach((clip) => {
      const segments = visibleTrackClipSegments(clip);
      if (segments) segments.forEach((segment) => lane?.append(mediaClipBlock(clip, "audio", duration, segment)));
      else lane?.append(mediaClipBlock(clip, "audio", duration));
      state.cuts.filter((cut) => cut.ripple === false && cut.targetKey === cutKeyForClip(clip))
        .forEach((cut) => lane && appendTrackGap(lane, cut, duration));
      state.cuts.filter((cut) => cut.ripple !== false && cut.targetKey === cutKeyForClip(clip))
        .forEach((cut) => lane && appendTrackJoinIndicator(lane, cut, duration));
    });
  });
  updateMediaInspector();
  updateLutControls();
  updateMediaPreview();
}

function selectMediaClip(id, openMediaTab = false, segmentKey = null) {
  state.selectedMediaClipId = id;
  const clip = allMediaClips().find((item) => item.id === id);
  const fallbackSegment = clip ? editableSegmentsForClip(clip)
    .find((item) => projectCurrentTime() >= item.start && projectCurrentTime() < item.end) : null;
  state.selectedMediaSegmentKey = segmentKey || (fallbackSegment ? mediaSegmentKey(fallbackSegment) : null);
  if (openMediaTab) {
    elements.stage.classList.remove("tools-collapsed");
    activateToolTab("media");
  }
  updateLutControls();
  drawLutPreview();
  renderMediaTracks();
}

function updateMediaInspector() {
  const clip = selectedMediaClip();
  elements.mediaInspector.hidden = !clip;
  elements.mediaInspectorEmpty.hidden = Boolean(clip);
  if (!clip) {
    updatePropertiesPanel();
    return;
  }
  elements.mediaInspectorName.textContent = clip.name;
  const inspectorStart = clip.type === "sequence" ? clip.trimStart ?? clip.start : clip.start;
  const inspectorEnd = clip.type === "sequence" ? clip.trimEnd ?? clip.end : clip.end;
  elements.mediaClipStart.value = inspectorStart.toFixed(1);
  elements.mediaClipEnd.value = inspectorEnd.toFixed(1);
  const isOverlay = clip.type === "image" || clip.type === "video";
  const hasVolume = clip.type === "audio" || clip.type === "video" || clip.type === "sequence";
  const hasSpeed = hasVolume;
  const hasFade = hasVolume;
  const isVideo = clip.type === "video" || clip.type === "sequence";
  elements.mediaClipStart.disabled = clip.type === "sequence";
  elements.mediaClipEnd.disabled = clip.type === "sequence";
  elements.overlayInspectorControls.forEach((control) => (control.hidden = !isOverlay));
  elements.volumeInspectorControls.forEach((control) => (control.hidden = !hasVolume));
  elements.speedInspectorControls.forEach((control) => (control.hidden = !hasSpeed));
  elements.fadeInspectorControls.forEach((control) => (control.hidden = !hasFade));
  elements.videoInspectorControls.forEach((control) => (control.hidden = !isVideo));
  elements.cutSelectedAudioButton.hidden = clip.type !== "audio";
  elements.splitSelectedAudioButton.hidden = clip.type !== "audio";
  elements.deleteMediaClipButton.disabled = false;
  elements.toggleAudioLinkButton.hidden = !(clip.type === "audio" && clip.extractedFrom);
  if (!elements.toggleAudioLinkButton.hidden) {
    const linked = clip.linkedSpeed !== false;
    elements.toggleAudioLinkButton.setAttribute("aria-pressed", String(linked));
    elements.toggleAudioLinkButton.lastElementChild.textContent = linked ? "Áudio vinculado" : "Áudio desvinculado";
  }
  if (isOverlay) {
    elements.mediaClipSize.value = String(clip.size);
    elements.mediaClipSizeValue.value = `${Math.round(clip.size)}%`;
    elements.mediaClipOpacity.value = String(Math.round(clip.opacity * 100));
    elements.mediaClipOpacityValue.value = `${Math.round(clip.opacity * 100)}%`;
    elements.mediaClipAnimation.value = clip.animation;
  }
  if (hasVolume) {
    elements.mediaClipVolume.value = String(Math.round(clip.volume * 100));
    elements.mediaClipVolumeValue.value = `${Math.round(clip.volume * 100)}%`;
  }
  if (hasSpeed) elements.mediaClipSpeed.value = String(clipPlaybackRate(clip));
  if (hasFade) {
    const segment = selectedSegmentForClip(clip);
    state.selectedMediaSegmentKey = mediaSegmentKey(segment);
    const settings = segmentFadeSettings(clip, segment);
    const maximum = Math.max(0, Math.min(5, (segment.end - segment.start) / 2));
    settings.fadeIn = clamp(Number(settings.fadeIn) || 0, 0, maximum);
    settings.fadeOut = clamp(Number(settings.fadeOut) || 0, 0, maximum);
    elements.mediaFadeIn.max = String(maximum);
    elements.mediaFadeOut.max = String(maximum);
    elements.mediaFadeIn.value = String(settings.fadeIn);
    elements.mediaFadeOut.value = String(settings.fadeOut);
    elements.mediaFadeInValue.value = `${settings.fadeIn.toFixed(1).replace(".", ",")} s`;
    elements.mediaFadeOutValue.value = `${settings.fadeOut.toFixed(1).replace(".", ",")} s`;
  }
  updateCutToolContext();
  updatePropertiesPanel();
}

function loadImageElement(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Não foi possível abrir a imagem."));
    image.src = url;
  });
}

function loadVideoElement(url, muted = false) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.playsInline = true;
    video.muted = muted;
    video.addEventListener("loadedmetadata", () => resolve(video), { once: true });
    video.addEventListener("error", () => reject(new Error("Não foi possível abrir este vídeo.")), { once: true });
    video.src = url;
  });
}

function createClipAudioElement(url) {
  const audio = new Audio(url);
  audio.preload = "metadata";
  audio.playsInline = true;
  audio.muted = elements.video.muted;
  return audio;
}

async function createVideoThumbnail(video) {
  if (video.readyState < 2) {
    await new Promise((resolve) => {
      video.addEventListener("loadeddata", resolve, { once: true });
      setTimeout(resolve, 1500);
    });
  }
  if (!video.videoWidth || !video.videoHeight || video.readyState < 2) return null;
  const canvas = document.createElement("canvas");
  canvas.width = 160;
  canvas.height = 90;
  const context = srgb2dContext(canvas);
  const scale = Math.max(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
  const width = video.videoWidth * scale;
  const height = video.videoHeight * scale;
  context.drawImage(video, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
  return canvas.toDataURL("image/jpeg", 0.68);
}

async function createTimelineFrames(clip) {
  if (!clip?.url || clip.timelineFrames?.length || clip.timelineFramesLoading || !["sequence", "video"].includes(clip.type)) return;
  clip.timelineFramesLoading = true;
  let probe = null;
  try {
    probe = await loadVideoElement(clip.url, true);
    const duration = Math.max(0.1, Number(probe.duration) || Number(clip.sourceDuration) || clipTimelineSpan(clip));
    const frameCount = isIOSDevice() ? 6 : 10;
    const frames = [];
    for (let index = 0; index < frameCount; index += 1) {
      const time = clamp((duration - 0.03) * index / Math.max(1, frameCount - 1), 0, Math.max(0, duration - 0.03));
      await waitForMediaSeek(probe, time, 1200).catch(() => {});
      const thumbnail = await createVideoThumbnail(probe);
      if (thumbnail) frames.push(thumbnail);
    }
    if (frames.length) clip.timelineFrames = frames;
  } catch {
    // The existing cover thumbnail remains available if frame extraction is unsupported.
  } finally {
    clip.timelineFramesLoading = false;
    if (probe) {
      probe.removeAttribute("src");
      probe.load();
    }
  }
  renderMediaTracks();
}

function ensureTimelineFrames() {
  [...state.sequenceClips, ...state.overlayVideoClips]
    .forEach((clip) => createTimelineFrames(clip));
}

async function addSequenceVideos(files) {
  if (!state.sequenceClips.length && files.length) {
    loadVideo(files.shift());
    await waitForVideoMetadata().catch(() => {});
  }
  for (const file of files) {
    const url = URL.createObjectURL(file);
    try {
      const probe = await loadVideoElement(url, true);
      const thumbnail = await createVideoThumbnail(probe);
      const browserMediaStart = clipBrowserMediaStart(null, probe);
      const playableDuration = mediaElementPlayableDuration(probe);
      state.sequenceClips.push({
        id: crypto.randomUUID(), type: "sequence", name: file.name, file, url,
        duration: playableDuration, sourceDuration: playableDuration, browserMediaStart,
        width: probe.videoWidth, height: probe.videoHeight,
        start: 0, end: 0, volume: 1, playbackRate: 1, sourceSpan: playableDuration, thumbnail,
        lutIntensity: 100, videoAdjustments: { ...DEFAULT_VIDEO_ADJUSTMENTS },
      });
      state.selectedMediaClipId = state.sequenceClips.at(-1).id;
      probe.removeAttribute("src");
      probe.load();
    } catch (error) {
      URL.revokeObjectURL(url);
      showToast(error.message);
    }
  }
  refreshSequenceTiming();
  renderMediaTracks();
  renderCues();
  renderCuts();
  updatePlayer();
  setPlayerEnabled(Boolean(state.sequenceClips.length));
  setStatus(`${state.sequenceClips.length} vídeo${state.sequenceClips.length === 1 ? "" : "s"} · ${formatClock(projectDuration())}`, true);
  saveLocalProject();
  if (files.length) showToast(`${files.length} ${files.length === 1 ? "vídeo unido" : "vídeos unidos"}.`);
}

async function addOverlayVideos(files, requestedTrackId = null, requestedStart = null) {
  const trackId = ensureVideoTrack(requestedTrackId);
  let cursor = Number.isFinite(requestedStart) ? Math.max(0, requestedStart) : visualTrackContentEnd(trackId);
  for (const file of files) {
    const url = URL.createObjectURL(file);
    try {
      const mediaElement = await loadVideoElement(url, true);
      const audioElement = createClipAudioElement(url);
      const browserMediaStart = clipBrowserMediaStart(null, mediaElement);
      const playableDuration = mediaElementPlayableDuration(mediaElement);
      const start = cursor;
      const end = start + playableDuration;
      const clip = {
        id: crypto.randomUUID(), type: "video", name: file.name, file, url, mediaElement, audioElement,
        trackId, start, end, x: 50, y: 50, size: fittedOverlaySize(mediaElement), opacity: 1, animation: "none", volume: 1,
        playbackRate: 1, sourceSpan: end - start, browserMediaStart,
        lutIntensity: 100, videoAdjustments: { ...DEFAULT_VIDEO_ADJUSTMENTS },
        thumbnail: await createVideoThumbnail(mediaElement),
      };
      state.overlayVideoClips.push(clip);
      state.selectedMediaClipId = clip.id;
      cursor = end;
    } catch (error) {
      URL.revokeObjectURL(url);
      showToast(error.message);
    }
  }
  cleanupEmptyVideoTracks();
  renderMediaTracks();
  updatePlayer();
  saveLocalProject();
  if (files.length) showToast(`${files.length} ${files.length === 1 ? "vídeo adicionado" : "vídeos adicionados"} à faixa.`);
  return cursor;
}

async function addImageClips(files, requestedTrackId = null, requestedStart = null) {
  const trackId = ensureVideoTrack(requestedTrackId);
  let cursor = Number.isFinite(requestedStart) ? Math.max(0, requestedStart) : visualTrackContentEnd(trackId);
  for (const file of files) {
    const url = URL.createObjectURL(file);
    try {
      const image = await loadImageElement(url);
      const start = cursor;
      const end = start + 3;
      const clip = {
        id: crypto.randomUUID(), type: "image", name: file.name, file, url, image,
        trackId, start, end, x: 50, y: 50,
        size: fittedOverlaySize(image), opacity: 1, animation: "fade", thumbnail: url,
      };
      state.imageClips.push(clip);
      state.selectedMediaClipId = clip.id;
      cursor = end;
    } catch (error) {
      URL.revokeObjectURL(url);
      showToast(error.message);
    }
  }
  cleanupEmptyVideoTracks();
  renderMediaTracks();
  updatePlayer();
  saveLocalProject();
  if (files.length) showToast(`${files.length} ${files.length === 1 ? "imagem adicionada" : "imagens adicionadas"} à faixa.`);
  return cursor;
}

async function addVisualClips(files, trackId = null, start = null) {
  const resolvedTrackId = ensureVideoTrack(trackId);
  const videos = files.filter((file) => file.type.startsWith("video/") || /\.mov$/i.test(file.name));
  const images = files.filter((file) => file.type.startsWith("image/"));
  let cursor = Number.isFinite(start) ? start : visualTrackContentEnd(resolvedTrackId);
  if (videos.length) cursor = await addOverlayVideos(videos, resolvedTrackId, cursor);
  if (images.length) await addImageClips(images, resolvedTrackId, cursor);
}

function waitForAudioMetadata(audio) {
  return new Promise((resolve, reject) => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) return resolve();
    audio.addEventListener("loadedmetadata", resolve, { once: true });
    audio.addEventListener("error", () => reject(new Error("Não foi possível abrir o áudio.")), { once: true });
  });
}

async function addAudioClips(files, requestedTrackId = "audio-base", requestedStart = projectCurrentTime(), options = {}) {
  const trackId = ensureAudioTrack(requestedTrackId);
  let addedCount = 0;
  let extractedCount = 0;
  const addedClips = [];
  for (const file of files) {
    const extractingVideo = fileIsVideo(file);
    if (extractingVideo && !(await fileHasAudioTrack(file))) {
      showToast(`${file.name} não possui uma faixa de áudio.`);
      continue;
    }
    const url = URL.createObjectURL(file);
    const audioElement = new Audio(url);
    audioElement.preload = "metadata";
    audioElement.playsInline = true;
    audioElement.muted = elements.video.muted;
    try {
      await waitForAudioMetadata(audioElement);
      const fallbackStart = requestedStart;
      const videoDuration = projectDuration() || fallbackStart + audioElement.duration;
      const start = Number.isFinite(videoDuration)
        ? Math.min(fallbackStart, Math.max(0, videoDuration - 0.1))
        : fallbackStart;
      const clip = {
        id: crypto.randomUUID(), type: "audio", name: extractingVideo ? `Áudio · ${file.name}` : file.name, file, url, audioElement,
        trackId, start, end: Math.min(videoDuration, start + audioElement.duration), volume: 1, playbackRate: 1,
        importedFromVideo: extractingVideo,
        isNarration: Boolean(options.isNarration),
      };
      clip.sourceSpan = clip.end - clip.start;
      state.audioClips.push(clip);
      addedClips.push(clip);
      state.selectedMediaClipId = clip.id;
      addedCount += 1;
      if (extractingVideo) extractedCount += 1;
    } catch (error) {
      URL.revokeObjectURL(url);
      showToast(error.message);
    }
  }
  renderMediaTracks();
  updatePlayer();
  saveLocalProject();
  if (addedCount && !options.silentToast) {
    const detail = extractedCount
      ? `${extractedCount} ${extractedCount === 1 ? "vídeo convertido em áudio" : "vídeos convertidos em áudio"}`
      : `${addedCount} ${addedCount === 1 ? "áudio adicionado" : "áudios adicionados"}`;
    showToast(`${detail}.`);
  }
  return addedClips;
}

function narrationRecorderForStream(stream) {
  if (!window.MediaRecorder) throw new Error("recording-unsupported");
  const types = [
    "audio/mp4;codecs=mp4a.40.2",
    "audio/mp4",
    "audio/webm;codecs=opus",
    "audio/webm",
  ];
  for (const mimeType of types) {
    if (!MediaRecorder.isTypeSupported?.(mimeType)) continue;
    try {
      return new MediaRecorder(stream, { mimeType });
    } catch {
      // Try the next format supported by this browser.
    }
  }
  return new MediaRecorder(stream);
}

function narrationFileExtension(mimeType) {
  if (mimeType.includes("mp4")) return "m4a";
  if (mimeType.includes("ogg")) return "ogg";
  return "webm";
}

function releaseNarrationMicrophone() {
  state.narrationStream?.getTracks().forEach((track) => track.stop());
  state.narrationStream = null;
  if (state.narrationEndHandler) {
    elements.video.removeEventListener("projectended", state.narrationEndHandler);
    state.narrationEndHandler = null;
  }
}

function cancelNarrationRecording() {
  const recorder = state.narrationRecorder;
  state.narrationRecorder = null;
  state.narrationTrackId = null;
  state.narrationChunks = [];
  if (recorder && recorder.state !== "inactive") {
    try {
      recorder.stop();
    } catch {
      // The microphone tracks are released below even if stopping fails.
    }
  }
  releaseNarrationMicrophone();
  updateAudioTrackActionButtons();
}

async function finishNarrationRecording(recorder, trackId, start) {
  if (state.narrationRecorder !== recorder) return;
  const end = projectCurrentTime();
  elements.video.pause();
  const chunks = state.narrationChunks;
  const mimeType = recorder.mimeType || chunks.find((chunk) => chunk.type)?.type || "audio/webm";
  state.narrationRecorder = null;
  state.narrationTrackId = null;
  state.narrationChunks = [];
  releaseNarrationMicrophone();
  updateAudioTrackActionButtons();

  const blob = new Blob(chunks, { type: mimeType });
  if (!blob.size || end - start < 0.12) {
    showToast("Narração muito curta. Grave novamente.");
    return;
  }
  state.narrationCounter += 1;
  const extension = narrationFileExtension(mimeType);
  const file = new File([blob], `Narracao ${state.narrationCounter}.${extension}`, {
    type: mimeType,
    lastModified: Date.now(),
  });
  const [clip] = await addAudioClips([file], trackId, start, { isNarration: true, silentToast: true });
  if (!clip) return;
  clip.name = `Narração ${state.narrationCounter}`;
  renderMediaTracks();
  saveLocalProject();
  showToast("Narração adicionada à faixa.");
}

async function startNarrationRecording(trackId) {
  if (!elements.video.src || !state.sequenceClips.length) {
    showToast("Abra um vídeo antes de gravar a narração.");
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    showToast("Este navegador não oferece gravação pelo microfone.");
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
    state.narrationStream = stream;
    if (projectCurrentTime() >= projectDuration() - 0.05) await seekProjectTime(0, false);
    const resolvedTrackId = ensureAudioTrack(trackId);
    state.hiddenAudioTrackIds.delete(resolvedTrackId);
    const recorder = narrationRecorderForStream(stream);
    const start = projectCurrentTime();
    state.narrationRecorder = recorder;
    state.narrationTrackId = resolvedTrackId;
    state.narrationStart = start;
    state.narrationChunks = [];
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data?.size) state.narrationChunks.push(event.data);
    });
    recorder.addEventListener("stop", () => finishNarrationRecording(recorder, resolvedTrackId, start), { once: true });
    recorder.addEventListener("error", () => {
      elements.video.pause();
      state.narrationRecorder = null;
      state.narrationTrackId = null;
      state.narrationChunks = [];
      releaseNarrationMicrophone();
      updateAudioTrackActionButtons();
      showToast("A gravação da narração foi interrompida.");
    }, { once: true });
    state.narrationEndHandler = () => stopNarrationRecording();
    elements.video.addEventListener("projectended", state.narrationEndHandler, { once: true });
    recorder.start(250);
    updateAudioTrackActionButtons();
    await preparePreviewAudioMixer().catch(() => {});
    await elements.video.play();
    showToast("Gravando narração. Toque em ■ para finalizar.");
  } catch (error) {
    const recorder = state.narrationRecorder;
    state.narrationRecorder = null;
    state.narrationTrackId = null;
    state.narrationChunks = [];
    if (recorder && recorder.state !== "inactive") {
      try {
        recorder.stop();
      } catch {
        // Releasing the stream below also ends the recorder.
      }
    }
    releaseNarrationMicrophone();
    updateAudioTrackActionButtons();
    const denied = error?.name === "NotAllowedError" || error?.name === "SecurityError";
    showToast(denied
      ? "Permita o acesso ao microfone para gravar a narração."
      : "Não foi possível iniciar o microfone.");
  }
}

function stopNarrationRecording() {
  const recorder = state.narrationRecorder;
  if (!recorder || recorder.state === "inactive") return;
  if (!elements.video.paused) elements.video.pause();
  if (recorder.state !== "inactive") recorder.stop();
}

function toggleNarrationRecording(trackId) {
  if (state.narrationRecorder) {
    stopNarrationRecording();
    return;
  }
  startNarrationRecording(trackId);
}

async function fileHasAudioTrack(file) {
  try {
    const mediabunny = await import("./vendor/mediabunny-1.48.1.min.mjs");
    const input = new mediabunny.Input({
      formats: mediabunny.ALL_FORMATS,
      source: new mediabunny.BlobSource(file, { useStreamReader: false }),
    });
    const track = await input.getPrimaryAudioTrack();
    input.dispose();
    return Boolean(track);
  } catch {
    return true;
  }
}

async function extractSelectedVideoAudio() {
  const clip = selectedMediaClip();
  if (!clip || !["video", "sequence"].includes(clip.type)) return;
  const existing = state.audioClips.find((item) => item.extractedFrom === clip.id);
  if (existing) {
    state.selectedMediaClipId = existing.id;
    renderMediaTracks();
    showToast("O áudio deste vídeo já está na faixa.");
    return;
  }
  if (!(await fileHasAudioTrack(clip.file))) {
    showToast("Este vídeo não possui uma faixa de áudio.");
    return;
  }
  const url = URL.createObjectURL(clip.file);
  const audioElement = new Audio(url);
  audioElement.preload = "metadata";
  try {
    await waitForAudioMetadata(audioElement);
    const audioClip = {
      id: crypto.randomUUID(),
      type: "audio",
      name: `Áudio · ${clip.name}`,
      file: clip.file,
      url,
      audioElement,
      trackId: "audio-base",
      start: clip.start,
      end: Math.min(clip.end, clip.start + audioElement.duration),
      sourceOffset: clip.sourceOffset || 0,
      sourceSpan: clipSourceSpan(clip),
      playbackRate: clipPlaybackRate(clip),
      segmentFades: Object.fromEntries(Object.entries(clip.segmentFades || {}).map(([key, fade]) => [key, { ...fade }])),
      volume: clip.volume ?? 1,
      extractedFrom: clip.id,
      linkedSpeed: true,
      sourceVolumeBeforeExtraction: clip.volume ?? 1,
    };
    clip.volume = 0;
    if (clip.type === "sequence" && activeSequenceClip()?.id === clip.id) {
      elements.video.volume = state.mainAudioGain ? 1 : 0;
      if (state.mainAudioGain) state.mainAudioGain.gain.value = 0;
    }
    if (clip.type === "video") clip.mediaElement.volume = 0;
    state.audioClips.push(audioClip);
    state.selectedMediaClipId = audioClip.id;
    renderMediaTracks();
    saveLocalProject();
    showToast("Áudio extraído e vídeo original silenciado.");
  } catch (error) {
    URL.revokeObjectURL(url);
    showToast(error.message || "Não foi possível extrair o áudio.");
  }
}

function closeTimelineGap(start, end) {
  const removedDuration = Math.max(0, end - start);
  if (!removedDuration) return;
  const shiftItem = (item) => {
    if (item.start >= end) item.start -= removedDuration;
    else if (item.start > start) item.start = start;
    if (item.end >= end) item.end -= removedDuration;
    else if (item.end > start) item.end = start;
  };
  [...state.overlayVideoClips, ...state.imageClips, ...state.audioClips, ...state.cues, ...state.cuts].forEach(shiftItem);
  state.captionCompositions.flatMap((composition) => composition.parts).forEach(shiftItem);
  state.cues = state.cues.filter((cue) => cue.end - cue.start >= 0.05);
  state.captionCompositions = sanitizeCaptionCompositions(state.captionCompositions);
  state.cuts = state.cuts.filter((cut) => cut.end - cut.start >= 0.05);
}

function deleteSelectedMediaClip() {
  const clip = selectedMediaClip();
  if (!clip) return;
  if (window.matchMedia("(max-width: 760px)").matches
    && !window.confirm(`Excluir “${clip.name}” da timeline?`)) return;
  if (clip.type === "audio" && clip.extractedFrom
    && !state.audioClips.some((item) => item !== clip && item.extractedFrom === clip.extractedFrom)) {
    const sourceClip = allMediaClips().find((item) => item.id === clip.extractedFrom);
    if (sourceClip && sourceClip.volume === 0) {
      sourceClip.volume = clip.sourceVolumeBeforeExtraction ?? 1;
      if (sourceClip.type === "sequence" && activeSequenceClip()?.id === sourceClip.id) {
        if (state.mainAudioGain) state.mainAudioGain.gain.value = sourceClip.volume;
        else elements.video.volume = sourceClip.volume;
      }
      if (sourceClip.type === "video") sourceClip.mediaElement.volume = sourceClip.volume;
    }
  }
  if (clip.audioElement) clip.audioElement.pause();
  if (clip.mediaElement) clip.mediaElement.pause();
  const graphNode = state.audioTrackNodes.get(clip.id);
  graphNode?.source.disconnect();
  graphNode?.gain.disconnect();
  state.audioTrackNodes.delete(clip.id);
  clip.element?.remove();
  clip.filterCanvas?.remove();
  if (clip.filterRendererKey) delete state[clip.filterRendererKey];
  const deletingSequenceIndex = clip.type === "sequence"
    ? state.sequenceClips.findIndex((item) => item.id === clip.id)
    : -1;
  const deletingActiveSequence = clip.type === "sequence" && activeSequenceClip()?.id === clip.id;
  if (clip.type === "sequence") closeTimelineGap(clip.start, clip.end);
  const urlUsedElsewhere = allMediaClips().some((item) => item !== clip && item.url === clip.url);
  if (!clip.sharedUrl && !urlUsedElsewhere) URL.revokeObjectURL(clip.url);
  state.sequenceClips = state.sequenceClips.filter((item) => item.id !== clip.id);
  state.overlayVideoClips = state.overlayVideoClips.filter((item) => item.id !== clip.id);
  state.imageClips = state.imageClips.filter((item) => item.id !== clip.id);
  state.audioClips = state.audioClips.filter((item) => item.id !== clip.id);
  state.videoGridClipIds = state.videoGridClipIds.filter((id) => id !== clip.id);
  if (state.videoGridMode > 1 && state.videoGridClipIds.length < state.videoGridMode) {
    state.videoGridMode = 1;
    state.videoGridClipIds = [];
    state.videoGridLayout = "auto";
    updateVideoGridButtons();
  }
  cleanupEmptyVideoTracks();
  cleanupEmptyAudioTracks();
  state.activeCue = Math.min(state.activeCue, state.cues.length - 1);
  if (deletingActiveSequence && state.sequenceClips.length) {
    state.activeSequenceIndex = 0;
    elements.video.src = state.sequenceClips[0].url;
  } else if (deletingSequenceIndex >= 0 && deletingSequenceIndex < state.activeSequenceIndex) {
    state.activeSequenceIndex -= 1;
  }
  state.selectedMediaClipId = null;
  state.selectedMediaSegmentKey = null;
  if (!state.sequenceClips.length) {
    state.activeSequenceIndex = 0;
    state.videoFile = null;
    state.videoUrl = null;
    state.videoName = "legendas";
    elements.video.pause();
    elements.video.removeAttribute("src");
    elements.video.load();
    elements.videoShell.classList.remove("has-video");
    elements.emptyVideo.hidden = false;
    setPlayerEnabled(false);
    if (!state.overlayVideoClips.length && !state.imageClips.length && !state.audioClips.length) {
      state.cuts = [];
      state.cues = [];
      state.captionCompositions = [];
      state.activeCue = -1;
    }
  }
  refreshSequenceTiming();
  renderMediaTracks();
  renderCues();
  renderCuts();
  updatePlayer();
  if (state.sequenceClips.length) {
    setStatus(`${state.sequenceClips.length} vídeo${state.sequenceClips.length === 1 ? "" : "s"} · ${formatClock(projectDuration())}`, true);
    if (clip.type === "sequence") {
      seekProjectTime(Math.min(clip.start, Math.max(0, projectDuration() - 0.001)), false).catch(() => {});
    }
  } else {
    setStatus("Abra um vídeo para começar.");
  }
  saveLocalProject();
  if (window.matchMedia("(max-width: 760px)").matches) {
    elements.stage.classList.add("tools-collapsed");
  }
  showToast("Mídia removida.");
}

function setPlayerEnabled(enabled) {
  [elements.playButton, elements.backButton, elements.forwardButton, elements.muteButton, elements.fullscreenButton, elements.seekBar].forEach(
    (control) => (control.disabled = !enabled),
  );
  elements.addCueButton.disabled = !enabled;
  elements.cutButton.disabled = !enabled;
  elements.splitClipButton.disabled = !enabled;
  elements.undoCutButton.disabled = state.undoInProgress
    || !enabled
    || (state.cuts.length === 0 && state.splitHistory.length === 0);
  updateScriptState();
}

function previewNeedsAudioMixer() {
  return state.audioClips.some(clipTrackIsVisible)
    || state.overlayVideoClips.some(clipTrackIsVisible)
    || !trackIsVisible("video", "base")
    || [...state.sequenceClips, ...state.overlayVideoClips, ...state.audioClips]
      .some((clip) => Math.abs((clip.volume ?? 1) - 1) > 0.001 || clipHasFadeAutomation(clip));
}

async function preparePreviewAudioMixer(force = false) {
  if (!force && !previewNeedsAudioMixer()) return;
  await audioTracksFromMixGraph();
}

async function togglePlayback() {
  if (!elements.video.src) return;
  if (elements.video.paused) {
    if (projectCurrentTime() >= projectDuration() - 0.05) {
      await seekProjectTime(0, false).catch(() => {});
    }
    const time = projectCurrentTime();
    // Prime every companion before the first play call. This prevents iPhone
    // from briefly showing a stale frame when a grid starts at the playhead.
    primeSecondaryMediaForPlayback(time);
    const grid = activeVideoGrid(time);
    const gridIds = grid?.keys || new Set();
    const activeOverlays = state.overlayVideoClips.filter((clip) => clipIsActiveAtTime(clip, time));
    const companions = activeOverlays.filter((clip) => gridIds.has(clip.id));
    companions.forEach((clip) => {
      clip.previewWasActive = true;
      clip.previewShouldPlay = true;
      clip.previewAudioShouldPlay = true;
    });
    // Start resume/play calls in the original tap task so Safari keeps the user gesture.
    const mixerPromise = preparePreviewAudioMixer().catch((error) => console.warn("Mixer de áudio indisponível", error));
    const playPromises = [
      elements.video.play(),
      ...companions.map((clip) => clip.mediaElement.play()),
      ...activeOverlays.map((clip) => clip.audioElement?.play()).filter(Boolean),
    ];
    await Promise.allSettled([mixerPromise, ...playPromises]);
    updateMediaPreview();
  }
  else elements.video.pause();
}

function addCue() {
  if (!elements.video.src) return;
  const start = projectCurrentTime();
  const end = Math.min(projectDuration() || start + 2, start + 2);
  const cue = { id: crypto.randomUUID(), start, end, text: "Novo trecho" };
  const insertAt = state.cues.findIndex((item) => item.start > start);
  if (insertAt === -1) state.cues.push(cue);
  else state.cues.splice(insertAt, 0, cue);
  state.activeCue = state.cues.indexOf(cue);
  renderCues();
  selectCue(state.activeCue, false);
  activateToolTab("review");
  saveLocalProject();
}

function shiftAllCues(amount) {
  const duration = projectDuration() || Infinity;
  state.cues.forEach((cue) => {
    const cueDuration = cue.end - cue.start;
    cue.start = Math.max(0, Math.min(duration - cueDuration, cue.start + amount));
    cue.end = Math.min(duration, cue.start + cueDuration);
  });
  renderCues();
  updateCaption();
  saveLocalProject();
}

function syncNextCueToPlayhead() {
  if (!state.cues.length || !elements.video.src) return;
  const current = projectCurrentTime();
  const nextIndex = state.cues.findIndex((cue) => cue.start > current + 0.03);

  if (nextIndex < 0) {
    showToast("Não há outro trecho depois deste ponto.");
    return;
  }

  const previousCue = state.cues[nextIndex - 1];
  if (previousCue && previousCue.end > current) {
    previousCue.end = Math.max(previousCue.start, current);
  }

  shiftCueRange(nextIndex, current - state.cues[nextIndex].start);
  state.activeCue = nextIndex;
  renderCues();
  updateCaption();
  saveLocalProject();

  flashTimingButton(elements.syncNextButton);
  showToast(`Trecho ${nextIndex + 1} sincronizado em ${formatClock(current)}.`);
}

function flashTimingButton(button) {
  button.classList.remove("synced");
  void button.offsetWidth;
  button.classList.add("synced");
  setTimeout(() => button.classList.remove("synced"), 450);
}

function extendPreviousCueToPlayhead() {
  if (!state.cues.length || !elements.video.src) return;
  const current = projectCurrentTime();
  const activeIndex = state.cues.findIndex((cue) => current >= cue.start && current < cue.end);
  let previousIndex = activeIndex > 0 ? activeIndex - 1 : -1;

  if (activeIndex < 0) {
    for (let index = state.cues.length - 1; index >= 0; index -= 1) {
      if (state.cues[index].end <= current) {
        previousIndex = index;
        break;
      }
    }
  }

  if (previousIndex < 0) {
    showToast("Não há uma legenda anterior neste ponto.");
    return;
  }

  const previousCue = state.cues[previousIndex];
  previousCue.end = Math.max(previousCue.start, current);

  const nextIndex = previousIndex + 1;
  if (state.cues[nextIndex] && state.cues[nextIndex].start < current) {
    shiftCueRange(nextIndex, current - state.cues[nextIndex].start);
  }

  renderCues();
  updateCaption();
  saveLocalProject();
  flashTimingButton(elements.extendPreviousButton);
  showToast(`Trecho ${previousIndex + 1} estendido até ${formatClock(current)}.`);
}

function resetCutButton() {
  state.cutStart = null;
  state.cutTargetKey = null;
  state.cutTargetName = "V1";
  state.cutTargetClipId = null;
  elements.cutButton.classList.remove("marking");
  elements.cutMarkTime.textContent = formatClock(projectCurrentTime());
  updateCutToolContext();
}

function cutKeyForClip(clip) {
  if (!clip || clip.type === "sequence") return "base";
  if (["video", "image"].includes(clip.type)) {
    return (clip.trackId || "base") === "base" ? "base" : `video:${clip.trackId}`;
  }
  return `${clip.type}:${clip.id}`;
}

function isBaseCut(cut) {
  return !cut.targetKey || cut.targetKey === "base";
}

function clipHasOpenGap(clip, time) {
  const key = cutKeyForClip(clip);
  return state.cuts.some((cut) => cut.ripple === false && (cut.targetKey || "base") === key && time >= cut.start && time < cut.end);
}

function rippleCutsForClip(clip) {
  const key = cutKeyForClip(clip);
  return state.cuts
    .filter((cut) => cut.ripple !== false && !isBaseCut(cut) && (cut.targetKey || "base") === key)
    .sort((a, b) => a.start - b.start);
}

function clipSourceTimeAtTimeline(clip, time) {
  let sourceTime = time;
  rippleCutsForClip(clip).forEach((cut) => {
    if (sourceTime >= cut.start - 0.000001) sourceTime += cut.end - cut.start;
  });
  return sourceTime;
}

function clipEffectiveEnd(clip) {
  const removed = rippleCutsForClip(clip).reduce((total, cut) => {
    const overlap = Math.max(0, Math.min(clip.end, cut.end) - Math.max(clip.start, cut.start));
    return total + overlap;
  }, 0);
  return Math.max(clip.start, clip.end - removed);
}

function clipIsActiveAtTime(clip, time) {
  return clipTrackIsVisible(clip)
    && time >= clip.start
    && time < clipEffectiveEnd(clip)
    && !clipHasOpenGap(clip, time);
}

function cutTargetAtPlayhead(time) {
  const clip = selectedMediaClip();
  if (clip?.type === "audio") {
    const trackIndex = Math.max(0, state.audioTrackOrder.indexOf(clip.trackId || "audio-base"));
    const name = `A${trackIndex + 1}`;
    const withinClip = time >= clip.start
      && time < clipEffectiveEnd(clip)
      && !clipHasOpenGap(clip, time);
    return { key: cutKeyForClip(clip), name, clipId: clip.id, unavailable: !withinClip };
  }
  if (!clip || time < clip.start || time >= clip.end) return { key: "base", name: "V1" };
  if (["video", "image"].includes(clip.type)) {
    if ((clip.trackId || "base") === "base") return { key: "base", name: "V1" };
    const index = state.videoTrackOrder.indexOf(clip.trackId);
    return { key: cutKeyForClip(clip), name: `V${Math.max(0, index) + 2}` };
  }
  if (clip.type === "audio") return { key: cutKeyForClip(clip), name: "Áudio" };
  return { key: "base", name: "V1" };
}

function updateCutToolContext() {
  const selected = selectedMediaClip();
  const markingAudio = state.cutStart !== null && state.cutTargetKey?.startsWith("audio:");
  const audioTarget = markingAudio || (state.cutStart === null && selected?.type === "audio");
  const compact = matchMedia("(max-width: 760px)").matches;
  const action = state.cutStart === null
    ? (compact ? "Remover" : "Remover trecho")
    : (compact ? "Finalizar" : "Finalizar remoção");
  elements.cutButtonLabel.textContent = audioTarget ? `${action} áudio` : action;
  elements.cutSelectedAudioLabel.textContent = audioTarget ? `${action} áudio` : "Remover trecho de áudio";
  elements.splitClipLabel.textContent = compact ? "Dividir" : "Dividir vídeo no cursor";
  elements.splitClipButton.disabled = !elements.video.src || !["sequence", "video"].includes(selected?.type);
  elements.cutButton.classList.toggle("audio-target", audioTarget);
  elements.cutSelectedAudioButton.classList.toggle("marking", state.cutStart !== null && audioTarget);
  elements.transitionPalette.querySelectorAll('[data-video-transition="flash"], [data-video-transition="zoom"]')
    .forEach((button) => {
      button.disabled = audioTarget;
      button.title = audioTarget ? "Disponível apenas para vídeo" : "";
    });
}

function clipCollection(clip) {
  if (clip.type === "sequence") return state.sequenceClips;
  if (clip.type === "video") return state.overlayVideoClips;
  if (clip.type === "audio") return state.audioClips;
  if (clip.type === "image") return state.imageClips;
  return null;
}

function releaseClipRuntime(clip) {
  clip.audioElement?.pause();
  clip.mediaElement?.pause();
  clip.element?.remove();
  clip.resizeHandle?.remove();
  const graphNode = state.audioTrackNodes.get(clip.id);
  graphNode?.source.disconnect();
  graphNode?.gain.disconnect();
  state.audioTrackNodes.delete(clip.id);
}

async function splitSelectedClipAtPlayhead(allowedTypes = ["sequence", "video"]) {
  const clip = selectedMediaClip();
  if (!clip || !allowedTypes.includes(clip.type)) {
    showToast(allowedTypes.includes("audio")
      ? "Selecione um áudio na track para dividir."
      : "Selecione o vídeo que deseja dividir na track.");
    return;
  }
  const time = projectCurrentTime();
  const selectedSegment = selectedSegmentForClip(clip);
  const start = selectedSegment.start;
  const end = selectedSegment.end;
  if (time <= start + 0.08 || time >= end - 0.08 || clipHasOpenGap(clip, time)) {
    showToast("Posicione o cursor dentro da parte selecionada, longe das bordas.");
    return;
  }
  const overlappingRemoval = state.cuts.some((cut) => (
    !cut.junction
    && !cut.layerMove
    && (cut.targetKey || "base") === cutKeyForClip(clip)
    && cut.end > start + 0.001
    && cut.start < end - 0.001
  ));
  if (overlappingRemoval) {
    showToast("Desfaça as remoções desta parte antes de dividi-la.");
    return;
  }

  const collection = clipCollection(clip);
  const index = collection.indexOf(clip);
  const timelineDelta = time - start;
  const sourceDelta = timelineDelta * clipPlaybackRate(clip);
  const snapshot = {
    end: clip.end,
    duration: clip.duration,
    sourceSpan: clip.sourceSpan,
    segmentFades: structuredClone(clip.segmentFades || {}),
  };
  let right;

  if (clip.type === "sequence") {
    const originalSourceSpan = clipSourceSpan(clip);
    clip.duration = timelineDelta;
    clip.sourceSpan = sourceDelta;
    clip.segmentFades = {};
    right = {
      ...clip,
      id: crypto.randomUUID(),
      duration: (originalSourceSpan - sourceDelta) / clipPlaybackRate(clip),
      sourceSpan: originalSourceSpan - sourceDelta,
      sourceOffset: (clip.sourceOffset || 0) + sourceDelta,
      segmentFades: {},
      splitFrom: clip.id,
      sharedUrl: true,
    };
  } else if (clip.type === "video") {
    const originalSourceSpan = clipSourceSpan(clip);
    const mediaElement = await loadVideoElement(clip.url, true);
    const audioElement = createClipAudioElement(clip.url);
    clip.end = time;
    clip.sourceSpan = sourceDelta;
    clip.segmentFades = {};
    right = {
      ...clip,
      id: crypto.randomUUID(),
      mediaElement,
      audioElement,
      element: null,
      start: time,
      end: snapshot.end,
      sourceSpan: originalSourceSpan - sourceDelta,
      sourceOffset: (clip.sourceOffset || 0) + sourceDelta,
      segmentFades: {},
      splitFrom: clip.id,
      sharedUrl: true,
      previewWasActive: false,
    };
  } else if (clip.type === "audio") {
    const originalSourceSpan = clipSourceSpan(clip);
    const audioElement = new Audio(clip.url);
    audioElement.preload = "metadata";
    audioElement.playsInline = true;
    clip.end = time;
    clip.sourceSpan = sourceDelta;
    clip.segmentFades = {};
    right = {
      ...clip,
      id: crypto.randomUUID(),
      audioElement,
      start: time,
      end: snapshot.end,
      sourceSpan: originalSourceSpan - sourceDelta,
      sourceOffset: (clip.sourceOffset || 0) + sourceDelta,
      segmentFades: {},
      splitFrom: clip.id,
      sharedUrl: true,
      previewWasActive: false,
    };
  } else {
    clip.end = time;
    right = {
      ...clip,
      id: crypto.randomUUID(),
      element: null,
      start: time,
      end: snapshot.end,
      splitFrom: clip.id,
      sharedUrl: true,
    };
  }

  collection.splice(index + 1, 0, right);
  state.cutSequence += 1;
  state.splitHistory.push({
    type: clip.type,
    leftId: clip.id,
    rightId: right.id,
    snapshot,
    sequence: state.cutSequence,
  });
  state.selectedMediaClipId = right.id;
  state.selectedMediaSegmentKey = null;
  refreshSequenceTiming();
  renderMediaTracks();
  renderCuts();
  await seekProjectTime(time, false).catch(() => {});
  saveLocalProject();
  showToast(`${clip.type === "audio" ? "Áudio" : "Clipe"} dividido em duas partes independentes.`);
}

async function duplicateSelectedMediaClip() {
  const clip = selectedMediaClip();
  if (!clip) return;
  const collection = clipCollection(clip);
  if (!collection) return;
  const index = collection.indexOf(clip);
  let duplicate;

  if (clip.type === "sequence") {
    duplicate = {
      ...clip,
      id: crypto.randomUUID(),
      segmentFades: structuredClone(clip.segmentFades || {}),
      splitFrom: null,
      duplicatedFrom: clip.id,
      sharedUrl: true,
    };
  } else {
    const clipDuration = clip.end - clip.start;
    const timelineDuration = projectDuration();
    const nextStart = clip.end + clipDuration <= timelineDuration
      ? clip.end
      : Math.max(0, Math.min(clip.start, timelineDuration - clipDuration));
    duplicate = {
      ...clip,
      id: crypto.randomUUID(),
      start: nextStart,
      end: nextStart + clipDuration,
      segmentFades: structuredClone(clip.segmentFades || {}),
      splitFrom: null,
      duplicatedFrom: clip.id,
      sharedUrl: true,
      element: null,
      previewWasActive: false,
    };
    if (clip.type === "video") {
      duplicate.mediaElement = await loadVideoElement(clip.url, true);
      duplicate.audioElement = createClipAudioElement(clip.url);
    }
    if (clip.type === "audio") {
      duplicate.audioElement = new Audio(clip.url);
      duplicate.audioElement.preload = "metadata";
      duplicate.audioElement.playsInline = true;
    }
    if (["video", "image"].includes(clip.type)) {
      duplicate.x = clamp((clip.x ?? 50) + 4, 0, 100);
      duplicate.y = clamp((clip.y ?? 50) + 4, 0, 100);
    }
  }

  collection.splice(index + 1, 0, duplicate);
  state.selectedMediaClipId = duplicate.id;
  state.selectedMediaSegmentKey = null;
  refreshSequenceTiming();
  renderMediaTracks();
  await seekProjectTime(duplicate.start, false).catch(() => {});
  saveLocalProject();
  showToast("Parte duplicada e selecionada.");
}

function renderCuts() {
  state.cutMenuController?.abort();
  state.cutMenuController = null;
  document.querySelector(".cut-transition-menu")?.remove();
  elements.cutLayer.replaceChildren();
  const duration = projectDuration() || 1;
  const editableCuts = state.cuts.filter((cut) => !cut.junction && !cut.layerMove);
  elements.undoCutButton.disabled = state.undoInProgress
    || (editableCuts.length === 0 && state.splitHistory.length === 0);

  editableCuts.forEach((cut) => {
    const region = document.createElement("div");
    region.className = "cut-region";
    region.classList.add(cut.ripple === false ? "gap" : "ripple");
    region.dataset.cutId = cut.id;
    region.style.left = `${(cut.start / duration) * 100}%`;
    region.style.width = `${((cut.end - cut.start) / duration) * 100}%`;
    region.title = cut.ripple === false
      ? `${cut.targetName || "V1"}: espaço mantido de ${formatClock(cut.start)} a ${formatClock(cut.end)}`
      : `${cut.targetName || "V1"}: junção em ${formatClock(cut.start)}`;

    elements.cutLayer.append(region);
  });
}

function openCutTransitionMenu(cut, anchor) {
  state.cutMenuController?.abort();
  document.querySelector(".cut-transition-menu")?.remove();
  state.cutMenuController = new AbortController();
  const menu = document.createElement("div");
  menu.className = "cut-transition-menu";
  menu.setAttribute("role", "menu");
  const options = cut.targetKey?.startsWith("audio:") ? [
    ["cut", "Seco"],
    ["fade", "Fundido"],
  ] : [
    ["cut", "Seco"],
    ["fade", "Fundido"],
    ["flash", "Flash"],
    ["zoom", "Zoom"],
  ];
  menu.style.gridTemplateColumns = `repeat(${options.length}, 1fr)`;
  options.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.classList.toggle("active", cut.transition === value);
    button.setAttribute("role", "menuitem");
    button.addEventListener("click", () => {
      state.cutMenuController?.abort();
      state.cutMenuController = null;
      menu.remove();
      applyTransitionToCut(cut.id, value);
    });
    menu.append(button);
  });
  document.body.append(menu);
  const anchorBounds = anchor.getBoundingClientRect();
  const menuBounds = menu.getBoundingClientRect();
  menu.style.left = `${clamp(anchorBounds.left + anchorBounds.width / 2 - menuBounds.width / 2, 8, innerWidth - menuBounds.width - 8)}px`;
  menu.style.top = `${Math.max(8, anchorBounds.top - menuBounds.height - 8)}px`;
  requestAnimationFrame(() => {
    const close = (event) => {
      if (menu.contains(event.target) || event.target === anchor) return;
      menu.remove();
      state.cutMenuController?.abort();
      state.cutMenuController = null;
    };
    document.addEventListener("pointerdown", close, { capture: true, signal: state.cutMenuController.signal });
  });
}

function joinCutMagnetically(cutId) {
  const cut = state.cuts.find((item) => item.id === cutId);
  if (!cut || cut.ripple !== false || cut.layerMove) return;
  cut.ripple = true;
  cut.transition = "cut";
  renderCuts();
  renderMediaTracks();
  updatePlayer();
  saveLocalProject();
  const indicator = elements.mediaTimeline.querySelector(`.join-indicator[data-cut-id="${cut.id}"]`);
  indicator?.classList.add("joined-now");
  showToast("Partes unidas. Toque no losango para escolher a transição.");
}

function markCutAtPlayhead() {
  if (!elements.video.src) return;
  const current = projectCurrentTime();

  if (state.cutStart === null) {
    const target = cutTargetAtPlayhead(current);
    if (target.unavailable) {
      showToast(`Posicione o cursor dentro do áudio em ${target.name} para iniciar o corte.`);
      return;
    }
    state.cutStart = current;
    state.cutTargetKey = target.key;
    state.cutTargetName = target.name;
    state.cutTargetClipId = target.clipId || null;
    elements.cutButton.classList.add("marking");
    updateCutToolContext();
    elements.cutMarkTime.textContent = formatClock(current);
    showToast(`Início do corte em ${target.name}: ${formatClock(current)}.`);
    return;
  }

  if (state.cutTargetKey?.startsWith("audio:")) {
    const audioClip = state.audioClips.find((clip) => clip.id === state.cutTargetClipId);
    const withinClip = audioClip
      && current >= audioClip.start
      && current <= clipEffectiveEnd(audioClip)
      && !clipHasOpenGap(audioClip, Math.max(audioClip.start, current - 0.001));
    if (!withinClip) {
      showToast(`Finalize o corte dentro do áudio em ${state.cutTargetName}.`);
      return;
    }
  }

  const start = Math.min(state.cutStart, current);
  const end = Math.max(state.cutStart, current);
  if (end - start < 0.15) {
    showToast("O corte precisa ter pelo menos 0,15 segundo.");
    return;
  }
  const overlaps = state.cuts.some((cut) => (cut.targetKey || "base") === state.cutTargetKey && start < cut.end && end > cut.start);
  if (overlaps) {
    showToast("Este intervalo cruza um corte existente.");
    resetCutButton();
    return;
  }

  state.cutSequence += 1;
  const targetName = state.cutTargetName;
  const transition = state.cutTargetKey?.startsWith("audio:")
    ? (["cut", "fade"].includes(state.selectedVideoTransition) ? state.selectedVideoTransition : "cut")
    : state.selectedVideoTransition;
  state.cuts.push({
    id: crypto.randomUUID(),
    start,
    end,
    transition,
    ripple: elements.magneticCuts.checked,
    targetKey: state.cutTargetKey,
    targetName: state.cutTargetName,
    sequence: state.cutSequence,
  });
  state.cuts.sort((first, second) => first.start - second.start);
  resetCutButton();
  renderCuts();
  renderMediaTracks();
  saveLocalProject();
  showToast(elements.magneticCuts.checked
    ? `${targetName} unida após o corte.`
    : `${targetName} ficou vazia entre ${formatClock(start)} e ${formatClock(end)}.`);
}

function undoLastCut(event) {
  event?.preventDefault();
  event?.stopPropagation();
  if (state.undoInProgress) return;
  state.undoInProgress = true;
  elements.undoCutButton.disabled = true;

  const latestCut = state.cuts
    .filter((cut) => !cut.junction && !cut.layerMove)
    .reduce((latest, cut) => (!latest || cut.sequence > latest.sequence ? cut : latest), null);
  const latestSplit = [...state.splitHistory].reverse().find((split) => {
    const collection = split.type === "sequence"
      ? state.sequenceClips
      : split.type === "video"
        ? state.overlayVideoClips
        : split.type === "audio"
          ? state.audioClips
          : state.imageClips;
    return collection.some((clip) => clip.id === split.leftId)
      && collection.some((clip) => clip.id === split.rightId);
  });
  if (latestSplit && (!latestCut || latestSplit.sequence > latestCut.sequence)) {
    const collection = latestSplit.type === "sequence"
      ? state.sequenceClips
      : latestSplit.type === "video"
        ? state.overlayVideoClips
        : latestSplit.type === "audio"
          ? state.audioClips
          : state.imageClips;
    const left = collection.find((clip) => clip.id === latestSplit.leftId);
    const right = collection.find((clip) => clip.id === latestSplit.rightId);
    state.splitHistory = state.splitHistory.filter((split) => split !== latestSplit);
    releaseClipRuntime(right);
    if (latestSplit.type === "sequence") left.duration = latestSplit.snapshot.duration;
    else left.end = latestSplit.snapshot.end;
    left.sourceSpan = latestSplit.snapshot.sourceSpan;
    left.segmentFades = structuredClone(latestSplit.snapshot.segmentFades || {});
    collection.splice(collection.indexOf(right), 1);
    state.selectedMediaClipId = left.id;
    state.selectedMediaSegmentKey = null;
    refreshSequenceTiming();
    cleanupEmptyVideoTracks();
    cleanupEmptyAudioTracks();
    renderMediaTracks();
    renderCuts();
    updatePlayer();
    saveLocalProject();
    showToast("Divisão desfeita.");
    window.setTimeout(() => {
      state.undoInProgress = false;
      renderCuts();
    }, 350);
    return;
  }
  if (!latestCut) {
    state.undoInProgress = false;
    renderCuts();
    return;
  }
  if (latestCut.trimClipId) {
    const clip = state.sequenceClips.find((item) => item.id === latestCut.trimClipId);
    if (clip) {
      if (latestCut.trimEdge === "start") clip.trimInSource = 0;
      if (latestCut.trimEdge === "end") clip.trimOutSource = 0;
    }
  }
  state.cuts = state.cuts.filter((cut) => cut.id !== latestCut.id);
  renderCuts();
  renderMediaTracks();
  saveLocalProject();
  showToast("Último corte desfeito.");
  window.setTimeout(() => {
    state.undoInProgress = false;
    renderCuts();
  }, 350);
}

function applyTransitionToCut(cutId, transition) {
  const cut = state.cuts.find((item) => item.id === cutId);
  if (!cut) return;
  if (cut.layerMove) return;
  if (cut.ripple === false) {
    showToast("Mantenha 'Unir após corte' ativo para aplicar uma transição.");
    return;
  }
  cut.transition = transition;
  renderCuts();
  renderMediaTracks();
  saveLocalProject();
  showToast(`Transição ${transition} aplicada ao corte.`);
}

function closestCutToTime(time) {
  return state.cuts.filter((cut) => cut.ripple !== false).reduce((closest, cut) => {
    if (!closest) return cut;
    return Math.abs(cut.start - time) < Math.abs(closest.start - time) ? cut : closest;
  }, null);
}

function triggerCutTransition(type) {
  clearTimeout(state.cutTransitionTimer);
  state.cutTransition = { type, startedAt: performance.now(), duration: type === "flash" ? 320 : 440 };
  elements.cutTransitionOverlay.hidden = true;
  elements.cutTransitionOverlay.className = "cut-transition-overlay";
  elements.video.classList.remove("cut-zoom");
  elements.lutPreviewCanvas.classList.remove("cut-zoom");

  if (type === "fade" || type === "flash") {
    elements.cutTransitionOverlay.hidden = false;
    void elements.cutTransitionOverlay.offsetWidth;
    elements.cutTransitionOverlay.classList.add(type);
  } else if (type === "zoom") {
    void elements.video.offsetWidth;
    elements.video.classList.add("cut-zoom");
    elements.lutPreviewCanvas.classList.add("cut-zoom");
  }

  state.cutTransitionTimer = setTimeout(() => {
    elements.cutTransitionOverlay.hidden = true;
    elements.video.classList.remove("cut-zoom");
    elements.lutPreviewCanvas.classList.remove("cut-zoom");
  }, state.cutTransition.duration);
}

function waitForRecorderChange(recorder, action, eventName) {
  if (!recorder || recorder.state === "inactive") return Promise.resolve();
  return new Promise((resolve) => {
    const finish = () => {
      recorder.removeEventListener(eventName, finish);
      recorder.removeEventListener("stop", finish);
      resolve();
    };
    recorder.addEventListener(eventName, finish, { once: true });
    recorder.addEventListener("stop", finish, { once: true });
    try {
      recorder[action]();
    } catch {
      finish();
    }
  });
}

function seekVideoTo(time) {
  return seekProjectTime(time, false);
}

async function processCutsAtPlayhead() {
  if (state.isCutSeeking || !state.cuts.length) return;
  const current = projectCurrentTime();
  const cut = state.cuts.find((item) => isBaseCut(item) && item.ripple !== false && current >= item.start && current < item.end);
  if (!cut) return;

  state.isCutSeeking = true;
  const wasPlaying = !elements.video.paused;
  const recorder = state.exporting ? state.recorder : null;

  try {
    if (recorder?.state === "recording" && typeof recorder.pause === "function") {
      elements.video.pause();
      await waitForRecorderChange(recorder, "pause", "pause");
      await seekVideoTo(cut.end);
      triggerCutTransition(cut.transition);

      if (state.exporting && recorder.state === "paused") {
        await waitForRecorderChange(recorder, "resume", "resume");
      }
      if (state.exporting && wasPlaying) await elements.video.play();
    } else {
      triggerCutTransition(cut.transition);
      await seekVideoTo(cut.end);
    }
  } catch (error) {
    console.error(error);
    if (state.exporting && recorder?.state === "paused") {
      try {
        recorder.resume();
      } catch {
        // The export cleanup will stop a recorder that cannot resume.
      }
    }
  } finally {
    state.isCutSeeking = false;
  }
}

async function processSequenceBoundaryAtPlayhead(forcePlayback = false) {
  if (state.isSequenceSwitching) return true;
  if (state.activeSequenceIndex >= state.sequenceClips.length - 1) return false;
  const clip = activeSequenceClip();
  if (!clip) return false;
  const mediaBoundary = clipBrowserMediaStart(clip, elements.video) + (clip.sourceOffset || 0) + clipSourceSpan(clip);
  if ((elements.video.currentTime || 0) < mediaBoundary - 0.025) return false;

  state.isSequenceSwitching = true;
  const shouldContinuePlayback = forcePlayback || !elements.video.paused || elements.video.ended || state.exporting;
  const next = state.sequenceClips[state.activeSequenceIndex + 1];
  const changingSource = elements.video.src !== next.url;
  const recorder = state.exporting ? state.recorder : null;
  try {
    if (changingSource && recorder?.state === "recording" && typeof recorder.pause === "function") {
      elements.video.pause();
      await waitForRecorderChange(recorder, "pause", "pause");
    }
    state.activeSequenceIndex += 1;
    if (changingSource) {
      elements.video.src = next.url;
      await waitForVideoMetadata();
    }
    updateClipBrowserTiming(next, elements.video);
    refreshSequenceTiming();
    const target = clipBrowserMediaStart(next, elements.video) + (next.sourceOffset || 0);
    if (changingSource || Math.abs((elements.video.currentTime || 0) - target) > 0.04) {
      await waitForMediaSeek(elements.video, target);
    }
    elements.video.volume = state.mainAudioGain ? 1 : clamp(next.volume ?? 1);
    if (state.mainAudioGain) state.mainAudioGain.gain.value = clamp(next.volume ?? 1, 0, 2);
    elements.video.playbackRate = clipPlaybackRate(next);
    const junction = state.cuts.find((cut) => cut.junction
      && cut.fromClipId === clip.id
      && cut.toClipId === next.id);
    if (junction?.transition && junction.transition !== "cut") triggerCutTransition(junction.transition);
    if (recorder?.state === "paused") await waitForRecorderChange(recorder, "resume", "resume");
    if (shouldContinuePlayback) {
      await continueSequencePlayback(next.start);
    }
    return true;
  } catch (error) {
    console.error("Falha ao continuar a sequência", error);
    return false;
  } finally {
    state.isSequenceSwitching = false;
  }
}

function drawVideoFrame(context, width, height, source = elements.video, fixedTransition = undefined, colorClip = activeSequenceClip()) {
  const hasFixedTransition = fixedTransition !== undefined;
  const transition = hasFixedTransition ? fixedTransition : state.cutTransition;
  const progress = hasFixedTransition
    ? fixedTransition?.progress ?? 1
    : transition
      ? clamp((performance.now() - transition.startedAt) / transition.duration)
      : 1;
  const sourceWidth = source.videoWidth || source.width || width;
  const sourceHeight = source.videoHeight || source.height || height;
  const sourceAspect = sourceWidth / sourceHeight;
  const outputAspect = width / height;
  let preparedSource = source;
  if (Math.abs(sourceAspect - outputAspect) > 0.001) {
    if (!state.fitCanvas) state.fitCanvas = document.createElement("canvas");
    if (state.fitCanvas.width !== width || state.fitCanvas.height !== height) {
      state.fitCanvas.width = width;
      state.fitCanvas.height = height;
    }
    const fitContext = srgb2dContext(state.fitCanvas);
    fitContext.fillStyle = "#000";
    fitContext.fillRect(0, 0, width, height);
    const scale = Math.min(width / sourceWidth, height / sourceHeight);
    const drawWidth = sourceWidth * scale;
    const drawHeight = sourceHeight * scale;
    fitContext.drawImage(source, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
    preparedSource = state.fitCanvas;
  }
  const frameSource = renderExportColorFrame(preparedSource, colorClip, width, height);

  if (transition?.type === "zoom" && progress < 1) {
    const scale = 1 + 0.09 * (1 - progress);
    context.save();
    context.translate(width / 2, height / 2);
    context.scale(scale, scale);
    context.drawImage(frameSource, -width / 2, -height / 2, width, height);
    context.restore();
  } else {
    context.drawImage(frameSource, 0, 0, width, height);
  }

  if (transition && progress < 1 && (transition.type === "fade" || transition.type === "flash")) {
    context.fillStyle = transition.type === "flash"
      ? `rgba(255, 255, 255, ${1 - progress})`
      : `rgba(0, 0, 0, ${1 - progress})`;
    context.fillRect(0, 0, width, height);
  }
}

function drawBaseFadeOverlay(context, width, height, time) {
  const clip = state.sequenceClips.find((item) => time >= item.start && time < item.end) || activeSequenceClip();
  const fade = clipFadeFactor(clip, time);
  if (fade >= 0.999) return;
  context.save();
  context.fillStyle = `rgba(0, 0, 0, ${1 - fade})`;
  context.fillRect(0, 0, width, height);
  context.restore();
}

function downloadFile(content, extension, mimeType) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.videoName}.${extension}`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function even(value) {
  const rounded = Math.max(2, Math.round(value));
  return rounded % 2 === 0 ? rounded : rounded - 1;
}

function outputDimensions(preset) {
  const aspect = projectAspectRatio();
  const sizes = {
    "video-720": { short: 720, long: 1280 },
    "video-1080": { short: 1080, long: 1920 },
    "video-4k": { short: 2160, long: 3840 },
  };
  const target = sizes[preset] || sizes["video-1080"];

  if (aspect >= 1) {
    let height = target.short;
    let width = height * aspect;
    if (width > target.long) {
      width = target.long;
      height = width / aspect;
    }
    return { width: even(width), height: even(height) };
  }

  let width = target.short;
  let height = width / aspect;
  if (height > target.long) {
    height = target.long;
    width = height * aspect;
  }
  return { width: even(width), height: even(height) };
}

function wrapCanvasText(context, text, maxWidth) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (line && context.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function wrapCanvasWords(context, words, maxWidth) {
  const lines = [];
  let line = [];
  let lineWidth = 0;
  words.forEach((word, index) => {
    const width = context.measureText(word).width;
    const space = line.length ? context.measureText(" ").width : 0;
    if (line.length && lineWidth + space + width > maxWidth) {
      lines.push(line);
      line = [];
      lineWidth = 0;
    }
    line.push({ text: word, index });
    lineWidth += (line.length > 1 ? context.measureText(" ").width : 0) + width;
  });
  if (line.length) lines.push(line);
  return lines;
}

function prepareCaptionCanvasStyle(context, fontSize, fontFamily = captionFontFamily()) {
  context.font = `800 ${fontSize}px ${fontFamily}`;
  context.textBaseline = "middle";
  const previewHeight = Math.max(elements.videoShell.clientHeight, 600);
  const outlineWidth = Math.round(((Number(elements.captionOutlineWidth.value) || 0) / previewHeight) * context.canvas.height);
  context.lineJoin = "round";
  context.lineWidth = Math.max(0, outlineWidth * 2);
  context.strokeStyle = elements.captionOutlineColor.value;
  context.shadowColor = elements.captionShadow.checked ? "rgba(0, 0, 0, 0.9)" : "transparent";
  context.shadowBlur = elements.captionShadow.checked ? Math.max(4, Math.round(fontSize * 0.12)) : 0;
  context.shadowOffsetY = elements.captionShadow.checked ? Math.max(2, Math.round(fontSize * 0.06)) : 0;
}

function drawStyledCaptionText(context, text, x, y, color) {
  if (context.lineWidth > 0) context.strokeText(text, x, y);
  context.fillStyle = color;
  context.fillText(text, x, y);
}

function setEditorialCanvasFont(context, size, impact = false) {
  context.font = `${impact ? "italic 800" : "600"} ${Math.round(size)}px ${captionFontFamily()}`;
  context.textBaseline = "middle";
}

function layoutEditorialCanvasWords(context, cue, maxWidth, requestedSize) {
  const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
  const impactIndex = captionImpactWordIndex(cue.text);
  let baseSize = requestedSize;
  let lines = [];

  for (let attempt = 0; attempt < 8; attempt += 1) {
    setEditorialCanvasFont(context, baseSize);
    const spaceWidth = context.measureText(" ").width;
    const items = words.map((text, index) => {
      const impact = index === impactIndex;
      const size = impact ? baseSize * 1.58 : baseSize;
      setEditorialCanvasFont(context, size, impact);
      return { text, impact, size, width: context.measureText(text).width };
    });
    lines = [];
    let line = [];
    let width = 0;
    items.forEach((item) => {
      const nextWidth = width + (line.length ? spaceWidth : 0) + item.width;
      if (line.length && nextWidth > maxWidth) {
        lines.push({ items: line, width });
        line = [];
        width = 0;
      }
      line.push(item);
      width += (line.length > 1 ? spaceWidth : 0) + item.width;
    });
    if (line.length) lines.push({ items: line, width });
    if (lines.length <= 2) break;
    baseSize *= 0.91;
  }

  lines.forEach((line) => {
    line.height = Math.max(...line.items.map((item) => item.size), baseSize) * 1.04;
  });
  return { lines: lines.slice(0, 2), baseSize, impactIndex };
}

function drawEditorialCaptionFrame(context, cue, width, height, time, motion) {
  const format = captionFormatForDimensions(width, height);
  const referenceHeight = format === "vertical" ? 1920 : 1080;
  const requestedSize = scaledCaptionFontSize(height, format);
  const position = captionPositionForDimensions(width, height, cue);
  const safeWidth = width * (format === "vertical" ? 0.84 : 0.9);
  const layout = layoutEditorialCanvasWords(context, cue, safeWidth, requestedSize);
  const totalHeight = layout.lines.reduce((sum, line) => sum + line.height, 0);
  const impactMotion = editorialImpactMotion(cue, time, requestedSize * 0.26);
  let lineY = -totalHeight / 2;

  context.save();
  context.globalAlpha = motion.alpha;
  context.translate(width * position.x / 100, height * position.y / 100 + motion.y);
  context.scale(motion.scale, motion.scale);
  if (motion.blur) context.filter = `blur(${motion.blur * height / referenceHeight}px)`;
  context.lineWidth = 0;
  context.shadowColor = "rgba(0, 0, 0, 0.5)";
  context.shadowBlur = requestedSize * 0.28;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = requestedSize * 0.11;

  layout.lines.forEach((line) => {
    const normalSpace = (() => {
      setEditorialCanvasFont(context, layout.baseSize);
      return context.measureText(" ").width;
    })();
    let x = -line.width / 2;
    const centerY = lineY + line.height / 2;
    line.items.forEach((item, itemIndex) => {
      if (itemIndex) x += normalSpace;
      if (item.impact) {
        context.save();
        context.globalAlpha *= impactMotion.alpha;
        context.translate(x + item.width / 2, centerY + impactMotion.y);
        context.scale(impactMotion.scale, impactMotion.scale);
        setEditorialCanvasFont(context, item.size, true);
        context.textAlign = "center";
        drawStyledCaptionText(context, item.text, 0, 0, elements.captionHighlightColor.value);
        context.restore();
      } else {
        setEditorialCanvasFont(context, item.size);
        context.textAlign = "left";
        drawStyledCaptionText(context, item.text, x, centerY, elements.captionTextColor.value);
      }
      x += item.width;
    });
    lineY += line.height;
  });
  context.restore();
}

function drawCaptionCompositionFrame(context, width, height, time) {
  const active = activeCompositionPartsAt(time);
  if (!active.length) return false;
  const format = captionFormatForDimensions(width, height);
  const baseSize = scaledCaptionFontSize(height, format);
  const safeWidth = width * (format === "vertical" ? 0.84 : 0.9);

  active.forEach(({ part }) => {
    const position = part.positions[format] || part.positions.vertical;
    const fontSize = Math.max(4, baseSize * part.scale);
    const motion = compositionPartMotion(part, time);
    const lineHeight = fontSize * (part.role === "impact" ? 0.94 : 1.04);
    const weight = part.role === "impact" ? "italic 800" : part.role === "lead" ? "600" : "500";
    context.save();
    context.font = `${weight} ${fontSize}px ${captionFontFamily()}`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    const lines = wrapCanvasText(context, transformCaptionCase(part.text), safeWidth).slice(0, 2);
    const totalHeight = lines.length * lineHeight;
    context.globalAlpha = motion.alpha;
    context.translate(
      width * position.x / 100,
      height * position.y / 100 + motion.y * fontSize,
    );
    context.scale(motion.scale, motion.scale);
    if (motion.blur) context.filter = `blur(${motion.blur * fontSize}px)`;
    context.fillStyle = part.role === "impact"
      ? elements.captionHighlightColor.value
      : elements.captionTextColor.value;
    context.shadowColor = elements.captionShadow.checked ? "rgba(0, 0, 0, 0.5)" : "transparent";
    context.shadowBlur = elements.captionShadow.checked ? fontSize * 0.28 : 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = elements.captionShadow.checked ? fontSize * 0.11 : 0;
    lines.forEach((line, index) => {
      context.fillText(line, 0, -totalHeight / 2 + lineHeight * (index + 0.5));
    });
    context.restore();
  });
  return true;
}

function drawStandardCaptionFrame(context, width, height, time) {
  const cue = state.cues.find((item) => time >= item.start && time < item.end);
  if (!cue || !cue.text.trim()) return;

  const format = captionFormatForDimensions(width, height);
  const fontSize = scaledCaptionFontSize(height, format);
  const lineHeight = fontSize * 1.18;
  const paddingX = fontSize * 0.35;
  const paddingY = fontSize * 0.2;
  const motion = captionMotion(cue, time, height * 0.045);
  if (state.captionTemplate === "editorial") {
    drawEditorialCaptionFrame(context, cue, width, height, time, motion);
    return;
  }
  prepareCaptionCanvasStyle(context, fontSize);
  context.textAlign = "center";
  const position = captionPositionForDimensions(width, height, cue);
  const centerX = width * (position.x / 100);
  const centerY = height * (position.y / 100);
  const safeWidth = Math.max(width * 0.34, Math.min(width * 0.86, Math.min(centerX, width - centerX) * 1.85));
  const displayText = state.captionTemplate === "duo" ? transformCaptionCase(cue.text) : motion.text;
  const lines = wrapCanvasText(context, displayText, safeWidth);
  const blockHeight = lines.length * lineHeight;
  const firstLineY = -blockHeight / 2 + lineHeight / 2;

  context.save();
  context.globalAlpha = motion.alpha;
  context.translate(centerX, centerY + motion.y);
  context.scale(motion.scale, motion.scale);

  if (state.captionTemplate === "duo") {
    const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
    const splitAt = Math.max(1, Math.floor(words.length / 2));
    const primary = words.slice(0, splitAt).join(" ");
    const accent = words.slice(splitAt).join(" ") || words[0] || "";
    const primarySize = Math.round(fontSize * 0.82);
    let accentSize = Math.round(fontSize * 1.22);
    prepareCaptionCanvasStyle(context, primarySize, FONT_FAMILIES.strong);
    const primaryWidth = context.measureText(primary).width;
    prepareCaptionCanvasStyle(context, accentSize, FONT_FAMILIES.editorial);
    if (context.measureText(accent).width > safeWidth) {
      accentSize = Math.max(fontSize * 0.6, accentSize * safeWidth / context.measureText(accent).width);
      prepareCaptionCanvasStyle(context, accentSize, FONT_FAMILIES.editorial);
    }
    const accentWidth = context.measureText(accent).width;
    const duoHeight = primarySize + accentSize * 0.95;
    if (elements.captionBackground.checked) {
      context.fillStyle = hexToRgba(elements.captionBackgroundColor.value, 0.74);
      context.fillRect(-Math.max(primaryWidth, accentWidth) / 2 - paddingX, -duoHeight / 2 - paddingY, Math.max(primaryWidth, accentWidth) + paddingX * 2, duoHeight + paddingY * 2);
    }
    prepareCaptionCanvasStyle(context, primarySize, FONT_FAMILIES.strong);
    context.textAlign = "center";
    drawStyledCaptionText(context, primary, 0, -accentSize * 0.42, elements.captionTextColor.value);
    prepareCaptionCanvasStyle(context, accentSize, FONT_FAMILIES.editorial);
    context.font = `italic 700 ${accentSize}px ${FONT_FAMILIES.editorial}`;
    drawStyledCaptionText(context, accent, 0, primarySize * 0.38, elements.captionHighlightColor.value);
    context.restore();
    return;
  }

  if (elements.captionBackground.checked) {
    const widest = Math.max(...lines.map((line) => context.measureText(line).width), 0);
    context.fillStyle = hexToRgba(elements.captionBackgroundColor.value, 0.74);
    context.fillRect(
      -widest / 2 - paddingX,
      -blockHeight / 2 - paddingY,
      widest + paddingX * 2,
      blockHeight + paddingY * 2,
    );
  }

  if (state.captionMode === "karaoke") {
    const words = transformCaptionCase(cue.text).trim().split(/\s+/).filter(Boolean);
    const wordLines = wrapCanvasWords(context, words, safeWidth);
    const karaokeHeight = wordLines.length * lineHeight;
    const firstKaraokeY = -karaokeHeight / 2 + lineHeight / 2;
    const currentIndex = currentCaptionWordIndex(cue, time);
    context.textAlign = "left";
    wordLines.forEach((line, lineIndex) => {
      const lineWidth = line.reduce((total, word, index) => total + context.measureText(word.text).width + (index ? context.measureText(" ").width : 0), 0);
      let x = -lineWidth / 2;
      line.forEach((word, wordIndex) => {
        if (wordIndex) x += context.measureText(" ").width;
        drawStyledCaptionText(
          context,
          word.text,
          x,
          firstKaraokeY + lineIndex * lineHeight,
          word.index === currentIndex ? elements.captionHighlightColor.value : elements.captionTextColor.value,
        );
        x += context.measureText(word.text).width;
      });
    });
  } else {
    context.textAlign = "center";
    lines.forEach((line, index) => drawStyledCaptionText(context, line, 0, firstLineY + index * lineHeight, elements.captionTextColor.value));
  }
  context.restore();
}

function drawCaptionFrame(context, width, height, time) {
  const cue = state.cues.find((item) => time >= item.start && time < item.end);
  if (cue && !compositionForCue(cue)) {
    drawStandardCaptionFrame(context, width, height, time);
  }
  drawCaptionCompositionFrame(context, width, height, time);
}

function supportedRecordingType() {
  // MediaRecorder encodes in real time. HEVC regularly falls behind on iPhone,
  // producing a valid file with visibly missing frames. AVC is the stable SDR
  // path shared by preview, LUT composition and export.
  const types = [
    "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    "video/mp4",
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8,opus",
    "video/webm",
  ];
  return types.find((type) => window.MediaRecorder?.isTypeSupported(type)) || "";
}

function createCompatibleMediaRecorder(stream, mimeType, videoBitsPerSecond) {
  const options = [
    { mimeType, videoBitsPerSecond },
    { mimeType },
    {},
  ];
  for (const option of options) {
    try {
      return new MediaRecorder(stream, option);
    } catch {
      // Safari can reject a supported MIME type when a resolution/bitrate pair is too demanding.
    }
  }
  throw new Error("O Safari não conseguiu iniciar o codificador de vídeo.");
}

async function audioTracksForExport() {
  const needsMixGraph = state.audioClips.some(clipTrackIsVisible)
    || state.overlayVideoClips.some(clipTrackIsVisible)
    || !trackIsVisible("video", "base")
    || state.sequenceClips.length > 1
    || state.sequenceClips.some((clip) => Math.abs((clip.volume ?? 1) - 1) > 0.001 || clipHasFadeAutomation(clip));
  if (needsMixGraph) {
    return audioTracksFromMixGraph();
  }
  const captureVideo = elements.video.captureStream || elements.video.mozCaptureStream;
  if (captureVideo) {
    const stream = captureVideo.call(elements.video);
    const tracks = stream.getAudioTracks();
    if (tracks.length) return tracks;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return [];
  if (!state.audioContext) {
    state.audioContext = new AudioContextClass();
    state.audioSource = state.audioContext.createMediaElementSource(elements.video);
    state.mainAudioGain = state.audioContext.createGain();
    state.audioDestination = state.audioContext.createMediaStreamDestination();
    state.audioSource.connect(state.mainAudioGain);
    state.mainAudioGain.connect(state.audioDestination);
    state.mainAudioGain.connect(state.audioContext.destination);
  }
  if (state.audioContext.state === "suspended") await state.audioContext.resume();
  return state.audioDestination.stream.getAudioTracks();
}

async function audioTracksFromMixGraph() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return [];
  if (!state.audioContext) state.audioContext = new AudioContextClass();
  if (!state.audioDestination) state.audioDestination = state.audioContext.createMediaStreamDestination();
  if (!state.audioSource) {
    state.audioSource = state.audioContext.createMediaElementSource(elements.video);
    state.mainAudioGain = state.audioContext.createGain();
    state.audioSource.connect(state.mainAudioGain);
    state.mainAudioGain.connect(state.audioDestination);
    state.mainAudioGain.connect(state.audioContext.destination);
  }
  state.mainAudioGain.gain.value = clamp(clipOutputVolume(activeSequenceClip()), 0, 2);
  [...state.audioClips, ...state.overlayVideoClips].forEach((clip) => {
    if (state.audioTrackNodes.has(clip.id)) return;
    const mediaElement = clip.type === "video" ? clip.audioElement || clip.mediaElement : clip.audioElement;
    const source = state.audioContext.createMediaElementSource(mediaElement);
    const gain = state.audioContext.createGain();
    gain.gain.value = clamp(clip.volume ?? 1, 0, 2);
    source.connect(gain);
    gain.connect(state.audioDestination);
    gain.connect(state.audioContext.destination);
    state.audioTrackNodes.set(clip.id, { source, gain });
  });
  if (state.audioContext.state === "suspended") await state.audioContext.resume();
  return state.audioDestination.stream.getAudioTracks();
}

function scheduleClipGainAutomation(gainParam, clip, sourceStart, sourceEnd, outputStart, volume = 1) {
  const segments = editableSegmentsForClip(clip);
  const points = new Set([sourceStart, sourceEnd]);
  segments.forEach((segment) => {
    if (segment.end < sourceStart || segment.start > sourceEnd) return;
    const settings = segmentFadeSettings(clip, segment);
    const fadeInEnd = segment.start + Math.max(0, Number(settings.fadeIn) || 0);
    const fadeOutStart = segment.end - Math.max(0, Number(settings.fadeOut) || 0);
    [segment.start, fadeInEnd, fadeOutStart, segment.end].forEach((time) => {
      if (time > sourceStart && time < sourceEnd) points.add(time);
    });
  });

  const valueAt = (time) => {
    const segment = segments.find((item) => time >= item.start && time <= item.end);
    return clamp(volume, 0, 2) * (segment ? segmentFadeFactor(segment, segmentFadeSettings(clip, segment), time) : 1);
  };
  const ordered = [...points].sort((a, b) => a - b);
  gainParam.setValueAtTime(valueAt(ordered[0]), outputStart);
  ordered.slice(1).forEach((time) => {
    gainParam.linearRampToValueAtTime(valueAt(time), outputStart + time - sourceStart);
  });
}

function applyClipGainToAudioBuffer(buffer, clip, timelineStart, volume = 1) {
  const segments = editableSegmentsForClip(clip);
  if (!segments.length) return buffer;
  const sampleRate = buffer.sampleRate;
  const baseVolume = clamp(volume, 0, 2);
  if (Math.abs(baseVolume - 1) < 0.000001 && !clipHasFadeAutomation(clip)) return buffer;
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, channel) => buffer.getChannelData(channel));
  let segmentIndex = Math.max(0, segments.findIndex((segment) => timelineStart < segment.end));
  for (let sample = 0; sample < buffer.length; sample += 1) {
    const time = timelineStart + sample / sampleRate;
    while (segmentIndex < segments.length - 1 && time > segments[segmentIndex].end) segmentIndex += 1;
    const segment = segments[segmentIndex];
    const factor = segment && time >= segment.start && time <= segment.end
      ? segmentFadeFactor(segment, segmentFadeSettings(clip, segment), time)
      : 1;
    const gain = baseVolume * factor;
    channels.forEach((channel) => (channel[sample] *= gain));
  }
  return buffer;
}

function releaseExportSurfaces() {
  elements.renderCanvas.width = 1;
  elements.renderCanvas.height = 1;
  elements.lutRenderCanvas.width = 1;
  elements.lutRenderCanvas.height = 1;
  state.lutExportSurfaces.forEach(({ canvas, rendererKey }) => {
    const renderer = state[rendererKey];
    renderer?.gl.getExtension("WEBGL_lose_context")?.loseContext();
    delete state[rendererKey];
    canvas.width = 1;
    canvas.height = 1;
  });
  state.lutExportSurfaces.clear();
  if (state.fitCanvas) {
    state.fitCanvas.width = 1;
    state.fitCanvas.height = 1;
  }
}

async function renderMixedAudioBuffer(sourceDuration, editedDuration, hasBaseAudio = true) {
  const OfflineAudioContextClass = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OfflineAudioContextClass) throw new Error("Este Safari não oferece mixagem de áudio offline.");
  const sampleRate = 44_100;
  const offline = new OfflineAudioContextClass(2, Math.max(1, Math.ceil(editedDuration * sampleRate)), sampleRate);

  if (hasBaseAudio && trackIsVisible("video", "base")) {
    for (const clip of state.sequenceClips) {
      let buffer;
      try {
        buffer = await decodeAudioBufferForMix(clip.file, offline);
      } catch (error) {
        console.warn(`Áudio ignorado durante a mixagem: ${clip.name || "vídeo"}`, error);
        continue;
      }
      const rate = clipPlaybackRate(clip);
      const ranges = keptSourceSegments(sourceDuration).flatMap((kept) => (
        visibleSequenceSegments(clip)
          .map((visible) => ({ start: Math.max(kept.start, visible.start), end: Math.min(kept.end, visible.end) }))
          .filter((range) => range.end - range.start > 0.000001)
      ));
      ranges.forEach((segment) => {
        const mediaOffset = (clip.sourceOffset || 0) + (segment.start - clip.start) * rate;
        const timelineDuration = segment.end - segment.start;
        const mediaDuration = Math.min(timelineDuration * rate, buffer.duration - mediaOffset);
        if (mediaDuration <= 0) return;
        const source = offline.createBufferSource();
        const gain = offline.createGain();
        source.buffer = buffer;
        source.playbackRate.value = rate;
        const outputStart = editedTime(segment.start);
        scheduleClipGainAutomation(
          gain.gain,
          clip,
          segment.start,
          segment.start + mediaDuration / rate,
          outputStart,
          clipOutputVolume(clip),
        );
        source.connect(gain);
        gain.connect(offline.destination);
        source.start(outputStart, mediaOffset, mediaDuration);
      });
    }
  }

  const mixTimelineClip = async (clip) => {
    if (!clipTrackIsVisible(clip)) return;
    let buffer;
    try {
      buffer = await decodeAudioBufferForMix(clip.file, offline);
    } catch (error) {
      console.warn(`Áudio ignorado durante a mixagem: ${clip.name || "mídia"}`, error);
      return;
    }
    const rate = clipPlaybackRate(clip);
    const availableTimelineDuration = Math.max(0, buffer.duration - (clip.sourceOffset || 0)) / rate;
    const availableEnd = Math.min(clipEffectiveEnd(clip), clip.start + availableTimelineDuration);
    keptSourceSegments(sourceDuration).forEach((kept) => {
      const sourceStart = Math.max(clip.start, kept.start);
      const sourceEnd = Math.min(availableEnd, kept.end);
      if (sourceEnd - sourceStart <= 0.000001) return;
      const outputStart = clamp(editedTime(sourceStart), 0, editedDuration);
      const timelineDuration = Math.min(sourceEnd - sourceStart, editedDuration - outputStart);
      if (timelineDuration <= 0) return;
      const mediaOffset = (clip.sourceOffset || 0) + (sourceStart - clip.start) * rate;
      const mediaDuration = Math.min(timelineDuration * rate, buffer.duration - mediaOffset);
      if (mediaDuration <= 0) return;
      const source = offline.createBufferSource();
      const gain = offline.createGain();
      source.buffer = buffer;
      source.playbackRate.value = rate;
      scheduleClipGainAutomation(
        gain.gain,
        clip,
        sourceStart,
        sourceStart + mediaDuration / rate,
        outputStart,
        clipOutputVolume(clip),
      );
      source.connect(gain);
      gain.connect(offline.destination);
      source.start(outputStart, mediaOffset, mediaDuration);
    });
  };

  for (const clip of state.overlayVideoClips) {
    await mixTimelineClip(clip);
  }
  for (const clip of state.audioClips) {
    await mixTimelineClip(clip);
  }
  return offline.startRendering();
}

function optimizedPrimarySequenceAvailable() {
  const primary = state.sequenceClips[0];
  if (!primary?.file || primary.file !== state.videoFile) return false;
  return state.sequenceClips.every((clip) => clip.file && visibleSequenceSegments(clip).length > 0);
}

function waitForSeek(video) {
  return new Promise((resolve) => {
    if (Math.abs(video.currentTime) < 0.05) {
      resolve();
      return;
    }
    video.addEventListener("seeked", resolve, { once: true });
    video.currentTime = 0;
  });
}

function isIOSDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function selectedExportFrameRate() {
  const value = Number(elements.exportFrameRate.value);
  return [24, 30, 60].includes(value) ? value : 30;
}

function selectedExportColorMode() {
  return "sdr";
}

function srgb2dContext(canvas) {
  try {
    return canvas.getContext("2d", { alpha: false, colorSpace: "srgb", colorType: "unorm8" });
  } catch {
    return canvas.getContext("2d", { alpha: false });
  }
}

function prepareExportCanvas(width, height) {
  let canvas = elements.renderCanvas;
  if (canvas.dataset.colorMode && canvas.dataset.colorMode !== "sdr") {
    const replacement = canvas.cloneNode(false);
    canvas.replaceWith(replacement);
    elements.renderCanvas = replacement;
    canvas = replacement;
  }
  canvas.dataset.colorMode = "sdr";
  const context = srgb2dContext(canvas);
  canvas.width = width;
  canvas.height = height;
  return { canvas, context };
}

async function optimizedVideoEncoding(mediabunny, width, height, bitrate, frameRate) {
  const common = {
    width,
    height,
    bitrate,
    framerate: frameRate,
    hardwareAcceleration: "prefer-hardware",
    latencyMode: "quality",
  };

  try {
    if (await mediabunny.canEncodeVideo("avc", common)) {
      return { codec: "avc", options: common };
    }
  } catch {
    // The caller will use the compatible real-time exporter.
  }
  return null;
}

function exportVideoBitrate(preset, frameRate) {
  const base = preset === "video-4k"
    ? (isIOSDevice() ? 18_000_000 : 28_000_000)
    : preset === "video-1080"
      ? 12_000_000
      : 6_000_000;
  const frameRateFactor = frameRate === 60 ? 1.6 : frameRate === 24 ? 0.9 : 1;
  return Math.round(base * frameRateFactor);
}

function mergedBaseRippleCuts(sourceDuration = Infinity) {
  const ranges = state.cuts
    .filter((cut) => isBaseCut(cut) && cut.ripple !== false)
    .map((cut) => ({
      start: clamp(Number(cut.start) || 0, 0, sourceDuration),
      end: clamp(Number(cut.end) || 0, 0, sourceDuration),
    }))
    .filter((cut) => cut.end - cut.start > 0.000001)
    .sort((a, b) => a.start - b.start || a.end - b.end);

  return ranges.reduce((merged, range) => {
    const previous = merged.at(-1);
    if (previous && range.start <= previous.end + 0.000001) {
      previous.end = Math.max(previous.end, range.end);
    } else {
      merged.push({ ...range });
    }
    return merged;
  }, []);
}

function sourceTimeAtEditedTime(outputTime, sourceDuration) {
  let sourceCursor = 0;
  let outputCursor = 0;
  for (const cut of mergedBaseRippleCuts(sourceDuration)) {
    const keptDuration = cut.start - sourceCursor;
    if (outputTime < outputCursor + keptDuration - 0.000001) {
      return clamp(sourceCursor + outputTime - outputCursor, 0, Math.max(0, sourceDuration - 0.000001));
    }
    outputCursor += keptDuration;
    sourceCursor = cut.end;
  }
  return clamp(sourceCursor + outputTime - outputCursor, 0, Math.max(0, sourceDuration - 0.000001));
}

function keptSourceSegments(sourceDuration) {
  const segments = [];
  let cursor = 0;
  mergedBaseRippleCuts(sourceDuration).forEach((cut) => {
    if (cut.start - cursor > 0.000001) segments.push({ start: cursor, end: cut.start });
    cursor = cut.end;
  });
  if (sourceDuration - cursor > 0.000001) segments.push({ start: cursor, end: sourceDuration });
  return segments;
}

function transitionAtEditedTime(outputTime) {
  for (const cut of state.cuts.filter((item) => isBaseCut(item) && item.ripple !== false)) {
    if (cut.transition === "cut") continue;
    const duration = cut.transition === "flash" ? 0.32 : 0.44;
    const elapsed = outputTime - editedTime(cut.start);
    if (elapsed >= 0 && elapsed < duration) {
      return { type: cut.transition, progress: clamp(elapsed / duration) };
    }
  }
  return null;
}

function trimmedAudioBuffer(wrapped, rangeStart, rangeEnd) {
  const buffer = wrapped.buffer;
  const sampleRate = buffer.sampleRate;
  const overlapStart = Math.max(rangeStart, wrapped.timestamp);
  const overlapEnd = Math.min(rangeEnd, wrapped.timestamp + wrapped.duration);
  if (overlapEnd - overlapStart <= 0.000001) return null;

  const firstSample = clamp(Math.round((overlapStart - wrapped.timestamp) * sampleRate), 0, buffer.length);
  const lastSample = clamp(Math.round((overlapEnd - wrapped.timestamp) * sampleRate), firstSample, buffer.length);
  const length = lastSample - firstSample;
  if (!length) return null;

  const trimmed = new AudioBuffer({
    length,
    numberOfChannels: buffer.numberOfChannels,
    sampleRate,
  });
  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    trimmed.copyToChannel(buffer.getChannelData(channel).subarray(firstSample, lastSample), channel);
  }
  return trimmed;
}

function openExportPreflight() {
  updateCommercialVariantLabel();
  elements.exportModal.hidden = false;
  elements.exportTitle.textContent = "Finalizar vídeo";
  elements.exportStatus.textContent = "Revise esta opção antes de começar a exportação.";
  elements.exportOptions.hidden = false;
  elements.renderSymbol.hidden = true;
  elements.renderProgress.hidden = true;
  elements.exportPercent.hidden = true;
  elements.startExportButton.hidden = false;
  elements.startExportButton.disabled = false;
  elements.saveExportButton.hidden = true;
  elements.cancelExportButton.textContent = "Cancelar";
}

function showExportRenderingUi() {
  elements.exportOptions.hidden = true;
  elements.renderSymbol.hidden = false;
  elements.renderProgress.hidden = false;
  elements.exportPercent.hidden = false;
  elements.startExportButton.hidden = true;
  elements.startExportButton.disabled = false;
}

async function appendCommercialForExport() {
  const commercial = COMMERCIAL_EXPORTS[commercialExportVariant()];
  const response = await fetch(commercial.url, { cache: "force-cache" });
  if (!response.ok) throw new Error("Não foi possível carregar o comercial.");
  const blob = await response.blob();
  const file = new File([blob], commercial.name, { type: blob.type || "video/mp4" });
  const url = URL.createObjectURL(file);
  let probe;
  try {
    probe = await loadVideoElement(url, true);
    const browserMediaStart = clipBrowserMediaStart(null, probe);
    const duration = mediaElementPlayableDuration(probe) || 10;
    const clip = {
      id: crypto.randomUUID(),
      type: "sequence",
      name: commercial.name,
      file,
      url,
      duration,
      sourceDuration: duration,
      width: probe.videoWidth,
      height: probe.videoHeight,
      start: 0,
      end: 0,
      volume: 1,
      playbackRate: 1,
      sourceSpan: duration,
      browserMediaStart,
      lut: null,
      lutPresetId: null,
      lutIntensity: 0,
      videoAdjustments: { ...DEFAULT_VIDEO_ADJUSTMENTS },
      exportCommercial: true,
    };
    state.sequenceClips.push(clip);
    refreshSequenceTiming();
    return clip;
  } catch (error) {
    URL.revokeObjectURL(url);
    throw error;
  } finally {
    if (probe) {
      probe.removeAttribute("src");
      probe.load();
    }
  }
}

async function removeCommercialAfterExport(clip, restoreTime) {
  if (!clip) return;
  const commercialWasActive = elements.video.currentSrc === clip.url || elements.video.src === clip.url;
  state.sequenceClips = state.sequenceClips.filter((item) => item.id !== clip.id);
  refreshSequenceTiming();
  state.activeSequenceIndex = clamp(state.activeSequenceIndex, 0, Math.max(0, state.sequenceClips.length - 1));
  if (commercialWasActive && state.sequenceClips.length) {
    await seekProjectTime(clamp(restoreTime, 0, Math.max(0, projectDuration() - 0.001)), false).catch(() => {});
  }
  URL.revokeObjectURL(clip.url);
  updatePlayer();
}

function setExportProgress(progress, width, height, frameRate, currentTime, duration, detail = "quadros precisos") {
  const percent = clamp(progress * 100, 0, 100);
  elements.exportProgress.style.width = `${percent}%`;
  elements.exportPercent.textContent = `${Math.round(percent)}%`;
  elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · ${detail} · ${formatClock(currentTime)} de ${formatClock(duration)}`;
}

async function renderCaptionedVideoOptimized(preset) {
  const gridClipIds = new Set(state.videoGridClipIds);
  const unsupportedOverlayVideo = state.overlayVideoClips.some((clip) => (
    clipTrackIsVisible(clip)
    && (state.videoGridMode < 2 || !gridClipIds.has(clip.id))
  ));
  if (
    !state.videoFile
    || !optimizedPrimarySequenceAvailable()
    || unsupportedOverlayVideo
    || [...state.sequenceClips, ...state.overlayVideoClips, ...state.audioClips]
      .some((clip) => Math.abs(clipPlaybackRate(clip) - 1) > 0.001)
    || state.cuts.some((cut) => !isBaseCut(cut))
    || !window.VideoEncoder
    || !window.VideoDecoder
  ) return false;

  const mediabunny = await import("./vendor/mediabunny-1.48.1.min.mjs");
  const { width, height } = outputDimensions(preset);
  const frameRate = selectedExportFrameRate();
  const videoBitrate = exportVideoBitrate(preset, frameRate);
  const input = new mediabunny.Input({
    formats: mediabunny.ALL_FORMATS,
    source: new mediabunny.BlobSource(state.videoFile, {
      useStreamReader: true,
      maxCacheSize: isIOSDevice() ? 4 * 1024 * 1024 : 8 * 1024 * 1024,
    }),
  });

  const videoTrack = await input.getPrimaryVideoTrack();
  const audioTrack = await input.getPrimaryAudioTrack();
  if (!videoTrack || !(await videoTrack.canDecode())) {
    input.dispose();
    return false;
  }

  const videoEncoding = await optimizedVideoEncoding(mediabunny, width, height, videoBitrate, frameRate);
  if (!videoEncoding) {
    input.dispose();
    return false;
  }
  const { canvas, context } = prepareExportCanvas(width, height);

  let audioMode = null;
  let audioSettings = null;
  let audioDecoderConfig = null;
  const baseClip = state.sequenceClips[0];
  const needsAudioMix = state.sequenceClips.length > 1
    || state.audioClips.some(clipTrackIsVisible)
    || state.overlayVideoClips.some(clipTrackIsVisible);
  const baseOutputVolume = clipOutputVolume(baseClip);
  const needsBaseAudioProcessing = Math.abs(baseOutputVolume - 1) > 0.001 || clipHasFadeAutomation(baseClip);
  if (needsAudioMix) {
    const OfflineAudioContextClass = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!window.AudioEncoder || !OfflineAudioContextClass) {
      input.dispose();
      return false;
    }
    const canEncodeAudio = await mediabunny.canEncodeAudio("aac", {
      numberOfChannels: 2,
      sampleRate: 44_100,
      bitrate: 192_000,
    });
    if (!canEncodeAudio) {
      input.dispose();
      return false;
    }
    audioMode = "mix";
    audioSettings = { numberOfChannels: 2, sampleRate: 44_100 };
  } else if (audioTrack) {
    const audioCodec = await audioTrack.getCodec();
    if (audioCodec === "aac" && !needsBaseAudioProcessing) {
      audioDecoderConfig = await audioTrack.getDecoderConfig();
      if (!audioDecoderConfig) {
        input.dispose();
        return false;
      }
      audioMode = "copy";
    } else {
      if (!window.AudioEncoder || !window.AudioDecoder || !(await audioTrack.canDecode())) {
        input.dispose();
        return false;
      }
      const numberOfChannels = await audioTrack.getNumberOfChannels();
      const sampleRate = await audioTrack.getSampleRate();
      const canEncodeAudio = await mediabunny.canEncodeAudio("aac", {
        numberOfChannels,
        sampleRate,
        bitrate: 192_000,
      });
      if (!canEncodeAudio) {
        input.dispose();
        return false;
      }
      audioSettings = { numberOfChannels, sampleRate };
      audioMode = "encode";
    }
  }

  const sourceDuration = state.sequenceClips.length > 1
    ? projectDuration()
    : await input.computeDuration();
  const editedDuration = keptSourceSegments(sourceDuration)
    .reduce((total, segment) => total + segment.end - segment.start, 0);
  if (editedDuration <= 0.01) {
    input.dispose();
    showToast("O vídeo inteiro está dentro dos cortes.");
    return true;
  }
  if (state.exportCanceled) throw new DOMException("Exportação cancelada", "AbortError");
  state.exporting = true;
  state.isCutSeeking = false;
  state.keepExportModalOpen = false;
  elements.exportButton.disabled = true;
  elements.exportModal.hidden = false;
  elements.exportTitle.textContent = "Renderizando vídeo";
  elements.saveExportButton.hidden = true;
  elements.cancelExportButton.textContent = "Cancelar";
  const exportColorDetail = "SDR / AVC";
  elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · ${exportColorDetail} · preparando quadros`;
  elements.exportProgress.style.width = "0%";
  elements.exportPercent.textContent = "0%";

  let output = null;
  let shouldFallback = false;
  const auxiliaryInputs = [];
  try {
    if (navigator.wakeLock?.request) {
      try {
        state.wakeLock = await navigator.wakeLock.request("screen");
      } catch {
        state.wakeLock = null;
      }
    }

    const target = new mediabunny.BufferTarget();
    output = new mediabunny.Output({
      // Keeping the MP4 metadata at the end avoids a second large in-memory copy on iPhone.
      format: new mediabunny.Mp4OutputFormat({ fastStart: isIOSDevice() ? false : "in-memory" }),
      target,
    });
    state.optimizedOutput = output;

    const videoSource = new mediabunny.CanvasSource(canvas, {
      codec: videoEncoding.codec,
      ...videoEncoding.options,
      keyFrameInterval: 2,
    });
    output.addVideoTrack(videoSource, { frameRate });

    let audioSource = null;
    if (audioTrack && audioMode === "copy") {
      audioSource = new mediabunny.EncodedAudioPacketSource("aac");
      output.addAudioTrack(audioSource);
    } else if ((audioMode === "encode" || audioMode === "mix") && audioSettings) {
      audioSource = new mediabunny.AudioBufferSource({
        codec: "aac",
        bitrate: 192_000,
        transform: audioSettings,
      });
      output.addAudioTrack(audioSource);
    }

    await output.start();
    const audioFirstTimestamp = audioTrack ? await audioTrack.getFirstTimestamp() : 0;
    const frameCount = Math.max(1, Math.ceil(editedDuration * frameRate));
    const sequenceDecoders = [];
    for (let clipIndex = 0; clipIndex < state.sequenceClips.length; clipIndex += 1) {
      const clip = state.sequenceClips[clipIndex];
      let clipInput = input;
      let clipTrack = videoTrack;
      if (clipIndex > 0) {
        clipInput = new mediabunny.Input({
          formats: mediabunny.ALL_FORMATS,
          source: new mediabunny.BlobSource(clip.file, {
            useStreamReader: true,
            maxCacheSize: isIOSDevice() ? 2 * 1024 * 1024 : 4 * 1024 * 1024,
          }),
        });
        auxiliaryInputs.push(clipInput);
        clipTrack = await clipInput.getPrimaryVideoTrack();
        if (!clipTrack || !(await clipTrack.canDecode())) {
          throw new Error(`Não foi possível decodificar ${clip.name || "um vídeo da sequência"}.`);
        }
      }
      const clipFirstTimestamp = await clipTrack.getFirstTimestamp();
      const clipInputDuration = await clipInput.computeDuration();
      const visibleSegments = visibleSequenceSegments(clip);
      const frameIndices = [];
      const timestamps = [];
      for (let frameIndex = 0; frameIndex < frameCount; frameIndex += 1) {
        const timelineTime = sourceTimeAtEditedTime(frameIndex / frameRate, sourceDuration);
        if (!visibleSegments.some((segment) => timelineTime >= segment.start && timelineTime < segment.end)) continue;
        const mediaTime = (clip.sourceOffset || 0) + (timelineTime - clip.start) * clipPlaybackRate(clip);
        frameIndices.push(frameIndex);
        timestamps.push(clipFirstTimestamp + clamp(mediaTime, 0, Math.max(0, clipInputDuration - 0.000001)));
      }
      const sink = new mediabunny.CanvasSink(clipTrack, { poolSize: 1 });
      sequenceDecoders.push({
        clip,
        frameIndices,
        cursor: 0,
        iterator: sink.canvasesAtTimestamps(timestamps)[Symbol.asyncIterator](),
        lastFrame: null,
      });
    }

    const gridDecoders = [];
    if (state.videoGridMode > 1) {
      for (const clip of state.overlayVideoClips.filter((item) => gridClipIds.has(item.id) && clipTrackIsVisible(item))) {
        const auxiliaryInput = new mediabunny.Input({
          formats: mediabunny.ALL_FORMATS,
          source: new mediabunny.BlobSource(clip.file, {
            useStreamReader: true,
            maxCacheSize: isIOSDevice() ? 2 * 1024 * 1024 : 4 * 1024 * 1024,
          }),
        });
        auxiliaryInputs.push(auxiliaryInput);
        const auxiliaryTrack = await auxiliaryInput.getPrimaryVideoTrack();
        if (!auxiliaryTrack || !(await auxiliaryTrack.canDecode())) {
          throw new Error(`Não foi possível decodificar ${clip.name || "um vídeo da grade"}.`);
        }
        const auxiliaryFirstTimestamp = await auxiliaryTrack.getFirstTimestamp();
        const auxiliaryDuration = await auxiliaryInput.computeDuration();
        const timestamps = Array.from({ length: frameCount }, (_, index) => {
          const timelineTime = sourceTimeAtEditedTime(index / frameRate, sourceDuration);
          const mediaTime = clipMediaTimeAtTimeline(clip, timelineTime);
          return auxiliaryFirstTimestamp + clamp(mediaTime, 0, Math.max(0, auxiliaryDuration - 0.000001));
        });
        const sink = new mediabunny.CanvasSink(auxiliaryTrack, {
          poolSize: 1,
        });
        gridDecoders.push({
          clip,
          iterator: sink.canvasesAtTimestamps(timestamps)[Symbol.asyncIterator](),
          lastFrame: null,
        });
      }
    }

    const encodeVideo = async () => {
      for (let frameIndex = 0; frameIndex < frameCount; frameIndex += 1) {
        if (!state.exporting) throw new DOMException("Exportação cancelada", "AbortError");
        const outputTime = frameIndex / frameRate;
        const sourceTime = sourceTimeAtEditedTime(outputTime, sourceDuration);
        const frameDuration = 1 / frameRate;
        const activeSequenceDecoder = sequenceDecoders.find((decoder) => (
          decoder.frameIndices[decoder.cursor] === frameIndex
        ));
        if (activeSequenceDecoder) {
          const decoded = await activeSequenceDecoder.iterator.next();
          activeSequenceDecoder.cursor += 1;
          if (!decoded.done && decoded.value) activeSequenceDecoder.lastFrame = decoded.value.canvas;
        }
        const activeBaseClip = activeSequenceDecoder?.clip
          || state.sequenceClips.find((clip) => sourceTime >= clip.start && sourceTime < clip.end);
        const baseFrame = activeSequenceDecoder?.lastFrame || null;
        if (activeBaseClip && baseTrackVisibleAtTime(sourceTime) && !baseFrame) {
          throw new Error(`Não foi possível decodificar um quadro de ${activeBaseClip.name || "um vídeo"}.`);
        }
        const decodedGridSources = new Map();
        for (const decoder of gridDecoders) {
          const decoded = await decoder.iterator.next();
          if (!decoded.done && decoded.value) decoder.lastFrame = decoded.value.canvas;
          if (decoder.lastFrame) decodedGridSources.set(decoder.clip.id, decoder.lastFrame);
        }
        context.fillStyle = "#000000";
        context.fillRect(0, 0, width, height);
        const drewGrid = drawVideoGridFrame(context, width, height, sourceTime, baseFrame, decodedGridSources);
        if (!drewGrid && baseFrame && baseTrackVisibleAtTime(sourceTime)) {
          drawVideoFrame(context, width, height, baseFrame, transitionAtEditedTime(outputTime), activeBaseClip);
          drawBaseFadeOverlay(context, width, height, sourceTime);
        }
        drawImageOverlays(context, width, height, sourceTime, decodedGridSources);
        drawCaptionFrame(context, width, height, sourceTime);
        const encodeOptions = { keyFrame: frameIndex % Math.max(1, frameRate * 2) === 0 };
        await videoSource.add(outputTime, frameDuration, encodeOptions);

        const renderedFrames = frameIndex + 1;
        if (renderedFrames === frameCount || renderedFrames % Math.max(1, Math.round(frameRate / 4)) === 0) {
          setExportProgress(
            renderedFrames / frameCount,
            width,
            height,
            frameRate,
            Math.min(editedDuration, outputTime),
            editedDuration,
            `${exportColorDetail} · quadros precisos`,
          );
          await new Promise((resolve) => requestAnimationFrame(resolve));
        }
      }
    };

    const encodeAudio = async () => {
      if (!audioSource) return;
      if (audioMode === "mix") {
        elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · misturando trilhas de áudio`;
        const mixedBuffer = await renderMixedAudioBuffer(
          sourceDuration,
          editedDuration,
          state.sequenceClips.some((clip) => Boolean(clip.file)),
        );
        if (!state.exporting) throw new DOMException("Exportação cancelada", "AbortError");
        await audioSource.add(mixedBuffer);
        return;
      }
      if (!audioTrack) return;
      const segments = keptSourceSegments(sourceDuration);

      if (audioMode === "copy") {
        const packetSink = new mediabunny.EncodedPacketSink(audioTrack);
        let segmentIndex = 0;
        let outputOffset = 0;
        let sequenceNumber = 0;
        let isFirstPacket = true;

        for await (const packet of packetSink.packets()) {
          if (!state.exporting) throw new DOMException("Exportação cancelada", "AbortError");
          while (segmentIndex < segments.length && packet.timestamp >= audioFirstTimestamp + segments[segmentIndex].end) {
            outputOffset += segments[segmentIndex].end - segments[segmentIndex].start;
            segmentIndex += 1;
          }
          if (segmentIndex >= segments.length) break;

          const segment = segments[segmentIndex];
          const absoluteStart = audioFirstTimestamp + segment.start;
          const absoluteEnd = audioFirstTimestamp + segment.end;
          const packetEnd = packet.timestamp + packet.duration;
          if (packetEnd <= absoluteStart || packet.timestamp >= absoluteEnd) continue;
          const overlapStart = Math.max(packet.timestamp, absoluteStart);
          const overlapEnd = Math.min(packetEnd, absoluteEnd);
          const copiedPacket = packet.clone({
            timestamp: outputOffset + overlapStart - absoluteStart,
            duration: overlapEnd - overlapStart,
            sequenceNumber,
          });
          await audioSource.add(
            copiedPacket,
            isFirstPacket ? { decoderConfig: audioDecoderConfig } : undefined,
          );
          sequenceNumber += 1;
          isFirstPacket = false;
        }
        return;
      }

      const audioSink = new mediabunny.AudioBufferSink(audioTrack);
      for (const segment of segments) {
        // Trim decoded buffers to the exact kept interval before concatenating them.
        const rangeStart = audioFirstTimestamp + segment.start;
        const rangeEnd = audioFirstTimestamp + segment.end;
        for await (const wrapped of audioSink.buffers(rangeStart, rangeEnd)) {
          if (!state.exporting) throw new DOMException("Exportação cancelada", "AbortError");
          const trimmed = trimmedAudioBuffer(wrapped, rangeStart, rangeEnd);
          if (trimmed) {
            const timelineStart = Math.max(rangeStart, wrapped.timestamp) - audioFirstTimestamp;
            applyClipGainToAudioBuffer(trimmed, baseClip, timelineStart, baseOutputVolume);
            await audioSource.add(trimmed);
          }
        }
      }
    };

    if (audioMode === "mix") {
      await encodeAudio();
      await encodeVideo();
    } else {
      await Promise.all([encodeVideo(), encodeAudio()]);
    }
    if (!state.exporting) throw new DOMException("Exportação cancelada", "AbortError");
    elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · finalizando MP4`;
    await output.finalize();

    if (!target.buffer) throw new Error("O MP4 foi finalizado sem dados.");
    const mimeType = await output.getMimeType();
    const blob = new Blob([target.buffer], { type: mimeType || "video/mp4" });
    state.pendingExport = { blob, extension: "mp4", mimeType: mimeType || "video/mp4" };
    elements.exportTitle.textContent = "Vídeo pronto";
    elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · ${exportColorDetail} · quadros sincronizados`;
    elements.exportProgress.style.width = "100%";
    elements.exportPercent.textContent = "100%";
    elements.saveExportButton.hidden = false;
    elements.cancelExportButton.textContent = "Fechar";
    state.keepExportModalOpen = true;
  } catch (error) {
    console.error(error);
    if (output && output.state !== "canceled" && output.state !== "finalized") {
      await output.cancel().catch(() => {});
    }
    if (!state.exportCanceled && error?.name !== "AbortError") {
      shouldFallback = true;
      showToast("A exportação otimizada falhou. Usando o modo compatível.");
    }
  } finally {
    state.exporting = false;
    state.optimizedOutput = null;
    auxiliaryInputs.forEach((auxiliaryInput) => auxiliaryInput.dispose());
    input.dispose();
    if (state.wakeLock) {
      await state.wakeLock.release().catch(() => {});
      state.wakeLock = null;
    }
    releaseExportSurfaces();
    if (!state.keepExportModalOpen) elements.exportModal.hidden = true;
    state.keepExportModalOpen = false;
    elements.exportButton.disabled = !elements.video.src;
  }
  return !shouldFallback;
}

async function renderCaptionedVideoRealtime(preset) {
  const mimeType = supportedRecordingType();
  if (!elements.renderCanvas.captureStream || !window.MediaRecorder || !mimeType) {
    showToast("Este navegador não permite renderizar vídeo. Atualize o Safari ou use Chrome.");
    return;
  }

  const { width, height } = outputDimensions(preset);
  const frameRate = selectedExportFrameRate();
  const colorMode = selectedExportColorMode();
  // The compatibility exporter also stays in SDR/AVC so Safari does not
  // reinterpret LUT and caption colors while recording the composed canvas.
  const { canvas, context } = prepareExportCanvas(width, height);

  const previousTime = projectCurrentTime();
  const previousMuted = elements.video.muted;
  const previousOverlayMuted = new Map(state.overlayVideoClips.map((clip) => [clip.id, {
    video: clip.mediaElement.muted,
    audio: clip.audioElement?.muted,
  }]));
  const previousAudioMuted = new Map(state.audioClips.map((clip) => [clip.id, clip.audioElement.muted]));
  let exportFrameRequest = null;
  let exportFrameRequestType = null;
  let stopRecorder = null;
  let canvasStream = null;
  if (state.exportCanceled) return;
  state.exporting = true;
  state.isCutSeeking = false;
  elements.exportButton.disabled = true;
  elements.exportModal.hidden = false;
  elements.exportTitle.textContent = "Renderizando vídeo";
  elements.saveExportButton.hidden = true;
  elements.cancelExportButton.textContent = "Cancelar";
  elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · ${colorMode.toUpperCase()} · preparando áudio`;
  elements.exportProgress.style.width = "0%";
  elements.exportPercent.textContent = "0%";

  try {
    if (navigator.wakeLock?.request) {
      try {
        state.wakeLock = await navigator.wakeLock.request("screen");
      } catch {
        state.wakeLock = null;
      }
    }
    elements.video.pause();
    elements.video.muted = false;
    state.overlayVideoClips.forEach((clip) => {
      clip.mediaElement.muted = true;
      if (clip.audioElement) clip.audioElement.muted = false;
    });
    state.audioClips.forEach((clip) => (clip.audioElement.muted = false));
    await seekProjectTime(0, false);

    canvasStream = canvas.captureStream(frameRate);
    const audioTracks = await audioTracksForExport();
    audioTracks.forEach((track) => canvasStream.addTrack(track));
    await seekSecondaryMediaToProjectTime(0);
    const bitsPerSecond = exportVideoBitrate(preset, frameRate);
    const recorder = createCompatibleMediaRecorder(canvasStream, mimeType, bitsPerSecond);
    const recordingMimeType = recorder.mimeType || mimeType;
    const chunks = [];
    state.recorder = recorder;

    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size) chunks.push(event.data);
    });

    const finished = new Promise((resolve, reject) => {
      recorder.addEventListener("stop", resolve, { once: true });
      recorder.addEventListener("error", () => reject(recorder.error || new Error("Falha na renderização")), { once: true });
    });

    let lastMediaTime = -Infinity;
    let nextRenderMediaTime = 0;
    let highestRenderedProjectTime = 0;
    const renderFrame = () => {
      if (!state.exporting) return;
      context.fillStyle = "#000000";
      context.fillRect(0, 0, width, height);
      const currentProjectTime = projectCurrentTime();
      highestRenderedProjectTime = Math.max(highestRenderedProjectTime, currentProjectTime);
      const baseGap = !trackIsVisible("video", "base")
        || state.cuts.some((cut) => isBaseCut(cut) && cut.ripple === false && currentProjectTime >= cut.start && currentProjectTime < cut.end);
      const drewGrid = drawVideoGridFrame(context, width, height, currentProjectTime);
      if (!drewGrid && !baseGap) drawVideoFrame(context, width, height);
      if (!drewGrid && !baseGap) drawBaseFadeOverlay(context, width, height, currentProjectTime);
      drawImageOverlays(context, width, height, currentProjectTime);
      drawCaptionFrame(context, width, height, currentProjectTime);
      const totalDuration = projectDuration();
      const progress = totalDuration ? Math.min(100, (highestRenderedProjectTime / totalDuration) * 100) : 0;
      elements.exportProgress.style.width = `${progress}%`;
      elements.exportPercent.textContent = `${Math.round(progress)}%`;
      elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · ${colorMode.toUpperCase()} · ${formatClock(highestRenderedProjectTime)} de ${formatClock(totalDuration)}`;
    };

    const scheduleFrame = () => {
      if (!state.exporting) return;
      if (typeof elements.video.requestVideoFrameCallback === "function") {
        exportFrameRequestType = "video";
        exportFrameRequest = elements.video.requestVideoFrameCallback(drawFrame);
      } else {
        exportFrameRequestType = "animation";
        exportFrameRequest = requestAnimationFrame(drawFrame);
      }
    };

    const drawFrame = (_now, metadata) => {
      if (!state.exporting) return;
      const mediaTime = metadata?.mediaTime ?? elements.video.currentTime;
      const frameInterval = 1 / frameRate;
      if (mediaTime + 0.001 < lastMediaTime) nextRenderMediaTime = mediaTime;
      if (mediaTime + 0.004 >= nextRenderMediaTime) {
        renderFrame();
        const elapsedIntervals = Math.max(1, Math.floor((mediaTime - nextRenderMediaTime) / frameInterval) + 1);
        nextRenderMediaTime += elapsedIntervals * frameInterval;
      }
      lastMediaTime = mediaTime;
      scheduleFrame();
    };

    stopRecorder = () => {
      if (recorder.state !== "inactive") recorder.stop();
    };
    elements.video.addEventListener("projectended", stopRecorder, { once: true });
    recorder.start(1000);
    renderFrame();
    lastMediaTime = elements.video.currentTime;
    nextRenderMediaTime = lastMediaTime + 1 / frameRate;
    scheduleFrame();
    const exportGrid = activeVideoGrid(0);
    const exportActiveOverlays = state.overlayVideoClips.filter((clip) => clipIsActiveAtTime(clip, 0));
    const exportCompanions = exportActiveOverlays.filter((clip) => exportGrid?.keys.has(clip.id));
    exportCompanions.forEach((clip) => {
      clip.previewWasActive = true;
      clip.previewShouldPlay = true;
      clip.previewAudioShouldPlay = true;
    });
    const playback = await Promise.allSettled([
      elements.video.play(),
      ...exportCompanions.map((clip) => clip.mediaElement.play()),
      ...exportActiveOverlays.map((clip) => clip.audioElement?.play()).filter(Boolean),
    ]);
    if (playback[0]?.status === "rejected") throw playback[0].reason;
    await finished;

    let keepModalOpen = false;
    if (!state.exportCanceled && chunks.length) {
      const blob = new Blob(chunks, { type: recordingMimeType });
      const extension = recordingMimeType.includes("mp4") ? "mp4" : "webm";
      if (isIOSDevice()) {
        state.pendingExport = { blob, extension, mimeType: recordingMimeType };
        elements.exportTitle.textContent = "Vídeo pronto";
        elements.exportStatus.textContent = `${width} × ${height} · ${frameRate} FPS · legenda incorporada`;
        elements.exportProgress.style.width = "100%";
        elements.exportPercent.textContent = "100%";
        elements.saveExportButton.hidden = false;
        elements.cancelExportButton.textContent = "Fechar";
        keepModalOpen = true;
      } else {
        downloadFile(blob, extension, recordingMimeType);
        showToast(`Vídeo ${preset === "video-4k" ? "4K" : preset.replace("video-", "") + "p"} exportado.`);
      }
    } else if (!state.exportCanceled) {
      throw new Error("O Safari finalizou a exportação sem gerar dados.");
    }
    state.keepExportModalOpen = keepModalOpen;
  } catch (error) {
    console.error(error);
    showToast("Não foi possível renderizar. Tente 1080p ou use Chrome atualizado.");
  } finally {
    state.exporting = false;
    if (exportFrameRequest !== null) {
      if (exportFrameRequestType === "video" && typeof elements.video.cancelVideoFrameCallback === "function") {
        elements.video.cancelVideoFrameCallback(exportFrameRequest);
      } else if (exportFrameRequestType === "animation") {
        cancelAnimationFrame(exportFrameRequest);
      }
    }
    if (stopRecorder) {
      elements.video.removeEventListener("projectended", stopRecorder);
    }
    if (state.recorder?.state && state.recorder.state !== "inactive") {
      try {
        state.recorder.stop();
      } catch {
        // The recorder may already be finalizing after a Safari encoder error.
      }
    }
    canvasStream?.getVideoTracks().forEach((track) => track.stop());
    state.recorder = null;
    if (state.wakeLock) {
      await state.wakeLock.release().catch(() => {});
      state.wakeLock = null;
    }
    releaseExportSurfaces();
    elements.video.pause();
    elements.video.muted = previousMuted;
    state.overlayVideoClips.forEach((clip) => {
      const previous = previousOverlayMuted.get(clip.id);
      clip.mediaElement.muted = previous?.video ?? true;
      if (clip.audioElement) clip.audioElement.muted = previous?.audio ?? false;
    });
    state.audioClips.forEach((clip) => (clip.audioElement.muted = previousAudioMuted.get(clip.id) ?? false));
    await seekProjectTime(Math.min(previousTime, projectDuration() || previousTime), false).catch(() => {});
    if (!state.keepExportModalOpen) elements.exportModal.hidden = true;
    state.keepExportModalOpen = false;
    elements.exportButton.disabled = !elements.video.src;
  }
}

async function renderCaptionedVideo(preset) {
  state.pendingExport = null;
  state.exportCanceled = false;
  state.exportPreparing = true;
  elements.exportButton.disabled = true;
  const restoreTime = projectCurrentTime();
  let commercialClip = null;
  showExportRenderingUi();
  try {
    if (elements.includeCommercial.checked) {
      elements.exportTitle.textContent = "Preparando comercial";
      elements.exportStatus.textContent = `${COMMERCIAL_EXPORTS[commercialExportVariant()].label} · carregando`;
      try {
        commercialClip = await appendCommercialForExport();
      } catch (error) {
        if (error?.name === "AbortError" || state.exportCanceled) return;
        console.error(error);
        showToast("O comercial não pôde ser carregado. Exportando apenas o projeto.");
      }
    }
    if (state.exportCanceled) return;
    try {
      if (await renderCaptionedVideoOptimized(preset)) return;
    } catch (error) {
      console.error(error);
      if (state.exportCanceled) return;
      showToast("Este iPhone usará o modo de exportação compatível.");
    }
    await renderCaptionedVideoRealtime(preset);
  } finally {
    state.exportPreparing = false;
    await removeCommercialAfterExport(commercialClip, restoreTime);
    elements.exportButton.disabled = !elements.video.src;
  }
}

function editedTime(sourceTime) {
  const removed = mergedBaseRippleCuts(sourceTime).reduce((total, cut) => {
    return total + clamp(sourceTime - cut.start, 0, cut.end - cut.start);
  }, 0);
  return Math.max(0, sourceTime - removed);
}

function editedCues() {
  return state.cues
    .map((cue) => ({ ...cue, start: editedTime(cue.start), end: editedTime(cue.end) }))
    .filter((cue) => cue.end - cue.start >= 0.05);
}

async function exportProject() {
  if (!elements.video.src) return;
  if (state.narrationRecorder) {
    showToast("Finalize a narração antes de exportar.");
    return;
  }
  const format = elements.exportFormat.value;

  if (format.startsWith("video-")) {
    await renderCaptionedVideo(format);
    return;
  }

  if (format === "srt") {
    const content = editedCues()
      .map((cue, index) => `${index + 1}\n${formatTimestamp(cue.start)} --> ${formatTimestamp(cue.end)}\n${cue.text}\n`)
      .join("\n");
    downloadFile(content, "srt", "text/plain;charset=utf-8");
  } else if (format === "vtt") {
    const content = `WEBVTT\n\n${editedCues()
      .map((cue) => `${formatTimestamp(cue.start, ".")} --> ${formatTimestamp(cue.end, ".")}\n${cue.text}\n`)
      .join("\n")}`;
    downloadFile(content, "vtt", "text/vtt;charset=utf-8");
  } else {
    const content = JSON.stringify(
      {
        version: 3,
        videoName: state.videoName,
        script: elements.scriptInput.value,
        cues: state.cues,
        captionCompositions: state.captionCompositions,
        style: {
          fontSize: Number(elements.fontSize.value),
          fontFamily: elements.fontFamily.value,
          animation: elements.captionAnimation.value,
          transition: elements.captionTransition.value,
          position: state.captionPosition,
          positions: state.captionPositions,
          background: elements.captionBackground.checked,
          captionMode: state.captionMode,
          captionPreset: state.captionPreset,
          captionTemplate: state.captionTemplate,
          textColor: elements.captionTextColor.value,
          highlightColor: elements.captionHighlightColor.value,
          backgroundColor: elements.captionBackgroundColor.value,
          textCase: elements.captionCase.value,
          shadow: elements.captionShadow.checked,
          outlineWidth: Number(elements.captionOutlineWidth.value),
          outlineColor: elements.captionOutlineColor.value,
        },
        cuts: state.cuts,
        videoAdjustments: state.videoAdjustments,
        media: allMediaClips().map((clip) => ({
          type: clip.type,
          name: clip.name,
          start: clip.start,
          end: clip.end,
          ...(["audio", "video", "image"].includes(clip.type) ? { trackId: clip.trackId } : {}),
          ...(["image", "video"].includes(clip.type)
            ? { x: clip.x, y: clip.y, size: clip.size, opacity: clip.opacity, animation: clip.animation }
            : {}),
          ...(["sequence", "video"].includes(clip.type)
            ? {
                gridFocusX: gridFocusForClip(clip).x,
                gridFocusY: gridFocusForClip(clip).y,
                filterPresetId: colorProfileForClip(clip).presetId,
                filterIntensity: colorProfileForClip(clip).intensity,
                videoAdjustments: colorProfileForClip(clip).adjustments,
              }
            : {}),
          ...(["audio", "video", "sequence"].includes(clip.type) ? { volume: clip.volume } : {}),
          ...(["audio", "video", "sequence"].includes(clip.type)
            ? { playbackRate: clipPlaybackRate(clip), sourceSpan: clipSourceSpan(clip) }
            : {}),
          ...(clip.type === "sequence"
            ? { trimInSource: clip.trimInSource || 0, trimOutSource: clip.trimOutSource || 0 }
            : {}),
          ...(clip.type === "audio" && clip.extractedFrom
            ? { extractedFrom: clip.extractedFrom, linkedSpeed: clip.linkedSpeed !== false }
            : {}),
          ...(["audio", "video", "sequence"].includes(clip.type) ? { segmentFades: clip.segmentFades || {} } : {}),
        })),
        videoTrackOrder: state.videoTrackOrder,
        audioTrackOrder: state.audioTrackOrder,
        hiddenVideoTrackIds: [...state.hiddenVideoTrackIds],
        hiddenAudioTrackIds: [...state.hiddenAudioTrackIds],
        videoGridMode: state.videoGridMode,
        videoGridClipIds: state.videoGridClipIds,
        videoGridLayout: state.videoGridLayout,
        projectAspect: state.projectAspect,
        applyFilterToTrack: state.applyFilterToTrack,
        applyColorToTrack: state.applyColorToTrack,
        includeCommercial: elements.includeCommercial.checked,
        exportColorMode: selectedExportColorMode(),
        exportFrameRate: Number(elements.exportFrameRate.value),
        lut: state.lut
          ? {
              name: state.lut.name,
              fileName: state.lut.fileName,
              size: state.lut.size,
              intensity: state.lutIntensity,
            }
          : null,
        magneticCuts: elements.magneticCuts.checked,
        linkedTiming: elements.linkTiming.checked,
      },
      null,
      2,
    );
    downloadFile(content, "json", "application/json;charset=utf-8");
  }

  showToast(`Arquivo ${format.toUpperCase()} exportado.`);
}

function saveLocalProject() {
  const data = {
    captionDesignVersion: EDITORIAL_DESIGN_VERSION,
    script: elements.scriptInput.value,
    cues: state.cues,
    captionLength: elements.captionLength.value,
    fontSize: elements.fontSize.value,
    fontFamily: elements.fontFamily.value,
    animation: elements.captionAnimation.value,
    transition: elements.captionTransition.value,
    position: state.captionPosition,
    captionPositions: state.captionPositions,
    background: elements.captionBackground.checked,
    captionMode: state.captionMode,
    captionPreset: state.captionPreset,
    captionTemplate: state.captionTemplate,
    captionCompositions: state.captionCompositions,
    textColor: elements.captionTextColor.value,
    highlightColor: elements.captionHighlightColor.value,
    backgroundColor: elements.captionBackgroundColor.value,
    textCase: elements.captionCase.value,
    shadow: elements.captionShadow.checked,
    outlineWidth: elements.captionOutlineWidth.value,
    outlineColor: elements.captionOutlineColor.value,
    videoAdjustments: state.videoAdjustments,
    exportFormat: elements.exportFormat.value,
    exportFrameRate: elements.exportFrameRate.value,
    exportColorMode: selectedExportColorMode(),
    videoGridMode: state.videoGridMode,
    videoGridClipIds: state.videoGridClipIds,
    videoGridLayout: state.videoGridLayout,
    projectAspect: state.projectAspect,
    applyFilterToTrack: state.applyFilterToTrack,
    applyColorToTrack: state.applyColorToTrack,
    includeCommercial: elements.includeCommercial.checked,
    lutIntensity: state.lutIntensity,
    lutPresetId: state.activeLutPresetId,
    cuts: state.cuts,
    magneticCuts: elements.magneticCuts.checked,
    selectedVideoTransition: state.selectedVideoTransition,
    linkedTiming: elements.linkTiming.checked,
    sourceVideoSignature: videoFileSignature(state.videoFile) || state.restoredVideoSignature,
  };
  try {
    localStorage.setItem("voz-em-legenda-project", JSON.stringify(data));
  } catch {
    // Some private browsing modes disable local storage; editing must keep working.
  }
}

function restoreLocalProject() {
  try {
    const data = JSON.parse(localStorage.getItem("voz-em-legenda-project"));
    if (!data) return;
    state.restoredVideoSignature = typeof data.sourceVideoSignature === "string" ? data.sourceVideoSignature : null;
    const migrateToEditorial = Number(data.captionDesignVersion) < EDITORIAL_DESIGN_VERSION;
    elements.scriptInput.value = data.script || "";
    elements.captionLength.value = data.captionLength || "balanced";
    elements.fontSize.value = data.fontSize || "36";
    elements.fontSizeValue.value = `${elements.fontSize.value} px`;
    elements.fontFamily.value = data.fontFamily || "strong";
    elements.captionAnimation.value = data.animation || "fade";
    elements.captionTransition.value = data.transition || "fade";
    state.captionMode = data.captionMode || (data.dynamic === true ? "word" : "phrase");
    state.captionPreset = data.captionPreset || "editorial";
    state.captionTemplate = data.captionTemplate || "editorial";
    elements.captionTextColor.value = data.textColor || "#ffffff";
    elements.captionHighlightColor.value = data.highlightColor || "#f0b64d";
    elements.captionBackgroundColor.value = data.backgroundColor || "#000000";
    elements.captionCase.value = data.textCase || "normal";
    elements.captionShadow.checked = data.shadow !== false;
    elements.captionOutlineWidth.value = data.outlineWidth ?? "2";
    elements.captionOutlineColor.value = data.outlineColor || "#000000";
    state.videoAdjustments = {
      ...DEFAULT_VIDEO_ADJUSTMENTS,
      ...(data.videoAdjustments && typeof data.videoAdjustments === "object" ? data.videoAdjustments : {}),
    };
    elements.exportFrameRate.value = ["24", "30", "60"].includes(data.exportFrameRate)
      ? data.exportFrameRate
      : "30";
    if (["video-720", "video-1080", "video-4k", "srt", "vtt", "json"].includes(data.exportFormat)) {
      elements.exportFormat.value = data.exportFormat;
    }
    elements.exportColorMode.value = "sdr";
    state.videoGridMode = [2, 3, 4].includes(Number(data.videoGridMode)) ? Number(data.videoGridMode) : 1;
    state.videoGridClipIds = Array.isArray(data.videoGridClipIds) ? data.videoGridClipIds.filter((id) => typeof id === "string") : [];
    state.videoGridLayout = ["auto", "columns", "rows", "hero-left", "hero-top", "quad"].includes(data.videoGridLayout)
      ? data.videoGridLayout
      : "auto";
    state.projectAspect = PROJECT_ASPECTS[data.projectAspect] ? data.projectAspect : "source";
    state.applyFilterToTrack = data.applyFilterToTrack === true;
    state.applyColorToTrack = data.applyColorToTrack === true;
    elements.applyFilterToTrack.checked = state.applyFilterToTrack;
    elements.applyColorToTrack.checked = state.applyColorToTrack;
    elements.includeCommercial.checked = data.includeCommercial !== false;
    updateVideoGridButtons();
    updateProjectAspectControls();
    state.lutIntensity = clamp(Number(data.lutIntensity) || 100, 0, 100);
    elements.lutIntensity.value = String(state.lutIntensity);
    elements.lutIntensityValue.value = `${elements.lutIntensity.value}%`;
    state.activeLutPresetId = data.lutPresetId || null;
    elements.magneticCuts.checked = data.magneticCuts !== false;
    state.selectedVideoTransition = data.selectedVideoTransition || "fade";
    elements.linkTiming.checked = data.linkedTiming !== false;
    elements.captionOverlay.style.fontFamily = captionFontFamily();
    elements.captionBackground.checked = data.background !== false;
    elements.captionOverlay.classList.toggle("has-background", elements.captionBackground.checked);
    elements.captionTextRgb.value = rgbTextFromHex(elements.captionTextColor.value);
    elements.captionHighlightRgb.value = rgbTextFromHex(elements.captionHighlightColor.value);
    elements.captionBackgroundRgb.value = rgbTextFromHex(elements.captionBackgroundColor.value);
    setCaptionMode(state.captionMode, false);
    elements.captionPresetButtons.forEach((button) => {
      const active = button.dataset.captionPreset === state.captionPreset;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    elements.adjustmentInputs.forEach((input) => {
      const value = Number(state.videoAdjustments[input.dataset.videoAdjustment]) || 0;
      input.value = String(value);
      const output = input.nextElementSibling;
      if (output) output.value = String(value);
    });
    applyCaptionColors();
    if (Array.isArray(data.cues)) state.cues = data.cues;
    state.captionCompositions = sanitizeCaptionCompositions(data.captionCompositions);
    if (Array.isArray(data.cuts)) {
      state.cuts = data.cuts.filter((cut) => !cut.layerMove).map((cut, index) => ({
        ...cut,
        transition: cut.transition || "cut",
        ripple: cut.ripple !== false,
        targetKey: cut.targetKey || "base",
        targetName: cut.targetName || "V1",
        sequence: Number(cut.sequence) || index + 1,
      }));
      state.cutSequence = state.cuts.reduce((maximum, cut) => Math.max(maximum, cut.sequence), 0);
    }
    if (data.position && typeof data.position === "object") {
      state.captionPosition = {
        x: Number(data.position.x) || 50,
        y: Number(data.position.y) || 88,
        preset: data.position.preset || "custom",
      };
    } else {
      const legacyPreset = typeof data.position === "string" ? data.position : "bottom";
      state.captionPosition = { ...CAPTION_PRESETS[legacyPreset], preset: legacyPreset };
    }
    if (data.captionPositions && typeof data.captionPositions === "object") {
      state.captionPositions = {
        vertical: { ...DEFAULT_CAPTION_POSITIONS.vertical, ...(data.captionPositions.vertical || {}) },
        horizontal: { ...DEFAULT_CAPTION_POSITIONS.horizontal, ...(data.captionPositions.horizontal || {}) },
      };
    }
    if (migrateToEditorial) {
      state.captionPositions = {
        vertical: { ...DEFAULT_CAPTION_POSITIONS.vertical },
        horizontal: { ...DEFAULT_CAPTION_POSITIONS.horizontal },
      };
      state.cues.forEach((cue) => delete cue.captionPositions);
      applyCaptionPreset("editorial", false);
    }
    activateCaptionComposition();
    applyCaptionPositionStyles();
    elements.transitionPalette.querySelectorAll("[data-video-transition]").forEach((button) => {
      button.classList.toggle("active", button.dataset.videoTransition === state.selectedVideoTransition);
    });
    updateScriptState();
    if (migrateToEditorial) saveLocalProject();
  } catch {
    localStorage.removeItem("voz-em-legenda-project");
  }
}

elements.videoInput.addEventListener("change", (event) => loadVideo(event.target.files[0]));
elements.lutInput.addEventListener("change", (event) => loadLut(event.target.files[0]));
elements.filterSearchInput.addEventListener("input", renderFilterPresets);
elements.filterCollectionSelect.addEventListener("change", renderFilterPresets);
elements.clearFilterPresetButton.addEventListener("click", () => removeLut());
elements.lutIntensity.addEventListener("input", () => {
  setScopedColorProfile(
    filterTargetClip(),
    { intensity: Number(elements.lutIntensity.value) || 0 },
    "filter",
  );
  elements.lutIntensityValue.value = `${elements.lutIntensity.value}%`;
  drawLutPreview();
  saveLocalProject();
});
elements.removeLutButton.addEventListener("click", () => removeLut());
elements.applyFilterToTrack.addEventListener("change", () => {
  state.applyFilterToTrack = elements.applyFilterToTrack.checked;
  if (state.applyFilterToTrack) applyCurrentProfileToTrack("filter");
  else {
    updateLutControls();
    saveLocalProject();
  }
});
elements.applyColorToTrack.addEventListener("change", () => {
  state.applyColorToTrack = elements.applyColorToTrack.checked;
  if (state.applyColorToTrack) applyCurrentProfileToTrack("color");
  else {
    updateLutControls();
    saveLocalProject();
  }
});
elements.video.addEventListener("loadedmetadata", () => {
  const activeClip = activeSequenceClip();
  if (activeClip) {
    updateClipBrowserTiming(activeClip, elements.video);
    if (!(Number(activeClip.sourceSpan) > 0)) {
      activeClip.sourceSpan = activeClip.duration * clipPlaybackRate(activeClip);
    }
    activeClip.width = elements.video.videoWidth;
    activeClip.height = elements.video.videoHeight;
    elements.video.volume = state.mainAudioGain ? 1 : clamp(activeClip.volume ?? 1);
    if (state.mainAudioGain) state.mainAudioGain.gain.value = clamp(activeClip.volume ?? 1, 0, 2);
    elements.video.playbackRate = clipPlaybackRate(activeClip);
    refreshSequenceTiming();
    if (!activeClip.thumbnail) {
      createVideoThumbnail(elements.video).then((thumbnail) => {
        if (!thumbnail || activeClip.thumbnail) return;
        activeClip.thumbnail = thumbnail;
        renderMediaTracks();
      });
    }
  }
  updateProjectAspectControls();
  setPlayerEnabled(true);
  elements.duration.textContent = formatClock(projectDuration());
  renderCues();
  renderCuts();
  renderMediaTracks();
  drawLutPreview();
  setStatus(`${state.sequenceClips.length} vídeo${state.sequenceClips.length === 1 ? "" : "s"} · ${formatClock(projectDuration())}`, true);
  applyCaptionPositionStyles();
});
elements.video.addEventListener("timeupdate", async () => {
  const switched = await processSequenceBoundaryAtPlayhead();
  if (!switched) processCutsAtPlayhead();
  const duration = projectDuration();
  if (!state.isSequenceSwitching && !elements.video.seeking && duration > 0 && projectCurrentTime() >= duration - 0.015) {
    elements.video.pause();
    if (!state.projectEndSignaled) {
      state.projectEndSignaled = true;
      elements.video.dispatchEvent(new Event("projectended"));
    }
  } else {
    state.projectEndSignaled = false;
  }
  updatePlayer();
});
elements.video.addEventListener("play", () => {
  updatePlayer();
  startPreviewMotion();
});
elements.video.addEventListener("pause", () => {
  stopPreviewMotion();
  if (state.narrationRecorder && !state.exporting) stopNarrationRecording();
});
elements.video.addEventListener("ended", async (event) => {
  if (state.activeSequenceIndex < state.sequenceClips.length - 1) {
    event.stopImmediatePropagation();
    await processSequenceBoundaryAtPlayhead(true);
    return;
  }
  stopPreviewMotion();
  if (!state.projectEndSignaled && projectCurrentTime() >= projectDuration() - 0.05) {
    state.projectEndSignaled = true;
    elements.video.dispatchEvent(new Event("projectended"));
  }
});
elements.video.addEventListener("seeked", () => {
  drawLutPreview();
  updateMediaPreview();
});
elements.videoShell.addEventListener("click", (event) => {
  if (event.target === elements.video) togglePlayback();
});
elements.captionOverlay.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  elements.video.pause();
  state.draggingCaption = true;
  elements.captionOverlay.classList.add("dragging");
  elements.captionOverlay.setPointerCapture?.(event.pointerId);
});
elements.captionOverlay.addEventListener("pointermove", (event) => {
  if (!state.draggingCaption) return;
  const bounds = elements.videoShell.getBoundingClientRect();
  const videoWidth = elements.video.videoWidth || bounds.width;
  const videoHeight = elements.video.videoHeight || bounds.height;
  const scale = Math.min(bounds.width / videoWidth, bounds.height / videoHeight);
  const renderedWidth = videoWidth * scale;
  const renderedHeight = videoHeight * scale;
  const x = ((event.clientX - bounds.left - (bounds.width - renderedWidth) / 2) / renderedWidth) * 100;
  const y = ((event.clientY - bounds.top - (bounds.height - renderedHeight) / 2) / renderedHeight) * 100;
  const next = applyCenterMagnet(x, y);
  setCaptionPosition(next.x, next.y, "custom", false);
});
function finishCaptionDrag(event) {
  if (!state.draggingCaption) return;
  state.draggingCaption = false;
  hideAlignmentGuides();
  elements.captionOverlay.classList.remove("dragging");
  if (elements.captionOverlay.hasPointerCapture?.(event.pointerId)) {
    elements.captionOverlay.releasePointerCapture(event.pointerId);
  }
  saveLocalProject();
  showToast("Posição deste trecho salva.");
}
elements.captionOverlay.addEventListener("pointerup", finishCaptionDrag);
elements.captionOverlay.addEventListener("pointercancel", finishCaptionDrag);
elements.captionCompositionOverlay.addEventListener("pointerdown", (event) => {
  const target = event.target.closest(".caption-composition-part");
  if (!target) return;
  const composition = state.captionCompositions.find((item) => item.id === target.dataset.compositionId);
  const part = composition?.parts.find((item) => item.id === target.dataset.partId);
  if (!composition || !part) return;
  event.preventDefault();
  elements.video.pause();
  const cueIndex = state.cues.findIndex((cue) => cue.id === composition.cueId);
  if (cueIndex >= 0 && cueIndex !== state.activeCue) {
    state.activeCue = cueIndex;
    state.activeCaptionPart = part.role;
    updateCueInspector();
  } else if (state.activeCaptionPart !== "group") {
    state.activeCaptionPart = part.role;
  }
  const format = captionFormatForDimensions();
  const movingParts = state.activeCaptionPart === "group" ? composition.parts : [part];
  state.draggingCaptionPart = {
    pointerId: event.pointerId,
    composition,
    anchorPart: part,
    startX: event.clientX,
    startY: event.clientY,
    format,
    positions: new Map(movingParts.map((item) => [item.id, { ...item.positions[format] }])),
  };
  target.classList.add("dragging");
  elements.captionCompositionOverlay.setPointerCapture?.(event.pointerId);
  updateCaptionCompositionEditor();
  updateCaption();
});
elements.captionCompositionOverlay.addEventListener("pointermove", (event) => {
  const drag = state.draggingCaptionPart;
  if (!drag || drag.pointerId !== event.pointerId) return;
  const bounds = elements.captionCompositionOverlay.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const deltaX = (event.clientX - drag.startX) / bounds.width * 100;
  const deltaY = (event.clientY - drag.startY) / bounds.height * 100;
  drag.positions.forEach((position, id) => {
    const part = drag.composition.parts.find((item) => item.id === id);
    if (!part) return;
    const raw = { x: position.x + deltaX, y: position.y + deltaY };
    const next = drag.positions.size === 1 ? applyCenterMagnet(raw.x, raw.y) : raw;
    part.positions[drag.format] = {
      x: clamp(next.x, 3, 97),
      y: clamp(next.y, 3, 97),
    };
  });
  updateCaption();
});
function finishCaptionPartDrag(event) {
  const drag = state.draggingCaptionPart;
  if (!drag || drag.pointerId !== event.pointerId) return;
  state.draggingCaptionPart = null;
  hideAlignmentGuides();
  elements.captionCompositionOverlay.querySelectorAll(".dragging").forEach((item) => item.classList.remove("dragging"));
  if (elements.captionCompositionOverlay.hasPointerCapture?.(event.pointerId)) {
    elements.captionCompositionOverlay.releasePointerCapture(event.pointerId);
  }
  saveLocalProject();
  showToast(state.activeCaptionPart === "group" ? "Composição reposicionada." : "Parte reposicionada.");
}
elements.captionCompositionOverlay.addEventListener("pointerup", finishCaptionPartDrag);
elements.captionCompositionOverlay.addEventListener("pointercancel", finishCaptionPartDrag);
elements.captionOverlay.addEventListener("keydown", (event) => {
  const directions = {
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
    ArrowUp: [0, -1],
    ArrowDown: [0, 1],
  };
  if (!event.altKey || !directions[event.key]) return;
  event.preventDefault();
  const multiplier = event.shiftKey ? 5 : 1;
  const [x, y] = directions[event.key];
  setCaptionPosition(
    state.captionPosition.x + x * multiplier,
    state.captionPosition.y + y * multiplier,
    "custom",
  );
});
elements.playButton.addEventListener("click", togglePlayback);
elements.backButton.addEventListener("click", () => seekProjectTime(Math.max(0, projectCurrentTime() - 5)).catch(() => {}));
elements.forwardButton.addEventListener("click", () => {
  seekProjectTime(Math.min(projectDuration(), projectCurrentTime() + 5)).catch(() => {});
});
elements.muteButton.addEventListener("click", () => {
  elements.video.muted = !elements.video.muted;
  state.overlayVideoClips.forEach((clip) => {
    clip.mediaElement.muted = true;
    if (clip.audioElement) clip.audioElement.muted = elements.video.muted;
  });
  state.audioClips.forEach((clip) => (clip.audioElement.muted = elements.video.muted));
  elements.muteIcon.textContent = elements.video.muted ? "×" : "◖";
});
elements.fullscreenButton.addEventListener("click", async () => {
  try {
    if (isIOSDevice()) {
      const opening = !elements.videoShell.classList.contains("composite-fullscreen");
      elements.videoShell.classList.toggle("composite-fullscreen", opening);
      document.documentElement.classList.toggle("composite-fullscreen-open", opening);
      document.body.classList.toggle("composite-fullscreen-open", opening);
      elements.fullscreenButton.setAttribute("aria-label", opening ? "Fechar tela cheia" : "Ver preview em tela cheia");
      if (opening) showToast("Gire o iPhone para a horizontal para ampliar o preview.");
      applyCaptionPositionStyles();
      return;
    }
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      await (document.exitFullscreen?.() || document.webkitExitFullscreen?.());
      screen.orientation?.unlock?.();
      return;
    }
    if (elements.videoShell.requestFullscreen) await elements.videoShell.requestFullscreen();
    else if (elements.videoShell.webkitRequestFullscreen) elements.videoShell.webkitRequestFullscreen();
    else if (elements.video.webkitEnterFullscreen) elements.video.webkitEnterFullscreen();
  } catch {
    showToast("Não foi possível abrir a tela cheia neste navegador.");
  }
});
document.addEventListener("fullscreenchange", applyCaptionPositionStyles);
document.addEventListener("webkitfullscreenchange", applyCaptionPositionStyles);
elements.seekBar.addEventListener("input", () => {
  if (projectDuration()) seekProjectTime((Number(elements.seekBar.value) / 100) * projectDuration()).catch(() => {});
});

elements.scriptInput.addEventListener("input", updateScriptState);
elements.sampleButton.addEventListener("click", () => {
  elements.scriptInput.value = SAMPLE_SCRIPT;
  updateScriptState();
  showToast("Roteiro de teste carregado.");
});
elements.clearScriptButton.addEventListener("click", () => {
  elements.scriptInput.value = "";
  updateScriptState();
});
elements.captionLength.addEventListener("change", saveLocalProject);
elements.generateButton.addEventListener("click", synchronizeScript);
elements.autoCaptionButton.addEventListener("click", generateAutomaticCaptions);
elements.addCueButton.addEventListener("click", addCue);
elements.syncNextButton.addEventListener("click", syncNextCueToPlayhead);
elements.extendPreviousButton.addEventListener("click", extendPreviousCueToPlayhead);
elements.cutButton.addEventListener("click", markCutAtPlayhead);
elements.splitClipButton.addEventListener("click", () => splitSelectedClipAtPlayhead(["sequence", "video"]));
elements.cutSelectedAudioButton.addEventListener("click", markCutAtPlayhead);
elements.splitSelectedAudioButton.addEventListener("click", () => splitSelectedClipAtPlayhead(["audio"]));
elements.undoCutButton.addEventListener("click", undoLastCut);
elements.magneticCuts.addEventListener("change", () => {
  saveLocalProject();
  showToast(elements.magneticCuts.checked
    ? "Os próximos cortes fecharão o espaço."
    : "Os próximos cortes manterão um espaço na V1.");
});
elements.transitionPalette.querySelectorAll("[data-video-transition]").forEach((button) => {
  button.classList.toggle("active", button.dataset.videoTransition === state.selectedVideoTransition);
  button.addEventListener("click", () => {
    state.selectedVideoTransition = button.dataset.videoTransition;
    elements.transitionPalette.querySelectorAll("[data-video-transition]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    saveLocalProject();
  });
  button.addEventListener("dragstart", (event) => {
    state.selectedVideoTransition = button.dataset.videoTransition;
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("text/video-transition", button.dataset.videoTransition);
  });
});
elements.cutTrack.addEventListener("dragover", (event) => {
  if (elements.magneticCuts.checked && state.cuts.length) event.preventDefault();
});
elements.cutTrack.addEventListener("drop", (event) => {
  event.preventDefault();
  if (!elements.magneticCuts.checked || !state.cuts.length) {
    showToast("Ative o modo magnético ou solte o efeito sobre um corte.");
    return;
  }
  const bounds = elements.cutTrack.getBoundingClientRect();
  const time = clamp((event.clientX - bounds.left) / bounds.width) * projectDuration();
  const cut = closestCutToTime(time);
  if (cut) applyTransitionToCut(cut.id, event.dataTransfer.getData("text/video-transition") || state.selectedVideoTransition);
});
elements.cutTrack.addEventListener("click", (event) => {
  if (event.target.closest(".cut-point") || !projectDuration()) return;
  const bounds = elements.cutTrack.getBoundingClientRect();
  seekProjectTime(clamp((event.clientX - bounds.left) / bounds.width) * projectDuration()).catch(() => {});
});
elements.timingTools.addEventListener("click", (event) => {
  const button = event.target.closest("[data-shift]");
  if (button) shiftAllCues(Number(button.dataset.shift));
});
elements.linkTiming.addEventListener("change", () => {
  saveLocalProject();
  showToast(elements.linkTiming.checked ? "Tempos encadeados." : "Edição de tempo individual.");
});

elements.fontSize.addEventListener("input", () => {
  elements.fontSizeValue.value = `${elements.fontSize.value} px`;
  applyCaptionPositionStyles();
  const captionPanel = elements.fontSize.closest(".caption-tools");
  if (captionPanel && isIOSDevice()) captionPanel.scrollLeft = 0;
  saveLocalProject();
});
elements.fontSize.addEventListener("pointerdown", () => {
  const captionPanel = elements.fontSize.closest(".caption-tools");
  if (captionPanel && isIOSDevice()) captionPanel.scrollLeft = 0;
});
elements.captionBackground.addEventListener("change", () => {
  elements.captionOverlay.classList.toggle("has-background", elements.captionBackground.checked);
  applyCaptionColors();
  saveLocalProject();
});
elements.toolTabs.forEach((button) => {
  button.addEventListener("click", () => {
    elements.stage.classList.remove("tools-collapsed");
    activateToolTab(button.dataset.toolTab);
  });
});
elements.captionPresetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyCaptionPreset(button.dataset.captionPreset);
  });
});
elements.compositionPresetButtons.forEach((button) => {
  button.addEventListener("click", () => createCaptionComposition(button.dataset.compositionPreset));
});
elements.captionPartButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveCaptionPart(button.dataset.captionPart));
});
elements.removeCaptionComposition.addEventListener("click", removeCaptionComposition);
elements.captionPartText.addEventListener("input", () => {
  updateSelectedCaptionPart({ text: elements.captionPartText.value }, false);
});
elements.captionPartText.addEventListener("change", saveLocalProject);
elements.captionPartStart.addEventListener("change", () => {
  const value = Math.max(0, Number(elements.captionPartStart.value) || 0);
  updateSelectedCaptionPart({ start: value });
});
elements.captionPartEnd.addEventListener("change", () => {
  const value = Math.max(0.05, Number(elements.captionPartEnd.value) || 0.05);
  updateSelectedCaptionPart({ end: value });
});
elements.captionPartScale.addEventListener("input", () => {
  const scale = clamp(Number(elements.captionPartScale.value) / 100, 0.5, 2.2);
  elements.captionPartScaleValue.value = `${Math.round(scale * 100)}%`;
  updateSelectedCaptionPart({ scale }, false);
});
elements.captionPartScale.addEventListener("change", saveLocalProject);
elements.captionPartMoveButtons.forEach((button) => {
  button.addEventListener("click", () => moveCaptionCompositionPart(button.dataset.captionPartMove));
});
elements.extendCaptionPart.addEventListener("click", () => {
  const part = compositionPart(compositionForCue());
  if (!part) return;
  const nextCue = state.cues.find((cue) => cue.end > part.end + 0.05);
  if (!nextCue) {
    showToast("Esta parte já alcança o fim das legendas.");
    return;
  }
  updateSelectedCaptionPart({ end: nextCue.end });
  showToast("Parte estendida até o fim da próxima legenda.");
});
elements.captionModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.captionTemplate = "normal";
    state.captionPreset = "custom";
    elements.captionPresetButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    setCaptionMode(button.dataset.captionMode);
  });
});

[
  [elements.captionTextColor, elements.captionTextRgb],
  [elements.captionHighlightColor, elements.captionHighlightRgb],
  [elements.captionBackgroundColor, elements.captionBackgroundRgb],
].forEach(([colorInput, rgbInput]) => {
  colorInput.addEventListener("input", () => syncCaptionColor(colorInput, rgbInput));
  rgbInput.addEventListener("change", () => {
    if (!syncCaptionColor(colorInput, rgbInput, "rgb")) {
      rgbInput.value = rgbTextFromHex(colorInput.value);
      showToast("Use uma cor RGB como 255, 180, 0.");
    }
  });
});
elements.colorSwatches.forEach((button) => {
  button.addEventListener("click", () => {
    elements.captionTextColor.value = button.dataset.captionColor;
    syncCaptionColor(elements.captionTextColor, elements.captionTextRgb);
  });
});
[elements.fontFamily, elements.captionAnimation, elements.captionTransition, elements.captionCase].forEach((control) => {
  control.addEventListener("change", () => {
    state.captionPreset = "custom";
    elements.captionOverlay.style.fontFamily = captionFontFamily();
    updateCaption();
    saveLocalProject();
  });
});
[elements.captionShadow, elements.captionOutlineColor].forEach((control) => {
  control.addEventListener("input", () => {
    applyCaptionColors();
    updateCaption();
    saveLocalProject();
  });
});
elements.captionOutlineWidth.addEventListener("input", () => {
  applyCaptionColors();
  updateCaption();
  saveLocalProject();
});
elements.positionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setGlobalCaptionPosition(button.dataset.position);
  });
});

elements.adjustmentInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const value = Number(input.value) || 0;
    const target = filterTargetClip();
    const adjustments = colorProfileForClip(target).adjustments;
    adjustments[input.dataset.videoAdjustment] = value;
    setScopedColorProfile(target, { adjustments }, "color");
    if (input.nextElementSibling) input.nextElementSibling.value = String(value);
    drawLutPreview();
  });
  input.addEventListener("change", saveLocalProject);
});
elements.resetAdjustmentsButton.addEventListener("click", () => {
  const target = filterTargetClip();
  setScopedColorProfile(target, { adjustments: DEFAULT_VIDEO_ADJUSTMENTS }, "color");
  elements.adjustmentInputs.forEach((input) => {
    input.value = "0";
    if (input.nextElementSibling) input.nextElementSibling.value = "0";
  });
  drawLutPreview();
  saveLocalProject();
  showToast(`Ajustes de ${target?.name || "vídeo principal"} redefinidos.`);
});

elements.imageTrackInput.addEventListener("change", async (event) => {
  const selected = selectedMediaClip();
  const selectedTrackId = selected?.type === "sequence"
    ? "base"
    : ["video", "image"].includes(selected?.type) ? selected.trackId : null;
  const trackId = selectedTrackId || state.videoTrackOrder[0] || ensureVideoTrack();
  await addImageClips(Array.from(event.target.files || []), trackId);
  event.target.value = "";
});
elements.sequenceVideoInput.addEventListener("change", async (event) => {
  const files = Array.from(event.target.files || []);
  const videos = files.filter((file) => file.type.startsWith("video/") || /\.mov$/i.test(file.name));
  const images = files.filter((file) => file.type.startsWith("image/"));
  if (videos.length) await addSequenceVideos(videos);
  if (images.length) await addImageClips(images, "base");
  event.target.value = "";
});
elements.overlayVideoInput.addEventListener("change", async (event) => {
  const trackId = state.pendingVideoTrackId;
  state.pendingVideoTrackId = null;
  if (trackId) await addVisualClips(Array.from(event.target.files || []), trackId);
  event.target.value = "";
});
elements.videoGridButtons.forEach((button) => {
  button.addEventListener("click", () => applyVideoGrid(Number(button.dataset.videoGrid)));
});
elements.projectAspectButton.addEventListener("click", (event) => {
  event.stopPropagation();
  elements.projectAspectMenu.hidden = !elements.projectAspectMenu.hidden;
  elements.projectAspectButton.setAttribute("aria-expanded", String(!elements.projectAspectMenu.hidden));
});
elements.projectAspectButtons.forEach((button) => {
  button.addEventListener("click", () => setProjectAspect(button.dataset.projectAspect));
});
document.addEventListener("click", (event) => {
  if (elements.projectAspectMenu.hidden || event.target.closest(".project-aspect-control")) return;
  elements.projectAspectMenu.hidden = true;
  elements.projectAspectButton.setAttribute("aria-expanded", "false");
});
elements.audioTrackInput.addEventListener("change", async (event) => {
  const trackId = state.pendingAudioTrackId || "audio-base";
  state.pendingAudioTrackId = null;
  await addAudioClips(Array.from(event.target.files || []), trackId);
  event.target.value = "";
});
function updateSelectedClipTiming() {
  const clip = selectedMediaClip();
  if (!clip) return;
  if (clip.type === "sequence") return;
  const duration = projectDuration() || Infinity;
  const requestedStart = clamp(Number(elements.mediaClipStart.value) || 0, 0, duration);
  const requestedEndValue = Number(elements.mediaClipEnd.value) || requestedStart + 0.1;
  const requestedEnd = imageCanExtendTrack(clip)
    ? Math.max(0, requestedEndValue)
    : clamp(requestedEndValue, 0, duration);
  clip.start = Math.min(requestedStart, Math.max(0, duration - 0.1));
  const mediaDuration = clip.type === "audio" ? clip.audioElement?.duration : clip.mediaElement?.duration;
  const sourceLimit = Number.isFinite(mediaDuration) ? clip.start + mediaDuration - (clip.sourceOffset || 0) : Infinity;
  const endLimit = clip.type === "image" && imageCanExtendTrack(clip)
    ? Infinity
    : Math.min(duration, sourceLimit);
  clip.end = Math.min(endLimit, Math.max(clip.start + 0.1, requestedEnd));
  clip.sourceSpan = (clip.end - clip.start) * clipPlaybackRate(clip);
  renderMediaTracks();
  saveLocalProject();
}

elements.mediaClipStart.addEventListener("change", updateSelectedClipTiming);
elements.mediaClipEnd.addEventListener("change", updateSelectedClipTiming);
elements.mediaClipSize.addEventListener("input", () => {
  const clip = selectedMediaClip();
  if (!clip || !["image", "video"].includes(clip.type)) return;
  clip.size = Number(elements.mediaClipSize.value);
  elements.mediaClipSizeValue.value = `${Math.round(clip.size)}%`;
  updateMediaPreview();
});
elements.mediaClipSize.addEventListener("change", saveLocalProject);
elements.mediaClipOpacity.addEventListener("input", () => {
  const clip = selectedMediaClip();
  if (!clip || !["image", "video"].includes(clip.type)) return;
  clip.opacity = Number(elements.mediaClipOpacity.value) / 100;
  elements.mediaClipOpacityValue.value = `${Math.round(clip.opacity * 100)}%`;
  updateMediaPreview();
});
elements.mediaClipOpacity.addEventListener("change", saveLocalProject);
elements.mediaClipAnimation.addEventListener("change", () => {
  const clip = selectedMediaClip();
  if (!clip || !["image", "video"].includes(clip.type)) return;
  clip.animation = elements.mediaClipAnimation.value;
  updateMediaPreview();
  saveLocalProject();
});
elements.mediaClipVolume.addEventListener("input", () => {
  const clip = selectedMediaClip();
  if (!clip || !["audio", "video", "sequence"].includes(clip.type)) return;
  clip.volume = Number(elements.mediaClipVolume.value) / 100;
  elements.mediaClipVolumeValue.value = `${Math.round(clip.volume * 100)}%`;
  if (clip.type === "sequence" && activeSequenceClip()?.id === clip.id) {
    elements.video.volume = state.mainAudioGain ? 1 : clamp(clip.volume, 0, 1);
  }
  if (clip.type === "sequence" && activeSequenceClip()?.id === clip.id && state.mainAudioGain) {
    state.mainAudioGain.gain.value = clip.volume;
  }
  if (clip.type === "video") {
    const node = state.audioTrackNodes.get(clip.id);
    clip.mediaElement.volume = node ? 1 : clamp(clip.volume, 0, 1);
    if (node) node.gain.gain.value = clip.volume;
  }
  preparePreviewAudioMixer(true)
    .then(() => updateMediaPreview())
    .catch((error) => console.warn("Mixer de áudio indisponível", error));
  syncAudioClips();
  updateMediaPreview();
});
elements.mediaClipVolume.addEventListener("change", saveLocalProject);
elements.mediaClipSpeed.addEventListener("change", () => {
  const clip = selectedMediaClip();
  if (!clip || !["audio", "video", "sequence"].includes(clip.type)) return;
  setClipPlaybackRate(clip, Number(elements.mediaClipSpeed.value));
  if (clip.type === "sequence" && activeSequenceClip()?.id === clip.id) {
    elements.video.playbackRate = clipPlaybackRate(clip);
  }
  renderMediaTracks();
  renderCuts();
  updatePlayer();
  saveLocalProject();
  showToast(`Velocidade ajustada para ${clipPlaybackRate(clip).toFixed(2).replace(".", ",")}x.`);
});
elements.toggleAudioLinkButton.addEventListener("click", () => {
  const audio = selectedMediaClip();
  if (!audio || audio.type !== "audio" || !audio.extractedFrom) return;
  audio.linkedSpeed = audio.linkedSpeed === false;
  if (audio.linkedSpeed) {
    const sourceVideo = allMediaClips().find((clip) => clip.id === audio.extractedFrom);
    if (sourceVideo) {
      audio.sourceOffset = sourceVideo.sourceOffset || 0;
      audio.sourceSpan = clipSourceSpan(sourceVideo);
      audio.start = sourceVideo.start;
      applyPlaybackRateToClip(audio, clipPlaybackRate(sourceVideo));
    }
  }
  updateMediaInspector();
  syncAudioClips();
  saveLocalProject();
  showToast(audio.linkedSpeed ? "Áudio vinculado à velocidade do vídeo." : "Áudio livre para ajustes independentes.");
});

function updateSelectedSegmentFade(property, input, output) {
  const clip = selectedMediaClip();
  if (!clip || !["audio", "video", "sequence"].includes(clip.type)) return;
  const segment = selectedSegmentForClip(clip);
  const settings = segmentFadeSettings(clip, segment);
  const maximum = Math.max(0, Math.min(5, (segment.end - segment.start) / 2));
  settings[property] = clamp(Number(input.value) || 0, 0, maximum);
  input.value = String(settings[property]);
  output.value = `${settings[property].toFixed(1).replace(".", ",")} s`;
  updateMediaPreview();
  if (clip.type === "sequence") drawLutPreview();
}

elements.mediaFadeIn.addEventListener("input", () => {
  updateSelectedSegmentFade("fadeIn", elements.mediaFadeIn, elements.mediaFadeInValue);
});
elements.mediaFadeOut.addEventListener("input", () => {
  updateSelectedSegmentFade("fadeOut", elements.mediaFadeOut, elements.mediaFadeOutValue);
});
[elements.mediaFadeIn, elements.mediaFadeOut].forEach((input) => input.addEventListener("change", saveLocalProject));
elements.extractAudioButton.addEventListener("click", extractSelectedVideoAudio);
elements.duplicateMediaClipButton.addEventListener("click", duplicateSelectedMediaClip);
elements.deleteMediaClipButton.addEventListener("click", deleteSelectedMediaClip);

elements.activeCueText.addEventListener("input", () => {
  const cue = state.cues[state.activeCue];
  if (!cue) return;
  cue.text = elements.activeCueText.value;
  if (elements.captionLiveText && document.activeElement !== elements.captionLiveText) elements.captionLiveText.value = cue.text;
  if (elements.captionLiveCount) elements.captionLiveCount.value = `${cue.text.length} / 120`;
  const block = elements.cueList.children[state.activeCue];
  if (block) block.textContent = cue.text;
  updateCaption();
  saveLocalProject();
});
elements.captionLiveText?.addEventListener("input", () => {
  const cue = state.cues[state.activeCue];
  if (!cue) return;
  cue.text = elements.captionLiveText.value;
  elements.captionLiveCount.value = `${cue.text.length} / 120`;
  elements.activeCueText.value = cue.text;
  const block = elements.cueList.children[state.activeCue];
  if (block) block.textContent = cue.text;
  updateCaption();
  saveLocalProject();
});
elements.activeCueStart.addEventListener("change", () => updateCueStart(state.activeCue, Math.max(0, Number(elements.activeCueStart.value) || 0)));
elements.activeCueEnd.addEventListener("change", () => updateCueEnd(state.activeCue, Math.max(0, Number(elements.activeCueEnd.value) || 0)));
function deleteActiveCue() {
  const cue = state.cues[state.activeCue];
  if (!cue) return;
  state.captionCompositions = state.captionCompositions.filter((composition) => composition.cueId !== cue.id);
  state.cues.splice(state.activeCue, 1);
  state.activeCue = Math.min(state.activeCue, state.cues.length - 1);
  renderCues();
  updateCaption();
  saveLocalProject();
  showToast("Legenda excluída.");
}

elements.deleteActiveCueButton.addEventListener("click", deleteActiveCue);

function closeShortcuts() {
  elements.shortcutsModal.hidden = true;
  elements.shortcutsButton.focus();
}

elements.shortcutsButton.addEventListener("click", () => {
  elements.shortcutsModal.hidden = false;
  elements.closeShortcutsButton.focus();
});
elements.closeShortcutsButton.addEventListener("click", closeShortcuts);
elements.shortcutsModal.addEventListener("click", (event) => {
  if (event.target === elements.shortcutsModal) closeShortcuts();
});

function closeQuickMedia() {
  elements.quickMediaModal.hidden = true;
}

function openQuickMedia() {
  elements.quickMediaModal.hidden = false;
  elements.quickMediaButtons[0]?.focus();
}

elements.closeQuickMediaButton.addEventListener("click", closeQuickMedia);
elements.quickMediaModal.addEventListener("click", (event) => {
  if (event.target === elements.quickMediaModal) closeQuickMedia();
});
elements.quickMediaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetInput = button.dataset.quickMedia === "audio"
      ? elements.audioTrackInput
      : elements.sequenceVideoInput;
    closeQuickMedia();
    targetInput.click();
  });
});

elements.exportButton.addEventListener("click", () => {
  if (elements.exportFormat.value.startsWith("video-")) {
    openExportPreflight();
    return;
  }
  exportProject();
});
elements.includeCommercial.addEventListener("change", () => {
  updateCommercialVariantLabel();
  saveLocalProject();
});
elements.startExportButton.addEventListener("click", async () => {
  if (elements.startExportButton.disabled) return;
  elements.startExportButton.disabled = true;
  showExportRenderingUi();
  try {
    await exportProject();
  } finally {
    elements.startExportButton.disabled = false;
  }
});
function updateExportPerformanceNotice() {
  saveLocalProject();
  const isIOS = isIOSDevice();
  const frameRate = Number(elements.exportFrameRate.value);
  if (isIOS && elements.exportFormat.value === "video-4k" && frameRate === 60) {
    showToast("4K a 60 FPS exige muito do iPhone. 1080p a 60 FPS é mais estável.");
  } else if (isIOS && frameRate === 60) {
    showToast("60 FPS preserva vídeos mais fluidos, mas a exportação demora mais.");
  } else if (isIOS && elements.exportFormat.value === "video-4k") {
    showToast("4K exige mais memória no iPhone. 1080p é mais rápido e estável.");
  }
}
elements.exportFormat.addEventListener("change", updateExportPerformanceNotice);
elements.exportFrameRate.addEventListener("change", updateExportPerformanceNotice);
elements.exportColorMode.addEventListener("change", updateExportPerformanceNotice);
elements.cancelExportButton.addEventListener("click", () => {
  if (!elements.exportOptions.hidden) {
    elements.exportModal.hidden = true;
    return;
  }
  const wasExporting = Boolean(state.exportPreparing || state.exporting || state.recorder || state.optimizedOutput);
  const optimizedOutput = state.optimizedOutput;
  state.exportCanceled = true;
  state.exporting = false;
  elements.video.pause();
  if (state.recorder && state.recorder.state !== "inactive") state.recorder.stop();
  if (optimizedOutput && optimizedOutput.state !== "canceled" && optimizedOutput.state !== "finalized") {
    optimizedOutput.cancel().catch(() => {});
  }
  state.pendingExport = null;
  elements.saveExportButton.hidden = true;
  elements.exportModal.hidden = true;
  showToast(wasExporting ? "Exportação cancelada." : "Vídeo fechado.");
});
elements.saveExportButton.addEventListener("click", async () => {
  if (!state.pendingExport) return;
  const { blob, extension, mimeType } = state.pendingExport;
  const file = new File([blob], `${state.videoName}.${extension}`, { type: mimeType });
  try {
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: "Vídeo legendado" });
    } else {
      downloadFile(blob, extension, mimeType);
    }
    elements.exportModal.hidden = true;
    state.pendingExport = null;
    showToast("Vídeo salvo.");
  } catch (error) {
    if (error.name !== "AbortError") {
      downloadFile(blob, extension, mimeType);
      elements.exportModal.hidden = true;
    }
  }
});

function setActiveMobileTab(targetId) {
  elements.mobileTabs.forEach((button) => {
    const active = button.dataset.mobileTarget === targetId;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

elements.mobileTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.mobileTarget);
    if (!target) return;
    setActiveMobileTab(button.dataset.mobileTarget);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  });
});

let mobileTabFrame = null;
function updateMobileTabFromScroll() {
  mobileTabFrame = null;
  if (window.innerWidth > 760) return;
  const sections = ["videoEditor", "scriptEditor", "reviewEditor"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  let current = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 76) current = section;
  });
  if (current) setActiveMobileTab(current.id);
}

window.addEventListener("scroll", () => {
  if (!mobileTabFrame) mobileTabFrame = requestAnimationFrame(updateMobileTabFromScroll);
}, { passive: true });
window.addEventListener("resize", updateMobileTabFromScroll);
window.addEventListener("resize", () => applyTimelineZoom(state.timelineZoom, false), { passive: true });

let playheadStepSeconds = 0.2;

function stepPlayhead(direction) {
  if (!elements.video.src || !projectDuration()) return;
  const target = clamp(projectCurrentTime() + direction * playheadStepSeconds, 0, projectDuration());
  elements.video.pause();
  seekProjectTime(target, false).catch(() => {});
}

function changePlayheadStep(direction) {
  playheadStepSeconds = clamp(Math.round((playheadStepSeconds + direction * 0.1) * 10) / 10, 0.1, 5);
  showToast(`Passo do cursor: ${playheadStepSeconds.toFixed(1).replace(".", ",")} s`);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.shortcutsModal.hidden) {
    event.preventDefault();
    closeShortcuts();
    return;
  }
  if (event.key === "Escape" && !elements.quickMediaModal.hidden) {
    event.preventDefault();
    closeQuickMedia();
    return;
  }
  const isTyping = event.target instanceof Element
    && event.target.matches("textarea, input, select, [contenteditable='true']");
  if (!elements.shortcutsModal.hidden || !elements.quickMediaModal.hidden) return;
  if (
    window.innerWidth > 760
    && !isTyping
    && !event.repeat
    && !event.altKey
    && !event.ctrlKey
    && !event.metaKey
    && elements.shortcutsModal.hidden
    && elements.quickMediaModal.hidden
  ) {
    const key = event.key.toLowerCase();
    if (["d", "n", "e", "l", "r", "<", ">", ",", "."].includes(key)) {
      event.preventDefault();
      if (key === "d") {
        if (selectedMediaClip()) duplicateSelectedMediaClip().catch((error) => showToast(error.message));
        else showToast("Selecione um vídeo, imagem ou áudio para duplicar.");
      } else if (key === "n") {
        openQuickMedia();
      } else if (key === "e") {
        if (elements.video.src) elements.exportButton.click();
        else showToast("Abra um vídeo antes de exportar.");
      } else if (key === "l") {
        elements.stage.classList.remove("tools-collapsed");
        activateToolTab("caption");
      } else if (key === "r") {
        elements.stage.classList.remove("tools-collapsed");
        activateToolTab("review");
      } else if (key === "<" || key === ",") {
        if (!elements.syncNextButton.disabled) elements.syncNextButton.click();
        else showToast("Não há uma próxima legenda disponível.");
      } else if (key === ">" || key === ".") {
        if (!elements.extendPreviousButton.disabled) elements.extendPreviousButton.click();
        else showToast("Não há uma legenda anterior disponível.");
      }
      return;
    }
  }
  if (
    window.innerWidth > 760
    && !isTyping
    && !event.altKey
    && !event.ctrlKey
    && !event.metaKey
    && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
  ) {
    event.preventDefault();
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      changePlayheadStep(event.key === "ArrowUp" ? 1 : -1);
    } else if (elements.video.src) {
      stepPlayhead(event.key === "ArrowRight" ? 1 : -1);
    }
    return;
  }
  if (
    window.innerWidth > 760
    && !isTyping
    && !event.repeat
    && !event.altKey
    && !event.ctrlKey
    && !event.metaKey
    && event.key.toLowerCase() === "s"
  ) {
    event.preventDefault();
    splitSelectedClipAtPlayhead(["sequence", "video"]);
    return;
  }
  if (event.defaultPrevented) return;
  if (!isTyping && ["Delete", "Backspace"].includes(event.key)) {
    if (selectedMediaClip()) {
      event.preventDefault();
      deleteSelectedMediaClip();
      return;
    }
    if (state.cues[state.activeCue]) {
      event.preventDefault();
      deleteActiveCue();
      return;
    }
  }
  if (event.code === "Space" && !isTyping && elements.video.src) {
    event.preventDefault();
    togglePlayback();
  }
}, { capture: true });

let appViewportHeight = 0;
function updateAppViewportHeight() {
  const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const viewport = window.visualViewport;
  const height = Math.round(standalone ? window.innerHeight : viewport?.height || window.innerHeight);
  const viewportBottom = (viewport?.height || window.innerHeight) + (viewport?.offsetTop || 0);
  const reportedBottomGap = Math.round((window.screen?.height || height) - viewportBottom);
  const bottomOverscan = standalone ? Math.min(96, Math.max(34, reportedBottomGap)) : 0;
  document.documentElement.style.setProperty("--pwa-bottom-overscan", `${bottomOverscan}px`);
  if (Math.abs(height - appViewportHeight) < 2) return;
  appViewportHeight = height;
  document.documentElement.style.setProperty("--app-height", `${height}px`);
  applyCaptionPositionStyles();
}

updateAppViewportHeight();
window.addEventListener("resize", updateAppViewportHeight, { passive: true });
window.visualViewport?.addEventListener("resize", updateAppViewportHeight, { passive: true });

["gesturestart", "gesturechange", "gestureend"].forEach((eventName) => {
  document.addEventListener(eventName, (event) => event.preventDefault(), { passive: false });
});
document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 1) event.preventDefault();
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener("touchend", (event) => {
  const now = Date.now();
  const interactiveField = event.target.closest?.("input, textarea, select");
  if (!interactiveField && now - lastTouchEnd < 320) event.preventDefault();
  lastTouchEnd = now;
}, { passive: false });

restoreLocalProject();
applyCaptionPositionStyles();
elements.captionOverlay.style.fontFamily = captionFontFamily();
applyCaptionColors();
updateLutControls();
loadFilterCatalog();
renderCues();
updateScriptState();
updateMobileTabFromScroll();

if ("serviceWorker" in navigator) {
  let reloadingForUpdate = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadingForUpdate) return;
    reloadingForUpdate = true;
    window.location.reload();
  });
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js?v=106", { updateViaCache: "none" })
      .then((registration) => registration.update())
      .catch(() => {});
  });
}

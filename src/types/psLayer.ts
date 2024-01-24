// #region : PsLayer 관련
export interface PsLayer {
  id: number;
  layerName: string;
  lockStatus: PsLockStatus;
  layerGroupId: number;
  isVisible: boolean;
  layerKind: PsLayerKind;
  pathId: number;
  clippingTargetLayerId: number;
  clippedLayerIds: number[];
  layerMaskId: number;
  isLayerMaskLinked: boolean;
  isLayerEffectEnabled: boolean;
  linkedLayerIds: number[];
  layerStyle: PsLayerStyle;
  x: number;
  y: number;
  width: number;
  height: number;
  imageURL?: string;
}

export type PsLockStatus = {
  transparentPixelLock: boolean;
  imagePixelLock: boolean;
  positionLock: boolean;
  allAttributesLock: boolean;
};

export enum PsLayerKind {
  Pixel = 'PIXEL',
  Adjustment = 'ADJUSTMENT',
  Type = 'TYPE',
  Shape = 'SHAPE',
  Smartobject = 'SMARTOBJECT',
}
// #endregion : PsLayer 관련

export type PsLayerStyle = {
  blendingOptions: PsBlendingOptions;
  bevelEmboss: PsBevelEmbossLayerStyle;
  strokes: PsStrokeLayerStyle[];
  innerShadows: PsInnerShadowLayerStyle[];
  innerGlow: PsInnerGlowLayerStyle;
  satin: PsSatinLayerStyle;
  colorOverlays: PsColorOverlayLayerStyle[];
  gradientOverlays: PsGradientOverlayLayerStyle[];
  patternOverlay: PsPatternOverlayLayerStyle;
  outerGlow: PsOuterGlowLayerStyle;
  dropShadows: PsDropShadowLayerStyle[];
};

// #region : PsLayerStyle 관련
// #region :: PsBlendingOptions 관련
export type PsBlendingOptions = {
  blendMode: PsBlendMode;
  opacity: number;
  fillOpacity: number;
  channels: PsBlendingOptionsChannels;
  knockout: PsBlendingOptionsKnockout;
  blendInteriorEffects: boolean;
  blendClippedLayers: boolean;
  transparencyShapesLayer: number;
  layerMaskHideEffects: boolean;
  vectorMaskHideEffects: boolean;
  blendIf: PsBlendingOptionsBlendIf;
  blendIfCurrentLayerBlackValue: number;
  blendIfCurrentLayerWhiteValue: number;
  blendIfUnderlyingLayerBlackValue: number;
  blendIfUnderlyingLayerWhiteValue: number;
};

export enum PsBlendMode {
  Normal = 'NORMAL',
  Dissolve = 'DISSOLVE',
  Darken = 'DARKEN',
  Multiply = 'MULTIPLY',
  ColorBurn = 'COLORBURN',
  LinearBurn = 'LINEARBURN',
  DarkerColor = 'DARKERCOLOR',
  Lighten = 'LIGHTEN',
  Screen = 'SCREEN',
  Colordodge = 'COLORDODGE',
  Lineardodge = 'LINEARDODGE',
  Lightercolor = 'LIGHTERCOLOR',
  Overlay = 'OVERLAY',
  Softlight = 'SOFTLIGHT',
  Hardlight = 'HARDLIGHT',
  Vividlight = 'VIVIDLIGHT',
  Linearlight = 'LINEARLIGHT',
  Pinlight = 'PINLIGHT',
  Hardmix = 'HARDMIX',
  Difference = 'DIFFERENCE',
  Exclusion = 'EXCLUSION',
  Subtract = 'SUBTRACT',
  Divide = 'DIVIDE',
  Hue = 'HUE',
  Saturation = 'SATURATION',
  Color = 'COLOR',
  Luminosity = 'LUMINOSITY',
}

export type PsBlendingOptionsChannels = {
  red: boolean;
  green: boolean;
  blue: boolean;
};

export enum PsBlendingOptionsKnockout {
  None = 'NONE',
  Shallow = 'SHALLOW',
  Deep = 'DEEP',
}

export enum PsBlendingOptionsBlendIf {
  Gray = 'GRAY',
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}
// #endregion :: PsBlendingOptions 관련

// #region :: PsBevelEmbossLayerStyle 관련
export type PsBevelEmbossLayerStyle = {
  isEnabled: boolean;
  style: PsBevelEmbossStyle;
  technique: PsBevelEmbossTechnique;
  depth: number;
  direction: PsBevelEmbossDirection;
  size: number;
  soften: number;
  angleOfLightSource: number;
  altitude: number;
  useGlobalLight: boolean;
  glossContourCurveId: number;
  isGlossContourAntiAliased: boolean;
  highlightMode: PsBlendMode;
  highlightColor: PsColor;
  highlightOpacity: number;
  shadowMode: PsBlendMode;
  shadowColor: PsColor;
  shadowOpacity: number;
  isContourEnabled: boolean;
  contour: PsBevelEmbossContour;
  isTextureEnabled: boolean;
  texture: PsBevelEmbossTexture;
};

export enum PsBevelEmbossStyle {
  Outerbevel = 'OUTERBEVEL',
  Innerbevel = 'INNERBEVEL',
  Emboss = 'EMBOSS',
  Pillowemboss = 'PILLOWEMBOSS',
  Strokeemboss = 'STROKEEMBOSS',
}

export enum PsBevelEmbossTechnique {
  Smooth = 'SMOOTH',
  Chiselhard = 'CHISELHARD',
  Chiselsoft = 'CHISELSOFT',
}

export enum PsBevelEmbossDirection {
  Up = 'UP',
  Down = 'DOWN',
}

export type PsBevelEmbossContour = {
  contourCurveId: number;
  isAntiAliased: boolean;
  range: number;
};

export type PsBevelEmbossTexture = {
  patternId: number;
  scale: number;
  depth: number;
  isInverted: boolean;
  isLinkedWithLayer: boolean;
};
// #endregion :: PsBevelEmbossLayerStyle 관련

// #region :: PsStrokeLayerStyle 관련
export type PsStrokeLayerStyle = {
  isEnabled: boolean;
  size: number;
  position: PsStrokePosition;
  blendMode: PsBlendMode;
  opacity: number;
  overprint: boolean;
  fillType: PsStrokeFillType;
  fillColor: PsColor;
  fillGradient: PsStrokeFillGradient;
  fillPattern: PsStrokeFillPattern;
};

export enum PsStrokePosition {
  Outside = 'OUTSIDE',
  Inside = 'INSIDE',
  Center = 'CENTER',
}

export enum PsStrokeFillType {
  Color = 'COLOR',
  Gradient = 'GRADIENT',
  Pattern = 'PATTERN',
}

export type PsStrokeFillGradient = {
  gradientId: number;
  reverse: boolean;
  style: PsGradientStyle;
  alignWithLayer: boolean;
  angle: number;
  dither: boolean;
  scale: number;
  method: PsGradientMethod;
};

export type PsStrokeFillPattern = {
  patternId: number;
  angle: number;
  scale: number;
  linkWithLayer: boolean;
};
// #endregion :: PsStrokeLayerStyle 관련

// #region :: PsInnerShadowLayerStyle 관련
export type PsInnerShadowLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  color: PsColor;
  opacity: number;
  angle: number;
  useGlobalLight: boolean;
  distance: number;
  choke: number;
  size: number;
  contourCurveId: number;
  isContourAntiAliased: boolean;
  noise: number;
};
// #endregion :: PsInnerShadowLayerStyle 관련

// #region :: PsInnerGlowLayerStyle 관련
export type PsInnerGlowLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  opacity: number;
  noise: number;
  colorOrGradient: PsColorOrGradient;
  color: PsColor;
  gradientId: number;
  gradientMethod: PsGradientMethod;
  technique: PsInnerGlowTechnique;
  source: PsInnerGlowSource;
  choke: number;
  size: number;
  contourCurveId: number;
  isContourAntiAliased: boolean;
  contourRange: number;
  jitter: number;
};

export enum PsInnerGlowTechnique {
  Softer = 'SOFTER',
  Precise = 'PRECISE',
}

export enum PsInnerGlowSource {
  Center = 'CENTER',
  Edge = 'EDGE',
}
// #endregion :: PsInnerGlowLayerStyle 관련

// #region :: PsSatinLayerStyle
export type PsSatinLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  color: PsColor;
  opacity: number;
  angle: number;
  distance: number;
  size: number;
  contourCurveId: number;
  isContourAntiAliased: boolean;
  isContourInverted: boolean;
};
// #endregion :: PsSatinLayerStyle

// #region :: PsColorOverlayLayerStyle
export type PsColorOverlayLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  color: PsColor;
  opacity: number;
};
// #endregion :: PsColorOverlayLayerStyle

// #region :: PsGradientOverlayLayerStyle
export type PsGradientOverlayLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  dither: boolean;
  opacity: number;
  gradientId: number;
  reverse: boolean;
  style: PsGradientStyle;
  alignWithLayer: boolean;
  angle: number;
  scale: number;
  gradientMethod: PsGradientMethod;
};
// #endregion :: PsGradientOverlayLayerStyle

// #region :: PsPatternOverlayLayerStyle
export type PsPatternOverlayLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  opacity: number;
  patternId: number;
  angle: number;
  scale: number;
  isLinkedWithLayer: boolean;
};
// #endregion :: PsPatternOverlayLayerStyle

// #region :: PsOuterGlowLayerStyle 관련
export type PsOuterGlowLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  opacity: number;
  noise: number;
  colorOrGradient: PsColorOrGradient;
  color: PsColor;
  gradientId: number;
  gradientMethod: PsGradientMethod;
  technique: PsOuterGlowTechnique;
  spread: number;
  size: number;
  contourCurveId: number;
  isContourAntiAliased: boolean;
  contourRange: number;
  jitter: number;
};

export enum PsOuterGlowTechnique {
  Softer = 'SOFTER',
  Precise = 'PRECISE',
}
// #endregion :: PsOuterGlowLayerStyle 관련

// #region :: PsDropShadowLayerStyle
export type PsDropShadowLayerStyle = {
  isEnabled: boolean;
  blendMode: PsBlendMode;
  color: PsColor;
  opacity: number;
  angle: number;
  useGlobalLight: boolean;
  distance: number;
  spread: number;
  size: number;
  contourId: number;
  isAntiAliased: boolean;
  noise: number;
  layerKnockOut: boolean;
};
// #endregion :: PsDropShadowLayerStyle

// #endregion : PsLayerStyle 관련

export type PsColor = {
  red: number;
  green: number;
  blue: number;
};

export enum PsGradientStyle {
  Linear = 'LINEAR',
  Radial = 'RADIAL',
  Angle = 'ANGLE',
  Reflected = 'REFLECTED',
  Diamond = 'DIAMOND',
  Shapeburst = 'SHAPEBURST',
}

export enum PsGradientMethod {
  Perceptual = 'PERCEPTUAL',
  Linear = 'LINEAR',
  Classic = 'CLASSIC',
}

export enum PsColorOrGradient {
  Color = 'COLOR',
  Gradient = 'GRADIENT',
}

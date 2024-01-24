export default `#graphql
  type PsLayer {
    id: Int!
    layerName: String!
    lockStatus: PsLockStatus!
    layerGroupId: Int!
    isVisible: Boolean!
    layerKind: PsLayerKind!
    pathId: Int!
    clippingTargetLayerId: Int!
    clippedLayerIds: [Int!]!
    layerMaskId: Int!
    isLayerMaskLinked: Boolean!
    isLayerEffectEnabled: Boolean!
    linkedLayerIds: [Int!]!
    layerStyle: PsLayerStyle!
    x: Int!
    y: Int!
    width: Int!
    height: Int!
    imageURL: String
  }

  type PsLockStatus {
    transparentPixelLock: Boolean!
    imagePixelLock: Boolean!
    positionLock: Boolean!
    allAttributesLock: Boolean!
  }

  enum PsLayerKind {
    PIXEL
    ADJUSTMENT
    TYPE
    SHAPE
    SMARTOBJECT
  }

  type PsLayerStyle {
    blendingOptions: PsBlendingOptions!
    bevelEmboss: PsBevelEmbossLayerStyle!
    strokes: [PsStrokeLayerStyle!]!
    innerShadows: [PsInnerShadowLayerStyle!]!
    innerGlow: PsInnerGlowLayerStyle!
    satin: PsSatinLayerStyle!
    colorOverlays: [PsColorOverlayLayerStyle!]!
    gradientOverlays: [PsGradientOverlayLayerStyle!]!
    patternOverlay: PsPatternOverlayLayerStyle!
    outerGlow: PsOuterGlowLayerStyle!
    dropShadows: [PsDropShadowLayerStyle!]!
  }

  type PsBlendingOptions {
    blendMode: PsBlendMode!
    opacity: Int!
    fillOpacity: Int!
    channels: PsBlendingOptionsChannels!
    knockout: PsBlendingOptionsKnockout!
    blendInteriorEffects: Boolean!
    blendClippedLayers: Boolean!
    transparencyShapesLayer: Int!
    layerMaskHideEffects: Boolean!
    vectorMaskHideEffects: Boolean!
    blendIf: PsBlendingOptionsBlendIf!
    blendIfCurrentLayerBlackValue: Int!
    blendIfCurrentLayerWhiteValue: Int!
    blendIfUnderlyingLayerBlackValue: Int!
    blendIfUnderlyingLayerWhiteValue: Int!
  }

  enum PsBlendMode {
    NORMAL
    DISSOLVE
    DARKEN
    MULTIPLY
    COLORBURN
    LINEARBURN
    DARKERCOLOR
    LIGHTEN
    SCREEN
    COLORDODGE
    LINEARDODGE
    LIGHTERCOLOR
    OVERLAY
    SOFTLIGHT
    HARDLIGHT
    VIVIDLIGHT
    LINEARLIGHT
    PINLIGHT
    HARDMIX
    DIFFERENCE
    EXCLUSION
    SUBTRACT
    DIVIDE
    HUE
    SATURATION
    COLOR
    LUMINOSITY
  }

  type PsBlendingOptionsChannels {
    red: Boolean!
    green: Boolean!
    blue: Boolean!
  }

  enum PsBlendingOptionsKnockout {
    NONE
    SHALLOW
    DEEP
  }

  enum PsBlendingOptionsBlendIf {
    GRAY
    RED
    GREEN
    BLUE
  }

  type PsBevelEmbossLayerStyle {
    isEnabled: Boolean!
    style: PsBevelEmbossStyle!
    technique: PsBevelEmbossTechnique!
    depth: Int!
    direction: PsBevelEmbossDirection!
    size: Int!
    soften: Int!
    angleOfLightSource: Int!
    altitude: Int!
    useGlobalLight: Boolean!
    glossContourCurveId: Int!
    isGlossContourAntiAliased: Boolean!
    highlightMode: PsBlendMode!
    highlightColor: PsColor!
    highlightOpacity: Int!
    shadowMode: PsBlendMode!
    shadowColor: PsColor!
    shadowOpacity: Int!
    isContourEnabled: Boolean!
    contour: PsBevelEmbossContour!
    isTextureEnabled: Boolean!
    texture: PsBevelEmbossTexture!
  }

  enum PsBevelEmbossStyle {
    OUTERBEVEL
    INNERBEVEL
    EMBOSS
    PILLOWEMBOSS
    STROKEEMBOSS
  }

  enum PsBevelEmbossTechnique {
    SMOOTH
    CHISELHARD
    CHISELSOFT
  }

  enum PsBevelEmbossDirection {
    UP
    DOWN
  }

  type PsBevelEmbossContour {
    contourCurveId: Int!
    isAntiAliased: Boolean!
    range: Int!
  }

  type PsBevelEmbossTexture {
    patternId: Int!
    scale: Int!
    depth: Int!
    isInverted: Boolean!
    isLinkedWithLayer: Boolean!
  }

  type PsStrokeLayerStyle {
    isEnabled: Boolean!
    size: Int!
    position: PsStrokePosition!
    blendMode: PsBlendMode!
    opacity: Int!
    overprint: Boolean!
    fillType: PsStrokeFillType!
    fillColor: PsColor!
    fillGradient: PsStrokeFillGradient!
    fillPattern: PsStrokeFillPattern!
  }

  enum PsStrokePosition {
    OUTSIDE
    INSIDE
    CENTER
  }

  enum PsStrokeFillType {
    COLOR
    GRADIENT
    PATTERN
  }

  type PsStrokeFillGradient {
    gradientId: Int!
    reverse: Boolean!
    style: PsGradientStyle!
    alignWithLayer: Boolean!
    angle: Int!
    dither: Boolean!
    scale: Int!
    method: PsGradientMethod!
  }

  type PsStrokeFillPattern {
    patternId: Int!
    angle: Int!
    scale: Int!
    linkWithLayer: Boolean!
  }

  type PsInnerShadowLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    color: PsColor!
    opacity: Int!
    angle: Int!
    useGlobalLight: Boolean!
    distance: Int!
    choke: Int!
    size: Int!
    contourCurveId: Int!
    isContourAntiAliased: Boolean!
    noise: Int!
  }

  type PsInnerGlowLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    opacity: Int!
    noise: Int!
    colorOrGradient: PsColorOrGradient!
    color: PsColor!
    gradientId: Int!
    gradientMethod: PsGradientMethod!
    technique: PsInnerGlowTechnique!
    source: PsInnerGlowSource!
    choke: Int!
    size: Int!
    contourCurveId: Int!
    isContourAntiAliased: Boolean!
    contourRange: Int!
    jitter: Int!
  }

  enum PsInnerGlowTechnique {
    SOFTER
    PRECISE
  }

  enum PsInnerGlowSource {
    CENTER
    EDGE
  }

  type PsSatinLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    color: PsColor!
    opacity: Int!
    angle: Int!
    distance: Int!
    size: Int!
    contourCurveId: Int!
    isContourAntiAliased: Boolean!
    isContourInverted: Boolean!
  }

  type PsColorOverlayLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    color: PsColor!
    opacity: Int!
  }

  type PsGradientOverlayLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    dither: Boolean!
    opacity: Int!
    gradientId: Int!
    reverse: Boolean!
    style: PsGradientStyle!
    alignWithLayer: Boolean!
    angle: Int!
    scale: Int!
    gradientMethod: PsGradientMethod!
  }

  type PsPatternOverlayLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    opacity: Int!
    patternId: Int!
    angle: Int!
    scale: Int!
    isLinkedWithLayer: Boolean!
  }

  type PsOuterGlowLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    opacity: Int!
    noise: Int!
    colorOrGradient: PsColorOrGradient!
    color: PsColor!
    gradientId: Int!
    gradientMethod: PsGradientMethod!
    technique: PsOuterGlowTechnique!
    spread: Int!
    size: Int!
    contourCurveId: Int!
    isContourAntiAliased: Boolean!
    contourRange: Int!
    jitter: Int!
  }

  enum PsOuterGlowTechnique {
    SOFTER
    PRECISE
  }

  type PsDropShadowLayerStyle {
    isEnabled: Boolean!
    blendMode: PsBlendMode!
    color: PsColor!
    opacity: Int!
    angle: Int!
    useGlobalLight: Boolean!
    distance: Int!
    spread: Int!
    size: Int!
    contourId: Int!
    isAntiAliased: Boolean!
    noise: Int!
    layerKnockOut: Boolean!
  }

  type PsColor {
    red: Int!
    green: Int!
    blue: Int!
  }

  enum PsGradientStyle {
    LINEAR
    RADIAL
    ANGLE
    REFLECTED
    DIAMOND
    SHAPEBURST
  }

  enum PsGradientMethod {
    PERCEPTUAL
    LINEAR
    CLASSIC
  }

  enum PsColorOrGradient {
    COLOR
    GRADIENT
  }

  type Query {
    psLayers: [PsLayer]!
  }
`;

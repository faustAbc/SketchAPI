interface MSRectangleShapeSectionUninitialized<InitializedType = MSRectangleShapeSection> extends MSSingleItemInspectorSectionUninitialized<MSRectangleShapeSection> {}

interface MSRectangleShapeSection extends MSSingleItemInspectorSection {
}

declare const MSRectangleShapeSection: {
  alloc(): MSRectangleShapeSectionUninitialized;
  class(): MSRectangleShapeSection;
  itemClass(): any;
  canHandleLayer(layer: MSLayer): boolean;
}


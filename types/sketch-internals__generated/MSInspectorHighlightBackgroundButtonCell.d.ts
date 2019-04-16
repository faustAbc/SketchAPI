interface MSInspectorHighlightBackgroundButtonCellUninitialized<InitializedType = MSInspectorHighlightBackgroundButtonCell> extends MSInspectorButtonCellUninitialized<MSInspectorHighlightBackgroundButtonCell> {}

interface MSInspectorHighlightBackgroundButtonCell extends MSInspectorButtonCell {
}

declare const MSInspectorHighlightBackgroundButtonCell: {
  alloc(): MSInspectorHighlightBackgroundButtonCellUninitialized;
  class(): MSInspectorHighlightBackgroundButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}


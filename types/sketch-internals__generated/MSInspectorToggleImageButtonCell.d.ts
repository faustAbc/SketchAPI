interface MSInspectorToggleImageButtonCellUninitialized<InitializedType = MSInspectorToggleImageButtonCell> extends MSInspectorButtonCellUninitialized<MSInspectorToggleImageButtonCell> {}

interface MSInspectorToggleImageButtonCell extends MSInspectorButtonCell {
}

declare const MSInspectorToggleImageButtonCell: {
  alloc(): MSInspectorToggleImageButtonCellUninitialized;
  class(): MSInspectorToggleImageButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}


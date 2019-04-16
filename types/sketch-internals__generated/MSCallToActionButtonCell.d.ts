interface MSCallToActionButtonCellUninitialized<InitializedType = MSCallToActionButtonCell> extends MSHoverButtonCellUninitialized<MSCallToActionButtonCell> {}

interface MSCallToActionButtonCell extends MSHoverButtonCell {
}

declare const MSCallToActionButtonCell: {
  alloc(): MSCallToActionButtonCellUninitialized;
  class(): MSCallToActionButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}


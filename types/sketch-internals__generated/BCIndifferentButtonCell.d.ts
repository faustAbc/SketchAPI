interface BCIndifferentButtonCellUninitialized<InitializedType = BCIndifferentButtonCell> extends NSButtonCellUninitialized<BCIndifferentButtonCell> {}

interface BCIndifferentButtonCell extends NSButtonCell {
}

declare const BCIndifferentButtonCell: {
  alloc(): BCIndifferentButtonCellUninitialized;
  class(): BCIndifferentButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}


interface NSBrowserUninitialized<InitializedType = NSBrowser> extends NSControlUninitialized<NSBrowser> {}

interface NSBrowser extends NSControl {
  loadColumnZero(): void;
  setCellClass(factoryId: any): void;
  itemAtIndexPath(indexPath: NSIndexPath): any;
  itemAtRow_inColumn(row: NSInteger, column: NSInteger): any;
  indexPathForColumn(column: NSInteger): NSIndexPath;
  isLeafItem(item: any | null): boolean;
  reloadDataForRowIndexes_inColumn(rowIndexes: NSIndexSet, column: NSInteger): void;
  parentForItemsInColumn(column: NSInteger): any;
  scrollRowToVisible_inColumn(row: NSInteger, column: NSInteger): void;
  setTitle_ofColumn(string: NSString | string, column: NSInteger): void;
  titleOfColumn(column: NSInteger): NSString;
  setPath(path: NSString | string): boolean;
  path(): NSString;
  pathToColumn(column: NSInteger): NSString;
  selectedCellInColumn(column: NSInteger): any;
  selectRow_inColumn(row: NSInteger, column: NSInteger): void;
  selectedRowInColumn(column: NSInteger): NSInteger;
  selectRowIndexes_inColumn(indexes: NSIndexSet, column: NSInteger): void;
  selectedRowIndexesInColumn(column: NSInteger): NSIndexSet;
  reloadColumn(column: NSInteger): void;
  validateVisibleColumns(): void;
  scrollColumnsRightBy(shiftAmount: NSInteger): void;
  scrollColumnsLeftBy(shiftAmount: NSInteger): void;
  scrollColumnToVisible(column: NSInteger): void;
  addColumn(): void;
  loadedCellAtRow_column(row: NSInteger, col: NSInteger): any;
  selectAll(sender: any | null): void;
  tile(): void;
  doClick(sender: any | null): void;
  doDoubleClick(sender: any | null): void;
  sendAction(): boolean;
  titleFrameOfColumn(column: NSInteger): NSRect;
  drawTitleOfColumn_inRect(column: NSInteger, rect: NSRect): void;
  frameOfColumn(column: NSInteger): NSRect;
  frameOfInsideOfColumn(column: NSInteger): NSRect;
  frameOfRow_inColumn(row: NSInteger, column: NSInteger): NSRect;
  getRow_column_forPoint(row: NSInteger | null, column: NSInteger | null, point: NSPoint): boolean;
  columnWidthForColumnContentWidth(columnContentWidth: CGFloat): CGFloat;
  columnContentWidthForColumnWidth(columnWidth: CGFloat): CGFloat;
  setWidth_ofColumn(columnWidth: CGFloat, columnIndex: NSInteger): void;
  widthOfColumn(column: NSInteger): CGFloat;
  noteHeightOfRowsWithIndexesChanged_inColumn(indexSet: NSIndexSet, columnIndex: NSInteger): void;
  setDefaultColumnWidth(columnWidth: CGFloat): void;
  defaultColumnWidth(): CGFloat;
  canDragRowsWithIndexes_inColumn_withEvent(rowIndexes: NSIndexSet, column: NSInteger, event: NSEvent): boolean;
  draggingImageForRowsWithIndexes_inColumn_withEvent_offset(rowIndexes: NSIndexSet, column: NSInteger, event: NSEvent, dragImageOffset: NSPointPointer | null): NSImage;
  setDraggingSourceOperationMask_forLocal(mask: NSDragOperation, isLocal: boolean): void;
  editItemAtIndexPath_withEvent_select(indexPath: NSIndexPath, event: NSEvent | null, select: boolean): void;
  setAcceptsArrowKeys(flag: boolean): void;
  acceptsArrowKeys(): boolean;
  displayColumn(column: NSInteger): void;
  displayAllColumns(): void;
  scrollViaScroller(sender: NSScroller): void;
  updateScroller(): void;
  setMatrixClass(factoryId: any): void;
  matrixClass(): any;
  columnOfMatrix(matrix: NSMatrix): NSInteger;
  matrixInColumn(column: NSInteger): NSMatrix;

  loaded(): boolean;
  doubleAction(): string;
  setDoubleAction(doubleAction: string): void;
  cellPrototype(): any;
  setCellPrototype(cellPrototype: any): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  reusesColumns(): boolean;
  setReusesColumns(reusesColumns: boolean): void;
  hasHorizontalScroller(): boolean;
  setHasHorizontalScroller(hasHorizontalScroller: boolean): void;
  autohidesScroller(): boolean;
  setAutohidesScroller(autohidesScroller: boolean): void;
  separatesColumns(): boolean;
  setSeparatesColumns(separatesColumns: boolean): void;
  titled(): boolean;
  setTitled(titled: boolean): void;
  minColumnWidth(): CGFloat;
  setMinColumnWidth(minColumnWidth: CGFloat): void;
  maxVisibleColumns(): NSInteger;
  setMaxVisibleColumns(maxVisibleColumns: NSInteger): void;
  allowsMultipleSelection(): boolean;
  setAllowsMultipleSelection(allowsMultipleSelection: boolean): void;
  allowsBranchSelection(): boolean;
  setAllowsBranchSelection(allowsBranchSelection: boolean): void;
  allowsEmptySelection(): boolean;
  setAllowsEmptySelection(allowsEmptySelection: boolean): void;
  takesTitleFromPreviousColumn(): boolean;
  setTakesTitleFromPreviousColumn(takesTitleFromPreviousColumn: boolean): void;
  sendsActionOnArrowKeys(): boolean;
  setSendsActionOnArrowKeys(sendsActionOnArrowKeys: boolean): void;
  pathSeparator(): NSString;
  setPathSeparator(pathSeparator: NSString | string): void;
  clickedColumn(): NSInteger;
  clickedRow(): NSInteger;
  selectedColumn(): NSInteger;
  selectedCell(): any;
  selectedCells(): NSArray<any>;
  selectionIndexPath(): NSIndexPath;
  setSelectionIndexPath(selectionIndexPath: NSIndexPath): void;
  selectionIndexPaths(): NSArray<any>;
  setSelectionIndexPaths(selectionIndexPaths: NSArray<any> | any[]): void;
  lastColumn(): NSInteger;
  setLastColumn(lastColumn: NSInteger): void;
  numberOfVisibleColumns(): NSInteger;
  firstVisibleColumn(): NSInteger;
  lastVisibleColumn(): NSInteger;
  titleHeight(): CGFloat;
  columnResizingType(): NSBrowserColumnResizingType;
  setColumnResizingType(columnResizingType: NSBrowserColumnResizingType): void;
  prefersAllColumnUserResizing(): boolean;
  setPrefersAllColumnUserResizing(prefersAllColumnUserResizing: boolean): void;
  rowHeight(): CGFloat;
  setRowHeight(rowHeight: CGFloat): void;
  columnsAutosaveName(): NSBrowserColumnsAutosaveName;
  setColumnsAutosaveName(columnsAutosaveName: NSBrowserColumnsAutosaveName): void;
  allowsTypeSelect(): boolean;
  setAllowsTypeSelect(allowsTypeSelect: boolean): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
}

declare const NSBrowser: {
  alloc(): NSBrowserUninitialized;
  class(): NSBrowser;
  removeSavedColumnsWithAutosaveName(name: NSBrowserColumnsAutosaveName): void;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;

}


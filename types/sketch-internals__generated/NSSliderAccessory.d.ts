interface NSSliderAccessoryUninitialized<InitializedType = NSSliderAccessory> extends NSObjectUninitialized<NSSliderAccessory> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSSliderAccessory extends NSObject, INSCoding, INSAccessibility, INSAccessibilityElement {
  encodeWithCoder(aCoder: NSCoder): void;
  accessibilityLayoutPointForScreenPoint(point: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(size: NSSize): NSSize;
  accessibilityScreenPointForLayoutPoint(point: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(size: NSSize): NSSize;
  accessibilityCellForColumn_row(column: NSInteger, row: NSInteger): any;
  accessibilityAttributedStringForRange(range: NSRange): NSAttributedString;
  accessibilityRangeForLine(line: NSInteger): NSRange;
  accessibilityStringForRange(range: NSRange): NSString;
  accessibilityRangeForPosition(point: NSPoint): NSRange;
  accessibilityRangeForIndex(index: NSInteger): NSRange;
  accessibilityFrameForRange(range: NSRange): NSRect;
  accessibilityRTFForRange(range: NSRange): NSData;
  accessibilityStyleRangeForIndex(index: NSInteger): NSRange;
  accessibilityLineForIndex(index: NSInteger): NSInteger;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  isAccessibilitySelectorAllowed(selector: string): boolean;
  accessibilityFrame(): NSRect;
  accessibilityParent(): any;
  isAccessibilityFocused(): boolean;
  accessibilityIdentifier(): NSString;

  behavior(): NSSliderAccessoryBehavior;
  setBehavior(behavior: NSSliderAccessoryBehavior): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  accessibilityElement(): boolean;
  setAccessibilityElement(accessibilityElement: boolean): void;
  accessibilityFrame(): NSRect;
  setAccessibilityFrame(accessibilityFrame: NSRect): void;
  accessibilityFocused(): boolean;
  setAccessibilityFocused(accessibilityFocused: boolean): void;
  accessibilityActivationPoint(): NSPoint;
  setAccessibilityActivationPoint(accessibilityActivationPoint: NSPoint): void;
  accessibilityTopLevelUIElement(): any;
  setAccessibilityTopLevelUIElement(accessibilityTopLevelUIElement: any): void;
  accessibilityURL(): NSURL;
  setAccessibilityURL(accessibilityURL: NSURL): void;
  accessibilityValue(): any;
  setAccessibilityValue(accessibilityValue: any): void;
  accessibilityValueDescription(): NSString;
  setAccessibilityValueDescription(accessibilityValueDescription: NSString | string): void;
  accessibilityVisibleChildren(): NSArray<any>;
  setAccessibilityVisibleChildren(accessibilityVisibleChildren: NSArray<any> | any[]): void;
  accessibilitySubrole(): NSAccessibilitySubrole;
  setAccessibilitySubrole(accessibilitySubrole: NSAccessibilitySubrole): void;
  accessibilityTitle(): NSString;
  setAccessibilityTitle(accessibilityTitle: NSString | string): void;
  accessibilityTitleUIElement(): any;
  setAccessibilityTitleUIElement(accessibilityTitleUIElement: any): void;
  accessibilityNextContents(): NSArray<any>;
  setAccessibilityNextContents(accessibilityNextContents: NSArray<any> | any[]): void;
  accessibilityOrientation(): NSAccessibilityOrientation;
  setAccessibilityOrientation(accessibilityOrientation: NSAccessibilityOrientation): void;
  accessibilityOverflowButton(): any;
  setAccessibilityOverflowButton(accessibilityOverflowButton: any): void;
  accessibilityParent(): any;
  setAccessibilityParent(accessibilityParent: any): void;
  accessibilityPlaceholderValue(): NSString;
  setAccessibilityPlaceholderValue(accessibilityPlaceholderValue: NSString | string): void;
  accessibilityPreviousContents(): NSArray<any>;
  setAccessibilityPreviousContents(accessibilityPreviousContents: NSArray<any> | any[]): void;
  accessibilityRole(): NSAccessibilityRole;
  setAccessibilityRole(accessibilityRole: NSAccessibilityRole): void;
  accessibilityRoleDescription(): NSString;
  setAccessibilityRoleDescription(accessibilityRoleDescription: NSString | string): void;
  accessibilitySearchButton(): any;
  setAccessibilitySearchButton(accessibilitySearchButton: any): void;
  accessibilitySearchMenu(): any;
  setAccessibilitySearchMenu(accessibilitySearchMenu: any): void;
  accessibilitySelected(): boolean;
  setAccessibilitySelected(accessibilitySelected: boolean): void;
  accessibilitySelectedChildren(): NSArray<any>;
  setAccessibilitySelectedChildren(accessibilitySelectedChildren: NSArray<any> | any[]): void;
  accessibilityServesAsTitleForUIElements(): NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(accessibilityServesAsTitleForUIElements: NSArray<any> | any[]): void;
  accessibilityShownMenu(): any;
  setAccessibilityShownMenu(accessibilityShownMenu: any): void;
  accessibilityMinValue(): any;
  setAccessibilityMinValue(accessibilityMinValue: any): void;
  accessibilityMaxValue(): any;
  setAccessibilityMaxValue(accessibilityMaxValue: any): void;
  accessibilityLinkedUIElements(): NSArray<any>;
  setAccessibilityLinkedUIElements(accessibilityLinkedUIElements: NSArray<any> | any[]): void;
  accessibilityWindow(): any;
  setAccessibilityWindow(accessibilityWindow: any): void;
  accessibilityIdentifier(): NSString;
  setAccessibilityIdentifier(accessibilityIdentifier: NSString | string): void;
  accessibilityHelp(): NSString;
  setAccessibilityHelp(accessibilityHelp: NSString | string): void;
  accessibilityFilename(): NSString;
  setAccessibilityFilename(accessibilityFilename: NSString | string): void;
  accessibilityExpanded(): boolean;
  setAccessibilityExpanded(accessibilityExpanded: boolean): void;
  accessibilityEdited(): boolean;
  setAccessibilityEdited(accessibilityEdited: boolean): void;
  accessibilityEnabled(): boolean;
  setAccessibilityEnabled(accessibilityEnabled: boolean): void;
  accessibilityChildren(): NSArray<any>;
  setAccessibilityChildren(accessibilityChildren: NSArray<any> | any[]): void;
  accessibilityChildrenInNavigationOrder(): NSArray<any>;
  setAccessibilityChildrenInNavigationOrder(accessibilityChildrenInNavigationOrder: NSArray<any> | any[]): void;
  accessibilityClearButton(): any;
  setAccessibilityClearButton(accessibilityClearButton: any): void;
  accessibilityCancelButton(): any;
  setAccessibilityCancelButton(accessibilityCancelButton: any): void;
  accessibilityProtectedContent(): boolean;
  setAccessibilityProtectedContent(accessibilityProtectedContent: boolean): void;
  accessibilityContents(): NSArray<any>;
  setAccessibilityContents(accessibilityContents: NSArray<any> | any[]): void;
  accessibilityLabel(): NSString;
  setAccessibilityLabel(accessibilityLabel: NSString | string): void;
  accessibilityAlternateUIVisible(): boolean;
  setAccessibilityAlternateUIVisible(accessibilityAlternateUIVisible: boolean): void;
  accessibilitySharedFocusElements(): NSArray<any>;
  setAccessibilitySharedFocusElements(accessibilitySharedFocusElements: NSArray<any> | any[]): void;
  accessibilityRequired(): boolean;
  setAccessibilityRequired(accessibilityRequired: boolean): void;
  accessibilityCustomRotors(): NSArray<any>;
  setAccessibilityCustomRotors(accessibilityCustomRotors: NSArray<any> | any[]): void;
  accessibilityApplicationFocusedUIElement(): any;
  setAccessibilityApplicationFocusedUIElement(accessibilityApplicationFocusedUIElement: any): void;
  accessibilityMainWindow(): any;
  setAccessibilityMainWindow(accessibilityMainWindow: any): void;
  accessibilityHidden(): boolean;
  setAccessibilityHidden(accessibilityHidden: boolean): void;
  accessibilityFrontmost(): boolean;
  setAccessibilityFrontmost(accessibilityFrontmost: boolean): void;
  accessibilityFocusedWindow(): any;
  setAccessibilityFocusedWindow(accessibilityFocusedWindow: any): void;
  accessibilityWindows(): NSArray<any>;
  setAccessibilityWindows(accessibilityWindows: NSArray<any> | any[]): void;
  accessibilityExtrasMenuBar(): any;
  setAccessibilityExtrasMenuBar(accessibilityExtrasMenuBar: any): void;
  accessibilityMenuBar(): any;
  setAccessibilityMenuBar(accessibilityMenuBar: any): void;
  accessibilityColumnTitles(): NSArray<any>;
  setAccessibilityColumnTitles(accessibilityColumnTitles: NSArray<any> | any[]): void;
  accessibilityOrderedByRow(): boolean;
  setAccessibilityOrderedByRow(accessibilityOrderedByRow: boolean): void;
  accessibilityHorizontalUnits(): NSAccessibilityUnits;
  setAccessibilityHorizontalUnits(accessibilityHorizontalUnits: NSAccessibilityUnits): void;
  accessibilityVerticalUnits(): NSAccessibilityUnits;
  setAccessibilityVerticalUnits(accessibilityVerticalUnits: NSAccessibilityUnits): void;
  accessibilityHorizontalUnitDescription(): NSString;
  setAccessibilityHorizontalUnitDescription(accessibilityHorizontalUnitDescription: NSString | string): void;
  accessibilityVerticalUnitDescription(): NSString;
  setAccessibilityVerticalUnitDescription(accessibilityVerticalUnitDescription: NSString | string): void;
  accessibilityHandles(): NSArray<any>;
  setAccessibilityHandles(accessibilityHandles: NSArray<any> | any[]): void;
  accessibilityWarningValue(): any;
  setAccessibilityWarningValue(accessibilityWarningValue: any): void;
  accessibilityCriticalValue(): any;
  setAccessibilityCriticalValue(accessibilityCriticalValue: any): void;
  accessibilityDisclosed(): boolean;
  setAccessibilityDisclosed(accessibilityDisclosed: boolean): void;
  accessibilityDisclosedByRow(): any;
  setAccessibilityDisclosedByRow(accessibilityDisclosedByRow: any): void;
  accessibilityDisclosedRows(): any;
  setAccessibilityDisclosedRows(accessibilityDisclosedRows: any): void;
  accessibilityDisclosureLevel(): NSInteger;
  setAccessibilityDisclosureLevel(accessibilityDisclosureLevel: NSInteger): void;
  accessibilityMarkerUIElements(): NSArray<any>;
  setAccessibilityMarkerUIElements(accessibilityMarkerUIElements: NSArray<any> | any[]): void;
  accessibilityMarkerValues(): any;
  setAccessibilityMarkerValues(accessibilityMarkerValues: any): void;
  accessibilityMarkerGroupUIElement(): any;
  setAccessibilityMarkerGroupUIElement(accessibilityMarkerGroupUIElement: any): void;
  accessibilityUnits(): NSAccessibilityUnits;
  setAccessibilityUnits(accessibilityUnits: NSAccessibilityUnits): void;
  accessibilityUnitDescription(): NSString;
  setAccessibilityUnitDescription(accessibilityUnitDescription: NSString | string): void;
  accessibilityRulerMarkerType(): NSAccessibilityRulerMarkerType;
  setAccessibilityRulerMarkerType(accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType): void;
  accessibilityMarkerTypeDescription(): NSString;
  setAccessibilityMarkerTypeDescription(accessibilityMarkerTypeDescription: NSString | string): void;
  accessibilityHorizontalScrollBar(): any;
  setAccessibilityHorizontalScrollBar(accessibilityHorizontalScrollBar: any): void;
  accessibilityVerticalScrollBar(): any;
  setAccessibilityVerticalScrollBar(accessibilityVerticalScrollBar: any): void;
  accessibilityAllowedValues(): NSArray<any>;
  setAccessibilityAllowedValues(accessibilityAllowedValues: NSArray<any> | any[]): void;
  accessibilityLabelUIElements(): NSArray<any>;
  setAccessibilityLabelUIElements(accessibilityLabelUIElements: NSArray<any> | any[]): void;
  accessibilityLabelValue(): number;
  setAccessibilityLabelValue(accessibilityLabelValue: number): void;
  accessibilitySplitters(): NSArray<any>;
  setAccessibilitySplitters(accessibilitySplitters: NSArray<any> | any[]): void;
  accessibilityDecrementButton(): any;
  setAccessibilityDecrementButton(accessibilityDecrementButton: any): void;
  accessibilityIncrementButton(): any;
  setAccessibilityIncrementButton(accessibilityIncrementButton: any): void;
  accessibilityTabs(): NSArray<any>;
  setAccessibilityTabs(accessibilityTabs: NSArray<any> | any[]): void;
  accessibilityHeader(): any;
  setAccessibilityHeader(accessibilityHeader: any): void;
  accessibilityColumnCount(): NSInteger;
  setAccessibilityColumnCount(accessibilityColumnCount: NSInteger): void;
  accessibilityRowCount(): NSInteger;
  setAccessibilityRowCount(accessibilityRowCount: NSInteger): void;
  accessibilityIndex(): NSInteger;
  setAccessibilityIndex(accessibilityIndex: NSInteger): void;
  accessibilityColumns(): NSArray<any>;
  setAccessibilityColumns(accessibilityColumns: NSArray<any> | any[]): void;
  accessibilityRows(): NSArray<any>;
  setAccessibilityRows(accessibilityRows: NSArray<any> | any[]): void;
  accessibilityVisibleRows(): NSArray<any>;
  setAccessibilityVisibleRows(accessibilityVisibleRows: NSArray<any> | any[]): void;
  accessibilitySelectedRows(): NSArray<any>;
  setAccessibilitySelectedRows(accessibilitySelectedRows: NSArray<any> | any[]): void;
  accessibilityVisibleColumns(): NSArray<any>;
  setAccessibilityVisibleColumns(accessibilityVisibleColumns: NSArray<any> | any[]): void;
  accessibilitySelectedColumns(): NSArray<any>;
  setAccessibilitySelectedColumns(accessibilitySelectedColumns: NSArray<any> | any[]): void;
  accessibilitySortDirection(): NSAccessibilitySortDirection;
  setAccessibilitySortDirection(accessibilitySortDirection: NSAccessibilitySortDirection): void;
  accessibilityRowHeaderUIElements(): NSArray<any>;
  setAccessibilityRowHeaderUIElements(accessibilityRowHeaderUIElements: NSArray<any> | any[]): void;
  accessibilitySelectedCells(): NSArray<any>;
  setAccessibilitySelectedCells(accessibilitySelectedCells: NSArray<any> | any[]): void;
  accessibilityVisibleCells(): NSArray<any>;
  setAccessibilityVisibleCells(accessibilityVisibleCells: NSArray<any> | any[]): void;
  accessibilityColumnHeaderUIElements(): NSArray<any>;
  setAccessibilityColumnHeaderUIElements(accessibilityColumnHeaderUIElements: NSArray<any> | any[]): void;
  accessibilityRowIndexRange(): NSRange;
  setAccessibilityRowIndexRange(accessibilityRowIndexRange: NSRange): void;
  accessibilityColumnIndexRange(): NSRange;
  setAccessibilityColumnIndexRange(accessibilityColumnIndexRange: NSRange): void;
  accessibilityInsertionPointLineNumber(): NSInteger;
  setAccessibilityInsertionPointLineNumber(accessibilityInsertionPointLineNumber: NSInteger): void;
  accessibilitySharedCharacterRange(): NSRange;
  setAccessibilitySharedCharacterRange(accessibilitySharedCharacterRange: NSRange): void;
  accessibilitySharedTextUIElements(): NSArray<any>;
  setAccessibilitySharedTextUIElements(accessibilitySharedTextUIElements: NSArray<any> | any[]): void;
  accessibilityVisibleCharacterRange(): NSRange;
  setAccessibilityVisibleCharacterRange(accessibilityVisibleCharacterRange: NSRange): void;
  accessibilityNumberOfCharacters(): NSInteger;
  setAccessibilityNumberOfCharacters(accessibilityNumberOfCharacters: NSInteger): void;
  accessibilitySelectedText(): NSString;
  setAccessibilitySelectedText(accessibilitySelectedText: NSString | string): void;
  accessibilitySelectedTextRange(): NSRange;
  setAccessibilitySelectedTextRange(accessibilitySelectedTextRange: NSRange): void;
  accessibilitySelectedTextRanges(): NSArray<any>;
  setAccessibilitySelectedTextRanges(accessibilitySelectedTextRanges: NSArray<any> | any[]): void;
  accessibilityToolbarButton(): any;
  setAccessibilityToolbarButton(accessibilityToolbarButton: any): void;
  accessibilityModal(): boolean;
  setAccessibilityModal(accessibilityModal: boolean): void;
  accessibilityProxy(): any;
  setAccessibilityProxy(accessibilityProxy: any): void;
  accessibilityMain(): boolean;
  setAccessibilityMain(accessibilityMain: boolean): void;
  accessibilityFullScreenButton(): any;
  setAccessibilityFullScreenButton(accessibilityFullScreenButton: any): void;
  accessibilityGrowArea(): any;
  setAccessibilityGrowArea(accessibilityGrowArea: any): void;
  accessibilityDocument(): NSString;
  setAccessibilityDocument(accessibilityDocument: NSString | string): void;
  accessibilityDefaultButton(): any;
  setAccessibilityDefaultButton(accessibilityDefaultButton: any): void;
  accessibilityCloseButton(): any;
  setAccessibilityCloseButton(accessibilityCloseButton: any): void;
  accessibilityZoomButton(): any;
  setAccessibilityZoomButton(accessibilityZoomButton: any): void;
  accessibilityMinimizeButton(): any;
  setAccessibilityMinimizeButton(accessibilityMinimizeButton: any): void;
  accessibilityMinimized(): boolean;
  setAccessibilityMinimized(accessibilityMinimized: boolean): void;
  accessibilityCustomActions(): NSArray<any>;
  setAccessibilityCustomActions(accessibilityCustomActions: NSArray<any> | any[]): void;
}

declare const NSSliderAccessory: {
  alloc(): NSSliderAccessoryUninitialized;
  class(): NSSliderAccessory;
  accessoryWithImage(image: NSImage): NSSliderAccessory;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}


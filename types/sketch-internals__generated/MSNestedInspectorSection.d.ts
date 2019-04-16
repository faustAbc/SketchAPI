interface MSNestedInspectorSectionUninitialized<InitializedType = MSNestedInspectorSection> extends MSBaseInspectorSectionUninitialized<MSNestedInspectorSection> {}

interface MSNestedInspectorSection extends MSBaseInspectorSection, IMSInspectorSectionDelegate {
  sectionDidResize(section: NSViewController): void;
  documentForInspectorSection(section: NSViewController): MSDocument;
  isSectionWithIdentifierCollapsed(identifier: NSString | string): boolean;
  isSectionWithIdentifierCollapsed_default(identifier: NSString | string, defaultValue: boolean): boolean;
  persistentlyCollapse_sectionWithIdentifier_reloadTarget(collapse: boolean, identifier: NSString | string, reloadTarget: NSViewController): void;
  reloadItemsForSection(section: NSViewController): void;
}

declare const MSNestedInspectorSection: {
  alloc(): MSNestedInspectorSectionUninitialized;
  class(): MSNestedInspectorSection;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}


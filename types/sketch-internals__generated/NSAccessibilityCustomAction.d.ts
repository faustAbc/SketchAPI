interface NSAccessibilityCustomActionUninitialized<InitializedType = NSAccessibilityCustomAction> extends NSObjectUninitialized<NSAccessibilityCustomAction> {
  initWithName_handler(name: NSString | string, handler: Block): InitializedType;
  initWithName_target_selector(name: NSString | string, target: any, selector: string): InitializedType;
}

interface NSAccessibilityCustomAction extends NSObject {

  name(): NSString;
  setName(name: NSString | string): void;
  target(): any;
  setTarget(target: any): void;
  selector(): string;
  setSelector(selector: string): void;
}

declare const NSAccessibilityCustomAction: {
  alloc(): NSAccessibilityCustomActionUninitialized;
  class(): NSAccessibilityCustomAction;
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


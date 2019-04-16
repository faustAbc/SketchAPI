interface MSRulerCoordinateSpaceUninitialized<InitializedType = MSRulerCoordinateSpace> extends NSObjectUninitialized<MSRulerCoordinateSpace> {
  initWithLayer(layer: MSLayer): InitializedType;
}

interface MSRulerCoordinateSpace extends NSObject, IMSLayerCoordinateSpace {
  convertPoint_toCoordinateSpace(p: NSPoint, coordinateSpace: any | null): NSPoint;
  convertPoint_fromCoordinateSpace(p: NSPoint, coordinateSpace: any | null): NSPoint;
  convertRect_toCoordinateSpace(r: NSRect, coordinateSpace: any | null): NSRect;
  convertRect_fromCoordinateSpace(r: NSRect, coordinateSpace: any | null): NSRect;
  convertVector_toCoordinateSpace(vector: CGVector, coordinateSpace: any | null): CGVector;
  convertVector_fromCoordinateSpace(vector: CGVector, coordinateSpace: any | null): CGVector;
  transformForConvertingToCoordinateSpace(coordinateSpace: any | null): CGAffineTransform;
  transformForConvertingFromCoordinateSpace(coordinateSpace: any | null): CGAffineTransform;

  layer(): MSLayer;
  bounds(): CGRect;
  parentCoordinateSpace(): any;
  transformForConvertingToParentCoordinateSpace(): CGAffineTransform;
  transformForConvertingFromParentCoordinateSpace(): CGAffineTransform;
}

declare const MSRulerCoordinateSpace: {
  alloc(): MSRulerCoordinateSpaceUninitialized;
  class(): MSRulerCoordinateSpace;
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


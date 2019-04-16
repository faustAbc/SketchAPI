interface NSMiddleSpecifierUninitialized<InitializedType = NSMiddleSpecifier> extends NSScriptObjectSpecifierUninitialized<NSMiddleSpecifier> {}

interface NSMiddleSpecifier extends NSScriptObjectSpecifier {
}

declare const NSMiddleSpecifier: {
  alloc(): NSMiddleSpecifierUninitialized;
  class(): NSMiddleSpecifier;
  objectSpecifierWithDescriptor(descriptor: NSAppleEventDescriptor): NSScriptObjectSpecifier;
  accessInstanceVariablesDirectly(): boolean;

}


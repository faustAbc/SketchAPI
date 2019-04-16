interface _MSForeignTextStyleUninitialized<InitializedType = _MSForeignTextStyle> extends MSForeignStyleUninitialized<_MSForeignTextStyle> {}

interface _MSForeignTextStyle extends MSForeignStyle {
}

declare const _MSForeignTextStyle: {
  alloc(): _MSForeignTextStyleUninitialized;
  class(): _MSForeignTextStyle;
  symbolPrivateStyleWithID_forForeignSymbol_fromDocument(sharedStyleID: NSString | string, foreignSymbol: MSForeignSymbol, remoteDocument: MSDocumentData): MSForeignStyle;
  remoteSharedIDFromSymbolPrivateID(styleID: NSString | string | null): NSString;
}


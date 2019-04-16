interface MSDefaultStyleUninitialized<InitializedType = MSDefaultStyle> extends MSDefaultArchiveUninitialized<MSDefaultStyle> {}

interface MSDefaultStyle extends MSDefaultArchive {
}

declare const MSDefaultStyle: {
  alloc(): MSDefaultStyleUninitialized;
  class(): MSDefaultStyle;
  defaultStyle(): MSStyle;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultStyle(defaultStyle: MSStyle): void;
  accessInstanceVariablesDirectly(): boolean;

}


interface _MSImmutableSharedTextStyleContainerUninitialized<InitializedType = _MSImmutableSharedTextStyleContainer> extends MSImmutableSharedStyleContainerUninitialized<_MSImmutableSharedTextStyleContainer> {}

interface _MSImmutableSharedTextStyleContainer extends MSImmutableSharedStyleContainer {
}

declare const _MSImmutableSharedTextStyleContainer: {
  alloc(): _MSImmutableSharedTextStyleContainerUninitialized;
  class(): _MSImmutableSharedTextStyleContainer;
}


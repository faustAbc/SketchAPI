interface MSStylePartInspectorViewControllerUninitialized<InitializedType = MSStylePartInspectorViewController> extends NSViewControllerUninitialized<MSStylePartInspectorViewController> {}

interface MSStylePartInspectorViewController extends NSViewController, IMSInspectorSection, INSWindowDelegate {
  prepareForReuse(): void;
  hasEnabledStyle(): boolean;
  didGetAddedToInspector(): void;
  prepare(): void;
  supportedActionsForLayers(layers: NSArray<any> | any[]): MSMultipleStylePartInspectorAction;
  closePopoverImmediately(immediately: boolean): void;
  updateDisplayedValues(): void;
  views(): NSArray<any>;
  wantsSeparatorAfterViews(): boolean;
  separatorInsets(): NSEdgeInsets;
  footerViews(): NSArray<any>;
  windowShouldClose(sender: NSWindow): boolean;
  windowWillReturnFieldEditor_toObject(sender: NSWindow, client: any | null): any;
  windowWillResize_toSize(sender: NSWindow, frameSize: NSSize): NSSize;
  windowWillUseStandardFrame_defaultFrame(window: NSWindow, newFrame: NSRect): NSRect;
  windowShouldZoom_toFrame(window: NSWindow, newFrame: NSRect): boolean;
  windowWillReturnUndoManager(window: NSWindow): NSUndoManager;
  window_willPositionSheet_usingRect(window: NSWindow, sheet: NSWindow, rect: NSRect): NSRect;
  window_shouldPopUpDocumentPathMenu(window: NSWindow, menu: NSMenu): boolean;
  window_shouldDragDocumentWithEvent_from_withPasteboard(window: NSWindow, event: NSEvent, dragImageLocation: NSPoint, pasteboard: NSPasteboard): boolean;
  window_willUseFullScreenContentSize(window: NSWindow, proposedSize: NSSize): NSSize;
  window_willUseFullScreenPresentationOptions(window: NSWindow, proposedOptions: NSApplicationPresentationOptions): NSApplicationPresentationOptions;
  customWindowsToEnterFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  windowDidFailToEnterFullScreen(window: NSWindow): void;
  customWindowsToExitFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToExitFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  customWindowsToEnterFullScreenForWindow_onScreen(window: NSWindow, screen: NSScreen): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenOnScreen_withDuration(window: NSWindow, screen: NSScreen, duration: NSTimeInterval): void;
  windowDidFailToExitFullScreen(window: NSWindow): void;
  window_willResizeForVersionBrowserWithMaxPreferredSize_maxAllowedSize(window: NSWindow, maxPreferredFrameSize: NSSize, maxAllowedFrameSize: NSSize): NSSize;
  window_willEncodeRestorableState(window: NSWindow, state: NSCoder): void;
  window_didDecodeRestorableState(window: NSWindow, state: NSCoder): void;
  windowDidResize(notification: NSNotification): void;
  windowDidExpose(notification: NSNotification): void;
  windowWillMove(notification: NSNotification): void;
  windowDidMove(notification: NSNotification): void;
  windowDidBecomeKey(notification: NSNotification): void;
  windowDidResignKey(notification: NSNotification): void;
  windowDidBecomeMain(notification: NSNotification): void;
  windowDidResignMain(notification: NSNotification): void;
  windowWillClose(notification: NSNotification): void;
  windowWillMiniaturize(notification: NSNotification): void;
  windowDidMiniaturize(notification: NSNotification): void;
  windowDidDeminiaturize(notification: NSNotification): void;
  windowDidUpdate(notification: NSNotification): void;
  windowDidChangeScreen(notification: NSNotification): void;
  windowDidChangeScreenProfile(notification: NSNotification): void;
  windowDidChangeBackingProperties(notification: NSNotification): void;
  windowWillBeginSheet(notification: NSNotification): void;
  windowDidEndSheet(notification: NSNotification): void;
  windowWillStartLiveResize(notification: NSNotification): void;
  windowDidEndLiveResize(notification: NSNotification): void;
  windowWillEnterFullScreen(notification: NSNotification): void;
  windowDidEnterFullScreen(notification: NSNotification): void;
  windowWillExitFullScreen(notification: NSNotification): void;
  windowDidExitFullScreen(notification: NSNotification): void;
  windowWillEnterVersionBrowser(notification: NSNotification): void;
  windowDidEnterVersionBrowser(notification: NSNotification): void;
  windowWillExitVersionBrowser(notification: NSNotification): void;
  windowDidExitVersionBrowser(notification: NSNotification): void;
  windowDidChangeOcclusionState(notification: NSNotification): void;

  styleParts(): NSArray<any>;
  setStyleParts(styleParts: NSArray<any> | any[]): void;
  arrayController(): NSArrayController;
  setArrayController(arrayController: NSArrayController): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  index(): NSUInteger;
  setIndex(index: NSUInteger): void;
  layers(): NSArray<any>;
}

declare const MSStylePartInspectorViewController: {
  alloc(): MSStylePartInspectorViewControllerUninitialized;
  class(): MSStylePartInspectorViewController;
  stylePartViewController(): any;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}


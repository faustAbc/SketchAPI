interface MSInsertSharedTextActionUninitialized<InitializedType = MSInsertSharedTextAction> extends MSSharedObjectActionUninitialized<MSInsertSharedTextAction> {}

interface MSInsertSharedTextAction extends MSSharedObjectAction, INSMenuDelegate {
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;
}

declare const MSInsertSharedTextAction: {
  alloc(): MSInsertSharedTextActionUninitialized;
  class(): MSInsertSharedTextAction;
}


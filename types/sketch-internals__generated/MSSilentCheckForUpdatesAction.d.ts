interface MSSilentCheckForUpdatesActionUninitialized<InitializedType = MSSilentCheckForUpdatesAction> extends MSActionUninitialized<MSSilentCheckForUpdatesAction> {}

interface MSSilentCheckForUpdatesAction extends MSAction {
}

declare const MSSilentCheckForUpdatesAction: {
  alloc(): MSSilentCheckForUpdatesActionUninitialized;
  class(): MSSilentCheckForUpdatesAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}


interface MSChangeFlowAnimationFromLeftAnimationActionUninitialized<InitializedType = MSChangeFlowAnimationFromLeftAnimationAction> extends MSChangeFlowAnimationActionUninitialized<MSChangeFlowAnimationFromLeftAnimationAction> {}

interface MSChangeFlowAnimationFromLeftAnimationAction extends MSChangeFlowAnimationAction {
  changeFlowAnimationToFromLeftAnimation(sender: any): IBAction;
}

declare const MSChangeFlowAnimationFromLeftAnimationAction: {
  alloc(): MSChangeFlowAnimationFromLeftAnimationActionUninitialized;
  class(): MSChangeFlowAnimationFromLeftAnimationAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}


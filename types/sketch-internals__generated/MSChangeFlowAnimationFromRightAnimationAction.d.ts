interface MSChangeFlowAnimationFromRightAnimationActionUninitialized<InitializedType = MSChangeFlowAnimationFromRightAnimationAction> extends MSChangeFlowAnimationActionUninitialized<MSChangeFlowAnimationFromRightAnimationAction> {}

interface MSChangeFlowAnimationFromRightAnimationAction extends MSChangeFlowAnimationAction {
  changeFlowAnimationToFromRightAnimation(sender: any): IBAction;
}

declare const MSChangeFlowAnimationFromRightAnimationAction: {
  alloc(): MSChangeFlowAnimationFromRightAnimationActionUninitialized;
  class(): MSChangeFlowAnimationFromRightAnimationAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}


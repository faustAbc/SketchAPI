interface BCStaticNetworkTimeUninitialized<InitializedType = BCStaticNetworkTime> extends BCNetworkTimeUninitialized<BCStaticNetworkTime> {}

interface BCStaticNetworkTime extends BCNetworkTime {

  systemDate(): NSDate;
  setSystemDate(systemDate: NSDate): void;
  networkTime(): NSTimeInterval;
  setNetworkTime(networkTime: NSTimeInterval): void;
}

declare const BCStaticNetworkTime: {
  alloc(): BCStaticNetworkTimeUninitialized;
  class(): BCStaticNetworkTime;
  requestTimeFromHost_timeout_completionBlock(host: NSString | string | null, timeout: NSTimeInterval, completion: MSNetworkTimeCompletionBlock): void;
  accessInstanceVariablesDirectly(): boolean;

}


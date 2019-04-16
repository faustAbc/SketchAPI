interface SCKAPIOperationUninitialized<InitializedType = SCKAPIOperation> extends BCURLOperationUninitialized<SCKAPIOperation> {}

interface SCKAPIOperation extends BCURLOperation {
  refreshAuthentication(): void;
  processData_response_error(data: NSData | null, response: NSHTTPURLResponse | null, error: NSError | null): void;

  request(): any;
  error(): NSError;
  setError(error: NSError): void;
}

declare const SCKAPIOperation: {
  alloc(): SCKAPIOperationUninitialized;
  class(): SCKAPIOperation;
  defaultURLSession(): NSURLSession;
  clientID(): NSString;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setClientID(clientID: NSString | string): void;
  accessInstanceVariablesDirectly(): boolean;

}


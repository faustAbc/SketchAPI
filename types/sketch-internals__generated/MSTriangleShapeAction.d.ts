interface MSTriangleShapeActionUninitialized<InitializedType = MSTriangleShapeAction> extends MSBaseShapeActionUninitialized<MSTriangleShapeAction> {}

interface MSTriangleShapeAction extends MSBaseShapeAction {
}

declare const MSTriangleShapeAction: {
  alloc(): MSTriangleShapeActionUninitialized;
  class(): MSTriangleShapeAction;
  insertShapeLayer_identifier_document(shapeOrPath: any, identifier: NSString | string, doc: MSDocument): any;
}


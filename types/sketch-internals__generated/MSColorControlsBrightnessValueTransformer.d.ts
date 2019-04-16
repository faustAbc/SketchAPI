interface MSColorControlsBrightnessValueTransformerUninitialized<InitializedType = MSColorControlsBrightnessValueTransformer> extends MSArbitraryRangePercentValueTransformerUninitialized<MSColorControlsBrightnessValueTransformer> {}

interface MSColorControlsBrightnessValueTransformer extends MSArbitraryRangePercentValueTransformer {
}

declare const MSColorControlsBrightnessValueTransformer: {
  alloc(): MSColorControlsBrightnessValueTransformerUninitialized;
  class(): MSColorControlsBrightnessValueTransformer;
  zeroPercentValue(): number;
  hundredPercentValue(): number;
  accessInstanceVariablesDirectly(): boolean;

}


import type { Factory } from '@/src/features/factory/domain/factory.ts';

type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export interface UnitValue {
  unit: NumericKeys<Factory>;
  value: number;
}

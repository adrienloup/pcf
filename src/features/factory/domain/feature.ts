import type { UnitValue } from '@/src/common/shared/types/unitValue.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export type Feature = {
  category?: string;
  costs?: UnitValue[];
  disabled: boolean;
  effects?: FactoryDispatch | UnitValue[] | string[];
  enabled: boolean;
  quantity?: number;
  requirements?: UnitValue[] | string;
};

export type FeatureState = Record<string, Feature>;

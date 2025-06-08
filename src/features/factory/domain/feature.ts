import type { UnitValue } from '@/src/common/shared/types/unitValue.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export type FeatureState = {
  category?: string;
  costs?: UnitValue[];
  actived: boolean;
  effects?: FactoryDispatch | UnitValue[] | string[];
  enabled: boolean;
  quantity?: number;
  requirements?: UnitValue[] | string;
};

export type Feature = Record<string, FeatureState>;

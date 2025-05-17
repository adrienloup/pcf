import type { FeatureState } from '@/src/features/factory/domain/feature.ts';

export const FEATURE_STATE: FeatureState = {
  clipper: { disabled: false, enabled: false },
  fundsPerSecond: { disabled: false, enabled: false },
  offerAnotherChance: {
    category: 'mechanic',
    costs: [{ unit: 'clip', value: 3 }],
    disabled: false,
    effects: [
      { unit: 'funds', value: 3 },
      { unit: 'trust', value: 3 },
    ],
    enabled: false,
    quantity: 1,
    requirements: [
      { unit: 'clip', value: 3 },
      { unit: 'funds', value: 3 },
    ],
  },
  resources: {
    disabled: false,
    enabled: false,
    requirements: [{ unit: 'clip', value: 2 }],
  },
  revTracker: {
    category: 'mechanic',
    costs: [
      { unit: 'clip', value: 2 },
      { unit: 'funds', value: 2 },
    ],
    disabled: true,
    effects: ['clipper', 'fundsPerSecond'],
    enabled: true,
    quantity: 1,
  },
};

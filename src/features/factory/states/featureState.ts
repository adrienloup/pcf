import type { FeatureState } from '@/src/features/factory/domain/feature.ts';

export const FEATURE_STATE: FeatureState = {
  clipper: { disabled: false, enabled: false, requirements: [{ unit: 'funds', value: 5 }] },
  computing: { disabled: false, enabled: false },
  clipFactory: { disabled: false, enabled: false }, // requirements: ['wireDrones']
  fundsPerSecond: { disabled: false, enabled: false },
  harvesterDrones: {
    category: 'drones',
    costs: [{ unit: 'operation', value: 25e3 }],
    disabled: false,
    effects: ['wireDrones'],
    enabled: false,
    quantity: 1,
    // requirements: [{ unit: 'creativity', value: 7e4 }], ???
  },
  improvedClippers: {
    category: 'production',
    costs: [{ unit: 'operation', value: 750 }],
    disabled: false,
    effects: [{ unit: 'clipperBonus', value: 2 }],
    enabled: false,
    quantity: 1,
    requirements: [{ unit: 'operation', value: 750 }],
  },
  investments: { disabled: false, enabled: false },
  megaClipper: { disabled: false, enabled: false, requirements: [{ unit: 'clipper', value: 75 }] },
  marketing: { disabled: false, enabled: false, requirements: [{ unit: 'funds', value: 200 }] },
  offerAnotherChance: {
    category: 'mechanic',
    costs: [{ unit: 'creativity', value: 7e4 }],
    disabled: false,
    effects: { type: 'ALLOCATE_TRUST' },
    enabled: false,
    quantity: 10,
    requirements: [{ unit: 'creativity', value: 7e4 }],
  },
  production: { disabled: false, enabled: false },
  resources: {
    disabled: false,
    enabled: false,
    requirements: [{ unit: 'clip', value: 2e3 }],
  },
  revTracker: {
    category: 'mechanic',
    costs: [{ unit: 'operation', value: 5e2 }],
    disabled: true,
    effects: ['fundsPerSecond'],
    enabled: true,
    quantity: 1,
  },
  swarmGifts: { disabled: false, enabled: false },
  swarmStrategy: { disabled: false, enabled: false },
  wireDrones: {
    category: 'drones',
    costs: [{ unit: 'operation', value: 25e3 }],
    disabled: false,
    effects: ['clipFactory'],
    enabled: false,
    quantity: 1,
    // requirements: ['harvesterDrones']
  },
};

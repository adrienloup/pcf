import type { Feature } from '@/src/features/factory/domain/feature.ts';

export const FEATURE_STATE: Feature = {
  resources: { enabled: false, requirement: { unit: 'clip', value: 2e3 } },
  fundsPerSecond: { enabled: false, requirement: undefined }, // requirement: revTracker
  investments: { enabled: false, requirement: undefined }, // requirement: algorithmicTrading
  clipper: { enabled: false, requirement: { unit: 'funds', value: 5 } },
  marketing: { enabled: false, requirement: { unit: 'funds', value: 200 } },
  megaClipper: { enabled: false, requirement: { unit: 'clipper', value: 75 } },
  production: { enabled: false, requirement: undefined }, // requirement: releaseHypoDrones
  computing: { enabled: false, requirement: undefined },
  // swarmGifts: { enabled: false, requirement: undefined },
  // swarmStrategy: { enabled: false, requirement: undefined },
  // trust: { enabled: true, requirement: undefined },
};

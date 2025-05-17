import type { Factory } from '@/src/features/factory/domain/factory.ts';
import { FEATURE_STATE } from '@/src/features/factory/states/featureState.ts';
import { WALLET_STATE } from '@/src/features/factory/states/walletState.ts';

export const FACTORY_STATE: Factory = {
  cash: 0,
  cashRef: 0,
  clip: 0,
  clipFactory: 0,
  clipFactoryCost: 1e5,
  clipPerSecond: 0,
  clipPrice: 0.2,
  clipPriceRef: 0.2,
  creativity: 0,
  feature: FEATURE_STATE,
  funds: 0,
  fundsPerSecond: 0,
  harvesterDrone: 0,
  harvesterDroneCost: 1e4,
  clipper: 0,
  clipperBonus: 0,
  clipperCost: 5,
  marketing: 0,
  marketingBonus: 0,
  marketingCost: 100,
  megaClipper: 0,
  megaClipperBonus: 0,
  megaClipperCost: 5e2,
  memory: 1,
  operation: 0,
  operationMax: 7e2,
  processor: 1,
  publicDemand: 0.5,
  swarmGifts: 0,
  swarmStrategy: 5,
  trust: 1,
  trustRef: 1,
  unsoldInventory: 0,
  unsoldInventoryBonus: 0,
  wallet: WALLET_STATE,
  wire: 100,
  wireBonus: 100,
  wireCost: 20,
  wireDrone: 0,
  wireDroneCost: 1e4,
  yogi: 1e4,
};

/*
  Feature:
  + clipper feature
    requirement: 5 funds
  + megaClipper feature
    requirement: 75 clipper
  + marketing feature
    requirement: 200 funds
  + fundsPerSecond feature
    requirement: revTracker product
  + resources feature
    requirement: 2e3 clip
  + investments feature
    requirement: algorithmicTrading product
  + production feature
    requirement: releaseHypoDrones product
  Product:
  + revTracker product
    requirement: undefined
  + begForMoreWire product
    requirement: undefined
  + improvedWireExtrusion product
    requirement: undefined
  + offerAnotherChance product
    requirement: 1e5 creativity
  + newSlogan product
    requirement: lexicalProcessing product
  + hostileTakeover product
    requirement: algorithmicTrading product
  + fullMonopoly product
    requirement: hostileTakeover product
  + algorithmicTrading product
    requirement: 8 trust
  + improvedClipper product
    requirement: 1e4 operation
  + evenBetterClipper product
    requirement: 2e4 operation
  + optimizedClipper product
    requirement: 3e4 operation
  + clipperDiagrams product
    requirement: 1e5 operation
  + improvedMegaClipper product
    requirement: 20 creativity
  + evenBetterMegaClipper product
    requirement: 500 creativity
  + optimizedMegaClipper product
    requirement: 1e3 creativity
  + clipperMegaDiagrams product
    requirement: 1e4 creativity
  + countyLimerick product
    requirement: 10 creativity
  + lexicalProcessing product
    requirement: 50 creativity
  + combinatorHarmonics product
    requirement: 1e2 creativity
  + catchyJingle product
    requirement: 45e2 operation
  + hypoHarmonics product
    requirement: catchyJingle product
  + hypoDrones product
    requirement: hypoHarmonics product
  + releaseHypoDrones product
    requirement: hypoDrones product
 */

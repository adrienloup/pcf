import type { FeatureState } from '@/src/features/factory/domain/feature.ts';
import type { Wallet } from '@/src/features/factory/domain/wallet.ts';

export interface Factory {
  cash: number;
  cashRef: number;
  clip: number;
  clipFactory: number;
  clipFactoryCost: number;
  clipPerSecond: number;
  clipPrice: number;
  clipPriceRef: number;
  creativity: number;
  drone: number;
  feature: FeatureState;
  funds: number;
  fundsPerSecond: number;
  harvesterDrone: number;
  harvesterDroneCost: number;
  clipper: number;
  clipperBonus: number;
  clipperCost: number;
  marketing: number;
  marketingBonus: number;
  marketingCost: number;
  megaClipper: number;
  megaClipperBonus: number;
  megaClipperCost: number;
  memory: number;
  operation: number;
  operationMax: number;
  processor: number;
  publicDemand: number;
  swarmGifts: number;
  swarmStatus: number;
  swarmStrategy: number;
  trust: number;
  trustRef: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
  wallet: Wallet;
  wire: number;
  wireBonus: number;
  wireCost: number;
  wireDrone: number;
  wireDroneCost: number;
  yomi: number;
}

export type FactoryDispatch =
  | { type: 'PRODUCTION_PER_SECOND' }
  | { type: 'UNIT_PRODUCTION' }
  | { type: 'SELL_UNSOLD_INVENTORY' }
  | { type: 'DECREASE_CLIP_PRICE' }
  | { type: 'INCREASE_CLIP_PRICE' }
  | { type: 'BUY_MARKETING' }
  | { type: 'INCREASE_CASH' }
  | { type: 'DECREASE_CASH' }
  | { type: 'WITHDRAW_CASH' }
  | { type: 'INCREASE_MEMORY' }
  | { type: 'INCREASE_PROCESSOR' }
  | { type: 'ALLOCATE_TRUST' }
  | { type: 'BUY_HARVESTER_DRONE'; drone: number }
  | { type: 'BUY_HARVESTER_WIRE'; drone: number }
  | { type: 'ADD_GIFTS'; swarmGifts: number }
  | { type: 'INCREASE_WALLET'; symbol: string; price: number }
  | { type: 'DECREASE_WALLET'; symbol: string; price: number }
  | { type: 'INCREASE_TRUST'; trust: number }
  | { type: 'UPDATE_MARKETING_BONUS'; bonus: number }
  | { type: 'UPDATE_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_MEGA_CLIPPER_BONUS'; bonus: number }
  | { type: 'UPDATE_UNSOLD_INVENTORY_BONUS'; bonus: number }
  | { type: 'UPDATE_WIRE_BONUS'; bonus: number }
  | { type: 'UPDATE_SWARM_STRATEGY'; strategy: number }
  | { type: 'BUY_CLIP_FACTORY'; cost: number }
  | { type: 'BUY_MEGA_CLIPPER'; cost: number }
  | { type: 'BUY_WIRE'; cost: number }
  | { type: 'UPDATE_WIRE_COST'; cost: number }
  | { type: 'BUY_CLIPPER'; cost: number }
  | { type: 'BUY_FEATURE'; feature: string }
  | { type: 'UPDATE_FEATURE'; feature: string; disabled: boolean; enabled: boolean }
  | { type: 'INITIALIZE'; state: Factory };

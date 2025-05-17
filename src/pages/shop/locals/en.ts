import type { Translation } from '@/src/common/shared/types/translation.ts';

export const en: Translation = {
  shop: {
    titlePage: 'shop',
    harvesterDrones: {
      title: 'harvester drones',
      effect: 'gather raw matter and prepare it for processing',
      cost: 'cost: <firstCost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
    improvedClippers: {
      title: 'improved clippers',
      effect: 'increases clippers performance by <firstEffect />',
      cost: 'cost: <firstCost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
    offerAnotherChance: {
      title: 'offer another chance',
      effect: 'reallocate accumulated trust for processor/memory specification',
      cost: 'cost: <firstCost />\u00a0creativity',
      quantity: 'quantity: <quantity />',
    },
    revTracker: {
      title: 'rev tracker',
      effect: 'automatically calculates average funds per second',
      cost: 'cost: <firstCost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
    wireDrones: {
      title: 'wire drones',
      effect: 'process acquired matter into wire',
      cost: 'cost: <firstCost />\u00a0operations',
      quantity: 'quantity: <quantity />',
    },
  },
};

import type { Product } from '@/src/features/factory/domain/product.ts';

// export const PRODUCTS_STATE: Product = {
//   revTracker: {
//     category: 'mechanic',
//     cost: {
//       unit: 'operation',
//       value: 25,
//     },
//     enabled: true,
//     effect: 'fundsPerSecond',
//     quantity: 1,
//     requirement: undefined,
//   },
//   offerAnotherChance: {
//     category: 'mechanic',
//     cost: {
//       unit: 'creativity',
//       value: 7e4,
//     },
//     enabled: false,
//     effect: () => ({ type: 'ALLOCATE_TRUST' }),
//     quantity: 5,
//     requirement: {
//       unit: 'creativity',
//       value: 1e5,
//     },
//   },
//   begForMoreWire: {
//     category: 'wire',
//     cost: {
//       unit: 'trust',
//       value: 1,
//     },
//     enabled: true,
//     effect: [
//       {
//         unit: 'wire',
//         value: 100,
//       },
//     ],
//     quantity: 1,
//     requirement: undefined,
//   },
//   improvedWireExtrusion: {
//     category: 'wire',
//     cost: {
//       unit: 'operation',
//       value: 1750,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'wireBonus',
//         value: 1e4,
//       },
//     ],
//     quantity: 1,
//     requirement: undefined,
//   },
//   newSlogan: {
//     category: 'marketing',
//     cost: {
//       unit: 'creativity',
//       value: 25,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'marketingBonus',
//         value: 2,
//       },
//     ],
//     quantity: 1,
//     requirement: 'lexicalProcessing',
//   },
//   catchyJingle: {
//     category: 'marketing',
//     cost: {
//       unit: 'creativity',
//       value: 45,
//     },
//     enabled: false,
//     effect: 'hypoHarmonics',
//     quantity: 1,
//     requirement: {
//       unit: 'operation',
//       value: 45e2,
//     },
//   },
//   hypoHarmonics: {
//     category: 'marketing',
//     cost: {
//       unit: 'operation',
//       value: 75e2,
//     },
//     enabled: false,
//     effect: 'hypoDrones',
//     quantity: 1,
//     requirement: 'catchyJingle',
//   },
//   hostileTakeover: {
//     category: 'marketing',
//     cost: {
//       unit: 'funds',
//       value: 1e6,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'marketingBonus',
//         value: 5,
//       },
//       {
//         unit: 'trust',
//         value: 1,
//       },
//     ],
//     quantity: 1,
//     requirement: 'algorithmicTrading',
//   },
//   fullMonopoly: {
//     category: 'marketing',
//     cost: {
//       unit: 'funds',
//       value: 1e7,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'marketingBonus',
//         value: 10,
//       },
//       {
//         unit: 'trust',
//         value: 1,
//       },
//     ],
//     quantity: 1,
//     requirement: 'hostileTakeover',
//   },
//   algorithmicTrading: {
//     category: 'investing',
//     cost: {
//       unit: 'operation',
//       value: 1e4,
//     },
//     enabled: false,
//     effect: 'investments',
//     quantity: 1,
//     requirement: {
//       unit: 'trust',
//       value: 8,
//     },
//   },
//   improvedClipper: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 750,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'clipperBonus',
//         value: 2,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'operation',
//       value: 1e4,
//     },
//   },
//   evenBetterClipper: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 2500,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'clipperBonus',
//         value: 3,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'operation',
//       value: 2e4,
//     },
//   },
//   optimizedClipper: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 5e4,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'clipperBonus',
//         value: 5,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'operation',
//       value: 3e4,
//     },
//   },
//   clipperDiagrams: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 6e4,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'clipperBonus',
//         value: 10,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'operation',
//       value: 1e5,
//     },
//   },
//   improvedMegaClipper: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 12e3,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'megaClipperBonus',
//         value: 2,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'creativity',
//       value: 20,
//     },
//   },
//   evenBetterMegaClipper: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 14e3,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'megaClipperBonus',
//         value: 3,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'creativity',
//       value: 500,
//     },
//   },
//   optimizedMegaClipper: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 17e3,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'megaClipperBonus',
//         value: 5,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'creativity',
//       value: 1e3,
//     },
//   },
//   clipperMegaDiagrams: {
//     category: 'production',
//     cost: {
//       unit: 'operation',
//       value: 19500,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'megaClipperBonus',
//         value: 10,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'creativity',
//       value: 1e4,
//     },
//   },
//   countyLimerick: {
//     category: 'trust',
//     cost: {
//       unit: 'creativity',
//       value: 10,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'trust',
//         value: 1,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'creativity',
//       value: 10,
//     },
//   },
//   lexicalProcessing: {
//     category: 'trust',
//     cost: {
//       unit: 'creativity',
//       value: 50,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'trust',
//         value: 1,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'creativity',
//       value: 50,
//     },
//   },
//   combinatorHarmonics: {
//     category: 'trust',
//     cost: {
//       unit: 'creativity',
//       value: 1e2,
//     },
//     enabled: false,
//     effect: [
//       {
//         unit: 'trust',
//         value: 1,
//       },
//     ],
//     quantity: 1,
//     requirement: {
//       unit: 'creativity',
//       value: 1e2,
//     },
//   },
//   hypoDrones: {
//     category: 'drones',
//     cost: {
//       unit: 'operation',
//       value: 7e4,
//     },
//     enabled: false,
//     effect: 'releaseHypoDrones',
//     quantity: 1,
//     requirement: 'hypoHarmonics',
//   },
//   releaseHypoDrones: {
//     category: 'drones',
//     cost: {
//       unit: 'trust',
//       value: 1e2,
//     },
//     enabled: false,
//     effect: 'production',
//     quantity: 1,
//     requirement: 'hypoDrones',
//   },
// };

export const PRODUCTS_STATE: Product[] = [
  {
    id: 'revTracker',
    category: 'mechanic',
    cost: {
      unit: 'operation',
      value: 25,
    },
    enabled: true,
    effect: 'fundsPerSecond',
    quantity: 1,
    requirement: undefined,
  },
  {
    id: 'offerAnotherChance',
    category: 'mechanic',
    cost: {
      unit: 'creativity',
      value: 7e4,
    },
    enabled: false,
    effect: () => ({ type: 'ALLOCATE_TRUST' }),
    quantity: 5,
    requirement: {
      unit: 'creativity',
      value: 1e5,
    },
  },
  {
    id: 'begForMoreWire',
    category: 'wire',
    cost: {
      unit: 'trust',
      value: 1,
    },
    enabled: true,
    effect: [
      {
        unit: 'wire',
        value: 100,
      },
    ],
    quantity: 1,
    requirement: undefined,
  },
  {
    id: 'improvedWireExtrusion',
    category: 'wire',
    cost: {
      unit: 'operation',
      value: 1750,
    },
    enabled: false,
    effect: [
      {
        unit: 'wireBonus',
        value: 1e4,
      },
    ],
    quantity: 1,
    requirement: undefined,
  },
  {
    id: 'newSlogan',
    category: 'marketing',
    cost: {
      unit: 'creativity',
      value: 25,
    },
    enabled: false,
    effect: [
      {
        unit: 'marketingBonus',
        value: 2,
      },
    ],
    quantity: 1,
    requirement: 'lexicalProcessing',
  },
  {
    id: 'catchyJingle',
    category: 'marketing',
    cost: {
      unit: 'creativity',
      value: 45,
    },
    enabled: false,
    effect: 'hypoHarmonics',
    quantity: 1,
    requirement: {
      unit: 'operation',
      value: 45e2,
    },
  },
  {
    id: 'hypoHarmonics',
    category: 'marketing',
    cost: {
      unit: 'operation',
      value: 75e2,
    },
    enabled: false,
    effect: 'hypoDrones',
    quantity: 1,
    requirement: 'catchyJingle',
  },
  {
    id: 'hostileTakeover',
    category: 'marketing',
    cost: {
      unit: 'funds',
      value: 1e6,
    },
    enabled: false,
    effect: [
      {
        unit: 'marketingBonus',
        value: 5,
      },
      {
        unit: 'trust',
        value: 1,
      },
    ],
    quantity: 1,
    requirement: 'algorithmicTrading',
  },
  {
    id: 'fullMonopoly',
    category: 'marketing',
    cost: {
      unit: 'funds',
      value: 1e7,
    },
    enabled: false,
    effect: [
      {
        unit: 'marketingBonus',
        value: 10,
      },
      {
        unit: 'trust',
        value: 1,
      },
    ],
    quantity: 1,
    requirement: 'hostileTakeover',
  },
  {
    id: 'algorithmicTrading',
    category: 'investing',
    cost: {
      unit: 'operation',
      value: 1e4,
    },
    enabled: false,
    effect: 'investments',
    quantity: 1,
    requirement: {
      unit: 'trust',
      value: 8,
    },
  },
  {
    id: 'improvedClipper',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 750,
    },
    enabled: false,
    effect: [
      {
        unit: 'clipperBonus',
        value: 2,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'operation',
      value: 1e4,
    },
  },
  {
    id: 'evenBetterClipper',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 2500,
    },
    enabled: false,
    effect: [
      {
        unit: 'clipperBonus',
        value: 3,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'operation',
      value: 2e4,
    },
  },
  {
    id: 'optimizedClipper',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 5e4,
    },
    enabled: false,
    effect: [
      {
        unit: 'clipperBonus',
        value: 5,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'operation',
      value: 3e4,
    },
  },
  {
    id: 'clipperDiagrams',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 6e4,
    },
    enabled: false,
    effect: [
      {
        unit: 'clipperBonus',
        value: 10,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'operation',
      value: 1e5,
    },
  },
  {
    id: 'improvedMegaClipper',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 12e3,
    },
    enabled: false,
    effect: [
      {
        unit: 'megaClipperBonus',
        value: 2,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'creativity',
      value: 20,
    },
  },
  {
    id: 'evenBetterMegaClipper',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 14e3,
    },
    enabled: false,
    effect: [
      {
        unit: 'megaClipperBonus',
        value: 3,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'creativity',
      value: 500,
    },
  },
  {
    id: 'optimizedMegaClipper',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 17e3,
    },
    enabled: false,
    effect: [
      {
        unit: 'megaClipperBonus',
        value: 5,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'creativity',
      value: 1e3,
    },
  },
  {
    id: 'clipperMegaDiagrams',
    category: 'production',
    cost: {
      unit: 'operation',
      value: 19500,
    },
    enabled: false,
    effect: [
      {
        unit: 'megaClipperBonus',
        value: 10,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'creativity',
      value: 1e4,
    },
  },
  {
    id: 'countyLimerick',
    category: 'trust',
    cost: {
      unit: 'creativity',
      value: 10,
    },
    enabled: false,
    effect: [
      {
        unit: 'trust',
        value: 1,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'creativity',
      value: 10,
    },
  },
  {
    id: 'lexicalProcessing',
    category: 'trust',
    cost: {
      unit: 'creativity',
      value: 50,
    },
    enabled: false,
    effect: [
      {
        unit: 'trust',
        value: 1,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'creativity',
      value: 50,
    },
  },
  {
    id: 'combinatorHarmonics',
    category: 'trust',
    cost: {
      unit: 'creativity',
      value: 1e2,
    },
    enabled: false,
    effect: [
      {
        unit: 'trust',
        value: 1,
      },
    ],
    quantity: 1,
    requirement: {
      unit: 'creativity',
      value: 1e2,
    },
  },
  {
    id: 'hypoDrones',
    category: 'drones',
    cost: {
      unit: 'operation',
      value: 7e4,
    },
    enabled: false,
    effect: 'releaseHypoDrones',
    quantity: 1,
    requirement: 'hypoHarmonics',
  },
  {
    id: 'releaseHypoDrones',
    category: 'drones',
    cost: {
      unit: 'trust',
      value: 1e2,
    },
    enabled: false,
    effect: 'production',
    quantity: 1,
    requirement: 'hypoDrones',
  },
];

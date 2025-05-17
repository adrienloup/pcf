import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const featureReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'BUY_FEATURE': {
      const featureName = action.feature;
      const feature = state.feature?.[featureName];

      if (!feature || feature.quantity === 0) {
        console.info(`Feature: you cannot buy ${featureName}`);
        return state;
      }

      const canBuy = feature.costs?.every(({ unit, value }) => {
        const available = state[unit] ?? 0;
        return available >= value;
      });

      if (!canBuy) {
        console.info(`Feature: not enough resources to buy ${featureName}`);
        return state;
      }

      const updatedFeatures = { ...state.feature };
      const updatedState: Partial<Factory> = { feature: updatedFeatures };

      feature.costs?.forEach(({ unit, value }) => {
        updatedState[unit] = (state[unit] ?? 0) - value;
      });

      if (Array.isArray(feature.effects)) {
        if (feature.effects.every((e) => typeof e === 'string')) {
          feature.effects?.forEach((f) => {
            updatedFeatures[f] = {
              ...updatedFeatures[f],
              enabled: !updatedFeatures[f].enabled,
            };
          });
        } else if (feature.effects.every((e) => typeof e === 'object')) {
          feature.effects?.forEach(({ unit, value }) => {
            updatedState[unit] = (state[unit] ?? 0) + value;
          });
        }
      } else {
        console.info(`Feature: ${featureName} has no effect`);
      }

      if (feature.quantity! <= 1) {
        updatedFeatures[featureName] = {
          ...updatedFeatures[featureName],
          enabled: false,
          quantity: 0,
        };
        console.info(`Feature: ${featureName} deleted`);
      } else {
        updatedFeatures[featureName] = {
          ...updatedFeatures[featureName],
          quantity: updatedFeatures[featureName].quantity! - 1,
        };
      }
      console.info(`Feature: ${featureName} purchased ${updatedState}`);

      return {
        ...state,
        ...updatedState,
      };
    }
    case 'UPDATE_FEATURE':
      return {
        ...state,
        feature: {
          ...state.feature,
          [action.feature]: {
            ...state.feature[action.feature],
            disabled: action.disabled,
            enabled: action.enabled,
          },
        },
      };
    default:
      return state;
  }
};

// import type { Factory } from '@/src/features/factory/domain/factory.ts';
// import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
//
// export const featureReducer = (state: Factory, action: FactoryDispatch): Factory => {
//   switch (action.type) {
//     case 'BUY_FEATURE': {
//       const featureName = action.feature;
//       console.log(featureName);
//       const featureValue = state.feature?.[featureName];
//       // console.log(featureValue);
//
//       if (!featureValue) return state;
//
//       if (featureValue.quantity && featureValue.quantity > 0) {
//         const updatedFeature = { ...state.feature };
//         // console.log('updatedFeature', updatedFeature);
//         const updatedState: Partial<Factory> = {};
//
//         if (featureValue.quantity <= 1) {
//           updatedFeature[featureName].enabled = false;
//           console.info(`Feature: ${featureName} deleted`);
//         } else {
//           updatedFeature[featureName].quantity = featureValue.quantity - 1;
//         }
//
//         updatedState.feature = updatedFeature;
//
//         featureValue.costs?.forEach((cost) => {
//           const { unit, value } = cost;
//           const available = state[unit];
//           // console.log(available, value);
//
//           if (available >= value) {
//             updatedState[unit] = available - value;
//           }
//         });
//         console.info(`Feature: ${updatedState} purchased`);
//
//         return {
//           ...state,
//           ...updatedState,
//         };
//       } else {
//         console.info(`Feature: you cannot buy ${featureName}`);
//       }
//     }
//
//     //
//     // const product = state.products[productIndex];
//     // const { unit: costUnit, value: costValue } = product.cost;
//     // const available = state[costUnit];
//     //
//     // if (available >= costValue && product.quantity > 0) {
//     //   const updatedProducts = [...state.products];
//     //
//     //   if (product.quantity <= 1) {
//     //     updatedProducts.splice(productIndex, 1);
//     //     console.info('Product deleted', product.id);
//     //   } else {
//     //     updatedProducts[productIndex] = {
//     //       ...product,
//     //       quantity: product.quantity - 1,
//     //     };
//     //   }
//     //
//     //   const updatedState: Partial<Factory> = {
//     //     [costUnit]: available - costValue,
//     //     products: updatedProducts,
//     //   };
//     //
//     //   if (typeof product.effect === 'string') {
//     //     const productEffect: Product | undefined = updatedState.products?.find(
//     //       (p) => p.id === product.effect
//     //     );
//     //
//     //     if (productEffect) {
//     //       // Product
//     //       const updatedProduct: Product = { ...productEffect, enabled: true };
//     //
//     //       updatedState.products = updatedState.products?.map((p) =>
//     //         p.id === updatedProduct.id ? updatedProduct : p
//     //       );
//     //     } else if (state.feature?.[product.effect]) {
//     //       // Feature
//     //       updatedState.feature = {
//     //         ...state.feature,
//     //         [product.effect]: { ...state.feature[product.effect], enabled: true },
//     //       };
//     //     } else {
//     //       console.error(`Anomaly: unknown product or feature "${product.effect}"`);
//     //     }
//     //   } else if (Array.isArray(product.effect)) {
//     //     product.effect.forEach((effect) => {
//     //       const { unit, value } = effect;
//     //
//     //       updatedState[unit] = (state[unit] ?? 0) + value;
//     //     });
//     //   }
//     //   console.info('Product purchased', updatedState);
//     //     return {
//     //       ...state,
//     //       ...updatedState,
//     //     };
//     //   } else {
//     //     console.info(`You cannot buy this product "${product.id}"`);
//     //   }
//     // }
//     // case 'ENABLE_PRODUCT': {
//     //   return {
//     //     ...state,
//     //     // products: state.products.map((product) =>
//     //     //   product.id === action.id ? { ...product, enabled: true } : product
//     //     // ),
//     //   };
//     // }
//     case 'UPDATE_FEATURE':
//       return {
//         ...state,
//         // feature: {
//         //   ...state.feature,
//         //   [action.feature]: {
//         //     ...state.feature[action.feature],
//         //     disabled: action.disabled,
//         //     enabled: action.enabled,
//         //   },
//         // },
//       };
//     default:
//       return state;
//   }
// };

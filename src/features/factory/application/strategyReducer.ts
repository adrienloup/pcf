import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import type { Product } from '@/src/features/factory/domain/product.ts';

export const strategyReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'BUY_PRODUCT': {
      const productIndex = state.products.findIndex((p) => p.id === action.id);

      if (productIndex === -1) return state;

      const product = state.products[productIndex];
      const { unit: costUnit, value: costValue } = product.cost;
      const available = state[costUnit];

      if (available >= costValue && product.quantity > 0) {
        const updatedProducts = [...state.products];

        if (product.quantity <= 1) {
          updatedProducts.splice(productIndex, 1);
          console.info('Product deleted', product.id);
        } else {
          updatedProducts[productIndex] = {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        const updatedState: Partial<Factory> = {
          [costUnit]: available - costValue,
          products: updatedProducts,
        };

        if (typeof product.effect === 'string') {
          const productEffect: Product | undefined = updatedState.products?.find(
            (p) => p.id === product.effect
          );

          if (productEffect) {
            // Product
            const updatedProduct: Product = { ...productEffect, enabled: true };

            updatedState.products = updatedState.products?.map((p) =>
              p.id === updatedProduct.id ? updatedProduct : p
            );
          } else if (state.feature?.[product.effect]) {
            // Feature
            updatedState.feature = {
              ...state.feature,
              [product.effect]: { ...state.feature[product.effect], enabled: true },
            };
          } else {
            console.error(`Anomaly: unknown product or feature "${product.effect}"`);
          }
        } else if (Array.isArray(product.effect)) {
          product.effect.forEach((effect) => {
            const { unit, value } = effect;

            updatedState[unit] = (state[unit] ?? 0) + value;
          });
        }
        console.info('Product purchased', updatedState);
        return {
          ...state,
          ...updatedState,
        };
      } else {
        console.info(`You cannot buy this product "${product.id}"`);
      }
      return state;
    }
    case 'ENABLE_PRODUCT': {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.id ? { ...product, enabled: true } : product
        ),
      };
    }
    case 'UPDATE_FEATURE':
      return {
        ...state,
        feature: {
          ...state.feature,
          [action.feature]: { ...state.feature[action.feature], enabled: action.enabled },
        },
      };
    case 'UPDATE_SWARM_STRATEGY':
      return {
        ...state,
        swarmStrategy: action.swarm,
      };
    default:
      return state;
  }
};

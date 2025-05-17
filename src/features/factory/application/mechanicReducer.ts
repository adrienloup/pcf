import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const mechanicReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'BUY_CLIPPER':
      if (state.funds < state.clipperCost) return state;
      return {
        ...state,
        clipper: state.clipper + 1,
        clipperCost: action.cost,
        funds: Math.max(0, state.funds - action.cost),
      };
    case 'BUY_MEGA_CLIPPER':
      if (state.funds < state.megaClipperCost) return state;
      return {
        ...state,
        megaClipper: state.megaClipper + 1,
        megaClipperCost: action.cost,
        funds: Math.max(0, state.funds - action.cost),
      };
    case 'BUY_FACTORY':
      if (state.funds < state.factoryCost) return state;
      return {
        ...state,
        factory: state.factory + 1,
        factoryCost: action.cost,
        funds: state.funds - state.factoryCost,
      };
    case 'UPDATE_CLIPPER_BONUS':
      return {
        ...state,
        clipperBonus: action.bonus,
      };
    case 'UPDATE_MEGA_CLIPPER_BONUS':
      return {
        ...state,
        megaClipperBonus: action.bonus,
      };
    default:
      return state;
  }
};

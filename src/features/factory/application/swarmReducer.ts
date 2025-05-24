import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const swarmReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'ADD_GIFTS':
      if (state.swarmGifts > 100 && state.drone < 1) return state;
      console.log('ADD_GIFTS');
      return {
        ...state,
        swarmGifts: Math.min(100, state.swarmGifts + action.swarmGifts),
      };
    default:
      return state;
  }
};

import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const strategyReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'UPDATE_SWARM_STRATEGY':
      return {
        ...state,
        swarmStrategy: action.strategy,
      };
    case 'UPDATE_STAGE':
      if (state.wire <= 0) return state;
      return {
        ...state,
        stage: action.stage,
      };
    default:
      return state;
  }
};

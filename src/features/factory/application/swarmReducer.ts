import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const swarmReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'UPDATE_SWARM_STRATEGY':
      return {
        ...state,
        swarmStrategy: action.strategy,
      };
    case 'ADD_GIFTS':
      if (state.swarmGifts > 100 && state.harvesterDrone + state.wireDrone < 1) return state;
      // console.log('ADD_GIFTS');
      return {
        ...state,
        swarmGifts: Math.min(100, state.swarmGifts + action.swarmGifts),
      };
    case 'INCREASE_DISORGANIZATION': {
      // console.log('INCREASE_DISORGANIZATION');
      return {
        ...state,
        disorganization: Math.min(state.disorganization + 1, 100),
      };
    }
    case 'RESET_DISORGANIZATION': {
      // console.log('RESET_DISORGANIZATION');
      if (state.funds < state.synchronizeCost) return state;
      // if (state.funds >= 5e3 && state.wireDrone / Math.max(state.harvesterDrone, 1) > 1.5) {
      return {
        ...state,
        disorganization: 0,
        funds: state.funds - state.synchronizeCost,
      };
    }
    default:
      return state;
  }
};

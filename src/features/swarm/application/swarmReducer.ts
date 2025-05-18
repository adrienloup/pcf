import type { Swarm, SwarmDispatch } from '@/src/features/swarm/domain/swarm.ts';

export const swarmReducer = (state: Swarm, action: SwarmDispatch): Swarm => {
  switch (action.type) {
    case 'ADD_GIFTS':
      return { ...state, gifts: state.gifts + action.payload };
    case 'SET_STRATEGY':
      return { ...state, strategy: action.payload };
    case 'SET_DRONES':
      return { ...state, drones: action.payload };
    case 'UPDATE_LAST_PRODUCTION_TIME':
      return { ...state, lastProductionTime: action.payload };
    default:
      return state;
  }
};

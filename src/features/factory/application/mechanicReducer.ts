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
    case 'BUY_CLIP_FACTORY':
      if (state.funds < state.clipFactoryCost) return state;
      return {
        ...state,
        clipFactory: state.clipFactory + 1,
        clipFactoryBonus: state.clipFactory + 1 > 9 ? 100 : state.clipFactoryBonus,
        clipFactoryCost: action.cost,
        funds: Math.max(0, state.funds - state.clipFactoryCost),
      };
    case 'BUY_HARVESTER_DRONE':
      if (state.funds < state.harvesterDroneCost * action.drone) return state;
      return {
        ...state,
        drone: state.drone + action.drone,
        harvesterDrone: state.harvesterDrone + action.drone,
        funds: Math.max(0, state.funds - state.harvesterDroneCost * action.drone),
      };
    case 'BUY_WIRE_DRONE':
      if (state.funds < state.wireDroneCost * action.drone) return state;
      return {
        ...state,
        drone: state.drone + action.drone,
        wireDrone: state.wireDrone + action.drone,
        funds: Math.max(0, state.funds - state.wireDroneCost * action.drone),
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

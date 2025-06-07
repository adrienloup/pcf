import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { mechanicPerSecond } from '@/src/features/factory/utils/mechanicPerSecond.ts';

export const productionReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'PRODUCTION_PER_SECOND': {
      console.log('PRODUCTION_PER_SECOND');
      const mechanicPS = mechanicPerSecond(state);
      const clipPS = mechanicPS.clip * Math.max(1, state.unsoldInventoryBonus);
      const fundsPS = clipPS * state.clipPrice;
      // const operationPS = state.feature.resources.enabled
      //   ? Math.min(state.operationMax, state.operation + 10 * state.processor)
      //   : state.operation;
      const operationPS = Math.min(state.operationMax, state.operation + 10 * state.processor);
      const creativityPS = fibonacci(operationPS, 0, 1).filter((t) => operationPS >= t).length;
      const wireMatterPS = Math.ceil(state.wireDrone * (1 - state.swarmStrategy / 100));
      // console.log('wireMatterPS', wireMatterPS);
      const wirePS = Math.max(0, state.wire + wireMatterPS - mechanicPS.wire);
      // console.log('wirePS', wirePS);
      // console.log('matter', Math.ceil(state.harvesterDrone * (1 - state.swarmStrategy / 100)));
      return {
        ...state,
        operation: operationPS,
        creativity: creativityPS,
        clipPerSecond: clipPS,
        fundsPerSecond: fundsPS,
        unsoldInventory: state.unsoldInventory + clipPS,
        clip: state.clip + clipPS,
        // wire: Math.max(0, state.wire - mechanicPS),
        wire: wirePS,
        wirePerSecond: wireMatterPS, // @TODO
      };
    }
    case 'UNIT_PRODUCTION':
      if (state.wire <= 0) return state;
      return {
        ...state,
        clip: state.clip + Math.max(1, state.unsoldInventoryBonus),
        unsoldInventory: state.unsoldInventory + Math.max(1, state.unsoldInventoryBonus),
        wire: state.wire - 1,
        clipPerSecond: state.clipPerSecond + Math.max(1, state.unsoldInventoryBonus),
        fundsPerSecond: state.fundsPerSecond + Math.max(1, state.unsoldInventoryBonus) * state.clipPrice,
      };
    default:
      return state;
  }
};

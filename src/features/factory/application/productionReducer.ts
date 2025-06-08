import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { mechanicPerSecond } from '@/src/features/factory/utils/mechanicPerSecond.ts';

export const productionReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'PRODUCTION_PER_SECOND': {
      // console.log('PRODUCTION_PER_SECOND');
      const mechanicPS = mechanicPerSecond(state);
      const clipPS = mechanicPS.clip * Math.max(1, state.unsoldInventoryBonus);
      const fundsPS = clipPS * state.clipPrice;
      const operationPS = Math.min(state.operationMax, state.operation + 10 * state.processor);
      const creativityPS = fibonacci(operationPS, 0, 1).filter((t) => operationPS >= t).length;
      const _wirePS = state.wireDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      const wirePS = Math.max(0, state.wire + _wirePS - mechanicPS.wire);
      const _rawMatterPS = state.harvesterDrone * (1 - state.swarmStrategy / 100) * (1 - state.disorganization / 100);
      const rawMatterPS = Math.max(0, state.rawMatter + _rawMatterPS);
      return {
        ...state,
        clip: state.clip + clipPS,
        clipPerSecond: clipPS,
        creativity: creativityPS,
        fundsPerSecond: fundsPS,
        rawMatter: rawMatterPS,
        operation: operationPS,
        unsoldInventory: state.unsoldInventory + clipPS,
        wire: wirePS,
        wirePerSecond: _wirePS,
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

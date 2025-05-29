import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { mechanicPerSecond } from '@/src/features/factory/utils/mechanicPerSecond.ts';
import { stagePerSecond } from '@/src/features/factory/utils/stagePerSecond.ts';

export const productionReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'PRODUCTION_PER_SECOND': {
      console.log('PRODUCTION_PER_SECOND');
      const stagePS = stagePerSecond(state);
      const mechanicPS = mechanicPerSecond(state);
      const clipPS = mechanicPS * Math.max(1, state.unsoldInventoryBonus);
      const fundsPS = clipPS * state.clipPrice;
      const operationPS = state.feature.resources.enabled
        ? Math.min(state.operationMax, state.operation + 10 * state.processor)
        : state.operation;
      const creativityPS = fibonacci(operationPS, 0, 1).filter((t) => operationPS >= t).length;
      return {
        ...state,
        stage: stagePS,
        operation: operationPS,
        creativity: creativityPS,
        clipPerSecond: clipPS,
        fundsPerSecond: fundsPS,
        unsoldInventory: state.unsoldInventory + clipPS,
        clip: state.clip + clipPS,
        wire: state.wire - mechanicPS,
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

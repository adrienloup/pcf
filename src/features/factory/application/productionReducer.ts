import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { productionPerSecond } from '@/src/features/factory/infrastructure/productionPerSecond.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';

export const productionReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'PRODUCTION_PER_SECOND': {
      // const clipperPS = state.clipper * Math.max(1, state.clipperBonus);
      // const megaClipperPS = state.megaClipper * 500 * Math.max(1, state.megaClipperBonus);
      // let productionPS = 0;
      // if (state.feature.clipFactory.enabled) {
      //   productionPS = state.wire >= state.clipFactory ? state.clipFactory : 0;
      // } else {
      //   productionPS =
      //     state.wire >= state.megaClipper + state.clipper
      //       ? megaClipperPS + clipperPS
      //       : state.wire >= state.megaClipper
      //         ? megaClipperPS
      //         : state.wire >= state.clipper
      //           ? clipperPS
      //           : 0;
      // }
      const productionPS = productionPerSecond(state);
      const clipPS = productionPS * Math.max(1, state.unsoldInventoryBonus);
      const fundsPS = clipPS * state.clipPrice;
      const operationPS = state.feature.resources.enabled
        ? Math.min(state.operationMax, state.operation + 10 * state.processor)
        : state.operation;
      const creativityPS = fibonacci(operationPS, 0, 1).filter((t) => operationPS >= t).length;
      return {
        ...state,
        operation: operationPS,
        creativity: creativityPS,
        clipPerSecond: clipPS,
        fundsPerSecond: fundsPS,
        unsoldInventory: state.unsoldInventory + clipPS,
        clip: state.clip + clipPS,
        wire: state.wire - productionPS,
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

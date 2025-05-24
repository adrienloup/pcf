import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';

function productionPerSecond(state: Factory): number {
  const { wire, feature, clipFactory, megaClipper, clipper, clipperBonus, megaClipperBonus } =
    state;
  const megaClipperPS = megaClipper * 500 * Math.max(1, megaClipperBonus);
  const clipperPS = clipper * Math.max(1, clipperBonus);
  const clipFactoryPS = Math.min(clipFactory * 1e3, 1e11);
  if (feature.clipFactory.enabled) {
    return wire >= clipFactory ? clipFactoryPS : 0;
  }
  const totalClipper = megaClipper + clipper;
  if (wire >= totalClipper) return megaClipperPS + clipperPS;
  if (wire >= megaClipper) return megaClipperPS;
  if (wire >= clipper) return clipperPS;
  return 0;
}

export const productionReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'PRODUCTION_PER_SECOND': {
      // console.log('PRODUCTION_PER_SECOND');
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
        fundsPerSecond:
          state.fundsPerSecond + Math.max(1, state.unsoldInventoryBonus) * state.clipPrice,
      };
    default:
      return state;
  }
};

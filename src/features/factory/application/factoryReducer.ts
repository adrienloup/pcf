import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';
import { mechanicReducer } from '@/src/features/factory/application/mechanicReducer.ts';
import { productionReducer } from '@/src/features/factory/application/productionReducer.ts';
import { resourcesReducer } from '@/src/features/factory/application/resourcesReducer.ts';
import { businessReducer } from '@/src/features/factory/application/businessReducer.ts';
import { strategyReducer } from '@/src/features/factory/application/strategyReducer.ts';

const reducers = [mechanicReducer, productionReducer, resourcesReducer, businessReducer, strategyReducer];

export const factoryReducer = (state: Factory, action: FactoryDispatch): Factory => {
  return reducers.reduce(
    (currentState, reducer) => {
      const nextState = reducer(currentState, action);
      return nextState ?? currentState;
    },
    action.type === 'INITIALIZE' ? { ...action.state } : state
  );
};

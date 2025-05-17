import { useCallback, useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { factoryReducer } from '@/src/features/factory/application/factoryReducer.ts';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/infrastructure/factoryContext.tsx';
import { GameContext } from '@/src/features/factory/infrastructure/gameContext.tsx';
import { FACTORY_KEY } from '@/src/features/factory/infrastructure/factoryKey.ts';
import { FACTORY_STATE } from '@/src/features/factory/states/factoryState.ts';
import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

export function FactoryProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<Factory>(FACTORY_KEY, FACTORY_STATE);
  const [state, setState] = useReducer(factoryReducer, storedState);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  const playPauseToggle = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const sellUnsoldInventory = useCallback(() => {
    setState({ type: 'SELL_UNSOLD_INVENTORY' });
    console.log('SELL_UNSOLD_INVENTORY');
  }, []);

  const updatePerSecond = useCallback(() => {
    setState({ type: 'PRODUCTION_PER_SECOND' });
    console.log('PRODUCTION_PER_SECOND');
  }, []);

  useInterval(sellUnsoldInventory, isRunning ? 5e2 : 0);
  useInterval(updatePerSecond, isRunning ? 1e3 : 0);

  return (
    <FactoryContext.Provider value={state}>
      <FactoryDispatchContext.Provider value={setState}>
        <GameContext.Provider value={{ isRunning, playPauseToggle }}>{children}</GameContext.Provider>
      </FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
}

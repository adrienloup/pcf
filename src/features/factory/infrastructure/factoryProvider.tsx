import { useCallback, useEffect, useReducer, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { factoryReducer } from '@/src/features/factory/application/factoryReducer.ts';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/infrastructure/factoryContext.tsx';
import { GameContext } from '@/src/features/factory/infrastructure/gameContext.tsx';
import { BreakComponent } from '@/src/common/shared/components/break/breakComponent.tsx';
import { FACTORY_KEY } from '@/src/features/factory/infrastructure/factoryKey.ts';
import { FACTORY_STATE } from '@/src/features/factory/states/factoryState.ts';
import type { Factory } from '@/src/features/factory/domain/factory.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

const pcf = document.getElementById('_pcf_3mma_0');

export function FactoryProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<Factory>(FACTORY_KEY, FACTORY_STATE);
  const [state, setState] = useReducer(factoryReducer, storedState);
  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  useEffect(() => {
    if (isPlay) console.warn('Start');
    else console.warn('Stop');
  }, [isPlay]);

  const setPlay = useCallback(() => {
    setIsPlay((prev) => !prev);
  }, []);

  const sellUnsoldInventory = useCallback(() => {
    setState({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  const updatePerSecond = useCallback(() => {
    setState({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(sellUnsoldInventory, 5e2, isPlay);
  useInterval(updatePerSecond, 1e3, isPlay);

  return (
    <FactoryContext.Provider value={state}>
      <FactoryDispatchContext.Provider value={setState}>
        <GameContext.Provider value={{ isPlay, setPlay }}>
          {!isPlay ? createPortal(<BreakComponent />, pcf!) : null}
          {children}
        </GameContext.Provider>
      </FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
}

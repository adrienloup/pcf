import { createPortal } from 'react-dom';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { factoryReducer } from '@/src/features/factory/application/factoryReducer.ts';
import {
  FactoryContext,
  FactoryDispatchContext,
} from '@/src/features/factory/infrastructure/factoryContext.ts';
import { GameContext } from '@/src/features/factory/infrastructure/gameContext.ts';
import { PauseComponent } from '@/src/common/shared/components/pause/pauseComponent.tsx';
import { FACTORY_STATE } from '@/src/features/factory/states/factoryState.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

const pcf = document.getElementById('_pcf_3mma_0');

export function FactoryProvider({ children }: { children: Children }) {
  const { user, setKey } = useAccount();
  const [state, setState] = useReducer(factoryReducer, null, () => {
    const stored = localStorage.getItem(setKey());
    return stored ? JSON.parse(stored) : FACTORY_STATE;
  });
  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(setKey());
    if (stored) {
      setState({ type: 'INITIALIZE', state: JSON.parse(stored) });
    } else {
      setState({ type: 'INITIALIZE', state: FACTORY_STATE });
      localStorage.setItem(setKey(), JSON.stringify(FACTORY_STATE));
    }
  }, [setKey()]);

  useEffect(() => {
    localStorage.setItem(setKey(), JSON.stringify(state));
  }, [state, setKey()]);

  const setPlay = useCallback(() => {
    setIsPlay((prev) => !prev);
  }, []);

  const sellUnsoldInventory = useCallback(() => {
    setState({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  const updatePerSecond = useCallback(() => {
    setState({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(sellUnsoldInventory, 5e2, isPlay && !!user);
  useInterval(updatePerSecond, 1e3, isPlay && !!user);

  return (
    <FactoryContext.Provider
      value={state}
      key={user}
    >
      <FactoryDispatchContext.Provider value={setState}>
        <GameContext.Provider value={{ isPlay, setPlay }}>
          {!isPlay ? createPortal(<PauseComponent />, pcf!) : null}
          {children}
        </GameContext.Provider>
      </FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
}

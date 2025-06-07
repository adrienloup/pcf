import { createPortal } from 'react-dom';
import { useCallback, useEffect, useReducer } from 'react';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { factoryReducer } from '@/src/features/factory/application/factoryReducer.ts';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/infrastructure/factoryContext.ts';
import { GameContext } from '@/src/features/factory/infrastructure/gameContext.ts';
import { PlayComponent } from '@/src/common/shared/components/play/playComponent.tsx';
import { PLAY_KEY } from '@/src/features/factory/infrastructure/playKey.ts';
import { FACTORY_STATE } from '@/src/features/factory/states/factoryState.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

const pcf = document.getElementById('_pcf_3mma_0');

export function FactoryProvider({ children }: { children: Children }) {
  const { user, setKey } = useAccount();
  const [factory, setFactory] = useReducer(factoryReducer, null, () => {
    const stored = localStorage.getItem(setKey());
    return stored ? JSON.parse(stored) : FACTORY_STATE;
  });
  const [isPlay, setIsPlay] = useLocalStorage<boolean>(PLAY_KEY, true);
  // const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(setKey());
    if (stored) {
      setFactory({ type: 'INITIALIZE', state: JSON.parse(stored) });
    } else {
      setFactory({ type: 'INITIALIZE', state: FACTORY_STATE });
      localStorage.setItem(setKey(), JSON.stringify(FACTORY_STATE));
    }
  }, [setKey()]);

  useEffect(() => {
    localStorage.setItem(setKey(), JSON.stringify(factory));
  }, [factory, setKey()]);

  const setPlay = useCallback(() => {
    setIsPlay((prev) => !prev);
  }, []);

  const sellUnsoldInventory = useCallback(() => {
    setFactory({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  const updatePerSecond = useCallback(() => {
    setFactory({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(sellUnsoldInventory, 5e2, isPlay && !!user);
  useInterval(updatePerSecond, 1e3, isPlay && !!user);

  return (
    <FactoryContext.Provider
      value={factory}
      key={user}
    >
      <FactoryDispatchContext.Provider value={setFactory}>
        <GameContext.Provider value={{ isPlay, setPlay }}>
          {!isPlay ? createPortal(<PlayComponent />, pcf!) : null}
          {children}
        </GameContext.Provider>
      </FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
}

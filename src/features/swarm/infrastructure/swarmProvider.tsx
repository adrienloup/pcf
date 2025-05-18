import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { swarmReducer } from '@/src/features/swarm/application/swarmReducer.ts';
import { SwarmContext } from '@/src/features/swarm/infrastructure/swarmContext.ts';
import { SWARM_KEY } from '@/src/features/swarm/infrastructure/swarmKey.ts';
import { SWARM_STATE } from '@/src/features/swarm/states/swarmState.ts';
import type { Children } from '@/src/common/shared/types/children.ts';
import type { Swarm } from '@/src/features/swarm/domain/swarm.ts';

export function SwarmProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<Swarm>(SWARM_KEY, SWARM_STATE);
  const [state, setState] = useReducer(swarmReducer, storedState);

  useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return <SwarmContext.Provider value={{ state, setState }}>{children}</SwarmContext.Provider>;
}

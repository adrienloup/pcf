import { useReducer, useCallback } from 'react';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';

export function usePersistedReducer<T, A>(
  reducer: (state: T, action: A) => T,
  key: string,
  defaultValue: T
): [T, (action: A) => void] {
  const [storedValue, setStoredValue] = useLocalStorage<T>(key, defaultValue);
  const [state, dispatch] = useReducer(reducer, storedValue);

  const wrappedDispatch = useCallback(
    (action: A) => {
      const nextState = reducer(state, action);
      setStoredValue(nextState);
      dispatch(action);
    },
    [setStoredValue, state]
  );

  return [state, wrappedDispatch];
}

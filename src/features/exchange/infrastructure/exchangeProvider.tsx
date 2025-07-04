import { useEffect, useState } from 'react';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { ExchangeContext } from '@/src/features/exchange/infrastructure/exchangeContext.ts';
import { EXCHANGE_KEY } from '@/src/features/exchange/infrastructure/exchangeKey.ts';
import { EXCHANGE_STATE } from '@/src/features/exchange/states/exchangeState.ts';
import type { TokenSymbol } from '@/src/features/exchange/domain/token.ts';
import type { Tokens } from '@/src/features/exchange/domain/tokens.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

export function ExchangeProvider({ children }: { children: Children }) {
  const { isPlay } = useGame();
  const [storedState, setStoredState] = useLocalStorage<Tokens>(EXCHANGE_KEY, EXCHANGE_STATE);
  const [tokens, setTokens] = useState<Tokens>(storedState);

  useEffect(() => {
    if (!isPlay) return;
    const interval = setInterval(() => {
      setTokens((prev) => {
        const updated = { ...prev };
        for (const token of Object.keys(prev) as TokenSymbol[]) {
          const data = prev[token];
          const variation = +(Math.random() * 400 - 200); // -200 et 200
          const newPrice = +Math.max(0, data.price + variation);
          const newChange = variation;
          const newVolume = Math.max(0, data.volume + Math.random() * 100 - 50); // -50 et 50
          updated[token] = {
            ...data,
            price: newPrice,
            change: newChange,
            volume: newVolume,
          };
        }
        return updated;
      });
    }, 5e3);
    setStoredState(tokens);
    return () => clearInterval(interval);
  }, [isPlay, tokens]);

  return <ExchangeContext.Provider value={{ tokens }}>{children}</ExchangeContext.Provider>;
}

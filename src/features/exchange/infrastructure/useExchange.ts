import { useContext } from 'react';
import { ExchangeContext } from '@/src/features/exchange/infrastructure/exchangeContext.ts';
import type { Exchange } from '@/src/features/exchange/domain/exchange.ts';

export const useExchange = (): Exchange => {
  const context = useContext(ExchangeContext);
  if (!context) throw new Error('useExchange must be used within ExchangeProvider');
  return context;
};

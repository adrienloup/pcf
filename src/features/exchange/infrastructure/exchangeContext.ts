import { createContext } from 'react';
import type { Exchange } from '@/src/features/exchange/domain/exchange.ts';

export const ExchangeContext = createContext<Exchange | undefined>(undefined);

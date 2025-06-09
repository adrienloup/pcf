import type { Token, TokenSymbol } from '@/src/features/exchange/domain/token.ts';

export const EXCHANGE_STATE: Record<TokenSymbol, Token> = {
  BTC: { name: 'Bitcoin', price: 6e4, volume: 6e6, change: 0 },
  ETH: { name: 'Ethereum', price: 1e3, volume: 1e7, change: 0 },
  BNB: { name: 'Binance', price: 5e2, volume: 1e6, change: 0 },
};

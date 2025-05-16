export type TokenSymbol = 'BTC' | 'ETH';
export type TokenName = 'Bitcoin' | 'Ethereum';

export interface Token {
  name: TokenName;
  price: number;
  volume: number;
  change: number;
}

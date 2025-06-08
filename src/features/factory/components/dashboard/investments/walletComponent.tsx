import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useExchange } from '@/src/features/exchange/infrastructure/useExchange.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import type { TokenSymbol } from '@/src/features/exchange/domain/token.ts';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const WalletComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const { tokens } = useExchange();

  const decreaseWallet = (symbol: string, price: number) => setFactory({ type: 'DECREASE_WALLET', symbol, price });
  const increaseWallet = (symbol: string, price: number) => setFactory({ type: 'INCREASE_WALLET', symbol, price });

  const getPrice = (symbol: string) => tokens[symbol as TokenSymbol].price * 0.1;
  const getVolume = (symbol: string) => tokens[symbol as TokenSymbol].volume;

  return (
    <DialsComponent>
      {Object.entries(factory.wallet).map(([symbol, token]) => (
        <DialsComponent key={symbol}>
          <DialComponent
            value={token.quantity}
            label={`${symbol}`}
          />
          <div className={styles.buttons}>
            <ClickerComponent
              className={styles.button}
              aria-label="Decrease"
              value={0.1}
              prefix="-"
              suffix={symbol}
              disabled={token.quantity <= 0}
              onClick={() => decreaseWallet(symbol, getPrice(symbol))}
            >
              -
            </ClickerComponent>
            <ClickerComponent
              className={styles.button}
              aria-label="Increase"
              value={0.1}
              prefix="+"
              suffix={symbol}
              disabled={factory.cash <= getPrice(symbol) || getVolume(symbol) <= 0}
              onClick={() => increaseWallet(symbol, getPrice(symbol))}
            >
              +
            </ClickerComponent>
          </div>
        </DialsComponent>
      ))}
    </DialsComponent>
  );
};

import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { ExchangeComponent } from '@/src/features/exchange/components/exchange/exchangeComponent.tsx';
import { WalletComponent } from '@/src/features/factory/components/dashboard/investments/walletComponent.tsx';
import { CashComponent } from '@/src/features/factory/components/dashboard/investments/cashComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const InvestmentsComponent = () => {
  const factory = useFactory();

  return (
    <CardComponent className={styles.investments}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Investments
      </TitleComponent>
      {factory.feature.investments.enabled ? (
        <>
          <ExchangeComponent />
          <WalletComponent />
          <CashComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

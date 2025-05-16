import { useTranslation } from 'react-i18next';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { FundsPerSecondComponent } from '@/src/features/factory/components/dashboard/business/fundsPerSecondComponent.tsx';
import { FundsComponent } from '@/src/features/factory/components/dashboard/business/fundsComponent.tsx';
import { UnsoldInventoryComponent } from '@/src/features/factory/components/dashboard/business/unsoldInventoryComponent.tsx';
import { ClipPriceComponent } from '@/src/features/factory/components/dashboard/business/clipPriceComponent.tsx';
import { PublicDemandComponent } from '@/src/features/factory/components/dashboard/business/publicDemandComponent.tsx';
import { MarketingComponent } from '@/src/features/factory/components/dashboard/business/marketingComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const BusinessComponent = () => {
  const { t } = useTranslation();

  return (
    <CardComponent className={styles.business}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        {t('factory.business')}
      </TitleComponent>
      <FundsPerSecondComponent />
      <FundsComponent />
      <UnsoldInventoryComponent />
      <ClipPriceComponent />
      <PublicDemandComponent />
      <MarketingComponent />
    </CardComponent>
  );
};

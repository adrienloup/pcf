import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const MarketingComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  if (!factory.feature.marketing.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.marketingCost}
        style="currency"
        label={t('factory.marketingCost')}
        disabled={factory.marketing >= 10}
      />
      <DialComponent
        value={factory.marketing}
        valueMax={10}
        label={t('factory.marketing')}
        disabled={factory.marketing >= 10}
      />
      <ClickerComponent
        className={styles.button}
        aria-label={t('increaseMarketing')}
        prefix="+"
        suffix={t('factory.marketing')}
        disabled={factory.funds < factory.marketingCost || factory.marketing >= 10}
        onClick={() => setFactory({ type: 'BUY_MARKETING' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

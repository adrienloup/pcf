import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components//dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const FactoryComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyFactory = () => {
    const cost = factory.factoryCost + (Math.random() * 5e5 + 5e5); // 5e5 et 1e6
    setFactory({ type: 'BUY_FACTORY', cost });
  };

  if (!factory.feature.factory.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.factoryCost}
        style="currency"
        notation="compact"
        label={t('factory.factoryCost')}
      />
      <DialComponent
        value={factory.factory}
        notation="compact"
        label={t('factory.factories')}
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix={t('factory.factory')}
        disabled={factory.clip < factory.factoryCost}
        onClick={buyFactory}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

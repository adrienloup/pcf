import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const ProcessorComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.processor}
        valueMax={100}
        label={t('factory.processors')}
      />
      <ClickerComponent
        className={styles.button}
        aria-label={t('factory.increaseProcessor')}
        value={1}
        prefix="+"
        suffix={t('factory.processor')}
        disabled={factory.trust <= 0 || factory.processor >= 100}
        onClick={() => setFactory({ type: 'INCREASE_PROCESSOR' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/Card.module.scss';

export const MemoryComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.memory}
        valueMax={100}
        label={t('factory.memory')}
      />
      <ClickerComponent
        className={styles.button}
        aria-label={t('factory.increaseMemory')}
        value={1}
        prefix="+"
        suffix={t('factory.memory')}
        disabled={factory.trust <= 0 || factory.memory >= 100}
        onClick={() => setFactory({ type: 'INCREASE_MEMORY' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

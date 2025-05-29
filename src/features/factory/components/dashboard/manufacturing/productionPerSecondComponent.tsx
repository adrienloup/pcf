import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/Card.module.scss';

export const ProductionPerSecondComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.clipPerSecond}
        notation="compact"
        label="clip per second"
      />
      <ClickerComponent
        className={styles.button}
        aria-label="Make clip"
        value={1}
        prefix="+"
        suffix="clip"
        disabled={factory.wire <= 0}
        onClick={() => setFactory({ type: 'UNIT_PRODUCTION' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

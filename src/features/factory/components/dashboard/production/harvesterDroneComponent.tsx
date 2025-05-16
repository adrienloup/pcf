import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const HarvesterDroneComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.harvesterDroneCost}
        style="currency"
        notation="compact"
        label={t('factory.harvesterDroneCost')}
      />
      <DialComponent
        value={factory.harvesterDrone}
        notation="compact"
        label={t('factory.harvesterDrone')}
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix={t('factory.drone')}
        disabled={factory.funds < factory.harvesterDroneCost}
        onClick={() => console.log('clicked')}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

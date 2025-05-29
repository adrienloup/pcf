import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { BonusComponent } from '@/src/common/shared/components/bonus/bonusComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const WireDroneComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  if (!factory.feature.wireDrone.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.wireDroneCost}
        style="currency"
        notation="compact"
        label={t('factory.wireDroneCost')}
        tile={<BonusComponent value={factory.droneBonus} />}
      />
      <DialComponent
        value={factory.wireDrone}
        notation="compact"
        label={t('factory.wireDrone')}
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix={t('factory.drone')}
        disabled={factory.funds < factory.wireDroneCost}
        onClick={() => setFactory({ type: 'BUY_WIRE_DRONE' })}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

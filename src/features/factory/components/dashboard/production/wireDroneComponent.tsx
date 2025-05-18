import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const WireDroneComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  if (!factory.feature.wireDrone.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.wireDroneCost}
        style="currency"
        notation="compact"
        label={t('factory.wireDroneCost')}
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
        onClick={() => console.log('clicked')}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

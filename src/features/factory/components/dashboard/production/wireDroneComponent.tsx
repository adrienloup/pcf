import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
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
      />
      <DialComponent
        value={factory.wireDrone}
        notation="compact"
        label={t('factory.wireDrone')}
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={classNames([styles.button, styles.auto])}
          value={10}
          prefix="+"
          suffix={t('factory.drone')}
          disabled={factory.funds < factory.wireDroneCost * 10}
          onClick={() => setFactory({ type: 'BUY_WIRE_DRONE', drone: 10 })}
        >
          +10
        </ClickerComponent>
        <ClickerComponent
          className={classNames([styles.button, styles.auto])}
          value={100}
          prefix="+"
          suffix={t('factory.drone')}
          disabled={factory.funds < factory.wireDroneCost * 100}
          onClick={() => setFactory({ type: 'BUY_WIRE_DRONE', drone: 100 })}
        >
          +100
        </ClickerComponent>
        <ClickerComponent
          className={classNames([styles.button, styles.auto])}
          value={1e3}
          prefix="+"
          suffix={t('factory.drone')}
          disabled={factory.funds < factory.wireDroneCost * 1e3}
          onClick={() => setFactory({ type: 'BUY_WIRE_DRONE', drone: 1e3 })}
        >
          +
          <NumberComponent
            value={1e3}
            notation="compact"
          />
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};

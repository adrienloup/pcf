import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const SwarmSynchronizeComponent = () => {
  const { t } = useTranslation();
  const { user } = useAccount();
  const { isPlay } = useGame();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const setAlerts = useAlertsDispatch();

  const synchronization = factory.wireDrone / Math.max(factory.harvesterDrone, 1);

  const increaseDisorganization = useCallback(() => {
    setFactory({ type: 'INCREASE_DISORGANIZATION_SWARM' });
  }, []);

  useInterval(increaseDisorganization, 2e3, isPlay && !!user && synchronization > 1.5);

  useEffect(() => {
    if (factory.disorganization >= 100) {
      setAlerts({
        type: 'ADD_ALERT',
        alert: { id: 'disorganization', text: 'maximum swarm disorganization' },
      });
    }
  }, [factory.disorganization]);

  return (
    <DialsComponent>
      <DialComponent
        value={factory.synchronizationCost}
        style="currency"
        notation="compact"
        label={t('factory.synchronizationCost')}
        tile={
          synchronization > 1.5 ? (
            <ThumbnailComponent
              label={t('factory.disorganization')}
              status="warning"
            />
          ) : null
        }
      />
      <DialComponent
        value={synchronization}
        notation="compact"
        label={t('factory.synchronization')}
      />
      <ClickerComponent
        className={classNames([styles.button, styles.auto])}
        value={factory.synchronizationCost}
        prefix="-"
        disabled={factory.funds < factory.synchronizationCost || factory.disorganization < 100}
        onClick={() => setFactory({ type: 'RESET_DISORGANIZATION_SWARM' })}
        currency
      >
        {t('factory.synchronize')}
      </ClickerComponent>
    </DialsComponent>
  );
};

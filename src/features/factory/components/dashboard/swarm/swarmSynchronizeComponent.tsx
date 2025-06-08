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

  const ratio = factory.wireDrone / Math.max(factory.harvesterDrone, 1);

  const increaseDisorganization = useCallback(() => {
    setFactory({ type: 'INCREASE_DISORGANIZATION' });
  }, [ratio, factory.disorganization]);

  useInterval(increaseDisorganization, 2e3, isPlay && !!user && ratio > 1.5);

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
        value={factory.synchronizeCost}
        style="currency"
        notation="compact"
        label={t('factory.synchronizeCost')}
        tile={
          ratio > 1.5 ? (
            <ThumbnailComponent
              label={t('factory.disorganization')}
              status="warning"
            />
          ) : null
        }
      />
      <ClickerComponent
        className={classNames([styles.button, styles.auto])}
        value={factory.synchronizeCost}
        prefix="-"
        disabled={factory.funds < factory.synchronizeCost || factory.disorganization < 100}
        onClick={() => setFactory({ type: 'RESET_DISORGANIZATION' })}
        currency
      >
        {t('factory.synchronize')}
      </ClickerComponent>
    </DialsComponent>
  );
};

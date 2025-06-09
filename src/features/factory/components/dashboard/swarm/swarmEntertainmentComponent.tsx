import { useCallback } from 'react';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const SwarmEntertainmentComponent = () => {
  const { user } = useAccount();
  const { isPlay } = useGame();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const setAlerts = useAlertsDispatch();
  const matter = factory.availableMatter;
  const entertainment = factory.entertainment;

  const updateEntertainment = useCallback(() => {
    setFactory({ type: 'BORED_SWARM' });
    setAlerts({ type: 'ADD_ALERT', alert: { id: 'bored', text: 'bored drones' } });
  }, []);

  useInterval(updateEntertainment, 1e4, isPlay && !!user && !!entertainment && !matter);

  return (
    <DialsComponent>
      <DialComponent
        value={factory.entertainmentCost}
        label="entertainment cost"
        unit="currency"
      />
      <ClickerComponent
        className={classNames([styles.button, styles.auto])}
        value={factory.entertainmentCost}
        prefix="-"
        disabled={factory.creativity < factory.entertainmentCost || !!entertainment}
        onClick={() => setFactory({ type: 'ENTERTAIN_SWARM' })}
        unit="currency"
      >
        entertain
      </ClickerComponent>
    </DialsComponent>
  );
};

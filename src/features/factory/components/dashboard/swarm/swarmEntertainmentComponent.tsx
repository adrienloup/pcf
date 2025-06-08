import { useCallback } from 'react';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';

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

  useInterval(updateEntertainment, 5e3, isPlay && !!user && !!entertainment && !matter);

  return (
    <div>
      <div>{factory.entertainmentCost} créativité</div>
      <div>Divertissement coût</div>
      <button
        onClick={() => setFactory({ type: 'ENTERTAIN_SWARM' })}
        disabled={factory.creativity < factory.entertainmentCost || !!entertainment}
      >
        entertain
      </button>
    </div>
  );
};

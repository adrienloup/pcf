import { useCallback } from 'react';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

function setDeliveryInterval(min: number, max: number, scale: number, value: number): number {
  const duration = Math.max(min, max - (Math.log10(value + 1) / scale) * (max - min));
  return Math.round(duration);
}

export const SwarmDeliveryComponent = () => {
  const { user } = useAccount();
  const { isPlay } = useGame();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const entertainment = factory.entertainment;
  const swarmDrone = factory.harvesterDrone + factory.wireDrone;
  const swarmGiftsMax = fibonacci(swarmDrone, 0, 1).filter((drone) => swarmDrone >= drone).length;
  const swarmGifts = entertainment ? Math.ceil(((factory.swarmStrategy / 1e2) * swarmGiftsMax) / 3) : 0;
  const swarmGiftsInterval = entertainment ? setDeliveryInterval(1e3, 24e3, 8, swarmDrone) : 0;

  const addGifts = useCallback(() => {
    setFactory({ type: 'UPDATE_SWARM_GIFTS', swarmGifts });
  }, [swarmGifts]);

  useInterval(addGifts, swarmGiftsInterval, isPlay && !!user && !!entertainment);

  return (
    <DialsComponent>
      <DialComponent
        value={swarmGifts}
        label={`swarm gift in ${(swarmGiftsInterval / 1000).toFixed()} seconds`}
      />
    </DialsComponent>
  );
};

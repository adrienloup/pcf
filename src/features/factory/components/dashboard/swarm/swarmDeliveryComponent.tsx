import { useCallback } from 'react';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';

function setDeliveryInterval(min: number, max: number, scale: number, value: number): number {
  const duration = Math.max(min, max - (Math.log10(value + 1) / scale) * (max - min));
  return Math.round(duration);
}

export const SwarmDeliveryComponent = () => {
  const { user } = useAccount();
  const { isPlay } = useGame();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const drone = factory.harvesterDrone + factory.wireDrone;
  const swarmGiftsMax = fibonacci(drone, 0, 1).filter((d) => drone >= d).length;
  const swarmGifts = Math.ceil(((factory.swarmStrategy / 1e2) * swarmGiftsMax) / 3);
  const swarmGiftsInterval = setDeliveryInterval(1e3, 24e3, 8, drone);

  const updateAddGifts = useCallback(() => {
    setFactory({ type: 'ADD_GIFTS', swarmGifts });
  }, [swarmGifts]);

  useInterval(updateAddGifts, swarmGiftsInterval, isPlay && !!user);

  return (
    <DialsComponent>
      <DialComponent
        value={swarmGifts}
        notation="compact"
        label={`gift in ${swarmGifts > 0 ? (swarmGiftsInterval / 1000).toFixed() : 0} seconds`}
      />
    </DialsComponent>
  );
};

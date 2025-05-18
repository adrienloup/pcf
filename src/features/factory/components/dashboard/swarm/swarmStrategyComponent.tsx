import { type ChangeEvent, useCallback } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
// import { ExponentComponent } from '@/src/common/shared/components/exponent/exponentComponent.tsx';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useGame } from '@/src/features/factory/infrastructure/useGame.ts';

const VALUE_MAX = 100;

export const SwarmStrategyComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const { isPlay } = useGame();

  const think = factory.swarmStrategy / VALUE_MAX;
  const work = 1 - factory.swarmStrategy / VALUE_MAX;

  // const thinkingDrone = Math.ceil((factory.swarmStrategy / VALUE_MAX) * factory.drone);
  // const droneWorking = Math.ceil((1 - factory.swarmStrategy / VALUE_MAX) * factory.drone);

  const swarmGiftsMax = fibonacci(factory.drone, 0, 1).filter((d) => factory.drone >= d).length;
  const swarmGifts = Math.ceil(((factory.swarmStrategy / 100) * swarmGiftsMax) / 3);
  const swarmGiftsInterval = Math.max(1000, (5000 - Math.sqrt(1 + factory.drone)) / 5);

  const updateAddGifts = useCallback(() => {
    setFactory({ type: 'ADD_GIFTS', swarmGifts });
  }, [swarmGifts]);

  useInterval(updateAddGifts, swarmGiftsInterval, isPlay);

  return (
    <DialsComponent>
      {/*{swarmGifts}*/}
      {/*{swarmGiftsInterval}*/}
      <DialComponent
        value={factory.swarmStatus}
        notation="compact"
        label={`next gift in ${(swarmGiftsInterval / 1000).toFixed()} seconds`}
      />
      <DialComponent
        value={work}
        style="percent"
        label="Work"
        // tile={<ExponentComponent value={droneWorking} />}
      />
      <DialComponent
        value={think}
        style="percent"
        label="Think"
        // tile={<ExponentComponent value={thinkingDrone} />}
      />
      <input
        type="range"
        min={0}
        max={VALUE_MAX}
        step={1}
        value={factory.swarmStrategy}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFactory({ type: 'UPDATE_SWARM_STRATEGY', strategy: Number(e.target.value) })
        }
      />
    </DialsComponent>
  );
};

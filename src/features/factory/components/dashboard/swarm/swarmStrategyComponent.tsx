import { type ChangeEvent } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { RangebarComponent } from '@/src/common/shared/components/rangebar/rangebarComponent.tsx';

const VALUE_MAX = 100;

export const SwarmStrategyComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const think = factory.swarmStrategy / VALUE_MAX;
  const work = 1 - factory.swarmStrategy / VALUE_MAX;

  return (
    <DialsComponent>
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
      <RangebarComponent
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

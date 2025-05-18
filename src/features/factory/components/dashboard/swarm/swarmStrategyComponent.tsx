import { type ChangeEvent, useState } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ExponentComponent } from '@/src/common/shared/components/exponent/exponentComponent.tsx';

const VALUE_MAX = 100;

export const SwarmStrategyComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const [value, setValue] = useState(factory.swarmStrategy);

  const think = value / VALUE_MAX;
  const work = 1 - value / VALUE_MAX;

  const updateSwarmStrategy = (e: ChangeEvent<HTMLInputElement>) => {
    setFactory({ type: 'UPDATE_SWARM_STRATEGY', strategy: Number(e.target.value) });
    setValue(Number(e.target.value));
  };

  const thinkingDrone = Math.ceil((factory.swarmStrategy / VALUE_MAX) * factory.drone);
  const droneWorking = Math.ceil((1 - factory.swarmStrategy / VALUE_MAX) * factory.drone);

  return (
    <DialsComponent>
      <DialComponent
        value={work}
        style="percent"
        label="Work"
        tile={<ExponentComponent value={droneWorking} />}
      />
      <DialComponent
        value={think}
        style="percent"
        label="Think"
        tile={<ExponentComponent value={thinkingDrone} />}
      />
      <input
        type="range"
        min={0}
        max={VALUE_MAX}
        step={1}
        value={value}
        onChange={updateSwarmStrategy}
      />
    </DialsComponent>
  );
};

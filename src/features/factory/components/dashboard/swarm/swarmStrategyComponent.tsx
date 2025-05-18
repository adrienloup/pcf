import { type ChangeEvent, useState } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const SwarmStrategyComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const [value, setValue] = useState(factory.swarmStrategy);

  const think = value / 10;
  const work = 1 - value / 10;

  const updateSwarmStrategy = (e: ChangeEvent<HTMLInputElement>) => {
    setFactory({ type: 'UPDATE_SWARM_STRATEGY', strategy: Number(e.target.value) });
    setValue(Number(e.target.value));
  };

  if (!factory.feature.swarmStrategy.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={work}
        style="percent"
        label="Work"
      />
      <DialComponent
        value={think}
        style="percent"
        label="Think"
      />
      <input
        type="range"
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={updateSwarmStrategy}
      />
    </DialsComponent>
  );
};

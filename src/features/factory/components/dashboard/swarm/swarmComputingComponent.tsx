import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const SwarmComputingComponent = () => {
  const factory = useFactory();
  const status: 'actif' | 'lonely' = factory.swarmStrategy > 1 ? 'actif' : 'lonely';

  return (
    <DialsComponent>
      {factory.swarmStrategy}
      <DialComponent
        value={factory.drone}
        notation="compact"
        label="drones"
      />
      <DialComponent
        stringValues={status}
        notation="compact"
        label="status"
      />
      <DialComponent
        value={factory.swarmStatus}
        notation="compact"
        label="next gift in 17 seconds"
      />
    </DialsComponent>
  );
};

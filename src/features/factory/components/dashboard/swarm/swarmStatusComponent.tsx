import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

type Status = 'bored' | 'busy' | 'lonely' | 'pending' | 'travel' | 'working';

function getStatus(entertainment: number, strategy: number): Status {
  if (entertainment < 1) return 'bored';
  if (strategy >= 100) return 'lonely';
  if (strategy >= 50) return 'pending';
  if (strategy >= 20) return 'working';
  return 'busy';
}

export const SwarmStatusComponent = () => {
  const factory = useFactory();
  const status = getStatus(factory.entertainment, factory.swarmStrategy);

  return (
    <DialsComponent>
      <DialComponent
        stringValue={status}
        label="status"
      />
    </DialsComponent>
  );
};

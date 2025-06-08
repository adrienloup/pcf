import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const SwarmStatusComponent = () => {
  const factory = useFactory();
  const status: 'bored' | 'busy' | 'lonely' | 'pending' | 'travel' | 'working' =
    factory.entertainment < 1
      ? 'bored'
      : factory.swarmStrategy >= 100
        ? 'lonely'
        : factory.swarmStrategy >= 80
          ? 'pending'
          : factory.swarmStrategy >= 50
            ? 'travel'
            : factory.swarmStrategy >= 20
              ? 'working'
              : 'busy';

  return (
    <DialsComponent>
      <DialComponent
        stringValue={status}
        label="status"
      />
    </DialsComponent>
  );
};

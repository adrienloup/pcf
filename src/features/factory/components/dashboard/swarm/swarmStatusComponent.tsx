import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const SwarmStatusComponent = () => {
  const factory = useFactory();
  const status: 'active' | 'diligent' | 'lonely' =
    factory.swarmStrategy >= 80 ? 'diligent' : factory.swarmStrategy >= 10 ? 'active' : 'lonely';

  return (
    <DialsComponent>
      <DialComponent
        stringValues={status}
        notation="compact"
        label="status"
      />
    </DialsComponent>
  );
};

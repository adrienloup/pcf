import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const WireMatterPerSecondComponent = () => {
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.wirePerSecond}
        notation="compact"
        label="inches wire per second"
      />
    </DialsComponent>
  );
};

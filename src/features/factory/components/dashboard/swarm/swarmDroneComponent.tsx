import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';

export const SwarmDroneComponent = () => {
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.harvesterDrone + factory.wireDrone}
        label="drones"
        tile={
          factory.entertainment < 1 ? (
            <ThumbnailComponent
              label="bored drones"
              status="warning"
            />
          ) : null
        }
      />
    </DialsComponent>
  );
};

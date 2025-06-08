import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { WireProductionComponent } from '@/src/features/factory/components/dashboard/production/wireProductionComponent.tsx';
import { HarvesterDroneComponent } from '@/src/features/factory/components/dashboard/production/harvesterDroneComponent.tsx';
import { MatterPerSecondComponent } from '@/src/features/factory/components/dashboard/production/matterPerSecondComponent.tsx';
import { AvailableMatterComponent } from '@/src/features/factory/components/dashboard/production/availableMatterComponent.tsx';
import { AcquiredMatterComponent } from '@/src/features/factory/components/dashboard/production/acquiredMatterComponent.tsx';
import { WireProductionPerSecondComponent } from '@/src/features/factory/components/dashboard/production/wireProductionPerSecondComponent.tsx';
import { WireDroneComponent } from '@/src/features/factory/components/dashboard/production/wireDroneComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const ProductionComponent = () => {
  const factory = useFactory();

  return (
    <CardComponent className={styles.production}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        production
      </TitleComponent>
      {factory.feature.production.enabled ? (
        <>
          <MatterPerSecondComponent />
          <AvailableMatterComponent />
          <AcquiredMatterComponent />
          <WireProductionPerSecondComponent />
          <WireProductionComponent />
          <HarvesterDroneComponent />
          <WireDroneComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

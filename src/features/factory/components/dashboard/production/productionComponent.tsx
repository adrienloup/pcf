import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { WireGridComponent } from '@/src/features/factory/components/dashboard/production/wireGridComponent.tsx';
import { HarvesterDroneComponent } from '@/src/features/factory/components/dashboard/production/harvesterDroneComponent.tsx';
import { RawMatterPerSecondComponent } from '@/src/features/factory/components/dashboard/production/rawMatterPerSecondComponent.tsx';
import { RawMatterComponent } from '@/src/features/factory/components/dashboard/production/rawMatterComponent.tsx';
import { WireGridPerSecondComponent } from '@/src/features/factory/components/dashboard/production/wireGridPerSecondComponent.tsx';
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
          <RawMatterPerSecondComponent />
          <RawMatterComponent />
          <WireGridPerSecondComponent />
          <WireGridComponent />
          <HarvesterDroneComponent />
          <WireDroneComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

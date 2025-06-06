import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { WireMatterComponent } from '@/src/features/factory/components/dashboard/production/wireMatterComponent.tsx';
import { HarvesterDroneComponent } from '@/src/features/factory/components/dashboard/production/harvesterDroneComponent.tsx';
import { WireMatterPerSecondComponent } from '@/src/features/factory/components/dashboard/production/wireMatterPerSecondComponent.tsx';
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
          <div>Available matter 0g</div>
          <div>Acquired matter 0g</div>
          <div>0g per second</div>
          <WireMatterPerSecondComponent />
          <WireMatterComponent />
          <HarvesterDroneComponent />
          <WireDroneComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { HarvesterDroneComponent } from '@/src/features/factory/components/dashboard/production/harvesterDroneComponent.tsx';
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
        Production
      </TitleComponent>
      {factory.feature.production.enabled ? (
        <>
          <HarvesterDroneComponent />
          <WireDroneComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

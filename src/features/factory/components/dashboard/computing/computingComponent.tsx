import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { SwarmComputingComponent } from '@/src/features/factory/components/dashboard/computing/swarmComputingComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const ComputingComponent = () => {
  const factory = useFactory();

  return (
    <CardComponent className={styles.computing}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Computing
      </TitleComponent>
      {factory.feature.computing.enabled ? (
        <>
          <SwarmComputingComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

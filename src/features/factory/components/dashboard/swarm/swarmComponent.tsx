import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { SwarmComputingComponent } from '@/src/features/factory/components/dashboard/swarm/swarmComputingComponent.tsx';
import { SwarmDeliveryComponent } from '@/src/features/factory/components/dashboard/swarm/swarmDeliveryComponent.tsx';
import { SwarmSynchronizeComponent } from '@/src/features/factory/components/dashboard/swarm/swarmSynchronizeComponent.tsx';
import { SwarmStrategyComponent } from '@/src/features/factory/components/dashboard/swarm/swarmStrategyComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const SwarmComponent = () => {
  const factory = useFactory();

  return (
    <CardComponent className={styles.swarm}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        swarm
      </TitleComponent>
      {factory.feature.swarm.enabled ? (
        <>
          <SwarmComputingComponent />
          <SwarmDeliveryComponent />
          <SwarmSynchronizeComponent />
          <SwarmStrategyComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

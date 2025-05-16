import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { TrustComponent } from '@/src/features/factory/components/dashboard/resources/trustComponent.tsx';
import { SwarmGiftsComponent } from '@/src/features/factory/components/dashboard/resources/swarmGiftsComponent.tsx';
import { MemoryComponent } from '@/src/features/factory/components/dashboard/resources/memoryComponent.tsx';
import { ProcessorComponent } from '@/src/features/factory/components/dashboard/resources/processorComponent.tsx';
import { OperationComponent } from '@/src/features/factory/components/dashboard/resources/operationComponent.tsx';
import { CreativityComponent } from '@/src/features/factory/components/dashboard/resources/creativityComponent.tsx';
import { SwarmStrategyComponent } from '@/src/features/factory/components/dashboard/resources/swarmStrategyComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const ResourcesComponent = () => {
  const factory = useFactory();

  return (
    <CardComponent className={styles.resources}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Resources
      </TitleComponent>
      {factory.feature.resources.enabled ? (
        <>
          <TrustComponent />
          <SwarmGiftsComponent />
          <MemoryComponent />
          <ProcessorComponent />
          <OperationComponent />
          <CreativityComponent />
          <SwarmStrategyComponent />
        </>
      ) : (
        <EmptyComponent />
      )}
    </CardComponent>
  );
};

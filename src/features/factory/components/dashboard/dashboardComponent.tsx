import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { CardsComponent } from '@/src/common/shared/components/cards/cardsComponent.tsx';
import { PaperclipComponent } from '@/src/features/factory/components/dashboard/paperclip/paperclipComponent.tsx';
import { ManufacturingComponent } from '@/src/features/factory/components/dashboard/manufacturing/manufacturingComponent.tsx';
import { BusinessComponent } from '@/src/features/factory/components/dashboard/business/businessComponent.tsx';
import { ResourcesComponent } from '@/src/features/factory/components/dashboard/resources/resourcesComponent.tsx';
import { InvestmentsComponent } from '@/src/features/factory/components/dashboard/investments/investmentsComponent.tsx';
import { ProductionComponent } from '@/src/features/factory/components/dashboard/production/productionComponent.tsx';
import { ComputingComponent } from '@/src/features/factory/components/dashboard/computing/computingComponent.tsx';
import { PowerComponent } from '@/src/features/factory/components/dashboard/power/powerComponent.tsx';
import styles from '@/src/features/factory/components/dashboard/dashboard.module.scss';

export const DashboardComponent = () => {
  useFeature();

  return (
    <article
      className={styles.dashboard}
      role="article"
    >
      <PaperclipComponent />
      <CardsComponent>
        <ManufacturingComponent />
        <BusinessComponent />
        <ResourcesComponent />
        <InvestmentsComponent />
        <ProductionComponent />
        <ComputingComponent />
        <PowerComponent />
      </CardsComponent>
    </article>
  );
};

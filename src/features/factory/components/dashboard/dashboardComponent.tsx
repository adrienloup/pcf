import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { PaperclipComponent } from '@/src/features/factory/components/dashboard/paperclip/paperclipComponent.tsx';
import { CardsComponent } from '@/src/common/shared/components/cards/cardsComponent.tsx';
import { ManufacturingComponent } from '@/src/features/factory/components/dashboard/manufacturing/manufacturingComponent.tsx';
import { BusinessComponent } from '@/src/features/factory/components/dashboard/business/businessComponent.tsx';
import { ResourcesComponent } from '@/src/features/factory/components/dashboard/resources/resourcesComponent.tsx';
import { InvestmentsComponent } from '@/src/features/factory/components/dashboard/investments/investmentsComponent.tsx';
import { ProductionComponent } from '@/src/features/factory/components/dashboard/production/productionComponent.tsx';
import { SwarmComponent } from '@/src/features/factory/components/dashboard/swarm/swarmComponent.tsx';
import { PowerComponent } from '@/src/features/factory/components/dashboard/power/powerComponent.tsx';
import { UserComponent } from '@/src/features/account/components/user/userComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/welcome/login/loginComponent.tsx';
import styles from '@/src/features/factory/components/dashboard/dashboard.module.scss';

export const DashboardComponent = () => {
  const { user } = useAccount();
  useFeature();

  return (
    <article
      className={styles.dashboard}
      role="article"
    >
      {user ? (
        <>
          <PaperclipComponent />
          <CardsComponent>
            <ManufacturingComponent />
            <BusinessComponent />
            <ResourcesComponent />
            <InvestmentsComponent />
            <ProductionComponent />
            <SwarmComponent />
            <PowerComponent />
          </CardsComponent>
          <UserComponent />
        </>
      ) : (
        <LoginComponent />
      )}
    </article>
  );
};

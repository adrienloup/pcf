import { lazy, Suspense } from 'react';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/shared/components/loader/loaderComponent.tsx';
import { DebugComponent } from '@/src/features/debug/components/debug/debugComponent.tsx';
import { DashboardComponent } from '@/src/features/factory/components/dashboard/dashboardComponent.tsx';
import { useTitle } from '@/src/common/shared/hooks/useTitle.ts';

const LayoutComponent = lazy(() => fallback(import('@/src/app/layout/layout/layoutComponent.tsx'), 15e2));

function FactoryPage() {
  useTitle('Factory');

  return (
    <Suspense fallback={<LoaderComponent aria-label="loading..." />}>
      <LayoutComponent>
        <DebugComponent />
        <DashboardComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default FactoryPage;

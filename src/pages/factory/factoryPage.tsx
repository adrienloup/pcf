import { lazy, Suspense } from 'react';
import { useTitle } from '@/src/common/shared/hooks/useTitle.ts';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/shared/components/loader/loaderComponent.tsx';
import { DebugComponent } from '@/src/features/debug/components/debug/debugComponent.tsx';
import { DashboardComponent } from '@/src/features/factory/components/dashboard/dashboardComponent.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/app/layout/layout/layoutComponent.tsx'), 15e2)
);

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

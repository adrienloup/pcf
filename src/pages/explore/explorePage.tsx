import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '@/src/common/shared/hooks/useTitle.ts';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/shared/components/loader/loaderComponent.tsx';
import { ExploreComponent } from '@/src/features/explore/components/explore/exploreComponent.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/app/layout/layout/layoutComponent.tsx'), 15e2));

function ExplorePage() {
  const { t } = useTranslation();
  useTitle(t('explore.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent aria-label="loading..." />}>
      <LayoutComponent>
        <ExploreComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ExplorePage;

import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '@/src/common/shared/hooks/useTitle.ts';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/shared/components/loader/loaderComponent.tsx';
import { DebugComponent } from '@/src/features/debug/components/debug/debugComponent.tsx';
import { ShowcaseComponent } from '@/src/features/factory/components/showcase/showcaseComponent.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/app/layout/layout/layoutComponent.tsx'), 15e2)
);

function ShopPage() {
  const { t } = useTranslation();
  useTitle(t('shop.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent aria-label="loading..." />}>
      <LayoutComponent>
        <DebugComponent />
        <ShowcaseComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ShopPage;

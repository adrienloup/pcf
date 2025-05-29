import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '@/src/common/shared/hooks/useTitle.ts';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/common/shared/components/loader/loaderComponent.tsx';
import { WelcomeComponent } from '@/src/features/account/components/welcome/welcomeComponent.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/app/layout/layout/layoutComponent.tsx'), 15e2));

function WelcomePage() {
  const { t } = useTranslation();
  useTitle(t('welcome.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent aria-label={t('app.loading')} />}>
      <LayoutComponent>
        <WelcomeComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default WelcomePage;

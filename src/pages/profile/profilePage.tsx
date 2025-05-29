import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitle } from '@/src/common/shared/hooks/useTitle.ts';
import { fallback } from '@/src/common/shared/utils/fallback.ts';
import { DebugComponent } from '@/src/features/debug/components/debug/debugComponent.tsx';
import { LoaderComponent } from '@/src/common/shared/components/loader/loaderComponent.tsx';
import { ProfileComponent } from '@/src/features/account/components/profile/profileComponent.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/app/layout/layout/layoutComponent.tsx'), 15e2)
);

function ProfilePage() {
  const { t } = useTranslation();
  useTitle(t('profile.titlePage'));

  return (
    <Suspense fallback={<LoaderComponent aria-label={t('app.loading')} />}>
      <LayoutComponent>
        <DebugComponent />
        <ProfileComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ProfilePage;

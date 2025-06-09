import { Link, Outlet } from 'react-router-dom';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { SummaryComponent } from '@/src/features/explore/components/explore/summary/summaryComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/login/loginComponent.tsx';
import styles from '@/src/features/explore/components/explore/explore.module.scss';

export const ExploreComponent = () => {
  const { user } = useAccount();
  useFeature();

  return (
    <article
      className={styles.explore}
      role="article"
    >
      {user ? (
        <>
          <SummaryComponent />
          <div>
            <div>
              <Link to="/pcf/explore">explore</Link>
            </div>
            <div>
              <Link to="/pcf/explore/funds">funds</Link>
            </div>
            <div>
              <Link to="/pcf/explore/inventory">inventory</Link>
            </div>
          </div>
          <Outlet />
        </>
      ) : (
        <LoginComponent />
      )}
    </article>
  );
};

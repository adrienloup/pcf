import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { GoodsComponent } from '@/src/features/factory/components/showcase/goods/goodsComponent.tsx';
import { CategoriesComponent } from '@/src/features/factory/components/showcase/categories/categoriesComponent.tsx';
import { LoggedComponent } from '@/src/features/account/components/logged/loggedComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/login/loginComponent.tsx';
import styles from '@/src/features/factory/components/showcase/showcase.module.scss';

export const ShowcaseComponent = () => {
  const { user } = useAccount();
  useFeature();

  return (
    <article
      className={styles.showcase}
      role="article"
    >
      {user ? (
        <>
          <GoodsComponent />
          <CategoriesComponent />
          <LoggedComponent />
        </>
      ) : (
        <LoginComponent />
      )}
    </article>
  );
};

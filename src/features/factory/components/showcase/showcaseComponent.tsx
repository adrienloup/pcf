import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { GoodsComponent } from '@/src/features/factory/components/showcase/goods/goodsComponent.tsx';
import { CategoriesComponent } from '@/src/features/factory/components/showcase/categories/categoriesComponent.tsx';
import styles from '@/src/features/factory/components/showcase/showcase.module.scss';

export const ShowcaseComponent = () => {
  useFeature();

  return (
    <article
      className={styles.showcase}
      role="article"
    >
      <GoodsComponent />
      <CategoriesComponent />
    </article>
  );
};

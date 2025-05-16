import { useProduct } from '@/src/features/factory/infrastructure/useProduct.ts';
import { useFeature } from '@/src/features/factory/infrastructure/useFeature.ts';
import { GoodsComponent } from '@/src/features/factory/components/window/goods/goodsComponent.tsx';
import { CategoriesComponent } from '@/src/features/factory/components/window/categories/categoriesComponent.tsx';
import styles from '@/src/features/factory/components/window/window.module.scss';

export const WindowComponent = () => {
  useProduct();
  useFeature();

  return (
    <article
      className={styles.window}
      role="article"
    >
      <GoodsComponent />
      <CategoriesComponent />
    </article>
  );
};

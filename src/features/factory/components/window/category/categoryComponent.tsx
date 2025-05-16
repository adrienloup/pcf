import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ProductsComponent } from '@/src/features/factory/components/window/products/productsComponent.tsx';
import type { Product } from '@/src/features/factory/domain/product.ts';
import styles from '@/src/features/factory/components/window/category/category.module.scss';

export const CategoryComponent = ({ category, products }: { category: string; products: Product[] }) => {
  const productsEnabled: number = products.filter((product: Product) => product.enabled).length;

  return (
    <div className={styles.category}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        {category} {`${productsEnabled}/${products.length}`}
      </TitleComponent>
      <ProductsComponent products={products} />
    </div>
  );
};

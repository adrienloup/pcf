import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { CategoryComponent } from '@/src/features/factory/components/window/category/categoryComponent.tsx';
import type { Product } from '@/src/features/factory/domain/product.ts';
import styles from '@/src/features/factory/components/window/categories/categories.module.scss';

export const CategoriesComponent = () => {
  const factory = useFactory();

  // Build groups dynamically without having to know all the categories in advance
  const productsByCategory = factory.products.reduce<Record<string, Product[]>>(
    (acc: Record<string, Product[]>, product: Product) => {
      const { category }: { category: string } = product;
      if (!acc[category]) {
        // Without having to know all the categories in advance
        acc[category] = [];
      }
      acc[category].push(product); // Build groups dynamically
      return acc;
    },
    {}
  );

  return (
    <div className={styles.categories}>
      {Object.entries(productsByCategory).map(([category, products]) => (
        <CategoryComponent
          key={category}
          category={category}
          products={products}
        />
      ))}
    </div>
  );
};

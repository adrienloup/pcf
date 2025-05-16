import { ProductComponent } from '@/src/features/factory/components/window/product/productComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import type { Product } from '@/src/features/factory/domain/product.ts';
import styles from '@/src/features/factory/components/window/products/products.module.scss';

export const ProductsComponent = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.length ? (
        <div className={styles.products}>
          {products.map((product) => (
            <ProductComponent
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <EmptyComponent />
      )}
    </>
  );
};

import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { FeaturesComponent } from '@/src/features/factory/components/showcase/features/featuresComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import type { Feature } from '@/src/features/factory/domain/feature.ts';
import styles from '@/src/features/factory/components/showcase/category/category.module.scss';

export const CategoryComponent = ({ category, feature }: { category: string; feature: Feature }) => {
  return (
    <div className={styles.category}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        {category} {`(${Object.keys(feature).length})`}
      </TitleComponent>
      {Object.keys(feature).length ? <FeaturesComponent feature={feature} /> : <EmptyComponent />}
    </div>
  );
};

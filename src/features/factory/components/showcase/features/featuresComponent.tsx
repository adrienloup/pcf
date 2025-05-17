import { FeatureComponent } from '@/src/features/factory/components/showcase/feature/featureComponent.tsx';
import type { FeatureState } from '@/src/features/factory/domain/feature.ts';
import styles from '@/src/features/factory/components/showcase/features/features.module.scss';

export const FeaturesComponent = ({ feature }: { feature: FeatureState }) => {
  return (
    <div className={styles.features}>
      {Object.entries(feature).map(([featureName, featureValue]) => (
        <FeatureComponent
          key={featureName}
          featureName={featureName}
          featureValue={featureValue}
        />
      ))}
    </div>
  );
};

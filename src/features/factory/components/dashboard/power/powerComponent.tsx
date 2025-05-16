import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { EmptyComponent } from '@/src/common/shared/components/empty/emptyComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const PowerComponent = () => {
  return (
    <CardComponent className={styles.power}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        Power
      </TitleComponent>
      <EmptyComponent />
    </CardComponent>
  );
};

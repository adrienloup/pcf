import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import styles from '@/src/common/shared/components/turban/turban.module.scss';

export const StubbornComponent = () => {
  return (
    <TurbanComponent>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        sign up or log in
      </TitleComponent>
    </TurbanComponent>
  );
};

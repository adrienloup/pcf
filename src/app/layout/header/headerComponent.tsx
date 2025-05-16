import { MenuComponent } from '@/src/app/layout/menu/menuComponent.tsx';
import styles from '@/src/app/layout/header/header.module.scss';

export const HeaderComponent = () => {
  return (
    <header
      className={styles.header}
      role="banner"
    >
      <MenuComponent />
    </header>
  );
};

import { Link } from 'react-router-dom';
import styles from '@/src/app/layout/navigation/navigation.module.scss';

export const NavigationComponent = ({ open }: { open: boolean }) => {
  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <ul className={styles.list}>
        <li>
          <Link
            to={'/pcf'}
            className={styles.link}
            tabIndex={open ? 0 : -1}
          >
            factory
          </Link>
        </li>
        <li>
          <Link
            to={'/pcf/shop'}
            className={styles.link}
            tabIndex={open ? 0 : -1}
          >
            shop
          </Link>
        </li>
        <li>
          <Link
            to={'/pcf/explore'}
            className={styles.link}
            tabIndex={open ? 0 : -1}
          >
            explore
          </Link>
        </li>
      </ul>
    </nav>
  );
};

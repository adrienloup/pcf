import { Link } from 'react-router-dom';
import styles from '@/src/app/layout/navigation/navigation.module.scss';

export const NavigationComponent = () => {
  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <ul className={styles.list}>
        <li>
          <Link
            to={'/pcf/factory'}
            className={styles.link}
          >
            factory
          </Link>
        </li>
        <li>
          <Link
            to={'/pcf/shop'}
            className={styles.link}
          >
            shop
          </Link>
        </li>
        <li>
          <Link
            to={'/pcf/explore'}
            className={styles.link}
          >
            explore
          </Link>
        </li>
        <li>
          <Link
            to={'/pcf/profile'}
            className={styles.link}
          >
            profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

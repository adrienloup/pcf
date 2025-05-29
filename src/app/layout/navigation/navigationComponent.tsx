import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/app/layout/navigation/navigation.module.scss';

export const NavigationComponent = () => {
  const { user } = useAccount();

  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <ButtonComponent
        className={classNames([styles.button, !user ? styles.disabled : ''])}
        to={'/pcf/factory'}
      >
        factory
      </ButtonComponent>
      <ButtonComponent
        className={classNames([styles.button, !user ? styles.disabled : ''])}
        to={'/pcf/shop'}
      >
        shop
      </ButtonComponent>
      <ButtonComponent
        className={classNames([styles.button, !user ? styles.disabled : ''])}
        to={'/pcf/explore'}
      >
        explore
      </ButtonComponent>
      <ButtonComponent
        className={classNames([styles.button, !user ? styles.disabled : ''])}
        to={'/pcf/profile'}
      >
        profile
      </ButtonComponent>
    </nav>
  );
};

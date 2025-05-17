import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMenu } from '@/src/app/layout/menu/useMenu.ts';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import { SettingsComponent } from '@/src/app/layout/settings/settingsComponent.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/app/layout/menu/menu.module.scss';

export const MenuComponent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useMenu();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div
      id="menu"
      className={classNames([styles.menu, open ? styles.open : ''])}
      role="menu"
      aria-labelledby="menubutton"
    >
      <ButtonComponent
        id="menubutton"
        className={styles.button}
        aria-label={open ? t('common.menu.close') : t('common.menu.open')}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen(!open)}
      >
        menu
        {/*<IconComponent icon={open ? 'menu_open' : 'menu'} />*/}
      </ButtonComponent>
      <div className={styles.inside}>
        <ul>
          <li>
            <Link to={'/pcf'}>factory</Link>
          </li>
          <li>
            <Link to={'/pcf/explore'}>explore</Link>
          </li>
          <li>
            <Link to={'/pcf/shop'}>shop</Link>
          </li>
        </ul>
        <SettingsComponent />
      </div>
    </div>
  );
};

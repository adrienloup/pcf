import { useTranslation } from 'react-i18next';
import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/common/shared/components/turban/turban.module.scss';

export const GoodsComponent = () => {
  const { t } = useTranslation();

  return (
    <TurbanComponent>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        {t('shop.titlePage')}
      </TitleComponent>
      <ButtonComponent
        className={styles.button}
        to={'/pcf'}
      >
        dashboard
      </ButtonComponent>
    </TurbanComponent>
  );
};

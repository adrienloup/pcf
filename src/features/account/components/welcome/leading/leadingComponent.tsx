import { useTranslation } from 'react-i18next';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/common/shared/components/turban/turban.module.scss';

export const LeadingComponent = () => {
  const { t } = useTranslation();
  const { user } = useAccount();

  return (
    <TurbanComponent>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        {t('app.logged', { user })}
      </TitleComponent>
      <ButtonComponent
        className={styles.button}
        to={'/pcf/factory'}
      >
        {t('app.continue')}
      </ButtonComponent>
    </TurbanComponent>
  );
};

import { useTranslation } from 'react-i18next';
import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent.tsx';
import { FormComponent } from '@/src/features/account/components/login/form/formComponent.tsx';
import styles from '@/src/common/shared/components/turban/turban.module.scss';

export const LoginComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <TurbanComponent className={styles.title}>{t('app.signUpOrLogIn')}</TurbanComponent>
      <FormComponent />
    </>
  );
};

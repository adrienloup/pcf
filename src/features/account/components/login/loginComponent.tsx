import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { regexTest } from '@/src/common/shared/utils/regexTest.ts';
import { TextFieldComponent } from '@/src/common/shared/components/textfield/textFieldComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import styles from '@/src/features/account/components/login/login.module.scss';

export const LoginComponent = () => {
  const { t } = useTranslation();
  const setAlerts = useAlertsDispatch();
  const { setLogin, setRegister } = useAccount();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onLogin = () => {
    setUsernameError('');
    setPasswordError('');

    if (!username || !password) {
      if (!username) setUsernameError(t('app.usernameRequired'));
      if (!password) setPasswordError(t('app.passwordRequired'));
      return;
    }

    if (!setLogin(username, password)) {
      setUsernameError(t('app.incorrectIdentifiers'));
      setPasswordError(t('app.incorrectIdentifiers'));
    }

    setAlerts({ type: 'ADD_ALERT', alert: { id: 'login', text: 'connection successful' } });
  };

  const onSignup = () => {
    setUsernameError('');
    setPasswordError('');

    let valid = true;

    if (!regexTest(/^[A-Za-z]{3,6}$/, username)) {
      setUsernameError(t('app.usernameMandatory'));
      valid = false;
    }

    if (!regexTest(/^[A-Za-z0-9]{3,10}$/, password)) {
      setPasswordError(t('app.passwordMandatory'));
      valid = false;
    }

    if (!valid) return;

    if (!setRegister(username, password)) {
      setUsernameError(t('app.usernameAlreadyTaken'));
      return;
    }

    setAlerts({ type: 'ADD_ALERT', alert: { id: 'signup', text: 'successful registration' } });
  };

  return (
    <div className={styles.login}>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        {t('app.signUpOrLogIn')}
      </TitleComponent>
      <TextFieldComponent
        placeholder={t('app.username')}
        value={username}
        errorMessage={usernameError}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextFieldComponent
        placeholder={t('app.password')}
        value={password}
        errorMessage={passwordError}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.buttons}>
        <ButtonComponent
          className={styles.button}
          onClick={onLogin}
        >
          {t('app.logIn')}
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={onSignup}
        >
          {t('app.signUp')}
        </ButtonComponent>
      </div>
    </div>
  );
};

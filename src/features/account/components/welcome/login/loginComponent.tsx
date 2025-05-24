import { useState } from 'react';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { regexTest } from '@/src/common/shared/utils/regexTest.ts';
import { StubbornComponent } from '@/src/features/account/components/welcome/stubborn/stubbornComponent.tsx';
import styles from '@/src/features/account/components/welcome/login/login.module.scss';

export const LoginComponent = () => {
  const { setLogin, setRegister } = useAccount();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = () => {
    if (!setLogin(username, password)) {
      setError('Identifiants incorrects.');
    } else {
      setError('');
    }
  };

  const onSignup = () => {
    const errors: string[] = [];
    if (!regexTest(/^[A-Za-z]{3,10}$/, username)) {
      errors.push('your username must be 3 to 10 alphabetic characters');
    }
    if (!regexTest(/^[A-Za-z0-9]{5,10}$/, password)) {
      errors.push('your password must be 5 to 10 alphanumeric characters');
    }
    if (errors.length > 0) {
      setError(errors.join(' \n '));
      return;
    }
    if (!setRegister(username, password)) {
      return setError("Nom d'utilisateur déjà pris.");
    }
    setError('');
  };

  return (
    <>
      <StubbornComponent />
      <form className={styles.login}>
        <input
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button onClick={onLogin}>Connexion</button>
          <button onClick={onSignup}>Créer un compte</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
};

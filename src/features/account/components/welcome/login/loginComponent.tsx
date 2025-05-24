import { useState } from 'react';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';

function usernameTest(value: string) {
  return /^[A-Za-z]{3,10}$/.test(value);
}

function passwordTest(value: string) {
  return /^[A-Za-z0-9]{5,10}$/.test(value);
}

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

  const onRegister = () => {
    const errors: string[] = [];
    if (!usernameTest(username)) {
      errors.push('your username must be 3 to 10 alphabetic characters');
    }
    if (!passwordTest(password)) {
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
    <div style={{ padding: '4rem', color: 'green', fontSize: '2rem' }}>
      <input
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        placeholder="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={onLogin}>Connexion</button>
        <button onClick={onRegister}>Créer un compte</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

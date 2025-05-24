import { Link } from 'react-router-dom';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';

export const LoggedComponent = () => {
  const { user, setLogout } = useAccount();

  return (
    <div>
      <p>
        Connecté en tant que : <strong>{user}</strong>
      </p>
      votre profil <br />
      blablabla <br />
      score
      <br />
      <button onClick={setLogout}>Déconnexion</button>
      <Link to={'/pcf/factory'}>play</Link>
    </div>
  );
};

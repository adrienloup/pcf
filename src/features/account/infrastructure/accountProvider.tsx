import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { AccountContext } from '@/src/features/account/infrastructure/accountContext.ts';
import { USERS_STATE } from '@/src/features/account/states/usersState.ts';
import { USERS_KEY } from '@/src/features/account/infrastructure/usersKey.ts';
import { USER_KEY } from '@/src/features/account/infrastructure/userKey.ts';
import type { Children } from '@/src/common/shared/types/children.ts';
import type { Users } from '@/src/features/account/domain/users.ts';

export function AccountProvider({ children }: { children: Children }) {
  const [users, setUsers] = useLocalStorage<Users>(USERS_KEY, USERS_STATE);
  const [user, setUser] = useLocalStorage<string | null>(USER_KEY, null);

  const setAccount = (): string => `_factory_3mma_0::${user ?? 'guest'}`;

  const setLogin = (username: string, password: string): boolean => {
    const loggedUser = users.find((u) => u.username === username && u.password === password);
    if (loggedUser) {
      setUser(username);
      return true;
    }
    return false;
  };

  const setSignup = (username: string, password: string): boolean => {
    if (users.some((u) => u.username === username)) return false;
    setUsers([...users, { username, password }]);
    setUser(username);
    return true;
  };

  const setLogout = (): void => setUser(null);

  return (
    <AccountContext.Provider
      value={{
        user,
        setAccount,
        setLogin,
        setSignup,
        setLogout,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

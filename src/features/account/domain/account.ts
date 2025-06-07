export interface Account {
  user: string | null;
  setUserFactory: () => string;
  setLogout: () => void;
  setLogin: (username: string, password: string) => boolean;
  setSignup: (username: string, password: string) => boolean;
}

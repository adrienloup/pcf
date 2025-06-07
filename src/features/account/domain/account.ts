export interface Account {
  user: string | null;
  setLogout: () => void;
  setLogin: (username: string, password: string) => boolean;
  setSignup: (username: string, password: string) => boolean;
  setKey: () => string;
}

import { createContext, type Dispatch } from 'react';

export const MenuContext = createContext<[boolean, Dispatch<boolean>] | undefined>(undefined);

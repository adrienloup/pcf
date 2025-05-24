import { createContext } from 'react';
import type { Account } from '@/src/features/account/domain/account.ts';

export const AccountContext = createContext<Account | null>(null);

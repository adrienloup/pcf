import { useContext } from 'react';
import { AccountContext } from '@/src/features/account/infrastructure/accountContext.ts';

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error('useAccount must be used within a AccountProvider');
  }
  return context;
};

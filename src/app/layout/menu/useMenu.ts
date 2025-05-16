import { useContext } from 'react';
import { MenuContext } from '@/src/app/layout/menu/menuContext.ts';

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

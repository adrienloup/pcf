import { useContext } from 'react';
import { GameContext } from '@/src/features/factory/infrastructure/gameContext.ts';

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a FactoryProvider');
  }
  return context;
};

import { useContext } from 'react';
import { SwarmContext } from '@/src/features/swarm/infrastructure/swarmContext.tsx';

export const useSwarm = () => {
  const context = useContext(SwarmContext);
  if (!context) {
    throw new Error('useSwarm must be used within a SwarmProvider');
  }
  return context;
};

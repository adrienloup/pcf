import { createContext } from 'react';
import type { Swarm } from '@/src/features/swarm/domain/swarm.ts';

export const SwarmContext = createContext<Swarm | undefined>(undefined);

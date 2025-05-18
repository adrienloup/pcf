export interface Swarm {
  gifts: number;
  strategy: number;
  drones: number;
  lastProductionTime: number;
}

export type SwarmDispatch =
  | { type: 'ADD_GIFTS'; payload: number }
  | { type: 'SET_STRATEGY'; payload: number }
  | { type: 'SET_DRONES'; payload: number }
  | { type: 'UPDATE_LAST_PRODUCTION_TIME'; payload: number };

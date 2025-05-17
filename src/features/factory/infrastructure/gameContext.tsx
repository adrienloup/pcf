import { createContext } from 'react';
import { GAME_STATE } from '@/src/features/factory/states/gameState.ts';
import type { Game } from '@/src/features/factory/domain/game.ts';

export const GameContext = createContext<Game>(GAME_STATE);

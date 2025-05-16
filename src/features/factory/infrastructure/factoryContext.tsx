import { createContext, type Dispatch } from 'react';
import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export const FactoryContext = createContext<Factory | undefined>(undefined);
export const FactoryDispatchContext = createContext<Dispatch<FactoryDispatch>>(() => {});

import { createContext, type Dispatch } from 'react';
import type { AlertsDispatch, Alerts } from '@/src/common/shared/components/alerts/alerts.ts';

export const AlertsContext = createContext<Alerts | undefined>(undefined);
export const AlertsDispatchContext = createContext<Dispatch<AlertsDispatch>>(() => {});

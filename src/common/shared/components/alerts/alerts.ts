import type { Alert } from '@/src/common/shared/components/alert/alert.tsx';

export type Alerts = Alert[];

export type AlertsDispatch =
  | { type: 'ADD_ALERT'; alert: Alert }
  | { type: 'REMOVE_ALERT'; id: string };

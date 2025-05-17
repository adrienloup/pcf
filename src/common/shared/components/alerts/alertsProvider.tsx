import { useReducer } from 'react';
import { createPortal } from 'react-dom';
import { AlertsContext, AlertsDispatchContext } from '@/src/common/shared/components/alerts/alertsContext.ts';
import { alertsReducer } from '@/src/common/shared/components/alerts/alertsReducer.ts';
import { AlertsComponent } from '@/src/common/shared/components/alerts/alertsComponent.tsx';
import { AlertComponent } from '@/src/common/shared/components/alert/alertComponent.tsx';
import type { Alert } from '@/src/common/shared/components/alert/alert.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

export const AlertsProvider = ({ children }: { children: Children }) => {
  const [alerts, setAlerts] = useReducer(alertsReducer, []);
  const container = document.querySelector('#_pcf_3mma_0');

  return (
    <AlertsContext.Provider value={alerts}>
      <AlertsDispatchContext.Provider value={setAlerts}>
        {alerts.length
          ? createPortal(
              <AlertsComponent>
                {alerts.map((alert: Alert) => (
                  <AlertComponent
                    key={alert.id}
                    text={alert.text}
                    status={alert.status}
                    remove={() => setAlerts({ type: 'REMOVE_ALERT', id: alert.id! })}
                  />
                ))}
              </AlertsComponent>,
              container!
            )
          : null}
        {children}
      </AlertsDispatchContext.Provider>
    </AlertsContext.Provider>
  );
};

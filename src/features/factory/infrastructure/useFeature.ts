import { useEffect } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';

export const useFeature = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const setAlert = useAlertsDispatch();

  useEffect(() => {
    const entries = Object.entries(factory.feature);

    for (let i = 0; i < entries.length; i++) {
      const [feature, value] = entries[i];
      if (value.enabled) continue;

      const requirement = value.requirement;
      let enabled = false;

      if (typeof requirement === 'object') {
        const { unit, value } = requirement;
        const available = factory[unit];
        enabled = available >= value;
      }

      if (enabled) {
        setFactory({ type: 'UPDATE_FEATURE', feature: feature, enabled: true });
        setAlert({ type: 'ADD_ALERT', alert: { id: feature, text: `${feature} unlocked` } });
        console.info(`Feature unlocked "${feature}"`);
      }
    }
  }, [factory.feature, factory.clip, factory.clipper, factory.megaClipper, factory.funds]);
};

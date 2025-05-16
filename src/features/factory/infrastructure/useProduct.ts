import { useEffect } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';

export const useProduct = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const setAlert = useAlertsDispatch();

  useEffect(() => {
    for (let i = 0; i < factory.products.length; i++) {
      const product = factory.products[i];
      if (product.enabled) continue;

      const requirement = product.requirement;
      let enabled = false;

      // if (typeof requirement === 'string') {
      //   // enabled = factory.feature?.[requirement]?.enabled ?? false;
      // } else if (typeof requirement === 'object') {

      if (typeof requirement === 'object') {
        const { unit, value } = requirement;
        const available = factory[unit];
        enabled = available >= value;
      }

      if (enabled) {
        setFactory({ type: 'ENABLE_PRODUCT', id: product.id });
        setAlert({
          type: 'ADD_ALERT',
          alert: { id: product.id, text: `${product.id} unlocked` },
        });
        console.info(`Product unlocked "${product.id}"`);
      }
    }
  }, [
    factory.feature,
    factory.products,
    factory.funds,
    factory.clip,
    factory.trust,
    factory.operation,
    factory.creativity,
  ]);
};

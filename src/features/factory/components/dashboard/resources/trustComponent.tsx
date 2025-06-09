import { useEffect, useMemo, useRef } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const TrustComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const trustRef = useRef(factory.trustRef);

  // Trust increase according to the fibonacci sequence: f = f(n-1) + f(n-2)
  const trusts: number[] = useMemo(() => fibonacci(factory.clip, 1e3, 2e3), [factory.clip]);
  const trust: number = useMemo(() => trusts.filter((t) => factory.clip >= t).length, [trusts, factory.clip]);

  useEffect(() => {
    if (trust !== trustRef.current && factory.feature.resources && factory.trust < 100) {
      setFactory({ type: 'INCREASE_TRUST', trust });
      trustRef.current = trust;
      console.info(
        `Trust: f( ${factory.trust} + ${trust} ) = ${factory.trust + trust}${factory.trust + trust >= 100 ? ' => 100' : ''}`
      );
    }
  }, [trust, factory.trust, factory.feature.resources, setFactory]);

  return (
    <DialsComponent>
      <DialComponent
        value={factory.trust}
        valueMax={100}
        label="Trust"
      />
    </DialsComponent>
  );
};

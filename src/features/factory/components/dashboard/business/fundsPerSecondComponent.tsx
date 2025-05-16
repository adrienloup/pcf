import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const FundsPerSecondComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  if (!factory.feature.fundsPerSecond.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.fundsPerSecond}
        style="currency"
        notation="compact"
        label={t('factory.fundsPerSecond')}
      />
    </DialsComponent>
  );
};

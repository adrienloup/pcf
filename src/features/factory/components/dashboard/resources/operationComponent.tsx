import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';

export const OperationComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.operation}
        valueMax={factory.operationMax}
        label={t('factory.operation')}
      />
    </DialsComponent>
  );
};

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';

export const MatterComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setAlerts = useAlertsDispatch();

  useEffect(() => {
    if (factory.availableMatter < 1) {
      setAlerts({
        type: 'ADD_ALERT',
        alert: { id: 'no-resource', text: 'depleted resources on earth' },
      });
    }
  }, [factory.availableMatter]);

  return (
    <DialsComponent>
      <DialComponent
        value={factory.availableMatter}
        label="available matter"
        tile={
          factory.availableMatter < 1 ? (
            <ThumbnailComponent
              label={t('factory.noResource')}
              status="warning"
            />
          ) : null
        }
      />
      <DialComponent
        value={factory.acquiredMatter}
        label="acquired matter"
        decimal
      />
    </DialsComponent>
  );
};

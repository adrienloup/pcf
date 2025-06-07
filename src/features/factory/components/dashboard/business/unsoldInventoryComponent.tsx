import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';

export const UnsoldInventoryComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.unsoldInventory}
        notation="compact"
        label={t('factory.unsoldInventory')}
        tile={
          factory.unsoldInventoryBonus > 0 ? (
            <ThumbnailComponent
              value={factory.unsoldInventoryBonus}
              label="x"
              status="success"
            />
          ) : null
        }
      />
    </DialsComponent>
  );
};

import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { BonusComponent } from '@/src/common/shared/components/bonus/bonusComponent.tsx';

export const UnsoldInventoryComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  return (
    <DialsComponent>
      <DialComponent
        value={factory.unsoldInventory}
        notation="compact"
        label={t('factory.unsoldInventory')}
        bonus={
          factory.unsoldInventoryBonus > 0 ? (
            <BonusComponent
              value={factory.unsoldInventoryBonus}
              prefix="x"
            />
          ) : null
        }
      />
    </DialsComponent>
  );
};

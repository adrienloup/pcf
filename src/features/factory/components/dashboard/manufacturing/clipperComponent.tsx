import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { BonusComponent } from '@/src/common/shared/components/bonus/bonusComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const ClipperComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyClipper = () => {
    const cost = factory.clipperCost + (Math.random() * 10 + 10); // 10 et 20
    setFactory({ type: 'BUY_CLIPPER', cost });
  };

  if (!factory.feature.clipper.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.clipperCost}
        style="currency"
        notation="compact"
        label={t('factory.clipperCost')}
      />
      <DialComponent
        value={factory.clipper}
        notation="compact"
        label={t('factory.clippers')}
        tile={
          factory.clipperBonus > 0 ? (
            <BonusComponent
              value={factory.clipperBonus}
              prefix="x"
            />
          ) : null
        }
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix={t('factory.clipper')}
        disabled={factory.funds < factory.clipperCost || factory.wire <= 0}
        onClick={buyClipper}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

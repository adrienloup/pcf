import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';

export const MegaClipperComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyMegaClipper = () => {
    const cost = factory.megaClipperCost + 11e2;
    setFactory({ type: 'BUY_MEGA_CLIPPER', cost });
  };

  if (!factory.feature.megaClipper.enabled || factory.feature.clipFactory.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.megaClipperCost}
        style="currency"
        notation="compact"
        label={t('factory.megaClipperCost')}
      />
      <DialComponent
        value={factory.megaClipper}
        notation="compact"
        label={t('factory.megaClippers')}
        tile={
          factory.megaClipperBonus > 0 ? (
            <ThumbnailComponent
              value={factory.megaClipperBonus}
              label="x"
            />
          ) : null
        }
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix={t('factory.megaClipper')}
        disabled={factory.funds < factory.megaClipperCost || factory.wire <= 0}
        onClick={buyMegaClipper}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

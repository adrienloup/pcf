import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components//dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const ClipFactoryComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  const buyClipFactory = () => {
    const cost = factory.clipFactoryCost + (Math.random() * 5e5 + 5e5); // 5e5 et 1e6
    setFactory({ type: 'BUY_CLIP_FACTORY', cost });
  };

  if (!factory.feature.clipFactory.enabled) return null;

  return (
    <DialsComponent>
      <DialComponent
        value={factory.clipFactoryCost}
        style="currency"
        notation="compact"
        label={t('factory.clipFactoryCost')}
      />
      <DialComponent
        value={factory.clipFactory}
        notation="compact"
        label={t('factory.clipFactories')}
        tile={
          <>
            {factory.clipFactoryBonus > 0 ? (
              <ThumbnailComponent
                value={factory.clipFactoryBonus}
                label="x"
                status="success"
              />
            ) : null}
            {factory.clipFactory >= 1e8 ? (
              <ThumbnailComponent
                label={t('factory.noSpace')}
                status="warning"
              />
            ) : null}
          </>
        }
      />
      <ClickerComponent
        className={styles.button}
        value={1}
        prefix="+"
        suffix={t('factory.clipFactory')}
        disabled={factory.funds < factory.clipFactoryCost || factory.clipFactory >= 1e8}
        onClick={buyClipFactory}
      >
        +
      </ClickerComponent>
    </DialsComponent>
  );
};

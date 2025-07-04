import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';
import styles from '@/src/common/shared/components/card/Card.module.scss';

export const ClipPriceComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();
  const setFactory = useFactoryDispatch();

  return (
    <DialsComponent>
      {/*{factory.paperclipPriceRef.toFixed(2)}*/}
      <DialComponent
        value={factory.clipPrice}
        label={t('factory.clipPrice')}
        unit="currency"
        tile={
          factory.marketingBonus > 0 ? (
            <ThumbnailComponent
              value={factory.marketingBonus}
              label="x"
              status="success"
            />
          ) : null
        }
        decimal
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          aria-label={t('decreaseClipPrice')}
          value={0.01 * Math.max(1, factory.marketingBonus)}
          prefix="-"
          disabled={factory.clipPriceRef === 0.1}
          onClick={() => setFactory({ type: 'DECREASE_CLIP_SELLING_PRICE' })}
          unit="currency"
          decimal
        >
          -
        </ClickerComponent>
        <ClickerComponent
          className={styles.button}
          aria-label={t('increaseClipPrice')}
          value={0.01 * Math.max(1, factory.marketingBonus)}
          prefix="+"
          disabled={factory.clipPriceRef === 1}
          onClick={() => setFactory({ type: 'INCREASE_CLIP_SELLING_PRICE' })}
          unit="currency"
          decimal
        >
          +
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};

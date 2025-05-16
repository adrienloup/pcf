import { useTranslation } from 'react-i18next';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ClickerComponent } from '@/src/common/shared/components/clicker/clickerComponent.tsx';
import { BonusComponent } from '@/src/common/shared/components/bonus/bonusComponent.tsx';
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
        style="currency"
        label={t('factory.clipPrice')}
        bonus={
          factory.marketingBonus > 0 ? (
            <BonusComponent
              value={factory.marketingBonus}
              prefix="x"
            />
          ) : null
        }
      />
      <div className={styles.buttons}>
        <ClickerComponent
          className={styles.button}
          aria-label={t('decreaseClipPrice')}
          value={0.01 * factory.marketingBonus}
          prefix="-"
          suffix={t('factory.price')}
          disabled={factory.clipPriceRef === 0.1}
          onClick={() => setFactory({ type: 'DECREASE_CLIP_PRICE' })}
        >
          -
        </ClickerComponent>
        <ClickerComponent
          className={styles.button}
          aria-label={t('increaseClipPrice')}
          value={0.01 * factory.marketingBonus}
          prefix="+"
          suffix={t('factory.price')}
          disabled={factory.clipPriceRef === 1}
          onClick={() => setFactory({ type: 'INCREASE_CLIP_PRICE' })}
        >
          +
        </ClickerComponent>
      </div>
    </DialsComponent>
  );
};

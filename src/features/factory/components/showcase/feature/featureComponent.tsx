import { useTranslation } from 'react-i18next';
// import { Trans, useTranslation } from 'react-i18next';
// import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
// import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
// import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import type { Feature } from '@/src/features/factory/domain/feature.ts';
import styles from '@/src/features/factory/components/showcase/feature/feature.module.scss';

export const FeatureComponent = ({
  featureName,
  featureValue,
}: {
  featureName: string;
  featureValue: Feature;
}) => {
  const { t } = useTranslation();
  // const factory = useFactory();
  const setFactory = useFactoryDispatch();
  //
  const featureOnClick = (feature: string) => {
    setFactory({ type: 'BUY_FEATURE', feature });
    //   if (typeof product.effect === 'object' && !Array.isArray(product.effect)) {
    //     setFactory(product.effect);
    //   }
  };
  //
  // const isPurchasable = (product: Product): boolean => {
  //   const { unit, value } = product.cost;
  //   return product.enabled && factory[unit] >= value;
  // };

  return (
    <ButtonComponent
      // className={classNames([styles.product, !product.enabled ? styles.disabled : ''])}
      className={styles.feature}
      // tabIndex={!product.enabled ? -1 : 0}
      onClick={() => featureOnClick(featureName)}
    >
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        {t(`shop.${featureName}.title`)}
      </TitleComponent>
      {featureValue.quantity}
      {/*<div className={styles.text}>*/}
      {/*  <Trans*/}
      {/*    i18nKey={`shop.product.${product.id}.effect`}*/}
      {/*    components={{*/}
      {/*      effect: (*/}
      {/*        <>*/}
      {/*          /!*{typeof product.effect === 'object' ? (*!/*/}
      {/*          {Array.isArray(product.effect) ? (*/}
      {/*            <NumberComponent*/}
      {/*              value={product.effect[0]?.value}*/}
      {/*              notation="compact"*/}
      {/*            />*/}
      {/*          ) : null}*/}
      {/*        </>*/}
      {/*      ),*/}
      {/*      kissCoolEffect: (*/}
      {/*        <>*/}
      {/*          /!*{typeof product.effect === 'object' ? (*!/*/}
      {/*          {Array.isArray(product.effect) ? (*/}
      {/*            <NumberComponent*/}
      {/*              value={product.effect[1]?.value}*/}
      {/*              notation="compact"*/}
      {/*            />*/}
      {/*          ) : null}*/}
      {/*        </>*/}
      {/*      ),*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className={classNames([styles.text, isPurchasable(product) ? styles.purchasable : ''])}>*/}
      {/*<div className={styles.text}>*/}
      {/*  <Trans*/}
      {/*    i18nKey={`shop.product.${product.id}.cost`}*/}
      {/*    components={{*/}
      {/*      cost: (*/}
      {/*        <NumberComponent*/}
      {/*          value={product.cost.value}*/}
      {/*          notation="compact"*/}
      {/*        />*/}
      {/*      ),*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className={styles.text}>*/}
      {/*  <Trans*/}
      {/*    i18nKey={`shop.product.${product.id}.quantity`}*/}
      {/*    components={{*/}
      {/*      quantity: (*/}
      {/*        <NumberComponent*/}
      {/*          value={product.quantity}*/}
      {/*          notation="compact"*/}
      {/*        />*/}
      {/*      ),*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
    </ButtonComponent>
  );
};

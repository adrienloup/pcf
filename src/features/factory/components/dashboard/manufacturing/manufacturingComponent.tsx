import { CardComponent } from '@/src/common/shared/components/card/cardComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ClipPerSecondComponent } from '@/src/features/factory/components/dashboard/manufacturing/clipPerSecondComponent.tsx';
import { WireComponent } from '@/src/features/factory/components/dashboard/manufacturing/wireComponent.tsx';
import { ClipperComponent } from '@/src/features/factory/components/dashboard/manufacturing/clipperComponent.tsx';
import { MegaClipperComponent } from '@/src/features/factory/components/dashboard/manufacturing/megaClipperComponent.tsx';
import { ClipFactoryComponent } from '@/src/features/factory/components/dashboard/manufacturing/clipFactoryComponent.tsx';
import styles from '@/src/common/shared/components/card/card.module.scss';

export const ManufacturingComponent = () => {
  return (
    <CardComponent className={styles.manufacturing}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        manufacturing
      </TitleComponent>
      <ClipPerSecondComponent />
      <WireComponent />
      <ClipperComponent />
      <MegaClipperComponent />
      <ClipFactoryComponent />
    </CardComponent>
  );
};

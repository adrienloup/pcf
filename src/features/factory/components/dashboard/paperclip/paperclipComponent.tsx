import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { NumberComponent } from '@/src/common/shared/components/number/numberComponent.tsx';
import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent.tsx';
import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/common/shared/components/turban/turban.module.scss';

export const PaperclipComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  return (
    <TurbanComponent>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        <NumberComponent
          value={factory.clip}
          notation="compact"
        />
        {t('factory.paperclips')}
      </TitleComponent>
      <ButtonComponent
        className={styles.button}
        to={'/pcf/shop'}
      >
        shop
      </ButtonComponent>
    </TurbanComponent>
  );
};

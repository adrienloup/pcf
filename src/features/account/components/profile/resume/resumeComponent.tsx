import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ProgressbarComponent } from '@/src/common/shared/components/progressbar/progressbarComponent.tsx';
import styles from '@/src/features/account/components/profile/resume/resume.module.scss';

export const ResumeComponent = () => {
  const { t } = useTranslation();
  const factory = useFactory();

  return (
    <div className={styles.resume}>
      <DialsComponent>
        <DialComponent label={t('profile.stage')} />
        <ProgressbarComponent
          valueMin={0}
          valueNow={factory.stage}
          valueMax={100}
          size="small"
        />
      </DialsComponent>
      <DialsComponent>
        <DialComponent label={t('profile.universe')} />0
      </DialsComponent>
    </div>
  );
};

import { ProgressbarComponent } from '@/src/common/shared/components/progressbar/progressbarComponent.tsx';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import styles from '@/src/features/account/components/resume/resume.module.scss';

export const ResumeComponent = () => {
  const factory = useFactory();

  return (
    <div className={styles.resume}>
      <div>game progress</div>
      <div>Stage 2</div>
      <ProgressbarComponent
        className={styles.progress}
        valueMin={0}
        valueNow={factory.stage}
        valueMax={100}
        size="large"
      />
      <div>Universe 0</div>
    </div>
  );
};

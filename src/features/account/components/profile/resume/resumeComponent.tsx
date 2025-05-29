import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useSettings } from '@/src/app/layout/settings/useSettings.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { DialComponent } from '@/src/common/shared/components/dial/dialComponent.tsx';
import { ProgressbarComponent } from '@/src/common/shared/components/progressbar/progressbarComponent.tsx';
import styles from '@/src/features/account/components/profile/resume/resume.module.scss';

const getValue = (clip: number, thresholds: number[]): number => {
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (clip >= thresholds[i]) {
      return (i + 1) * 10;
    }
  }
  return 0;
};

export const ResumeComponent = () => {
  const { t } = useTranslation();
  const { setStage } = useSettings();
  const factory = useFactory();
  const [stage, setStageText] = useState<{ label: string; value: number }>({ label: '1', value: 0 });

  useEffect(() => {
    const { clip, feature } = factory;

    if (feature.spaceExploration.enabled) {
      setStage('cataclysm');
      setStageText({
        label: '3',
        value: getValue(clip, [2e9, 3e9, 4e9, 5e9, 6e9, 7e9, 8e9, 9e9]),
      });
    } else if (feature.releaseHypnoDrone.enabled) {
      setStage('tumult');
      setStageText({
        label: '2',
        value: getValue(clip, [2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6, 9e6]),
      });
    } else {
      setStage('dusk');
      setStageText({
        label: '1',
        value: getValue(clip, [2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3]),
      });
    }
  }, [factory.clip, factory.feature]);

  return (
    <div className={styles.resume}>
      <DialsComponent>
        <DialComponent label={t('profile.stage', { stage: stage.label })} />
        <ProgressbarComponent
          valueMin={0}
          valueNow={stage.value}
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

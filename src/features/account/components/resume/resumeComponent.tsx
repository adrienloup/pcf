// import { useEffect, useMemo } from 'react';
// import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';
import { ProgressbarComponent } from '@/src/common/shared/components/progressbar/progressbarComponent.tsx';
import {
  useFactory,
  // useFactoryDispatch,
} from '@/src/features/factory/infrastructure/useFactory.ts';
import styles from '@/src/features/account/components/resume/resume.module.scss';

export const ResumeComponent = () => {
  const factory = useFactory();
  // const setFactory = useFactoryDispatch();
  //
  // // Stage increase according to the fibonacci sequence: f = f(n-1) + f(n-2)
  // const stages: number[] = useMemo(() => fibonacci(factory.clip, 3e3, 4e3), [factory.clip]);
  // const stage: number = useMemo(
  //   () => stages.filter((s) => factory.clip >= s).length,
  //   [stages, factory.clip]
  // );
  //
  // useEffect(() => {
  //   if (stage) {
  //     console.log('stage', stage);
  //     console.log('factory.stage', factory.stage);
  //     let stageM = 1;
  //     if (factory.feature.releaseHypnoDrone.enabled) {
  //       stageM = 33;
  //     }
  //     setFactory({ type: 'INCREASE_STAGE', stage });
  //     // trustRef.current = trust;
  //     // console.info(`Stage: f(${factory.stage} + ${stage} = ${factory.stage + stage}`);
  //   }
  // }, [stage, factory.feature.releaseHypnoDrone, setFactory]);

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

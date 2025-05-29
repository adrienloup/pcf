import type { Factory } from '@/src/features/factory/domain/factory.ts';
import { fibonacci } from '@/src/common/shared/utils/fibonacci.ts';

export function stagePerSecond(state: Factory): number {
  const { feature, clip } = state;
  const stagePS = Math.max(1, Math.min(fibonacci(clip, 1, 5e2).filter((c) => clip >= c).length, 100));
  if (feature.releaseHypnoDrone.enabled) {
    return stagePS > 33 ? stagePS : 33;
  }
  // if (feature.releaseHypnoDrone.enabled) {
  //   return stagePS > 66 ? stagePS : 66;
  // }
  return stagePS;
}

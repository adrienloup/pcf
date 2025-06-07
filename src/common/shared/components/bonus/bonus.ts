import type { Status } from '@/src/common/shared/types/status.ts';

export interface Bonus {
  className?: string;
  prefix?: string;
  value?: number;
  status?: Status;
}

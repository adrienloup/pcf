import type { Status } from '@/src/common/shared/types/status.ts';

export interface Thumbnail {
  className?: string;
  label?: string;
  value?: number;
  status?: Status;
}

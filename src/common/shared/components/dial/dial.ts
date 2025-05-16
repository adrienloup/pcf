import type { Number } from '@/src/common/shared/components/number/number.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

export interface Dial extends Number {
  bonus?: Children;
  disabled?: boolean;
  label: string;
}

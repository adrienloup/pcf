import type { Children } from '@/src/common/shared/types/children.ts';

export interface FormField {
  children: Children;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  className?: string;
}

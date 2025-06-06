import type { CSSProperties } from 'react';
import type { Children } from '@/src/common/shared/types/children.ts';

export interface Dials {
  children: Children;
  className?: string;
  direction?: 'row' | 'column';
  styleCss?: CSSProperties;
}

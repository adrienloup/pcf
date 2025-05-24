import type { ChangeEvent } from 'react';

export interface Rangebar {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

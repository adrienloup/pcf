import type { Button } from '@/src/common/shared/components/button/button.ts';

export interface Clicker extends Button<HTMLButtonElement> {
  value?: number;
  prefix?: string;
  suffix?: string;
  currency?: boolean;
  onClick: () => void;
}

export interface ClickerValue {
  id: number;
  x: number;
  y: number;
}

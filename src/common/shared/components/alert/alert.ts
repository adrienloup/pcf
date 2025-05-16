import type { Status } from '@/src/common/shared/types/status.ts';

export interface Alert {
  id?: string;
  text?: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}

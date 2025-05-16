import type { UnitValue } from '@/src/common/shared/types/unitValue.ts';

export type Feature = Record<string, { enabled: boolean; requirement: UnitValue | undefined }>;

import type { UnitValue } from '@/src/common/shared/types/unitValue.ts';
import type { FactoryDispatch } from '@/src/features/factory/domain/factory.ts';

export interface Product {
  category: string;
  cost: UnitValue;
  enabled: boolean;
  effect: FactoryDispatch | UnitValue[] | string;
  id: string;
  quantity: number;
  requirement: UnitValue | string | undefined;
}

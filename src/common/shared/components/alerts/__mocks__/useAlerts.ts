import { vi } from 'vitest';

export const mockSetAlerts = vi.fn();

vi.mock('@/src/common/shared/components/alerts/useAlerts', () => ({
  useAlertsDispatch: () => mockSetAlerts,
}));

import { vi } from 'vitest';

export const mockSetLogin = vi.fn();
export const mockSetRegister = vi.fn();

vi.mock('@/src/features/account/infrastructure/useAccount', () => ({
  useAccount: () => ({
    setLogin: mockSetLogin,
    setRegister: mockSetRegister,
  }),
}));

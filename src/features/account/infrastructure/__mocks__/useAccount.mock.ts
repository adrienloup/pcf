import { vi } from 'vitest';

export const mockSetLogin = vi.fn();
export const mockSetSignup = vi.fn();

vi.mock('@/src/features/account/infrastructure/useAccount.ts', () => ({
  useAccount: () => ({
    setLogin: mockSetLogin,
    setSignup: mockSetSignup,
  }),
}));

import { vi } from 'vitest';

export const mockMenu = vi.fn();
export const mockSetMenu = vi.fn();

vi.mock('@/src/app/layout/menu/useMenu.ts', () => ({
  useMenu: () => mockMenu(),
}));

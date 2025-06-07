import '@testing-library/jest-dom';
import { vi } from 'vitest';

// useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

// ResizeObserver event
const mockResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', mockResizeObserver);

// crollTo method
window.HTMLElement.prototype.scrollTo = vi.fn();

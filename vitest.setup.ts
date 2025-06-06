import '@testing-library/jest-dom';
import { vi } from 'vitest';

// useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

// ResizeObserver event
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

// crollTo method
window.HTMLElement.prototype.scrollTo = vi.fn();

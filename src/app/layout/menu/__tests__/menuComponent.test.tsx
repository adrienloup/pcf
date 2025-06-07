import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { mockMenu, mockSetMenu } from '@/src/app/layout/menu/__mocks__/useMenu.mock.ts';
import { MenuComponent } from '@/src/app/layout/menu/menuComponent.tsx';

vi.mock('@/src/app/layout/navigation/navigationComponent.tsx', () => ({
  NavigationComponent: () => <nav>Navigation</nav>,
}));

vi.mock('@/src/app/layout/settings/settingsComponent.tsx', () => ({
  SettingsComponent: () => <div>Settings</div>,
}));

vi.mock('@/src/app/layout/controls/controlsComponent.tsx', () => ({
  ControlsComponent: () => <div>Controls</div>,
}));

vi.mock('@/src/app/layout/menu/menu.module.scss', () => ({
  default: {
    menu: 'menu',
    open: 'open',
  },
}));

describe('MenuComponent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Devrait afficher le menu fermé sans la class open', () => {
    mockMenu.mockReturnValue([false, mockSetMenu]);
    render(<MenuComponent />);

    expect(screen.getByRole('menu')).not.toHaveClass('open');
  });

  it('Devrait afficher le menu avec la classe open', () => {
    mockMenu.mockReturnValue([true, mockSetMenu]);
    render(<MenuComponent />);

    expect(screen.getByRole('menu')).toHaveClass('menu open');
  });

  it('Devrait ouvrir le menu au clic du bouton si le menu est fermé', () => {
    mockMenu.mockReturnValue([false, mockSetMenu]);
    render(<MenuComponent />);

    const button = screen.getByRole('button', { name: /common.menu.open/i });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockSetMenu).toHaveBeenCalledWith(true);
  });

  it('Devrait fermer le menu au clic du bouton si le menu est ouvert', () => {
    mockMenu.mockReturnValue([true, mockSetMenu]);
    render(<MenuComponent />);

    fireEvent.click(screen.getByRole('button', { name: /common.menu.close/i }));

    expect(mockSetMenu).toHaveBeenCalledWith(false);
  });

  it('Devrait fermer le menu quand escape est pressé si le menu est ouvert', () => {
    mockMenu.mockReturnValue([true, mockSetMenu]);
    render(<MenuComponent />);

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(mockSetMenu).toHaveBeenCalledWith(false);
  });
});

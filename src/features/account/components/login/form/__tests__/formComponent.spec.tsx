import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { mockSetLogin, mockSetRegister } from '@/src/features/account/infrastructure/__mocks__/useAccount.ts';
import { mockSetAlerts } from '@/src/common/shared/components/alerts/__mocks__/useAlerts.ts';
import { FormComponent } from '@/src/features/account/components/login/form/formComponent.tsx';

describe('FormComponent', () => {
  beforeEach(() => {
    mockSetLogin.mockReset();
    mockSetRegister.mockReset();
    mockSetAlerts.mockReset();
  });

  test('Affiche les champs et les boutons', () => {
    render(<FormComponent />);

    expect(screen.getByPlaceholderText('app.username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('app.password')).toBeInTheDocument();
    expect(screen.getByText('app.logIn')).toBeInTheDocument();
    expect(screen.getByText('app.signUp')).toBeInTheDocument();
  });

  test('Affiche les erreurs si les champs sont vides lors du login', () => {
    render(<FormComponent />);

    fireEvent.click(screen.getByText('app.logIn'));

    expect(screen.getByText('app.usernameRequired')).toBeInTheDocument();
    expect(screen.getByText('app.passwordRequired')).toBeInTheDocument();
  });

  test('Appelle setLogin avec les bonnes valeurs si les champs sont remplis', () => {
    mockSetLogin.mockReturnValue(true);
    render(<FormComponent />);

    fireEvent.change(screen.getByPlaceholderText('app.username'), {
      target: { value: 'john' },
    });
    fireEvent.change(screen.getByPlaceholderText('app.password'), {
      target: { value: 'doe123' },
    });
    fireEvent.click(screen.getByText('app.logIn'));

    expect(mockSetLogin).toHaveBeenCalledWith('john', 'doe123');
    expect(mockSetAlerts).toHaveBeenCalledWith({
      type: 'ADD_ALERT',
      alert: { id: 'login', text: 'connection successful' },
    });
  });

  test('Affiche une erreur si setLogin échoue', () => {
    mockSetLogin.mockReturnValue(false);
    render(<FormComponent />);

    fireEvent.change(screen.getByPlaceholderText('app.username'), {
      target: { value: 'wrong' },
    });
    fireEvent.change(screen.getByPlaceholderText('app.password'), {
      target: { value: 'wrong' },
    });
    fireEvent.click(screen.getByText('app.logIn'));

    const [usernameError, passwordError] = screen.getAllByText('app.incorrectIdentifiers');

    expect(usernameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});

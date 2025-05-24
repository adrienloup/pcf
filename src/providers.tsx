import { AccountProvider } from '@/src/features/account/infrastructure/accountProvider.tsx';
import { AlertsProvider } from '@/src/common/shared/components/alerts/alertsProvider.tsx';
import { ExchangeProvider } from '@/src/features/exchange/infrastructure/exchangeProvider.tsx';
import { FactoryProvider } from '@/src/features/factory/infrastructure/factoryProvider.tsx';
import { MenuProvider } from '@/src/app/layout/menu/menuProvider.tsx';
import { SettingsProvider } from '@/src/app/layout/settings/settingsProvider.tsx';
import type {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
} from 'react';
import type { Children } from '@/src/common/shared/types/children.ts';

type Providers = [ComponentType<{ children: Children }>, ComponentPropsWithoutRef<ElementType>?][];

const allProviders = (providers: Providers) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: Children }) => <>{children}</>
  );

export const Providers: FunctionComponent<{ children: Children }> = allProviders([
  [AccountProvider],
  [AlertsProvider],
  [ExchangeProvider],
  [FactoryProvider],
  [MenuProvider],
  [SettingsProvider],
]);

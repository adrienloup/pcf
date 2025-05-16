import { useExchange } from '@/src/features/exchange/infrastructure/useExchange.ts';
import { DialsComponent } from '@/src/common/shared/components/dials/dialsComponent.tsx';
import { TokenComponent } from '@/src/features/exchange/components/token/tokenComponent.tsx';

export const ExchangeComponent = () => {
  const { tokens } = useExchange();

  return (
    <DialsComponent>
      {Object.entries(tokens).map(([symbol, token]) => (
        <TokenComponent
          key={symbol}
          name={token.name}
          price={token.price}
          volume={token.volume}
          change={token.change}
        />
      ))}
    </DialsComponent>
  );
};

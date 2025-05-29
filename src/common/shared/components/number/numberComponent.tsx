import { useSettings } from '@/src/app/layout/settings/useSettings.ts';
import type { Number } from '@/src/common/shared/components/number/number.ts';

export const NumberComponent = ({
  className,
  value,
  style,
  notation,
  compactDisplay,
  valueMax,
}: Number) => {
  const { settings } = useSettings();

  const options = {
    style: style,
    currency: settings.language == 'en' ? 'USD' : 'EUR',
    notation: notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    compactDisplay: compactDisplay,
  };

  const format = (value: number) =>
    new Intl.NumberFormat(settings.language == 'en' ? 'en-US' : 'fr-FR', options).format(value);

  return (
    <span className={className}>
      {value && format(value!)}
      {valueMax && '/' + format(valueMax)}
    </span>
  );
};

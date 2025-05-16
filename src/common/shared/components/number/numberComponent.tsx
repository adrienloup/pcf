// import { useSettings } from '@/src/generic/common/components/settings/useSettings.ts';
import type { Number } from '@/src/common/shared/components/number/number.ts';

export const NumberComponent = ({ className, value, style, notation, compactDisplay, valueMax }: Number) => {
  // const settings = useSettings();

  const options = {
    style: style,
    // currency: settings.language == 'en' ? 'USD' : 'EUR',
    currency: 'USD',
    notation: notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    compactDisplay: compactDisplay,
  };

  const format = (value: number) =>
    // new Intl.NumberFormat(settings.language == 'en' ? 'en-US' : 'fr-FR', options).format(value);
    new Intl.NumberFormat('en-US', options).format(value);

  return (
    <span className={className}>
      {format(value)}
      {valueMax && '/' + format(valueMax)}
    </span>
  );
};

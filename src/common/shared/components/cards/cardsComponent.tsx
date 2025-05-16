import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Cards } from '@/src/common/shared/components/cards/cards.ts';
import styles from '@/src/common/shared/components/cards/cards.module.scss';

export const CardsComponent = ({ children, className }: Cards) => {
  return <div className={classNames([styles.cards, className])}>{children}</div>;
};

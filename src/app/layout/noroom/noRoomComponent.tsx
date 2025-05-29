import { useEffect, useState } from 'react';
import styles from '@/src/app/layout/noroom/noRoom.module.scss';

const NOROOM: number = 400;

export const NoRoomComponent = () => {
  const [noRoom, setNoRoom] = useState(window.innerWidth < NOROOM);

  useEffect(() => {
    const onResize = () => setNoRoom(window.innerWidth < NOROOM);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return noRoom ? (
    <div className={styles.noroom}>
      <div className={styles.inner}>
        <span>to bad</span>
        <span>the resolution you are using is not supported</span>
      </div>
    </div>
  ) : null;
};

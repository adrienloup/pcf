import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { MenuContext } from '@/src/app/layout/menu/menuContext.ts';
import { MENU_KEY } from '@/src/app/layout/menu/menuKey.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

export function MenuProvider({ children }: { children: Children }) {
  const [menu, setMenu] = useLocalStorage<boolean>(MENU_KEY, false);

  return <MenuContext.Provider value={[menu, setMenu]}>{children}</MenuContext.Provider>;
}

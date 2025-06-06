import { useRoutes } from 'react-router-dom';
import { ExploreRoutes } from '@/src/pages/explore/exploreRoutes.tsx';
import { FactoryRoutes } from '@/src/pages/factory/factoryRoutes.tsx';
import { ProfileRoutes } from '@/src/pages/profile/profileRoutes.tsx';
import { ShopRoutes } from '@/src/pages/shop/shopRoutes.tsx';
import { WelcomeRoutes } from '@/src/pages/welcome/welcomeRoutes.tsx';

export const AppRoutes = () => {
  return useRoutes([...ExploreRoutes, ...FactoryRoutes, ...ProfileRoutes, ...ShopRoutes, ...WelcomeRoutes]);
};

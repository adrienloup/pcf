import { useRoutes } from 'react-router-dom';
import { ExploreRoutes } from '@/src/pages/explore/exploreRoutes.tsx';
import { FactoryRoutes } from '@/src/pages/factory/factoryRoutes.tsx';
import { ShopRoutes } from '@/src/pages/shop/shopRoutes.tsx';

export const AppRoutes = () => {
  return useRoutes([...ExploreRoutes, ...FactoryRoutes, ...ShopRoutes]);
};

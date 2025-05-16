import ShopPage from '@/src/pages/shop/shopPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const ShopRoutes: RouteObject[] = [
  { path: '/pcf/shop', element: <ShopPage /> },
  { path: '/pcf/shop/*', element: <ShopPage /> },
];

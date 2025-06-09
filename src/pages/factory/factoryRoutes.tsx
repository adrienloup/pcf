import FactoryPage from '@/src/pages/factory/factoryPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const FactoryRoutes: RouteObject[] = [
  { path: '/pcf/factory/*', element: <FactoryPage /> },
  { path: '/pcf/factory', element: <FactoryPage /> },
];

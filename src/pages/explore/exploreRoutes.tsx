import ExplorePage from '@/src/pages/explore/explorePage.tsx';
import FundsPage from '@/src/pages/explore/funds/fundsPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const ExploreRoutes: RouteObject[] = [
  { path: '/pcf/explore', element: <ExplorePage /> },
  { path: '/pcf/explore/*', element: <ExplorePage /> },
  { path: '/pcf/explore/funds', element: <FundsPage /> },
];

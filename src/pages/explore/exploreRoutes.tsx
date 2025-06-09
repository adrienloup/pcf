import ExplorePage from '@/src/pages/explore/explorePage.tsx';
import FundsPage from '@/src/pages/explore/funds/fundsPage.tsx';
import InventoryPage from '@/src/pages/explore/inventory/InventoryPage.tsx';
import type { RouteObject } from 'react-router-dom';

export const ExploreRoutes: RouteObject[] = [
  { path: '/pcf/explore/*', element: <ExplorePage /> },
  {
    path: '/pcf/explore',
    element: <ExplorePage />,
    children: [
      {
        index: true,
        element: <div>Bienvenue sur Explore</div>,
      },
      {
        path: 'funds',
        element: <FundsPage />,
      },
      {
        path: 'inventory',
        element: <InventoryPage />,
      },
    ],
  },
];

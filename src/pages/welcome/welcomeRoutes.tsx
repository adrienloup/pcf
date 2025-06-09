import WelcomePage from '@/src/pages/welcome/welcomePage.tsx';
import type { RouteObject } from 'react-router-dom';

export const WelcomeRoutes: RouteObject[] = [
  { path: '/pcf/*', element: <WelcomePage /> },
  { path: '/pcf', element: <WelcomePage /> },
];

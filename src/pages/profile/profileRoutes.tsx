import ProfilePage from '@/src/pages/profile/profilePage.tsx';
import type { RouteObject } from 'react-router-dom';

export const ProfileRoutes: RouteObject[] = [
  { path: '/pcf/profile', element: <ProfilePage /> },
  { path: '/pcf/profile/*', element: <ProfilePage /> },
];

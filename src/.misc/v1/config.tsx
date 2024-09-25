import React, { ReactElement, LazyExoticComponent, lazy } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import * as MUIIcon from "@mui/icons-material";

// Define the types for navigation and routes
interface AppConfig {
  segment: string;
  title: string;
  icon: ReactElement<SvgIconComponent>;
  path: string;
  // component(): ReactElement; // Updated type
  Component: LazyExoticComponent<() => ReactElement>; 
  kind?: string;
}

// Unified config with types
export const APP_CONFIG: AppConfig[] = [
  {
    kind: 'header',
    title: 'Main items',
    segment: 'dashboard',
    icon: <MUIIcon.Dashboard />,
    path: '/dashboard',
    Component: lazy( ()=> import(`./dashboard`)),
  },
  {
    segment: 'profile',
    title: 'Profile',
    icon: <MUIIcon.Timeline />,
    path: '/profile',
    Component: lazy( ()=> import(`./profile`)),
  },
  // ...(isAdmin
  //   ? [{
  //       segment: 'admin',
  //       title: 'Admin',
  //       icon: <TimelineIcon />,
  //       path: '/admin',
  //       component: lazy(() => import('./components/Admin')),
  //     }]
  //   : []),
];

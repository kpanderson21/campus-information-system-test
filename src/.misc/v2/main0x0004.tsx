import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as MUI from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';
import * as MUIIcon from "@mui/icons-material";
import { LIGHT_THEME, DARK_THEME } from "./template-theme.mts";

// Navigation configuration
const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Academic',
  },
  {
    segment: 'library',
    title: 'Library',
    icon: <MUIIcon.LocalLibrarySharp />,
  },
  {
    segment: 'department',
    title: 'Department',
    icon: <MUIIcon.SchoolSharp />,
    children: [
      {
        segment: 'college-of-nursing',
        title: 'College of Nursing',
        icon: <MUIIcon.Description />,
      },
      {
        segment: 'college-of-engineering',
        title: 'College of Engineering',
        icon: <MUIIcon.Description />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Administrative',
  },
  {
    segment: 'office-of-student-affairs',
    title: 'OSA',
    icon: <MUIIcon.BarChart />,
    children: [
      {
        segment: 'news',
        title: 'News',
        icon: <MUIIcon.Description />,
      },
      {
        segment: 'event',
        title: 'Event',
        icon: <MUIIcon.Description />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <MUIIcon.Layers />,
  },
];

// Theme configuration
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: LIGHT_THEME, dark: DARK_THEME },
  breakpoints: {
    values: {
      xs: 0,
      sm: 960,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Mapping for titles
const PAGE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/library': 'Library',
  '/office-of-student-affairs/news': 'OSA News',
  '/office-of-student-affairs/event': 'OSA Event',
  '/department/college-of-nursing': 'College of Nursing',
  '/department/college-of-engineering': 'College of Engineering',
  '/integrations': 'Integrations',
};

// Page Content Component
function PageContent({ pathname }: { pathname: string }) {
  let ContentComponent: React.FC;

  switch (pathname) {
    case '/':
      ContentComponent = () => <>Home</>;
      break;
    case '/library':
      ContentComponent = () => <>Library Page</>;
      break;
    case '/office-of-student-affairs/news':
      ContentComponent = () => <>OSA news page</>;
      break;
    case '/office-of-student-affairs/event':
      ContentComponent = () => <>OSA event page</>;
      break;
    case '/department/college-of-nursing':
      ContentComponent = () => <>College Of Nursing Page</>;
      break;
    case '/department/college-of-engineering':
      ContentComponent = () => <>College Of Engineering Page</>;
      break;
    case '/integrations':
      ContentComponent = () => <>Integrations</>;
      break;
    default:
      ContentComponent = () => <Typography>Page not found</Typography>;
  }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          width: `100%`,
          textAlign: `start`,
          justifyContent: `center`,
        }}
      >
        &gt; Page content for {pathname}
      </Typography>
      <ContentComponent />
    </Box>
  );
}

// Main component with URL handling and document title update
export default function SimpleDashboardLayout() {
  const [pathname, setPathname] = React.useState(() => {
    return window.location.pathname || '/';
  });

  // Update document title based on current pathname
  React.useEffect(() => {
    const title = PAGE_TITLES[pathname] || 'Page not found';
    document.title = `${title} - Campus App`;
  }, [pathname]);

  // Handle URL change on manual typing or navigation
  React.useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        window.history.pushState(null, '', path);
        setPathname(String(path));
      },
    };
  }, [pathname]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: `[LOGO]`,
        title: `CAMPUS`,
      }}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <PageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <MUI.StyledEngineProvider injectFirst>
        <SimpleDashboardLayout />
      </MUI.StyledEngineProvider>
    </React.StrictMode>
  );
}

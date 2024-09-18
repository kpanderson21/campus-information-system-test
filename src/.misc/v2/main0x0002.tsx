import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as MUI from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';
import { SchoolRounded } from '@mui/icons-material';
import { LIGHT_THEME, DARK_THEME } from "./template-theme.mts";
import * as MUIIcon from "@mui/icons-material";

//REM: Navigation configuration
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
                icon: <DescriptionIcon />,
            },
            {
                segment: 'college-of-engineering',
                title: 'College of Engineering',
                icon: <DescriptionIcon />,
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
        icon: <BarChartIcon />,
        children: [
            {
                segment: 'news',
                title: 'News',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'event',
                title: 'Event',
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />,
    },
];

//REM: Theme configuration
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

//REM: Page Content Component
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
            <Typography sx={{
                width: `100%`,
                textAlign: `start`,
                justifyContent: `center`
            }}>&gt; Page content for {pathname}</Typography>
            <ContentComponent />
        </Box>
    );
}

//REM: Main component with localStorage and URL update integration
export default function SimpleDashboardLayout() {
    const [pathname, setPathname] = React.useState(() => {
        //REM: Read initial pathname from localStorage or use current URL
        return localStorage.getItem('pathname') || window.location.pathname || '/dashboard';
    });

    //REM: Update localStorage and URL whenever pathname changes
    React.useEffect(() => {
        localStorage.setItem('pathname', pathname);
        window.history.pushState({}, '', pathname); //REM: Update the browser URL without reload

    }, [pathname]);

    //REM: Router setup
    const router = React.useMemo<Router>(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
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

//REM: Ensure that createRoot is called only once
if (container) {
  //REM: Create a root for the container
  const root = ReactDOM.createRoot(container);
  
  //REM: Render or update the app using the root object
  root.render(
    <React.StrictMode>
        <MUI.StyledEngineProvider injectFirst>
            <SimpleDashboardLayout />
        </MUI.StyledEngineProvider>
    </React.StrictMode>
  );
}

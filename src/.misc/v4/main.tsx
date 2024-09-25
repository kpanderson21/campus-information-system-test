import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import type { Router as ToolpadRouter, Navigation } from '@toolpad/core';
import { SchoolRounded } from '@mui/icons-material';

// Define dynamic page components
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './pages/OrdersPage';
import ReportsPage from './pages/ReportsPage';
import CollegeOfNursingPage from './pages/CollegeOfNursingPage';
import CollegeOfEngineeringPage from './pages/CollegeOfEngineeringPage';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Analytics',
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <BarChartIcon />,
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />,
    },
    {
        segment: 'department/college-of-nursing',
        title: 'College Of Nursing',
        icon: <SchoolRounded />,
    },
    {
        segment: 'department/college-of-engineering',
        title: 'College Of Engineering',
        icon: <SchoolRounded />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
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

function DemoPageContent({ pathname }: { pathname: string }) {
    let ContentComponent;

    switch (pathname) {
        case '/dashboard':
            ContentComponent = DashboardPage;
            break;
        case '/orders':
            ContentComponent = OrdersPage;
            break;
        case '/reports/sales':
        case '/reports/traffic':
            ContentComponent = ReportsPage;
            break;
        case '/department/college-of-nursing':
            ContentComponent = CollegeOfNursingPage;
            break;
        case '/department/college-of-engineering':
            ContentComponent = CollegeOfEngineeringPage;
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
            <ContentComponent />
        </Box>
    );
}

interface DemoProps {
    window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
    const [pathname, setPathname] = React.useState('/dashboard');

    const navigate = useNavigate();

    React.useEffect(() => {
        navigate(pathname);
    }, [pathname, navigate]);

    return (
        <Router>
            <AppProvider
                navigation={NAVIGATION}
                branding={{ logo: '', title: 'Title' }}
                router={{
                    pathname,
                    searchParams: new URLSearchParams(),
                    navigate: (path: string | URL) => {
                        if (typeof path === 'string') {
                            setPathname(path);
                        } else {
                            setPathname(path.toString());
                        }
                        navigate(path);
                    }
                }}
                theme={demoTheme}
            >
                <DashboardLayout>
                    <Routes>
                        <Route path="/" element={<DemoPageContent pathname={pathname} />} />
                        <Route path="/dashboard" element={<DemoPageContent pathname="/dashboard" />} />
                        <Route path="/orders" element={<DemoPageContent pathname="/orders" />} />
                        <Route path="/reports/sales" element={<DemoPageContent pathname="/reports/sales" />} />
                        <Route path="/reports/traffic" element={<DemoPageContent pathname="/reports/traffic" />} />
                        <Route path="/department/college-of-nursing" element={<DemoPageContent pathname="/department/college-of-nursing" />} />
                        <Route path="/department/college-of-engineering" element={<DemoPageContent pathname="/department/college-of-engineering" />} />
                    </Routes>
                </DashboardLayout>
            </AppProvider>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MUI.StyledEngineProvider injectFirst>
            <DashboardLayoutBasic />
        </MUI.StyledEngineProvider>
    </React.StrictMode>
);

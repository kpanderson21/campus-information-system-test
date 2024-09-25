import * as React from 'react';
import * as ReactRouterDom from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import * as MUI from "@mui/material";
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
import { SchoolOutlined, SchoolRounded, SchoolSharp } from '@mui/icons-material';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
        //component: <ViewDashboard/>
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
        //component: <ViewShooping/>
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
                //component: <ViewSale/>
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <DescriptionIcon/>
            },
        ],
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />,
        //component: <ViewIntegration/>
    },
    {
        segment: 'department/college-of-nursing',
        title: 'College Of Nursing',
        icon: <SchoolRounded />,
        //component: <ViewCollegeOfNursing/>
    },
    {
        segment: 'department/college-of-engineering',
        title: 'College Of Engineering',
        icon: <SchoolRounded />,
        //component: <ViewCollegeOfEngineering/>
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
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
}

interface DemoProps {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
    children?: React.ReactNode;
}

export default function DashboardLayoutBasic(props: DemoProps) {
    const { window } = props;

    const [pathname, setPathname] = React.useState('/dashboard');

    const router = React.useMemo<Router>(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    // Remove this const when copying and pasting into your project.
    // const demoWindow = window !== undefined ? window() : undefined;

    return (<>
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: ``,
                title: `Title`
            }}  
            router={router}
            theme={demoTheme}
            // window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent pathname={pathname} />
                <ReactRouterDom.Outlet />
                {/* <ReactRouterDom.BrowserRouter>
                    <ReactRouterDom.Routes>
                        <ReactRouterDom.Route path={`/`}>

                            <ReactRouterDom.Route
                                index element={<>index</>} />

                            <ReactRouterDom.Route
                                path={`/department/college-of-nursing`} element={<>CON</>} />

                            <ReactRouterDom.Route
                                path={`/department/college-of-engineering`} element={<>COE</>} />

                            <ReactRouterDom.Route
                                path={`*`} element={<h1>TODO</h1>} />
                        </ReactRouterDom.Route>
                    </ReactRouterDom.Routes>
                </ReactRouterDom.BrowserRouter> */}
            </DashboardLayout>
        </AppProvider>
        // preview-end
    </>);
}
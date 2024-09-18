import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as MUI from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import { Navigation } from "@toolpad/core";
import { SchoolRounded } from '@mui/icons-material';

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
        segment: 'reports/sales',
        title: 'Sales Reports',
        icon: <BarChartIcon />,
    },
    {
        segment: 'reports/traffic',
        title: 'Traffic Reports',
        icon: <DescriptionIcon />,
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />,
    },
    {
        segment: 'department',
        title: 'Department',
        icon: <SchoolRounded />,
        children: [
            {
                segment: 'college-of-nursing',
                title: 'College of Nursing',
                icon: <DescriptionIcon />,
                //component: <ViewSale/>
            },
            {
                segment: 'college-of-engineering',
                title: 'College of Engineering',
                icon: <DescriptionIcon/>
            },
        ],
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

// Dummy page content for each route
function DemoPageContent({ title }: { title: string }) {
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
            <Typography variant="h4">{title}</Typography>
        </Box>
    );
}

// Define the page components for different routes
const ViewDashboard = () => <DemoPageContent title="Dashboard" />;
const ViewOrders = () => <DemoPageContent title="Orders" />;
const ViewSalesReports = () => <DemoPageContent title="Sales Reports" />;
const ViewTrafficReports = () => <DemoPageContent title="Traffic Reports" />;
const ViewIntegrations = () => <DemoPageContent title="Integrations" />;
const ViewCollegeOfNursing = () => <DemoPageContent title="College Of Nursing" />;
const ViewCollegeOfEngineering = () => <DemoPageContent title="College Of Engineering" />;

export default function DashboardLayoutBasic() {
    return (
        <Router>
            <AppProvider
                navigation={NAVIGATION}
                branding={{
                    logo: ``,
                    title: `Title`,
                }}
                theme={demoTheme}
            >
                <DashboardLayout>
                    <Routes>
                        <Route path="/dashboard" element={<ViewDashboard />} />
                        <Route path="/orders" element={<ViewOrders />} />
                        <Route path="/reports/sales" element={<ViewSalesReports />} />
                        <Route path="/reports/traffic" element={<ViewTrafficReports />} />
                        <Route path="/integrations" element={<ViewIntegrations />} />
                        <Route path="/department/college-of-nursing" element={<ViewCollegeOfNursing />} />
                        <Route path="/department/college-of-engineering" element={<ViewCollegeOfEngineering />} />
                        <Route path="*" element={<DemoPageContent title="Page Not Found" />} />
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

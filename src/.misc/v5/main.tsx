import React from 'react';
import ReactDOM from 'react-dom/client';
import * as ReactRouterDOM from "react-router-dom";
import * as MUI from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider, Navigation } from '@toolpad/core';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import * as MUIIcon from "@mui/icons-material";
import { LIGHT_THEME, DARK_THEME } from "./template-theme.mts";
import ViewCollegeOfNursing from './view/ViewCollegeOfNursing';
import ViewCollegeOfEngineering from "../../main/innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/index.tsx";

//REM: Navigation configuration
const NAVIGATION: Navigation = [
    { kind: 'header', title: 'Academic' },
    { segment: 'library', title: 'Library', icon: <MUIIcon.LocalLibrarySharp /> },
    {
        segment: 'department',
        title: 'Department',
        icon: <MUIIcon.SchoolSharp />,
        children: [
            { segment: 'college-of-nursing', title: 'College of Nursing', icon: <MUIIcon.Description /> },
            { segment: 'college-of-engineering', title: 'College of Engineering', icon: <MUIIcon.Description /> },
        ],
    },
    { kind: 'divider' },
    { kind: 'header', title: 'Administrative' },
    {
        segment: 'office-of-student-affairs',
        title: 'OSA',
        icon: <MUIIcon.BarChart />,
        children: [
            { segment: 'news', title: 'News', icon: <MUIIcon.Description /> },
            { segment: 'event', title: 'Event', icon: <MUIIcon.Description /> },
        ],
    },
    { segment: 'integrations', title: 'Integrations', icon: <MUIIcon.Layers /> },
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


//REM: Mapping for titles
const PAGE_TITLES: Record<string, string> = {
    '/': 'Home',
    '/library': 'Library',
    '/office-of-student-affairs/news': 'OSA News',
    '/office-of-student-affairs/event': 'OSA Event',
    '/department/college-of-nursing': 'College of Nursing',
    '/department/college-of-engineering': 'College of Engineering',
    '/integrations': 'Integrations',
};

//REM: Page Content Component
class PageContent extends React.Component<{ pathname: string }> {
    render() {
        const { pathname } = this.props;

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
                ContentComponent = () => <ViewCollegeOfNursing />;
                break;
            case '/department/college-of-engineering':
                ContentComponent = ViewCollegeOfEngineering;
                break;
            case '/integrations':
                ContentComponent = () => <>Integrations</>;
                break;
            case '/department/college-of-engineering/computer-engineering':
            case '/department/college-of-engineering/geodetic-engineering':
            default:
                ContentComponent = () => <Typography>Page not found</Typography>;
        }

        return (
            <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ width: `100%`, textAlign: `start`, justifyContent: `center` }}>
                    &gt; Page content for {pathname}
                </Typography>
                <ContentComponent />
            </Box>
        );
    }
}

//REM: Main Component - Class-Based Implementation
class SimpleDashboardLayout extends React.Component {
    state = {
        pathname: window.location.pathname || '/',
    };

    componentDidMount() {
        this.updateDocumentTitle(this.state.pathname);

        //REM: Set up listener for popstate events (back/forward navigation)
        window.addEventListener('popstate', this.handlePopState);
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.pathname !== this.state.pathname) {
            this.updateDocumentTitle(this.state.pathname);
        }
    }

    componentWillUnmount() {
        //REM: Clean up popstate listener when component unmounts
        window.removeEventListener('popstate', this.handlePopState);
    }

    handlePopState = () => {
        this.setState({ pathname: window.location.pathname });
    };

    updateDocumentTitle(pathname: string) {
        const title = PAGE_TITLES[pathname] || 'Page not found';
        document.title = `${title} - Campus App`;
    }

    navigate = (path: string | URL) => {
        window.history.pushState(null, '', path);
        this.setState({ pathname: path });
    };

    render() {
        const { pathname } = this.state;
        const router = {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: this.navigate,
        };

        return (
            <ReactRouterDOM.BrowserRouter>
                <AppProvider
                    navigation={NAVIGATION}
                    branding={{ logo: `[LOGO]`, title: `CAMPUS` }}
                    router={router}
                    theme={demoTheme}
                >
                    <DashboardLayout>
                        <PageContent pathname={pathname} />
                    </DashboardLayout>
                </AppProvider>
            </ReactRouterDOM.BrowserRouter>
        );
    }
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


import * as React from "react";
import * as Toolpad from "@toolpad/core";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";

import ROUTES_GATE, { ROUTES } from "@innovative_troublemaker/campus_information_system/component/layout/context/route.tsx";

import TOOLPAD_THEME from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme-ii.mts";

import FooterI from "@innovative_troublemaker/campus_information_system/component/FooterI.tsx";

import PageContent from "@innovative_troublemaker/campus_information_system/component/PageContent.tsx";

type AuthProvider = {
    id: string;
    name: string;
};

const NAVIGATION: Toolpad.Navigation = [
    { kind: 'header', title: 'Academic' },
    ROUTES.LIBRARY.navigation,
    ROUTES.SCHOLARSHIP.navigation,
    {
        segment: 'academic',
        title: 'Department',
        icon: <MUIIcon.SchoolSharp />,
        children: [
            ROUTES.COLLEGE_OF_ICT.navigation,
            ROUTES.COLLEGE_OF_ENGINEERING.navigation,
            ROUTES.COLLEGE_OF_NURSING.navigation,
            ROUTES.COLLEGE_OF_CRIMINOLOGY.navigation,
            ROUTES.COLLEGE_OF_EDUCATION.navigation,
        ],
    },
    { kind: 'divider' },
    { kind: 'header', title: 'Administrative' },
    ROUTES.ADMISSION.navigation,
    ROUTES.REGISTRAR.navigation,
    ROUTES.ACCOUNTING.navigation,
    ROUTES.OSA.navigation,
    ROUTES.CHAPEL.navigation,
    ROUTES.OFFICE_OF_VICE_PRESIDENT.navigation,
    ROUTES.SPORT.navigation,
    { segment: 'integrations', title: 'Integrations', icon: <MUIIcon.Layers /> },
];


export default class SimpleDashboardLayout extends React.Component {
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
        const title = ROUTES_GATE[pathname]?.navigation?.title ?? "Page Not Found";
        document.title = `${title} - Campus App`;
    }

    navigate = (path: string | URL) => {
        window.history.pushState(null, '', path);
        this.setState({ pathname: path });
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSignIn = (provider: AuthProvider) => {
        console.log(`Signing in with ${provider.name}`);
    };

    render(): React.ReactElement {
        const { pathname } = this.state;
        const router = {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: this.navigate,
        };

        return (<>

            <Toolpad.AppProvider
                navigation={NAVIGATION}
                branding={{
                    logo: `[LOGO]`,
                    title: `CAMPUS`,
                }}
                router={router}
                theme={TOOLPAD_THEME}
            >
                <Toolpad.DashboardLayout>
                    <MUI.Box sx={{ px: 2, }}>
                        {/* <ReactRouterDOM.BrowserRouter> */}
                        {/* <ReactRouterDOM.Routes> */}
                        <PageContent pathname={pathname} />
                        <FooterI />
                        {/* </ReactRouterDOM.Routes> */}
                        {/* </ReactRouterDOM.BrowserRouter> */}
                    </MUI.Box>
                </Toolpad.DashboardLayout>
            </Toolpad.AppProvider >
        </>);
    }
}
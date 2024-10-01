import * as React from "react";
import * as MUI from "@mui/material";
import {ROUTES_GATE} from "@innovative_troublemaker/campus_information_system/component/layout/context/route.tsx";

export default class PageContent extends React.Component<{ pathname: string }> {
    render() {

        const { pathname } = this.props;
        const ROUTES_GATEX = ROUTES_GATE[pathname];
        let ContentComponent: React.ComponentClass | React.FC;

        if (ROUTES_GATEX && ROUTES_GATEX.component) {
            ContentComponent = ROUTES_GATEX.component;
        }
        else {
            ContentComponent = () => <><MUI.Typography variant={`h2`}>Page Not Found!</MUI.Typography></>;
        }

        return (
            <MUI.Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <MUI.Typography sx={{ width: `100%`, textAlign: `start`, justifyContent: `center`, fontWeight: `bold` }}>
                    / {pathname.split('/').filter(Boolean).join(` > `)}
                </MUI.Typography>
                <ContentComponent />
            </MUI.Box>
        );
    }
}
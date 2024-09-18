
import * as React from "react";
import * as ReactRouterDom from "react-router-dom";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";
import * as Toolpad from "@toolpad/core";
import Footer from "../Footer";


import ContextProvider0x0004 from "@innovative_troublemaker/campus_information_system/component/layout/context/ContextProvider0x0004.tsx"

import {
    $innovative_troublemaker$campus_information_system$model
        as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";
import HeaderIII from "../HeaderIII";


import {
    TOOLPAD_THEME
} from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme.mts";

const NAVIGATION: Toolpad.Navigation = [
    {
        kind: 'header',
        title: 'Academic',
    },
    {
        segment: 'department/college-of-nursing',
        title: 'College of Nursing',
        icon: <MUIIcon.HealthAndSafety />,
    },
    {
        segment: 'department/college-of-engineering',
        title: 'College of Engineering',
        icon: <MUIIcon.Engineering />,
    },
    {
        segment: 'department/college-of-ict',
        title: 'College of ICT',
        icon: <MUIIcon.ComputerRounded />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Administrative',
    },
    {
        segment: 'administrative/scholarship',
        title: 'Scholarship',
        icon: <MUIIcon.Note />,
        children: [
            {
                segment: '1',
                title: 'News',
                icon: <MUIIcon.Newspaper />,
            },
            {
                segment: '2',
                title: 'Voucher',
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

export default class Layout0x0003
    extends React.Component<
        $model.ICommonProp,
        $model.ICommonState
    > {
    public constructor(
        props: globalThis.Readonly<$model.ICommonProp>
    ) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.headerState?.title
        };
    }
    // public render(): React.ReactElement {
    //     return (<>
    //         <ContextProvider0x0004 id={this.props.id} headerState={this.state}>
    //             <ReactRouterDom.Outlet/>
    //         </ContextProvider0x0004>
    //     </>);
    // }

    public render(): React.ReactElement {
        return (<>
            {/* <ContextProvider0x0004 id={this.props.id} headerState={this.state}> */}
                <Toolpad.AppProvider
                    // component={ReactRouterDom.NavLink}
                    // router={router}
                    theme={TOOLPAD_THEME}
                    navigation={NAVIGATION}
                    branding={
                        {
                            title: `${this.state.title}`,
                            logo: ``
                        }
                    }>
                    <Toolpad.DashboardLayout>
                        <ReactRouterDom.Outlet />
                        <Footer id={this.state.id} />
                    </Toolpad.DashboardLayout>
                </Toolpad.AppProvider>
                
            {/* </ContextProvider0x0004> */}
        </>);
    }
}
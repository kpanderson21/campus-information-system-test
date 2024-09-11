import * as React from "react";
import * as MUI from "@mui/material";
import * as ReactRouterDom from "react-router-dom";

import Header from "@innovative_troublemaker/campus_information_system/component/Header.tsx";
import Footer from "@innovative_troublemaker/campus_information_system/component/Footer.tsx";



import ContextProvider0x0003
    from "@innovative_troublemaker/campus_information_system/component/layout/context/ContextProvider0x0003.tsx";

import {
    $innovative_troublemaker$campus_information_system$model
    as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";

import HeaderIII from "@innovative_troublemaker/campus_information_system/component/HeaderIII.tsx";



export namespace $innovative_troublemaker$campus_information_system$component$layout {

    export class Layout0x0002 extends React.Component<
        $model.ICommonProp,
        {}
        // $model.ICommonState
    > {

        public constructor(
            props: globalThis.Readonly<$model.ICommonProp>
        ) {
            super(props);
            // this.init();
        }

        // private init(): void {
        //     this.state = {
        //         id: `${this.constructor.name}.IThemeState`,
        //         isMobileOpen: false,
        //         isDarkMode: false,
        //     };
        // }


        /**
         * @override React.Component
         * @returns React.JSX.Element
         */
        public render(): React.JSX.Element {
            return (<>
                <ContextProvider0x0003 id={this.props.id}>
                    <MUI.Container>
                        <HeaderIII id={this.props.id} />

                        <MUI.Divider className={`pt-[12rem]`} />
                        <ReactRouterDom.Outlet />
                        <Footer id={this.props.id} /> 
                    </MUI.Container>
                </ContextProvider0x0003>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system$component$layout.Layout0x0002;
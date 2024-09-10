import * as React from "react";
import * as MUI from "@mui/material";
import * as ReactRouterDom from "react-router-dom";

import Header from "@innovative_troublemaker/campus_information_system/component/Header.tsx";
import Footer from "@innovative_troublemaker/campus_information_system/component/Footer.tsx";

// import { IThemeState } from "@innovative_troublemaker/campus_information_system/model/theme/IThemeState.mts"

import { 
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme 
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mts";

import { 
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading 
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mts";

import {
    DARK_THEME,
    LIGHT_THEME
} from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme.mts";

import ContextProvider0x0001 from "@innovative_troublemaker/campus_information_system/component/layout/context/ContextProvider0x0001";
import ContextProvider0x0002 
    from "@innovative_troublemaker/campus_information_system/component/layout/context/ContextProvider0x0002.tsx";
import HeaderII from "@innovative_troublemaker/campus_information_system/component/HeaderII.tsx";

import 
    {
        CommonProp,
        CommonState
    }
    from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0002.tsx";
// interface IHeaderState {
//     themeState: $model$theme.IThemeState;
//     headerState: $model$heading.IHeaderState;
// }

export namespace $innovative_troublemaker$campus_information_system$component$layout {

    export class Layout0x0001 extends React.Component<
        {}, 
        CommonState
    > {

        public constructor(
            props: globalThis.Readonly<{}>
        ) {
            super(props);
            this.init();
        }

        private init(): void {
            this.state = {
                id: `${this.constructor.name}.IThemeState`,
                isMobileOpen: false,
                isDarkMode: false,
                apply: this.toggleState
            };
        }

        public componentDidMount(): void {
            const CACHE_IS_DARK_MODE: string | null
                = globalThis.localStorage.getItem(
                    this.state.id
                );
            if (CACHE_IS_DARK_MODE !== null)
                this.setState(JSON.parse(CACHE_IS_DARK_MODE));
        }

        public componentWillUnmount(): void {
        }

        public componentDidUpdate(
            prevProps: Readonly<{}>,
            prevState: Readonly<CommonState>,
            snapshot?: any
        ): void {

            if (prevState.isDarkMode !== this.state.isDarkMode) {
                globalThis.localStorage.setItem(
                    this.state.id,
                    JSON.stringify(this.state)
                );
            }
        }

        // public componentDidCatch(
        //     error: Error, 
        //     errorInfo: React.ErrorInfo
        // ): void {
        // }

        private toggleState = (): void => {
            const CACHE_IS_DARK_MODE: string | null
                = globalThis.localStorage.getItem(
                    this.state.id
                );
            if (CACHE_IS_DARK_MODE !== null)
                this.setState(JSON.parse(CACHE_IS_DARK_MODE));
            this.setState(prev => ({
                isDarkMode: !prev.isDarkMode,
                // isMobileOpen: !prev.isMobileOpen
            }));
        }

        /**
         * @override React.Component
         * @returns React.JSX.Element
         */
        public render(): React.JSX.Element {
            return (<>
                <MUI.ThemeProvider
                    theme={this.state.isDarkMode ? DARK_THEME : LIGHT_THEME}>
                    <MUI.CssBaseline />
                    <ContextProvider0x0002 
                    id={this.state.id}
                    headerState={this.state}
                    themeState={this.state}>
                        <MUI.Container>
                            <HeaderII id={this.state.id}/>

                            <MUI.Divider className={`pt-[12rem]`} />

                            <ReactRouterDom.Outlet />

                            <MUI.Button disabled={this.state.isDarkMode} 
                            variant="innovativeTroublemakerButton1">
                                btn
                            </MUI.Button>

                            <Footer id={this.state.id} />

                        </MUI.Container>
                    </ContextProvider0x0002>
                </MUI.ThemeProvider>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system$component$layout.Layout0x0001;
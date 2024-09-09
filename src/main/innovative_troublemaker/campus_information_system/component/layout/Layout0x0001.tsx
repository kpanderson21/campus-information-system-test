import * as React from "react";
import * as MUI from "@mui/material";
import * as ReactRouterDom from "react-router-dom";

import Header from "@innovative_troublemaker/campus_information_system/component/Header.tsx";
import Footer from "@innovative_troublemaker/campus_information_system/component/Footer.tsx";

// import { IThemeState } from "@innovative_troublemaker/campus_information_system/model/theme/IThemeState.mts"

import { $innovative_troublemaker$campus_information_system$model$theme as $model$theme } from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mts";

import {
    DARK_THEME,
    LIGHT_THEME
} from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme.mts";

export namespace $innovative_troublemaker$campus_information_system$component$layout {

    export class Layout0x0001 extends React.Component<{}, $model$theme.IThemeState> {

        public constructor(props: globalThis.Readonly<{}>) {
            super(props);
            this.init();
        }

        private init(): void {
            this.state = {
                id: `${this.constructor.name}.IThemeState`,
                isDarkMode: true,
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
            prevState: Readonly<$model$theme.IThemeState>,
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
            this.setState(prev => ({
                isDarkMode: !prev.isDarkMode
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
                    <MUI.Paper>
                        <Header id={this.state.id} 
                        themeState={this.state} />

                        <MUI.Typography variant="innovativeTroublemakerH1">
                            {this.state.isDarkMode ? "dark_mode" : "light_mode"}
                        </MUI.Typography>

                        <ReactRouterDom.Outlet />

                        <MUI.Button disabled={ this.state.isDarkMode } variant="innovativeTroublemakerButton1">
                            BTN
                        </MUI.Button>

                        <Footer id={this.state.id} 
                        headerState={this.state} 
                        themeState={this.state}/>

                    </MUI.Paper>
                </MUI.ThemeProvider>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system$component$layout.Layout0x0001;
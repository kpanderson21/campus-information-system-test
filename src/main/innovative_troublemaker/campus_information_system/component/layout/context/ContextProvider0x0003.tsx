
import * as React from "react";
import * as MUI from "@mui/material";
// import Util from "util";

import {
    DARK_THEME,
    LIGHT_THEME
} from "@innovative_troublemaker/campus_information_system/component/layout/theme/template-theme.mts";

import {
    $innovative_troublemaker$campus_information_system$model
        as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";

import CONTEXT_0x0003
    from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0003.tsx";

export default class ContextProvider0x0003
    extends React.Component<
        $model.ICommonProp,
        $model.ICommonState
    > {
    public constructor(
        props: globalThis.Readonly<$model.ICommonProp>
    ) {
        super(props);
        this.state = {
            id: this.props.id, //REM: [TODO, TEMP]
            isDarkMode: this.props.themeState?.isDarkMode ?? false,
            isMobileOpen: this.props.headerState?.isMobileOpen ?? false,
        };

        this.dispatch = this.dispatch.bind(this);
    }

    public componentDidMount(): void {
        const CACHE_STATE: string | null
            = globalThis.localStorage.getItem(
                this.state.id
            );
        if (CACHE_STATE !== null)
            this.setState(JSON.parse(CACHE_STATE));
    }

    public componentWillUnmount(): void {
    }

    public componentDidUpdate(
        prevProps: Readonly<{}>,
        prevState: Readonly<$model.ICommonState>,
        snapshot?: any
    ): void {
        // if (prevState.isDarkMode !== this.state.isDarkMode) {
        globalThis.localStorage.setItem(
            this.state.id,
            JSON.stringify(this.state)
        );
        // }
    }

    public toString(): string {
        return `${this.constructor.name}@${this.hashCode()}[ id='${this.state.id}' ]`;
        // return Util.format(
        //     "%s@%d[ id='%s' ]",
        //     this.constructor.name,
        //     this.hashCode(),
        //     this.state.id
        // )
    }

    public hashCode(): number {
        let hash = 17;
        hash = hash * 31 + this.state.id.hashCode();
        hash = hash * 31 + (this.state.isDarkMode ? 1 : 0);
        hash = hash * 31 + (this.state.isMobileOpen ? 1 : 0);
        return hash;
    }

    public equals(obj: ContextProvider0x0003): boolean {
        //REM: [TODO, DO_WE_NEED_TO_BE_SPECIFIC]
        return this.state === obj.state
            && this.props === obj.props;
    }

    public dispatch(
        action: globalThis.Partial<$model.ICommonState>
    ): void {
        this.setState((prev) => ({ ...prev, ...action }))
    }

    // public componentDidCatch(
    //     error: Error, 
    //     errorInfo: React.ErrorInfo
    // ): void {
    // }

    public render(): React.ReactElement {
        return (<>
            <CONTEXT_0x0003.Provider value={{
                state: this.state,
                dispatch: this.dispatch
            }}>
                <MUI.ThemeProvider
                    theme={this.state.isDarkMode ? DARK_THEME : LIGHT_THEME}>
                    <MUI.CssBaseline />
                    {this.props.children}
                </MUI.ThemeProvider>
            </CONTEXT_0x0003.Provider>
        </>);
    }

    // public readonly state: globalThis.Readonly<{ read?:string|undefined }> = {};
}
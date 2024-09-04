import * as React from "react";
import * as MUI from "@mui/material";

import { $innovative_troublemaker$campus_information_system$model$theme as $model$theme } from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mjs";

export default class Header extends React.Component<$model$theme.IThemeProp,{}> {

    public constructor( props: globalThis.Readonly<$model$theme.IThemeProp> ) {
        super( props );
        this.state = {};
    }

    public componentDidUpdate(
        prevProps: globalThis.Readonly<$model$theme.IThemeProp>
    ): void {

    }

    public render(): React.JSX.Element {
        return (<>
            {
                import.meta.env.DEV &&
                <MUI.Typography 
                bgcolor={
                    (theme) => { return theme.palette.common.black; }
                }
                sx={
                    (theme) => { return {
                        color: theme.palette.secondary.main
                    }}
                }>
                    We are in {import.meta.env.MODE} mode
                </MUI.Typography>
            }
            <MUI.Typography variant="h3"
            className={`select-none`}
            sx={{
                cursor: `pointer`,
            }}
            onClick={(e)=>{ 
                e.preventDefault(); 
                this.props.themeState?.apply(); 
            }}>
                Header... { this.props.themeState?.isDarkMode? "dark_mode":"light_mode"}
            </MUI.Typography>
        </>);
    }
}
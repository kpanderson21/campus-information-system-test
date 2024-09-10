import { IThemeState } from "./IThemeState.mts";
import * as React from "react";


export namespace $innovative_troublemaker$campus_information_system$model$theme {
    export interface IThemeProp {
        readonly id: string;
        themeState?: IThemeState;
    }

    export const CONTEXT_ITHEME_PROP: React.Context<IThemeProp>
        = React.createContext<IThemeProp>({
            id: "CONTEXT_ITHEME_PROP" //REM: [TODO, EXPLICIT]
        });
}

export type IThemeProp = 
    $innovative_troublemaker$campus_information_system$model$theme.IThemeProp;

export import ContextIThemeProp =
    $innovative_troublemaker$campus_information_system$model$theme.CONTEXT_ITHEME_PROP;
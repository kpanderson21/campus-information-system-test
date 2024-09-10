
import * as React from "react";

import {
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mts";

import {
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mts";

export interface CommonProp 
    extends $model$heading.IHeaderProp, $model$theme.IThemeProp { }

export interface CommonState 
    extends $model$heading.IHeaderState, $model$theme.IThemeState { }

const CONTEXT_0x0002: React.Context<CommonProp>
     = React.createContext<CommonProp>({
        id: "CONTEXT_0x0002"
     });

export default CONTEXT_0x0002;
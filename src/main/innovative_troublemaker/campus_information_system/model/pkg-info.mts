

import * as React from "react";

import {
    $innovative_troublemaker$campus_information_system$model$heading
    as $model$heading
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mts";

import {
    $innovative_troublemaker$campus_information_system$model$theme 
    as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mts";

import * as src_0x0001 from "./IRouteData.mts";

export namespace $innovative_troublemaker$campus_information_system$model {
    export type IHeaderProp = $model$heading.IHeaderProp;
    export type IThemeProp = $model$theme.IThemeProp;

    export type IHeaderState = $model$heading.IHeaderState;
    export type IThemeState = $model$theme.IThemeState;

    export type IRouteData = src_0x0001.IRouteData;

    export type ICommonProp 
        = IHeaderProp & IThemeProp;
    export type ICommonState
        = IHeaderState & IThemeState;
}


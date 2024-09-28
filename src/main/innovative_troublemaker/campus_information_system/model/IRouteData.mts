
import * as React from "react";
import * as Toolpad from "@toolpad/core";

type ComponentItemPrime = React.ComponentClass<any> | React.FC<any>;
type NavigationItemPrime = Toolpad.NavigationPageItem;

export interface IRouteData {
    readonly ID: string;
    path: string;
    component?: ComponentItemPrime;
    navigation: NavigationItemPrime;
}



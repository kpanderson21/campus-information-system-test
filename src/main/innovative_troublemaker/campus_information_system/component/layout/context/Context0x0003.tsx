

import * as React from "react";

import {
    $innovative_troublemaker$campus_information_system$model
    as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";


export interface IStateContextType {
    state: $model.ICommonState;
    dispatch: React.Dispatch<$model.ICommonState>;
}

const CONTEXT_0x0003
    = React.createContext<IStateContextType|undefined>(undefined);

export default CONTEXT_0x0003;

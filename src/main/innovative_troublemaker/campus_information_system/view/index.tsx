
import * as React from "react";
import * as MUI from "@mui/material";

import { 
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading 
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mjs";

import { 
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mjs";

import CONTEXT_0x0003, { IStateContextType } from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0003.tsx";



//REM: [TODO, DO_WE_NEED_NAMESPACE]
export function view_welcome(
    props: $model$heading.IHeaderProp & $model$theme.IThemeProp
): React.ReactElement<React.JSX.Element> {
    const CONTEXT: IStateContextType | undefined
        = React.useContext(CONTEXT_0x0003);
    
    return (<>
        <MUI.Typography variant="innovativeTroublemakerH1">
            Welcome Page...
            {CONTEXT?.state?.isDarkMode ? "dark_mode" : "light_mode"}
        </MUI.Typography>
        <MUI.Typography textAlign={`end`}>
            {CONTEXT?.state?.isMobileOpen ? "MMO" : "MMC"}
        </MUI.Typography>
    </>);
}

const ViewWelcome = view_welcome;
export default ViewWelcome;
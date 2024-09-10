
import * as React from "react";
import * as MUI from "@mui/material";

import { 
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading 
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mjs";

import { 
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mjs";

import CONTEXT_0x0002 from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0002.tsx";



//REM: [TODO, DO_WE_NEED_NAMESPACE]
export function view_welcome(
    props: $model$heading.IHeaderProp & $model$theme.IThemeProp
): React.ReactElement<React.JSX.Element> {
    const CONTEXT = React.useContext(CONTEXT_0x0002);
    
    return (<>
        <MUI.Typography variant="innovativeTroublemakerH1">
            Welcome Page...
            {CONTEXT.themeState?.isDarkMode ? "dark_mode" : "light_mode"}<br/>
        </MUI.Typography>
    </>);
}

const ViewWelcome = view_welcome;
export default ViewWelcome;
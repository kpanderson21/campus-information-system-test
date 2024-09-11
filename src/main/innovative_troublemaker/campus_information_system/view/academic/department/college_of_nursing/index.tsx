
import * as React from "react";
import * as MUI from "@mui/material";
import CONTEXT_0x0003, { IStateContextType } from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0003.tsx";

export default function CollegeOfNursing(): React.ReactElement {

    const CONTEXT: IStateContextType | undefined 
        = React.useContext(CONTEXT_0x0003);

    return (<>
        <MUI.Typography variant="h2">
            College of Nursing
        </MUI.Typography>
        <MUI.Typography>
            {CONTEXT?.state.isDarkMode ? "dark_mode" : "light_mode"}
        </MUI.Typography>
        <MUI.Typography textAlign={`end`}>
            {CONTEXT?.state?.isMobileOpen ? "MMO" : "MMC"}
        </MUI.Typography>
    </>);
}
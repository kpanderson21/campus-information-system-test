
import * as React from "react";
import * as MUI from "@mui/material";

import BG_HERO_001
    from "@innovative_troublemaker/campus_information_system/resource/img/department/college_of_engineering/bg-hero-001.jpg";
import CONTEXT_0x0003, { IStateContextType } from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0003.tsx";


export default function CollegeOfNursing(): React.ReactElement {

    const CONTEXT: IStateContextType | undefined
        = React.useContext(CONTEXT_0x0003);

    return (<>
            <MUI.Box
                // sx={{
                //     textAlign: 'center',
                //     color: 'white',
                //     height: '400px', // Adjust height as needed
                //     display: 'flex',
                //     alignItems: `end`,
                //     justifyContent: 'flex-start',
                //     backgroundImage: `url(${BG_HERO_001})`, // URL to the image or local path
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
            >
                <MUI.Typography variant="h2"
                className={`text-lime-500`}>
                    College of Nursing
                </MUI.Typography>
            </MUI.Box>
    </>);
}
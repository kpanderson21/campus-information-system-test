
import * as React from "react";
import * as MUI from "@mui/material";

const ViewCollegeOfEducation: React.FC = () => {

    return (<>
        <MUI.Typography variant={`h2`} className="text-lime-500">
            College of Education!!! 123
        </MUI.Typography>

        <MUI.Stack className={`w-full`}>
            <MUI.Paper className={`bg-red-500 w-[100%]`}>
                <MUI.Typography variant="body1">
                    Education... 
                </MUI.Typography>
            </MUI.Paper>
        </MUI.Stack>
    </>);
}

export default ViewCollegeOfEducation;
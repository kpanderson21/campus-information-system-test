
import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";
import * as MUI from "@mui/material";

const FooterI: React.FC = () => {

    return (<>
        <MUI.Stack spacing={2}>
                <MUI.Typography variant="h4" gutterBottom>
                    Contact Us
                </MUI.Typography>
                <MUI.Typography variant="body1">
                    For more information, feel free to contact us at:
                    <br />
                    Email: <a href="mailto:info@collegeofengineering.edu">info.collegeofengineering@sjp2cd.edu.ph</a>
                    <br />
                    Phone: (82) 123-1234 | +63 912-1234-123
                </MUI.Typography>
            </MUI.Stack>
    </>);
}

export default FooterI;
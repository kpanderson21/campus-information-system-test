
import * as React from "react";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";

const ComponentEvent: React.FC = () => {
    return (<>
        <MUI.Stack spacing={2}>
            <MUI.Typography variant="h4" gutterBottom>
                Upcoming Events
            </MUI.Typography>
            <MUI.Typography variant="body1">
                Stay tuned for exciting events and workshops happening at the College of Engineering. Check back regularly for updates on seminars, guest lectures, and hands-on workshops.
            </MUI.Typography>
            <MUI.Stack>
                <MUI.Card >
                    <MUI.CardContent>
                        <MUI.CardMedia>Content</MUI.CardMedia>
                    </MUI.CardContent>
                </MUI.Card>
                <MUI.Card >
                    <MUI.CardContent>
                        <MUI.CardMedia>Content</MUI.CardMedia>
                    </MUI.CardContent>
                </MUI.Card>
            </MUI.Stack>
        </MUI.Stack>
    </>);
}

export default ComponentEvent;
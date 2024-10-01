

import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";
import * as MUI from "@mui/material";
import * as MUIColor from "@mui/material/colors";


const ViewHome: React.FC = () => {
    return (<>
        <MUI.Stack spacing={4} sx={{ mt: 4 }} className="relative w-[100%]">
            {/* Overview Section */}
            <MUI.Stack spacing={2}>
                <MUI.Typography variant="h4" gutterBottom>
                    Overview
                </MUI.Typography>
                <MUI.Typography variant="body1">
                    The College of Engineering offers a variety of programs and degrees in engineering fields. Our campus is equipped with state-of-the-art facilities and resources to ensure that students receive the best education and hands-on experience.
                </MUI.Typography>
            </MUI.Stack>
            <div style={{ textAlign: 'center' }}>
                <MUI.Typography variant="h4" gutterBottom>
                    Engineering Departments
                </MUI.Typography>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '16px', // Adjust the spacing between cards as needed
                    padding: '16px' // Optional padding around the container
                }}>
                    <MUI.Card sx={{ maxWidth: 345 }}>
                        <MUI.CardContent>
                            <MUI.Typography variant="h5">
                                Computer Engineering
                            </MUI.Typography>
                            <MUI.Typography variant="body2">
                                Focuses on the design and development of computer systems and software.
                            </MUI.Typography>
                        </MUI.CardContent>
                        <MUI.CardActions>
                            <MUI.Button size="small" component={ReactRouterDOM.NavLink} to="/academic/department/college-of-engineering/computer-engineering"
                                variant="innovativeTroublemakerButton1">
                                Learn More
                            </MUI.Button>
                        </MUI.CardActions>
                    </MUI.Card>
                    <MUI.Card sx={{ maxWidth: 345 }}>
                        <MUI.CardContent>
                            <MUI.Typography variant="h5">
                                Geodetic Engineering
                            </MUI.Typography>
                            <MUI.Typography variant="body2">
                                Specializes in the science and technology of measuring and understanding Earth's shape and position.
                            </MUI.Typography>
                        </MUI.CardContent>
                        <MUI.CardActions>
                            <MUI.Button size="small" component={ReactRouterDOM.NavLink} to="/academic/department/college-of-engineering/geodetic-engineering"
                                variant="innovativeTroublemakerButton1">
                                Learn More
                            </MUI.Button>
                        </MUI.CardActions>
                    </MUI.Card>
                    {/* Add more department cards as needed */}
                </div>
            </div>
            <MUI.Stack sx={{ }}>
                <MUI.Typography variant="body1" className={`text-start p-2`}>
                    Hi there
                </MUI.Typography>
            </MUI.Stack>

            <MUI.Stack spacing={2}>
                <MUI.Typography variant="h4" gutterBottom>
                    Upcoming Events
                </MUI.Typography>
                <MUI.Typography variant="body1">
                    Stay tuned for exciting events and workshops happening at the College of Engineering. Check back regularly for updates on seminars, guest lectures, and hands-on workshops.
                </MUI.Typography>
            </MUI.Stack>

        </MUI.Stack>
    </>);
}


export default ViewHome;
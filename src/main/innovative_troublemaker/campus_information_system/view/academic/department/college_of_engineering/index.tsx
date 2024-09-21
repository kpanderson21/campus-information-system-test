import * as React from "react";
import { Container, Typography, Stack, Button, Card, CardContent, CardActions } from "@mui/material";
import * as MUI from "@mui/material";
import { NavLink } from "react-router-dom";
import imgBgHero001 from "@innovative_troublemaker/campus_information_system/resource/img/department/college_of_engineering/bg-hero-001.jpg";


const HomePage: React.FC = () => {
    return (<>
        {/* Hero Section */}
        <MUI.Stack className="hero-section relative"
            style={{ backgroundImage: `url(${imgBgHero001})`, width: "100%", height: "25rem", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <Typography variant={`h2`}
            className={`absolute left-[1.5rem] bottom-[1.5rem] text-[5rem] font-semibold text-orange-500`} 
            align="center" 
            sx={{}}>
                Welcome to the College of Engineering
            </Typography>
        </MUI.Stack>
        <Container maxWidth="lg" className="relative">
            <Stack spacing={4} sx={{ mt: 4 }} className="relative w-[100%]">

                {/* Overview Section */}
                <Stack spacing={2}>
                    <Typography variant="h4" gutterBottom>
                        Overview
                    </Typography>
                    <Typography variant="body1">
                        The College of Engineering offers a variety of programs and degrees in engineering fields. Our campus is equipped with state-of-the-art facilities and resources to ensure that students receive the best education and hands-on experience.
                    </Typography>
                </Stack>

                {/* Departments Section */}
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Engineering Departments
                    </Typography>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '16px', // Adjust the spacing between cards as needed
                        padding: '16px' // Optional padding around the container
                    }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h5">
                                    Computer Engineering
                                </Typography>
                                <Typography variant="body2">
                                    Focuses on the design and development of computer systems and software.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={NavLink} to="/department/college-of-engineering/computer-engineering"
                                    variant="innovativeTroublemakerButton1">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h5">
                                    Geodetic Engineering
                                </Typography>
                                <Typography variant="body2">
                                    Specializes in the science and technology of measuring and understanding Earth's shape and position.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={NavLink} to="/department/college-of-engineering/geodetic-engineering"
                                    variant="innovativeTroublemakerButton1">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        {/* Add more department cards as needed */}
                    </div>
                </div>

                {/* Events Section */}
                <Stack spacing={2}>
                    <Typography variant="h4" gutterBottom>
                        Upcoming Events
                    </Typography>
                    <Typography variant="body1">
                        Stay tuned for exciting events and workshops happening at the College of Engineering. Check back regularly for updates on seminars, guest lectures, and hands-on workshops.
                    </Typography>
                </Stack>

                {/* Contact Section */}
                <Stack spacing={2}>
                    <Typography variant="h4" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1">
                        For more information, feel free to contact us at:
                        <br />
                        Email: <a href="mailto:info@collegeofengineering.edu">info.collegeofengineering@sjp2cd.edu.ph</a>
                        <br />
                        Phone: (82) 123-1234 | +63 912-1234-123
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    </>);
};

export default HomePage;



import * as React from "react";
import * as MUI from "@mui/material";
import * as ReactRouterDOM from "react-router-dom";

import FooterI from "@innovative_troublemaker/campus_information_system/component/FooterI.tsx";

import imgBgHero001 from "@innovative_troublemaker/campus_information_system/resource/img/department/college_of_engineering/bg-hero-001.jpg";


const Layout0x0001: React.FC = () => {

    // const location = ReactRouterDOM.useLocation();

    // React.useEffect(() => {
    //     console.log(">>> Pathname changed:", location.pathname);
    // }, [location.pathname]);

    return (<>

        <MUI.Stack className="hero-section relative"
            style={{ backgroundImage: `url(${imgBgHero001})`, width: "100%", height: "25rem", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <MUI.Typography variant={`h2`}
                className={`absolute left-[1.5rem] bottom-[1.5rem] text-[5rem] font-semibold text-orange-500`}
                align="center"
                sx={{}}>
                Welcome to the College of Engineering
            </MUI.Typography>
        </MUI.Stack>
        <MUI.Container maxWidth="lg" className="relative">
            <ReactRouterDOM.Outlet />
            {/* <FooterI /> */}
        </MUI.Container>
    </>)
}

export default Layout0x0001;
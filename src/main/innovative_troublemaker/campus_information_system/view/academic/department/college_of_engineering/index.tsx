import * as React from "react";
import * as MUI from "@mui/material";
import * as ReactRouterDOM from "react-router-dom";

import Layout0x0001 from "./layout/layout0x0001.tsx";
import ViewHome from "./home.tsx";
import { ROUTES } from "@innovative_troublemaker/campus_information_system/component/layout/context/route.tsx";

const ViewCollegeOfEngineering: React.FC = () => {
    
    return (<>
        <ReactRouterDOM.BrowserRouter>
            <MUI.Typography className={`w-full`} variant={`innovativeTroublemakerWarning`}>[Warning!] bugs found</MUI.Typography>
            <ReactRouterDOM.Routes>
                <ReactRouterDOM.Route path={ROUTES.COLLEGE_OF_ENGINEERING.path} element={<Layout0x0001 />}>
                    <ReactRouterDOM.Route index element={<ViewHome />} />
                    <ReactRouterDOM.Route path={ROUTES.COLLEGE_OF_COMPUTER_ENGINEERING.path} element={
                        ROUTES.COLLEGE_OF_COMPUTER_ENGINEERING.component && <ROUTES.COLLEGE_OF_COMPUTER_ENGINEERING.component />
                    } />
                    <ReactRouterDOM.Route path={ROUTES.COLLEGE_OF_GEODETIC_ENGINEERING.path} element={
                        ROUTES.COLLEGE_OF_GEODETIC_ENGINEERING.component && <ROUTES.COLLEGE_OF_GEODETIC_ENGINEERING.component />
                    } />
                    <ReactRouterDOM.Route path={`*`} element={<><MUI.Typography>Page not found!</MUI.Typography></>} />
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Routes>
        </ReactRouterDOM.BrowserRouter>
    </>);
};

export default ViewCollegeOfEngineering;

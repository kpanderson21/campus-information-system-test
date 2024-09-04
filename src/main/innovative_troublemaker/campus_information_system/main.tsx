

import * as React from "react";
import * as ReactDom from "react-dom/client";
import * as MUI from "@mui/material";

import "@innovative_troublemaker/campus_information_system/resource/css/main.css";

import App from "@innovative_troublemaker/campus_information_system/App.tsx";

ReactDom.createRoot( document.getElementById(`root`)! ).render(
    <React.StrictMode>
        <MUI.StyledEngineProvider injectFirst>
            <App id={`App`} />
        </MUI.StyledEngineProvider>
    </React.StrictMode>
);
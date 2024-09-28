import React from 'react';
import ReactDOM from 'react-dom/client';
import * as MUI from '@mui/material';

import SimpleDashboardLayout from "@innovative_troublemaker/campus_information_system/component/layout/SimpleDashboardLayout.tsx";

import "@innovative_troublemaker/campus_information_system/resource/css/main.css";

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <MUI.StyledEngineProvider injectFirst>
                <SimpleDashboardLayout />
            </MUI.StyledEngineProvider>
        </React.StrictMode>
    );
}

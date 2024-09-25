import React from 'react'; // Import React
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProviderx } from './AppProvider';
import * as MUI from '@mui/material';
import * as Toolpad from '@toolpad/core';
import { APP_CONFIG } from './config';

const App = () => {
  return (
    <AppProviderx>
      <Toolpad.DashboardLayout>
        <Router>
          <Routes>
            <Route path={'/'} element={<>what</>} />
            {APP_CONFIG.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
          <h1>hi...</h1>
        </Router>
      </Toolpad.DashboardLayout>
    </AppProviderx>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MUI.StyledEngineProvider injectFirst>
      <App />
    </MUI.StyledEngineProvider>
  </React.StrictMode>
);
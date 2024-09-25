import React from 'react';
import * as Toolpad from '@toolpad/core';
import { APP_CONFIG } from './config'; // Import the unified config
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

interface AppProviderProps {
  children: React.ReactNode;
}

const branding = {
  logo: '/path/to/logo.png',
  title: 'My App',
};


export const AppProviderx = ({ children }: AppProviderProps): React.ReactElement => {
  const theme = darkTheme; // Here you can toggle between darkTheme and lightTheme

  return (
    <Toolpad.AppProvider
      navigation={APP_CONFIG.map(({ segment, title, icon }) => ({
        segment,
        title,
        icon,
      }))}
      theme={theme}
      branding={branding}
    >
      {children}
    </Toolpad.AppProvider>
  );
};

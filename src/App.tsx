import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import OuterLayout from './components/OuterLayout';
import { useAppSelector } from './app/hooks';
import { selectTheme } from './features/theme/themeSlice';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';



function App() {
  const themeFromStore = useAppSelector(selectTheme);
  useEffect(() => {

  }, [])

  return (
    <ThemeProvider theme={themeFromStore == 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <OuterLayout />
    </ThemeProvider>
    
  );
}

export default App;

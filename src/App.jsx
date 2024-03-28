import { useState } from 'react';
import HookRouter from './routes';
import ThemeProvider from './theme';
import { GlobalStyles } from '@mui/material';
import CustomGlobalStyles from './CustomGlobalStyles';
import './App.css'

function App() {
  
  return (
    <>
    <ThemeProvider>
    <GlobalStyles styles={CustomGlobalStyles} />
        <HookRouter />
    </ThemeProvider>
      
    </>
  )
}

export default App

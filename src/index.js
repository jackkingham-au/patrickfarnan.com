import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import './app.css';

render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline /> 
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
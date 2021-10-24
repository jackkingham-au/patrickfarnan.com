import React from 'react';
import { CircularProgress, Box, Backdrop } from '@mui/material';

const LoadingScreen = () => {
    return (
        <Backdrop open sx={{color: '#fff'}}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default LoadingScreen;

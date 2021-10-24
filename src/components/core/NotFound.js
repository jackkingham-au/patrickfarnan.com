import React from 'react';
import { Container, Typography } from '@mui/material';
import CustomButton from './CustomButton';

const NotFound = () => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <Typography variant="h3" children="Oops, page not found..." sx={{my: 2}} />
            <Typography children="Would you like to head back to the homepage?" sx={{my: 2}} />
            <Container>
                <CustomButton href="/">Back to Homepage</CustomButton>
            </Container>
        </Container>
    );
}

export default NotFound;

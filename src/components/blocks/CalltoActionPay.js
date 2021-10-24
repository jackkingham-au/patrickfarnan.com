import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Payment from './Payment';

const CalltoActionPay = ({block}) => {
    
    return (
        <Container sx={{py: 2}}>
            <Typography sx={{py: 2}} variant="h4" children={block.title} />
            <Typography sx={{py: 2}} children={block.text} />
            <Payment block={block.payment} />
        </Container>
    );
}

export default CalltoActionPay;

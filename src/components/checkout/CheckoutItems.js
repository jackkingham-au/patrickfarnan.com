import React from 'react';
import { Box, Typography } from '@mui/material';
import SinglePaymentLine from './SinglePaymentLine';
import Prices from './Prices';

const CheckoutItems = ({services, cartCount, totals, setSuccess}) => {

    console.log(setSuccess)

    if(!services || !totals) {
        return (
            <Box>
                <Typography variant="h4" children="Items for Purchase" sx={{my: 2}} />
                {
                    Object.keys(cartCount).map(service => <SinglePaymentLine key={service} service={service} loading />)
                }
                <Prices services={services} loading/>
                <Typography variant="body2">    
                    By proceeding with this purchase, you agree to the terms and conditions, listed <a href="#">here.</a>
                </Typography>
            </Box>
        );
    } else {
        return (
            <Box>
                <Typography variant="h4" children="Items for Purchase" sx={{my: 1}} />
                {
                    services.map(service => <SinglePaymentLine service={service} setSuccess={setSuccess} />)
                }
                <Prices services={services} totals={totals} />
                <Typography variant="body2">    
                    By proceeding with this purchase, you agree to the terms and conditions, listed <a href="#">here.</a>
                </Typography>
            </Box>
        );
    }   
}

export default CheckoutItems;

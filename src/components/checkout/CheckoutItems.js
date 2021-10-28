import React from 'react';
import { Box, Typography } from '@mui/material';
import SinglePaymentLine from './SinglePaymentLine';
import Prices from './Prices';
import Subscriptions from './Subscriptions';
import TotalPrices from './TotalPrices';

const CheckoutItems = ({services, cartCount, totals, setSuccess, subscriptions}) => {

    if(!services || !totals || !subscriptions) {
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
                {(services.length > 0) ? <Prices services={services} totals={totals} subscriptions={(subscriptions.length > 0) ? true : false} /> : ''}
                {(subscriptions.length > 0) ? <Subscriptions subscriptions={subscriptions} setSuccess={setSuccess} /> : ''} 
                {(subscriptions.length > 0 && services.length > 0) ? <TotalPrices subscriptions={subscriptions} services={services} /> : ''} 
                <Typography variant="body2">    
                    By proceeding with this purchase, you agree to the terms and conditions, listed <a href="#">here.</a>
                </Typography>
            </Box>
        );
    }   
}

export default CheckoutItems;

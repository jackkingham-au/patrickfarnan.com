import React from 'react';
import { Box, Typography } from '@mui/material';
import SinglePaymentLine from './SinglePaymentLine';
import Prices from './Prices';
import Subscriptions from './Subscriptions';
import TotalPrices from './TotalPrices';
import { uid } from 'uid';

const CheckoutItems = ({services, cartCount, totals, setSuccess, subscriptions, isUsd}) => {

    if(!services || !totals || !subscriptions) {
        return (
            <Box>
                <Typography variant="h4" children="Items for Purchase" sx={{my: 2}} />
                {
                    Object.keys(cartCount).map(service => <SinglePaymentLine key={service} service={service} loading />)
                }
                <Prices services={services} isUsd={isUsd} loading/>
                <Typography variant="body2">    
                    By proceeding with this purchase, you agree to the terms and conditions, listed <a href="/assets/Patrick Farnan Coaching - Terms & Conditions.pdf">here.</a>
                </Typography>
            </Box>
        );
    } else {
        return (
            <Box>
                <Typography variant="h4" children="Items for Purchase" sx={{my: 1}} />
                {
                    services.map(service => <SinglePaymentLine key={uid()} service={service} setSuccess={setSuccess} />)
                }
                {(services.length > 0) ? <Prices isUsd={isUsd} services={services} totals={totals} subscriptions={(subscriptions.length > 0) ? true : false} /> : ''}
                {(subscriptions.length > 0) ? <Subscriptions isUsd={isUsd} subscriptions={subscriptions} setSuccess={setSuccess} /> : ''} 
                {(subscriptions.length > 0 && services.length > 0) ? <TotalPrices isUsd={isUsd} subscriptions={subscriptions} services={services} /> : ''} 
                <Typography variant="body2">    
                    By proceeding with this purchase, you agree to the terms and conditions, listed <a href="/assets/Patrick Farnan Coaching - Terms & Conditions.pdf">here.</a>
                </Typography>
                {
                    (isUsd) 
                        ? <Typography sx={{mt: 2}} variant="body2">Please note, this payment is processed in USD currency.</Typography>
                        : ''
                }
            </Box>
        );
    }   
}

export default CheckoutItems;

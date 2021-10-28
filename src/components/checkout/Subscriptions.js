import React from 'react';
import { Divider, Box } from '@mui/material';
import SubscriptionLine from './SubscriptionLine';
import SubscriptionPrices from './SubscriptionPrices';

const Subscriptions = ({subscriptions, setSuccess}) => {

    return (
        <Box sx={{my: 2}}>
            <Divider textAlign="center">SUBSCRIPTIONS</Divider>
            {
                subscriptions.map(service => <SubscriptionLine service={service} setSuccess={setSuccess} />)
            }
            <SubscriptionPrices subscriptions={subscriptions} />
        </Box>
    );
}

export default Subscriptions;

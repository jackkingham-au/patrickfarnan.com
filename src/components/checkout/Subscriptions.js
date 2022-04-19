import React from 'react';
import { Divider, Box } from '@mui/material';
import SubscriptionLine from './SubscriptionLine';
import SubscriptionPrices from './SubscriptionPrices';
import { uid } from 'uid';

const Subscriptions = ({subscriptions, setSuccess, isUsd}) => {

    return (
        <Box sx={{my: 2}}>
            <Divider textAlign="center">SUBSCRIPTIONS</Divider>
            {
                subscriptions.map(service => <SubscriptionLine key={uid()} service={service} setSuccess={setSuccess} />)
            }
            <SubscriptionPrices subscriptions={subscriptions} isUsd={isUsd} />
        </Box>
    );
}

export default Subscriptions;

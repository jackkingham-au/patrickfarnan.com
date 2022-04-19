import React from 'react';
import { calculateTotals } from '../../helpers/prices';
import { getCart, countCart } from '../../helpers/cart';
import { Divider, Box, Typography, Stack, Alert } from '@mui/material';

const SubscriptionPrices = ({subscriptions, isUsd}) => {
    const usdSuffix = (isUsd) ? ' USD' : '';
    const cart = getCart();
    const cartCount = countCart(cart);
    const {gst, total, subtotal} = calculateTotals(subscriptions, cartCount);

    return (
        <Box sx={{my: 2}}>
            <Box sx={{p: 1}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children="SUBTOTAL" />
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`$${Number(subtotal).toFixed(2)}${usdSuffix}`} />
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children="GST (INCLUSIVE)" />
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`$${Number(gst).toFixed(2)}${usdSuffix}`} />
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children="TOTAL" />
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`$${Number(total).toFixed(2)}${usdSuffix}`} />
                </Stack>
                <Alert severity="info" sx={{my: 1}}>This total accounts for your accumulated subscriptions. Your subscriptions will be charged individually, within 24hrs from the time they start.</Alert>
            </Box>
            <Divider />
        </Box>
    );
}

export default SubscriptionPrices;

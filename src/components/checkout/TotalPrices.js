import React from 'react';
import { calculateTotals } from '../../helpers/prices';
import { getCart, countCart } from '../../helpers/cart';
import { Divider, Box, Typography, Stack, Alert } from '@mui/material';

const TotalPrices = ({subscriptions, services, isUsd}) => {
    const cart = getCart();
    const cartCount = countCart(cart);
    const {gst, total, subtotal} = calculateTotals([...subscriptions, ...services], cartCount);
    const usdSuffix = (isUsd) ? ' USD' : '';

    return (
        <Box sx={{my: 2}}>
            <Divider>ABSOLUTE TOTAL</Divider>
            <Box sx={{p: 1}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6" sx={{fontWeight: 700}} children="SUBTOTAL" />
                    <Typography variant="h6" sx={{fontWeight: 700}} children={`$${Number(subtotal).toFixed(2)}${usdSuffix}`} />
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6" sx={{fontWeight: 700}} children="GST (INCLUSIVE)" />
                    <Typography variant="h6" sx={{fontWeight: 700}} children={`$${Number(gst).toFixed(2)}${usdSuffix}`} />
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6" sx={{fontWeight: 700}} children="TOTAL" />
                    <Typography variant="h6" sx={{fontWeight: 700}} children={`$${Number(total).toFixed(2)}${usdSuffix}`} />
                </Stack>
                <Alert severity="info" sx={{my: 1}}>This total accounts for ALL services you are purchasing, both now and later (subscriptions).</Alert>
            </Box>
            <Divider />
        </Box>
    );
}

export default TotalPrices;

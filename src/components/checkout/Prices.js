import React from 'react';
import { Divider, Box, Typography, Stack, Skeleton } from '@mui/material';

const Prices = ({totals, loading, subscriptions, isUsd}) => {

    const usdSuffix = (isUsd) ? ' USD' : '';

    if(loading) {
        return (
            <Box sx={{my: 2}}>
                <Divider />
                <Box sx={{p: 1}}>
                    <Stack direction="row" justifyContent="space-between">
                        <Skeleton width={120} />
                        <Skeleton width={30} />
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Skeleton width={120} />
                        <Skeleton width={30} />
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Skeleton width={120} />
                        <Skeleton width={30} />
                    </Stack>
                </Box>
                <Divider />
            </Box>
        );
    } else {
        const {total, gst, subtotal} = totals;

        return (
            <Box sx={{my: 2}}>
                <Divider>{(subscriptions) ? 'TO BE CHARGED NOW' : ''}</Divider>
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
                </Box>
                <Divider />
            </Box>
        );
    }
}

export default Prices;

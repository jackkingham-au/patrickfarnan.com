import React from 'react';
import { Box, Stack, Typography, Skeleton } from '@mui/material';
import { getCart, countCart } from '../../helpers/cart';

const SinglePaymentLine = ({service, loading, setSuccess}) => {
    const cartCount = countCart(getCart());
    const qty = cartCount[service._id];
    const {name, description, success} = service;

    if(success !== 'https://patrickfarnan.com/thank-you' && !loading) {
        setSuccess(success);
    } 

    if(loading || !service) {
        return (
            <Box sx={{px: 1}}>
                <Stack direction="row" justifyContent="space-between">
                    <Skeleton width={150} />
                    <Skeleton width={30} />
                </Stack>
            </Box>
        );
    } else if(service.price.discounted) {
        const price = Number(service.price.price * qty).toFixed(2);
        const discountedPrice = Number(service.price.discountedPrice * qty).toFixed(2);

        return (
            <Box sx={{px: 1}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`${name} x${qty}`} />
                    <Stack direction="row">
                        <Typography variant="subtitle1" children={`$${price}`} sx={{textDecoration: 'line-through', fontWeight: 700, mr: 1}} />
                        <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`$${discountedPrice}`} />
                    </Stack >
                </Stack>
                <Typography variant="body2" children={description} sx={{m: 1}} />
            </Box>
        );
    } else {
        const price = Number(service.price.price * qty).toFixed(2);

        return (
            <Box sx={{px: 1}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`${name} x${qty}`} />
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`$${price}`} />
                </Stack>
                <Typography variant="body2" children={description} sx={{m: 1}} />
            </Box>
        );
    }
}

export default SinglePaymentLine;

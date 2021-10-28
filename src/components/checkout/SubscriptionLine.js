import React from 'react';
import { Box, Stack, Typography, Divider } from '@mui/material';
import { getCart, countCart } from '../../helpers/cart';
import { calculateTimes } from '../../helpers/general';

const SubscriptionLine = ({service, loading, setSuccess}) => {
    const cartCount = countCart(getCart());
    const qty = 1;
    const {name, description, success} = service;
    const {start, end, freq} = calculateTimes(service);

    if(success !== 'https://patrickfarnan.com/thank-you' && !loading) {
        setSuccess(success);
    } 

    if(service.price.discounted) {
        const price = Number(service.price.price * qty).toFixed(2);
        const discountedPrice = Number(service.price.discountedPrice * qty).toFixed(2);

        return (
            <Box sx={{px: 1}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`${name}`} />
                    <Stack direction="row">
                        <Typography variant="subtitle1" children={`$${price}`} sx={{textDecoration: 'line-through', fontWeight: 700, mr: 1}} />
                        <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`$${discountedPrice}`} />
                    </Stack >
                </Stack>
                <Stack>
                    <Typography variant="subtitle2" children={`Starting - ${start}`} />
                    <Typography variant="subtitle2" children={`Finishing - ${end}`} />
                    <Typography variant="subtitle2" children={`Paying - ${freq}`} />
                </Stack>
                <Typography variant="body2" children={description} sx={{m: 1}} />
            </Box>
        );
    } else {
        const price = Number(service.price.price * qty).toFixed(2);

        return (
            <Box sx={{px: 1}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`${name}`} />
                    <Typography variant="subtitle1" sx={{fontWeight: 700}} children={`$${price}`} />
                </Stack>
                <Stack>
                    <Typography variant="subtitle2" children={`Starting - ${start}`} />
                    <Typography variant="subtitle2" children={`Finishing - ${end}`} />
                    <Typography variant="subtitle2" children={`Paying - ${freq}`} />
                </Stack>
                <Typography variant="body2" children={description} sx={{m: 1}} />
            </Box>
        );
    }
}

export default SubscriptionLine;

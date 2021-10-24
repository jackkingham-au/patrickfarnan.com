import React from 'react';
import CustomButton from '../core/CustomButton';
import { Typography, Box } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { clearCart } from '../../helpers/cart';

const ClearCart = () => {
    return (
        <Box sx={{py: 2}}>
            <Typography sx={{mb: 2}} variant="body2" children="Got items in the checkout you don't want to purchase? Clear the checkout to start over." />
            <CustomButton size="small" onClick={clearCart} icon={<RemoveShoppingCartIcon />} secondary fullWidth>
                Clear Cart
            </CustomButton>
        </Box>
    );
}

export default ClearCart;

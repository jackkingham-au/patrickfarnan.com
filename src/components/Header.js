import React from 'react';
import { Box, Stack, Link } from '@mui/material';    
import Image from './core/Image';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
    return (
        <Box component="header" sx={{position: 'relative',bgcolor: 'secondary.main', alignItems: 'center', py: 1, px: 2, display: 'flex', zIndex: 1100, justifyContent: 'space-between'}}>
            <Image type="logo" src="/assets/patrick-farnan-logo.jpg" alt="Patrick Farnan Logo" styles={{height: '64px', width: 'auto'}} />
            <Stack direction="row" sx={{display: {xs: 'none', sm: 'flex'}}}>
                <PhoneIcon sx={{color: 'primary.main', mr: 1}} />
                <Link href="tel:+61400813844" children="(+61) 400 813 844" underline="none" variant="body1" sx={{color: 'common.white'}} />
            </Stack>
        </Box>            
    );
}

export default Header;

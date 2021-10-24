import { Button, Box } from '@mui/material';
import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { styled } from '@mui/system';

const Custom = styled(Button)({
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#fff',
});

const CustomButton = ({submit, size, children, loading, href, fullWidth, onClick, icon, secondary, newTab}) => {

    return (
        <Box sx={{textAlign: 'center'}}>
            <Custom 
                rel="noopener noreferrer"
                target={(newTab) ? '_blank' : '_self'}
                color={(secondary) ? 'secondary' : 'primary' }
                onClick={onClick}
                startIcon={(icon) ? icon : <DoubleArrowIcon />}
                href={(href) ? href : ''}
                fullWidth={(fullWidth) ? true : false}
                size={size}
                variant="contained"
                type={(submit) ? 'submit' : 'button'}
                disabled={(loading) ? true : false}
                children={(loading) ? 'Loading...' : children}
            ></Custom>
        </Box>
    );
}

export default CustomButton;

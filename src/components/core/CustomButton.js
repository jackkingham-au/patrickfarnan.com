import { Button } from '@mui/material';
import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { styled } from '@mui/system';

const Custom = styled(Button)({
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#fff',
});

const CustomButton = ({submit, size, children, loading}) => {

    return (
        <Custom 
            startIcon={<DoubleArrowIcon />}
            fullWidth
            size={size}
            variant="contained"
            type={(submit) ? 'submit' : 'button'}
            disabled={(loading) ? true : false}
            children={(loading) ? 'Loading...' : children}
        ></Custom>
    );
}

export default CustomButton;

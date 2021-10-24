import React from 'react';
import { Typography, Container } from '@mui/material';

const Text = ({block}) => {
    const highlight = block.highlightText;

    return (
        <Container sx={{py: 2}}>
            <Typography children={block.content} align={block.align} variant={(block.type) ? block.type : 'body1'} sx={{color: (highlight) ? 'primary.main' : '', fontWeight: (highlight) ? 700 : 'normal'}} />              
        </Container>
    );
}

export default Text;

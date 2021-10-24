import React from 'react';
import Image from '../core/Image';
import { Box, Typography } from '@mui/material';
import { urlFor } from '../../helpers/sanity';

const Hero = ({block, index}) => {
    return (
        <Box sx={{mb: 2, mt: (index === 0) ? 0 : 2, position: 'relative'}}>
            <Image src={urlFor(block.image.asset._ref)}  type={(index === 0) ? 'hero' : ''} />
            {(block.textOverImage) ? <Typography variant="h2" children={block.textOverImage} color="common.white" sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} /> : ''}
        </Box>
    );
}

export default Hero;

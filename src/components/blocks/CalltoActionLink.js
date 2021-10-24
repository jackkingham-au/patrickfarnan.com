import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CustomButton from '../core/CustomButton';
import Image from '../core/Image';
import { urlFor } from '../../helpers/sanity';

const CalltoActionLink = ({block}) => {
    const setImgSize = size => {
        switch(size) {
            case 'large':
                return 100/100;
            case 'medium':
                return 75/100;
            case 'small':
                return 50/100;
        }
    }
    
    if(block.image.image) {
        const imgSize = setImgSize(block.image.size);
        
        return (
            <Container sx={{py: 2}}>
                <Box>
                    <Image src={urlFor(block.image.image.asset._ref)} styles={{width: imgSize}} />
                </Box>
                <Typography sx={{py: 2}} variant="h4" children={block.title} />
                <Typography sx={{py: 2}} children={block.text} />
                <CustomButton newTab={(block.openInNewTab) ? true : false} href={block.link} fullWidth size={block.button.size} children={block.button.text} />
            </Container>
        );
    } else {
        return (
            <Container sx={{py: 2}}>
                <Typography sx={{py: 2}} variant="h4" children={block.title} />
                <Typography sx={{py: 2}} children={block.text} />
                <CustomButton newTab={(block.openInNewTab) ? true : false} href={block.link} fullWidth size={block.button.size} children={block.button.text} />
            </Container>
        );
    }
}

export default CalltoActionLink;

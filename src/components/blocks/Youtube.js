import React from 'react';
import { srcUrl } from '../../helpers/general';
import { Container, Box } from '@mui/material';

const videoStyles = ({
    container: {
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
    },
    iframe: {   
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
});

const Youtube = ({block, index}) => {

    if(index === 0) { // Means Item Is Hero
        return (
            <Box sx={{bgcolor: '#212121'}}>
                <Container>
                    <Box sx={{...videoStyles.container, mb: 2}}>
                        <iframe src={srcUrl(block.url, (block.autoplay) ? '&autoplay=1&mute=1' : '')} style={videoStyles.iframe} frameBorder="0" allowFullScreen></iframe>
                    </Box>
                </Container>
            </Box>
        );
    } else {
        return (
            <Container>
                <Box sx={{...videoStyles.container, my: 2}}>
                    <iframe src={srcUrl(block.url, (block.autoplay) ? '&autoplay=1&mute=1' : '')} style={videoStyles.iframe} frameBorder="0" allowFullScreen></iframe>
                </Box>
            </Container>
        );
    }

    
}

export default Youtube;

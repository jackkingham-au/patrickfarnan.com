// Generate Any Variation of Image on the Website
import React from 'react';
import { styled } from '@mui/system';

const Logo = styled('img')({
    maxWidth: 250,
    width: '100%',
    height: 'auto',
});

const Hero = styled('img')({
    width: '100%',
    height: 'calc(100vh - 63.81px)',
    filter: 'brightness(80%)',
    objectFit: 'cover',
});

const Default = styled('img')({
    width: '100%',
    height: 'auto',
    display: 'block',
});

const Image = ({type, src, alt, styles}) => {

    switch(type) {
        case 'logo':
            return <Logo src={src} alt={alt} sx={styles} />
        case 'hero':
            return <Hero src={src} alt={alt} sx={styles} />
        default:
            return <Default src={src} alt={alt} sx={styles} />
    }
}

export default Image;

import React from 'react';
import { Box, Typography, Grid, Container, Stack } from '@mui/material';
import Image from '../core/Image';

const About = () => {
    return (
        <Container sx={{py: 2}}>
            <Box>
                <Typography variant="h3" children="Who am I?" sx={{my: 2}} />
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography sx={{my: 2}}>For the last 5 years, I have been defining and shaping what it takes, what shifts the needle the most, to achieve your goals. I have explored this through courses, books & actually taking action and implenting it for myself.</Typography>
                        <Typography sx={{my: 2}}>I have competed in & trained for endurance events across Australia. These include; Multiple Full Marathon Runs, Half & Full Ironman, 100km Ultra Marathons through the Vic Surf Coast & spent an entire day, 24hrs, to cover more than 100miles so far...</Typography>
                        <Typography sx={{my: 2}}>I have also worked as an Engineer for small and large construction companies, 60+ hour weeks in Multi-Million dollar projects all over Victoria, Australia and the biggest projects in Melbourne. This has cultivated a unique ability to solve your biggest problems!</Typography>
                        <Typography sx={{my: 2}}>The biggest trait is my ability to not QUIT, you can't complete an Ironman or run 100 miles by quitting!</Typography>
                        <Typography sx={{my: 2}}>Time & Energy are the two resources that you need to make the most of when you are looking to achieve the most in work, business & endurance events. I have experienced the stress, pressure and fear of failure.</Typography>
                        <Typography sx={{my: 2}}>The strategies and systems I have gained and implemented with my clients and slef have gotten amazing results! There is no problem that doesn't have a solution, you are the only person stopping you from your potential.</Typography>
                        <Typography sx={{my: 2}} variant="h6" color="primary">I would like to share this wealth of experience & knowledge with you to crush the goals you have set for yourself, performing at an elite level!</Typography>
                        <Typography sx={{my: 2}} variant="h6" color="primary">Cause why not?</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack direction="row">
                            <Image src="/assets/patrick-farnan.jpg" alt="Patrick Farnan" styles={{borderRadius: 1, maxWidth: 80/100, mx: 'auto'}} />
                        </Stack>
                        <Typography variant="h6" sx={{m: 1}} align="center">Patrick Farnan</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>    
    );
}

export default About;

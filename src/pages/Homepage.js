import React from 'react';
import Image from '../components/core/Image';
import { Typography, Box, Container, Grid } from '@mui/material';
import MailchimpForm from '../components/MailchimpForm';

const Homepage = () => {

    return (
        <>
            <Box sx={{position: 'relative', zIndex: 10}}>
                <Image src="/assets/running.jpg" alt="Patrick Farnan Running" type="hero" />
                <Typography variant="h2" children="I Help Dissatisfied Achievers to Reset & Perform." sx={{color: 'common.white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
            </Box>
            <Container>
                <Box sx={{my: 2}}>
                    <MailchimpForm detailed title="I know you're an achiever. Want to join your community to get Mindset Performance Tips?" />
                </Box>
                <Box sx={{my: 2}}>
                    <Typography variant="h2" children="Who am I?" align="center" sx={{my: 2}} />
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
                            <Box justifyContent="center" sx={{display: 'flex'}}>
                                <Image src="/assets/patrick-farnan.jpg" alt="Patrick Farnan" styles={{borderRadius: 1, maxWidth: 80/100}} />
                            </Box>
                            <Typography variant="h6" sx={{m: 1}} align="center">Patrick Farnan</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{my: 2}}>
                    <Typography sx={{my: 2}} color="primary" variant="h4">So what now? The choice is yours...</Typography>
                    <Typography sx={{my: 2}}>The experiences and accomplishments that you experience are the results of the C's we make between the B & the D. The C's are the choices you all have from your birth (B) to your death (D).</Typography>
                    <Typography sx={{my: 2}}>Patrick Farnan coaching guides you to discover the choice's you have and the choices you must take now, so that you can experience life on your terms! So that you can make the most of NOW & look back feeling amazed at what has been achieved.</Typography>
                    <Typography>You know there is something deep down you need to change, and find the solution to.</Typography>
                </Box>
                <Box sx={{my: 2}}>
                    <MailchimpForm detailed title="By Now You Know you want Fun, Interesting & Non-Spammy Emails to Lighten Up Your Inbox..." />
                </Box>
            </Container>
        </>
    );
}

export default Homepage;

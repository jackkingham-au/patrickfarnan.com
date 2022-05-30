import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import MailchimpForm from '../components/blocks/MailchimpForm';

const Text = ({variant, color, children, align, inline, italic}) => (
    <Typography sx={{display: (inline) ? 'inline' : 'block', fontStyle: (italic) ? 'italic' : 'initial'}} align={(align) ? align : 'left'} gutterBottom variant={(variant) ? variant : 'h5'} color={(color) ? color : 'text.primary'}>{children}</Typography>
);

const Image = ({src, alt, border}) => (
    <img src={`/assets/free-training/${src}`} alt={alt} style={{maxWidth: '100%', height: 'auto', display: 'block', margin: '16px auto', border: (border) ? 'solid 4px' : 'none', borderColor: '#FF6600', borderRadius: 5, maxHeight: 500}} />
)

const Spacer = () => <Box sx={{my: 4}}></Box>

const mailchimpData = {
    title: 'Register Now',
    subtitle: ''
}

const FreeTraining = () => {
    return (
        <Container>
            <Image src="patrick-farnan-city-backdrop.jpg" alt="Patrick Farnan City Backdrop" />
            <Text color="primary" variant="h4" align="center">FREE 5 Day Training to Master Your Mindset</Text>
            <Box sx={{bgcolor: 'primary.main', p: 4, my: 2}}>
                <Text>Right now people are so busy trying to fit everything in... and they're so tired running from one commitment to another...and they feel stretched too thin.</Text>
                <Text color="common.white">Problem is, you aren't getting more time. You only get 24 hours a day.</Text>
            </Box>
            <Text>However, there is something else you can do:</Text>
            <Text variant="h4">Step Up, Level Up, Change the Game!</Text>
            <Text>Overcome your Biggest Challenge Right Now!</Text>
            <Text>This will Accelerate you forward faster!</Text>
            <Text>Your mindset helps you to <Text inline italic color="primary">Achieve More</Text></Text>
            <Text>Your mindset creates more <Text color="primary" italic inline>Time that you don't believe you have</Text></Text>
            <Text>Your mindset helps guide your life in the direction YOU want and remove time-wasters and <Text inline italic color="primary">have greater quality time with the ones around you</Text>.</Text>
            <Spacer />
            <Text align="center">When I teach my Mastery Training to my clients I help create your Elite Performance in your life so that you can master your mindset, energy, relationships and more.</Text>
            <Text align="center">Master Your Mindset FREE 5 Day Immersive Starts Sunday 19th June, and runs for 5 days concluding on Thursday 23rd June.</Text>
            <Text align="center">You won't want to miss it!!</Text>
            <Spacer />
            <Image src="patrick-farnan-formal-city.jpg" alt="Patrick Farnan Formal City" />
            <Text color="primary" variant="h4">What does it mean to be a Master of your own Mindset?</Text>
            <Text align="center">It means to be willing to go on an adventure to find answers...</Text>
            <Text align="center">...your own answers</Text>
            <Text align="center">...to choose a life that you make, rather than a life dictated by others.</Text>
            <Text>Are you ready to go on a journey for a life on your terms?</Text>
            <Text>Are you ready to master your mindset for Honest & Impactful Life Experiences?</Text>
            <Text>Then definitely join me in my FREE 5 Day Immersion to Master Your Mindset!</Text>
            <Image src="patrick-farnan-portrait.jpg" alt="Patrick Farnan Portrait" />
            <Text>Did you know that there's a <Text color="primary" inline>way you can Develop your Mindset</Text> that can give you more clarity, more focus, more energy, and more certainly immediately.</Text>
            <Text>In 5 Days, I'll show you step-by-step how to Overcome Your Biggest Challenge Right Now.</Text>
            <Image src="patrick-farnan-formal.jpg" alt="Patrick Farnan Formal" />
            <Text align="center" color="primary">Want more money? Want better relationships? Want more time? Want better health? Want a greater impact in life?</Text>
            <Text align="center" varaint="h4">It all starts by Developing & Mastering Your Mindset</Text>
            <Text>I'll walk you through the steps it takes to master your mindset through overcoming your biggest challenge right now and start living a life of true Purpose and Joy!</Text>
            <Box sx={{bgcolor: 'primary.main', my: 4, p: 4}}>
                <Text variant="h4" align="center">Join us for 3 Live Sessions Over 5 Days</Text>
                <Text variant="body1" align="center">*delivered live via Zoom</Text>
                <Text>Group Calls</Text>
                <Text>DAY 1 - Sunday June 19 @ 6:30pm AEST (Melbourne, AU)</Text>
                <Text>DAY 2 - Implementation Day</Text>
                <Text>DAY 3 - Tuesday June 21 @ 6:30pm AEST (Melbourne, AU)</Text>
                <Text>DAY 4 - Implementation Day</Text>
                <Text>DAY 5 - Thursday June 23 @ 6:30pm AEST (Melbourne, AU) - FINAL ZOOM GROUP CALL</Text>
            </Box>
            <MailchimpForm audience="training" minimal block={mailchimpData} />
            <Text align="center" variant="h3" color="primary">Past Client Testimonials</Text>
            <Image src="client-testimonials.png" alt="Patrick Farnan Client Testimonials" />
            <Text variant="h4" color="primary" align="center">HERE ARE JUST A FEW OF THE THINGS WE'LL BE COVERING IN THE TRAINING TO LEARN ABOUT YOUR PERSONAL POWER</Text>
            <Image src="lecture.png" alt="Lecture" />
            <Text variant="h4" color="primary" align="center">BUILD & STRENGTHEN YOUR MINDSET</Text>
            <Text align="center">Mindset Mastery is your ability to show up as your best self <Text color="primary" inline>consistently with strength, focus & calm.</Text>Find out exactly how to take yourself to the Next level...</Text>
            <Text align="center" variant="h4" color="primary">IMPACT THE KEY AREAS OF YOUR LIFE</Text>
            <Text align="center">You'll replace the old stories and programming with an inspiring new version that will surprise and motivate you. Suddenly, <Text inline color="primary">the impossible will seem possible!</Text></Text>
            <Text align="center" variant="h3" color="primary">YOUR ONLY LIMITATION IS YOURSELF...</Text>
            <Text align="center" variant="h3" color="primary">THIS IS THE WAY YOUR MINDSET HAS BEEN PROGRAMMED</Text>
            <Text align="center">You'll soon learn that that the only limitations are the ones you create for yourself... and we'll show you how to unleash your inner personal power to achieve more than ever before!</Text>
            <Text align="center" variant="h3" color="primary">FULL SESSIONS OF INTENSE TRAINING</Text>
            <Text>This is unlike any training you've been to before. These are FULL sessions that are PACKED with insight and are focused on helping you create an action plan for your growth.</Text>
            <Text align="center" variant="h3" color="primary">PEOPLE WILL BE SHOCKED</Text>
            <Text align="center">Your cleints, colleagues, and family will be SHOCKED at the transformation when you show up with more The Next Level of Who you Really are in every area of your life and business!</Text>
            <Text align="center" variant="h4" color="primary">Discover the Power of Mindset that already exists inside of you, and awaken it to achieve more than ever!</Text>
            <Text align="center" variant="body1">*This training is 120% Mindset, there is no business strategy offered.</Text>
            <MailchimpForm audience="training" minimal block={mailchimpData} />
            <Text variant="h4" color="primary" align="center">Client Testimonials</Text>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Image border src="testimonial.png" alt="Patrick Farnan Client Testimonial" />     
                </Grid>
                <Grid item xs={12}>
                    <Image border src="testimonial-2.png" alt="Patrick Farnan Client Testimonial" />
                </Grid>
                <Grid item xs={12}>
                    <Image border src="testimonial-3.png" alt="Patrick Farnan Client Testimonial" />     
                </Grid>
                <Grid item xs={12}>
                    <Image border src="testimonial-4.png" alt="Patrick Farnan Client Testimonial" />     
                </Grid>
                <Grid item xs={12}>
                    <Image border src="testimonial-5.png" alt="Patrick Farnan Client Testimonial" />     
                </Grid>
            </Grid>
        </Container>
    );
}

export default FreeTraining;

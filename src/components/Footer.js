import React from 'react';
import { Box } from '@mui/system';
import { 
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Grid,
    IconButton,
} from '@mui/material';
import Image from './core/Image.js';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GroupsIcon from '@mui/icons-material/Groups';

const Footer = () => {
    return (
        <Box component="footer" sx={{py: 4, px: 1, bgcolor: 'secondary.main', mt: 2}}>
            <Container>
                <Image src="/assets/patrick-farnan-logo.png" alt="Patrick Farnan Logo" type="logo" />
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <List dense sx={{color: '#fff'}}>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Patrick Farnan" src="assets/patrick-farnan.jpg" sx={{border: 2, borderColor: 'primary.main'}} />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{sx: {fontWeight: 'bold'}}} secondaryTypographyProps={{sx: {color: '#fff'}}} primary="Patrick Farnan" secondary="Follow my journey on my socials."/>
                            </ListItem>
                            <ListItem>
                                <IconButton children={<FacebookIcon />} color="primary" size="large" target="_blank" rel="noopener noreferrer" href="https://facebook.com/farnan.patrick" />
                                <IconButton children={<InstagramIcon />} color="primary" size="large" target="_blank" rel="noopener noreferrer" href="https://instagram.com/farnan.patrick" />
                                <IconButton children={<LinkedInIcon />} color="primary" size="large" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mindset-speaker-resilience" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <List dense sx={{color: '#fff'}}>
                            <ListItemButton component="a" href="tel:+61400813844">
                                <ListItemIcon sx={{color: 'primary.main'}}>  
                                    <LocalPhoneIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{sx: {fontWeight: 'bold'}}}  primary="(+61) 400 813 844" />
                            </ListItemButton>
                            <ListItemButton component="a" href="mailto:patrick@patrickfarnan.com">
                                <ListItemIcon sx={{color: 'primary.main'}}>  
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{sx: {fontWeight: 'bold'}}}  primary="patrick@patrickfarnan.com" />
                            </ListItemButton>
                            <ListItemButton component="a" href="https://www.facebook.com/groups/an.elite.performance.mindset?fbclid=IwAR1UgSVNIBknZYH8SvE0HWnLgcHY0BICBBtXTrRO46o60kh_P8yoWCLD1FE" target="_blank">
                                <ListItemIcon sx={{color: 'primary.main'}}>  
                                    <GroupsIcon />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{sx: {fontWeight: 'bold'}}} secondaryTypographyProps={{sx: {color: '#fff'}}} primary="An Elite Performance Mindset Group" secondary="Join other fellow achievers looking to crush their goals!"/>
                            </ListItemButton>
                        </List>       
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;

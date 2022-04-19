import React, { useState, useEffect } from 'react';
import { Grid, Container, Alert } from '@mui/material';
import CheckoutItems from '../components/checkout/CheckoutItems';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { getCart, countCart } from '../helpers/cart';
import { getServices } from '../helpers/sanity';
import ClearCart from '../components/checkout/ClearCart';
import { calculateTotals } from '../helpers/prices';


// Public Key Goes Here
// TEST KEY - JACK KINGHAM
const stripePromise = loadStripe('pk_test_rCLBczK31p9gB4XuuLXnv17p00UBGlD13V');
// LIVE KEY - PATRICK FARNAN
// const stripePromise = loadStripe('pk_live_51HTnMaAixDvhCM2hYAgyzgjJcCQ62YuvO8kCAe7sHGg60rfqbXHPdE0lbxH1KiRpXU9sG1HIkKvSau3HjWAjfJ1G00CvD3dt3S');

const Checkout = () => {
    const cart = getCart();
    const cartCount = countCart(cart);

    // Services Refer to Single Payments
    const [services, setServices] = useState(null);   
    
    // Subscriptions Refer to Recurring Payments
    const [subscriptions, setSubscriptions] = useState(null);  

    const [totals, setTotals] = useState(null);
    const [success, setSuccess] = useState('https://patrickfarnan.com/thank-you');

    const [isUsd, setIsUsd] = useState(false);

    useEffect(() => {
        if(cart) {
            const process = async () => {
                const result = await getServices(cart);
                if(result.find(res => res.isUsd)) setIsUsd(true);
                const singleServices = result.filter(service => !service.paymentType.subscription);
                const recurringServices = result.filter(service => service.paymentType.subscription);
                setTotals(calculateTotals(singleServices, cartCount));
                setServices(singleServices);
                setSubscriptions(recurringServices);
            }

            process();
        }
    }, []);

    if(!cart) {
        return (
            <Container sx={{p: 4}}>
                <Alert severity="info" children="There is nothing to purchase at the checkout." />
            </Container>
        );
    } else {
        return (
            <Container sx={{my: 3}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <CheckoutItems cartCount={cartCount} services={services} totals={totals} setSuccess={setSuccess} subscriptions={subscriptions} isUsd={isUsd} />
                        <ClearCart /> 
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Elements stripe={stripePromise} options={{fonts: [{cssSrc: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap', family: 'Source Sans Pro', weight: '300'}], theme: 'stripe'}}>
                            <CheckoutForm totals={totals} success={success} subscriptions={subscriptions} services={services} isUsd={isUsd} />
                        </Elements>
                    </Grid>
                </Grid>
            </Container>
        );   
    }
}

export default Checkout;

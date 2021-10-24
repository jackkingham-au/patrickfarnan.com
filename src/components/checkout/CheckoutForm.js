import React, { useState, useEffect } from 'react';
import Input from '../core/Input';
import CountryInput from '../checkout/CountryInput';
import { Typography, Grid, Box, Alert } from '@mui/material';
import CustomButton     from '../core/CustomButton';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { validateSubmit } from '../../helpers/validate';
import { processSinglePayment } from '../../helpers/stripe/singlePayment';
import { cardStyles, handleCardElement } from '../../helpers/stripe/card';

const CheckoutForm = ({totals, success}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);

    const [checkoutError, setCheckoutError] = useState('');

    const [formData, setFormData] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
    });

    // Stripe Card Element Validation
    const [cardError, setCardError] = useState('');
    const [cardInputBorder, setCardInputBorder] = useState({color: '#757575', width: 1});

    // Trigger Payment Process through Stripe 
    const [pay, setPay] = useState(false);

    useEffect(() => {
        const process = async () => {
            // Single Payment
            const result = await processSinglePayment(stripe, elements, CardElement, formData, totals);

            if(!result) {
                setLoading(false);
                setCheckoutError('There was an error processing this payment. Please try again later.');
            } else {
                // Redirect to Success Page
                window.location.replace(success);
            }
        }

        if(pay) process();   
    }, [pay]);

    const handleSubmit = e => {
        e.preventDefault();
        setCheckoutError(false);

        if(!stripe || !elements || !totals) return

        setLoading(true);

        const errors = validateSubmit(formData);

        if(errors.length > 0) {
            setLoading(false);
            setCheckoutError('All fields are required to continue. Check all fields before continuing.')
        } else {
            setPay(true);
        }
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" children="Your Contact Details" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setFormData={setFormData} label="First Name" name="first" validation="specialChars" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setFormData={setFormData} label="Last Name" name="last" validation="specialChars" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setFormData={setFormData} label="Email Address" name="email" validation="email" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setFormData={setFormData} label="Phone Number" name="phone" validation="phone" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" children="Your Address Details" />
                </Grid>
                <Grid item xs={12}>
                    <Input setFormData={setFormData} label="Street Address" name="street" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setFormData={setFormData} label="City/Suburb" name="city" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setFormData={setFormData} label="State/Province/Region" name="state" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setFormData={setFormData} label="Postcode/ZIP Code" name="postcode" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CountryInput setFormData={setFormData} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" children="Your Payment Details" />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{p: 2, border: cardInputBorder.width, borderRadius: 1, borderColor: cardInputBorder.color}}>
                        <CardElement options={{style: cardStyles}} onChange={e => handleCardElement(e, setCardError, setCardInputBorder)} />
                    </Box>
                    {(cardError) ? <Typography variant="caption" children={cardError} sx={{color: '#d32f2f', mx: 2}} /> : ''}
                </Grid>
                <Grid item xs={12}>
                    {(checkoutError) ? <Alert sx={{mb: 1}} severity="error" children={checkoutError} /> : ''}
                    <CustomButton fullWidth size="large" submit loading={loading}>Invest Now</CustomButton>
                </Grid>
            </Grid>
        </form>
    );
}

export default CheckoutForm;

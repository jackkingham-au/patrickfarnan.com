const startSubscription = async (formData, service, paymentMethod, isUsd) => {
    const response = await fetch('/.netlify/functions/startSubscription', {
        method: 'POST',
        body: JSON.stringify({service, formData, paymentMethod, isUsd}),
    });

    const result = await response.json();
    return result;
}

export const processSubscription = async (stripe, elements, CardElement, formData, subscriptions, setCheckoutError, setLoading, isUsd) => {
    const paymentMethod = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement), 
        billing_details: {
            address: {
                line1: formData.street,
                city: formData.city,
                state: formData.state,
                postal_code: formData.postcode,
                country: formData.country
            },
            name: `${formData.first.toUpperCase()} ${formData.last.toUpperCase()}`,
            email: formData.email,
            phone: formData.phone
        }
    })

    if(paymentMethod.error) {
        setCheckoutError('There was an error setting up your subscription. Please contact us for further assistance.');
        console.error('SUBSCRIPTION ERROR - ', paymentMethod.error.message);
        setLoading(false);
    } else {
        try {
            const results = await Promise.all(subscriptions.map(async service => await startSubscription(formData, service, paymentMethod.paymentMethod.id, isUsd)));
            const error = results.filter(item => item.error); 
            if(error.length > 0) {
                throw 'Error in creating subscription(s) in stripe.'
            } else {
                return true;
            }
        } catch(error) {
            setCheckoutError('There was an error setting up your subscription. Please contact us for further assistance.');
            console.error('SUBSCRIPTION ERROR - ', error);
            setLoading(false);
        }
    }

    
}
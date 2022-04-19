const getClientSecret = async (formData, totals, isUsd) => {
    const response = await fetch(`/.netlify/functions/createPaymentIntent?total=${totals.total}&email=${formData.email}&gst=${totals.gst}&subtotal=${totals.subtotal}&curr=${(isUsd) ? 'usd' : 'aud'}`);
    const {clientSecret} = await response.json();
    return clientSecret;
}

const confirmPayment = async (clientSecret, stripe, elements, CardElement, formData) => {
    const result =  await stripe.confirmCardPayment(clientSecret, { 
        payment_method: {
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
        }
    });

    return result;
}

export const processSinglePayment = async (stripe, elements, CardElement, formData, total, isUsd) => {
    // 1. Get Client Secret
    const clientSecret = await getClientSecret(formData, total, isUsd);

    // 2. Confirm Payment
    const {error} = await confirmPayment(clientSecret, stripe, elements, CardElement, formData)

    if(error) {
        console.error(error.message);
        return false;
    } else {
        return true;
    }
}
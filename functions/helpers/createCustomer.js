const stripe = require('./stripe');

module.exports = async (formData) => {
    try {
        const customer = await stripe.customers.create({
            address: {
                line1: formData.street,
                city: formData.city,
                postal_code: formData.postcode,
                country: formData.country,
                state: formData.state
            },
            phone: formData.phone,
            email: formData.email,
            name: `${formData.first.toUpperCase()} ${formData.last.toUpperCase()}`,
        });

        return {customer}
    } catch(error) {
        throw 'Error creating the customer in Stripe.';
    }
}
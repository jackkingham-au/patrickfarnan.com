const stripe = require('./stripe');

module.exports = async (service) => {
    try {
        const product = await stripe.products.create({
            name: service.name,
            id: service._id,
        });

        return {product}
    } catch (error) {
            if(error.raw.code === 'resource_already_exists') {
                // No Need to do Anything - Product Exists
                return 
            } else {
                throw 'Error creating product in Stripe.';
            }
    }
}
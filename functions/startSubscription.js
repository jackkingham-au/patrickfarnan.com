const createProduct = require('./helpers/createProduct');
const createPrice = require('./helpers/createPrice');
const createCustomer = require('./helpers/createCustomer');
const stripe = require('./helpers/stripe');
const createSubscription = require('./helpers/createSubscription');

exports.handler = async (event) => {
    const service = JSON.parse(event.body).service;
    const formData = JSON.parse(event.body).formData;
    const paymentMethod = JSON.parse(event.body).paymentMethod;

    try {
        // Create the Service to Sell
        await createProduct(service);

        // Create a Price for the Service
        const {price} = await createPrice(service, service._id);

        // Create the Customer for the Service
        const {customer} = await createCustomer(formData);

        // Attach Payment Method to Customer
        await stripe.paymentMethods.attach(paymentMethod, {
            customer: customer.id,
        });

        // Make Attached Payment Method Default for Customer
        await stripe.customers.update(customer.id ,{
            invoice_settings: {
                default_payment_method: paymentMethod
            }
        });

        // // Create the Subscription
        const subscription = await createSubscription(customer.id, price.id, service);

        return {
            statusCode: 200,
            body: JSON.stringify({subscription})
        }
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify({error})
        }
    }
}
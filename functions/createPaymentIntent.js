const stripe = require('./helpers/stripe');

exports.handler = (event) => {
    const paymentIntent = async () => {
        const intent = await stripe.paymentIntents.create({
            amount: Number((event.queryStringParameters.total * 100).toFixed(2)),
            currency: 'aud',
            receipt_email: event.queryStringParameters.email,
            metadata: {
                gst: Number(event.queryStringParameters.gst).toFixed(2),
                subtotal: Number(event.queryStringParameters.subtotal).toFixed(2)
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({clientSecret: intent.client_secret})
        }
    }

    return paymentIntent();
}
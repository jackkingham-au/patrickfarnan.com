const stripe = require('./stripe');

module.exports = async (customer, price, service) => {
    const start = service.paymentType.scheduling.startDateData.start;
    const end = service.paymentType.scheduling.endDateData.end;
    let subscription;

    try  {
        if(end === 'Ongoing' && start === 'Immediately') {
                subscription = await stripe.subscriptions.create({
                    customer,
                    items: [
                        {
                            price
                        }
                    ],
                });
        } else if(end === 'Ongoing' && start === 'Custom Date') {
            const startDate = service.paymentType.scheduling.startDateData.startDate;
            const startTimestamp = Math.floor(new Date(startDate).getTime() / 1000);

            subscription = await stripe.subscriptions.create({
                customer,
                trial_end: startTimestamp,
                items: [
                    {
                        price
                    }
                ],
            });
        } else if(end === 'Custom Billing Cycles' && start === 'Immediately') {
            const now = Math.floor(Date.now() / 1000);

            subscription = await stripe.subscriptionSchedules.create({
                customer,
                start_date: now,
                end_behavior: 'cancel',
                phases: [
                    {
                        items: [
                            {
                                price,
                                quantity: 1
                            }
                        ],
                        iterations: service.paymentType.scheduling.endDateData.billingCycles
                    },
                ]
            });
        } else if(end === 'Custom Billing Cycles' && start === 'Custom Date') {
            const startDate = service.paymentType.scheduling.startDateData.startDate;
            const startTimestamp = Math.floor(new Date(startDate).getTime() / 1000);

            subscription = await stripe.subscriptionSchedules.create({
                customer,
                start_date: startTimestamp,
                end_behavior: 'cancel',
                phases: [
                    {
                        items: [
                            {
                                price,
                                quantity: 1
                            }
                        ],
                        iterations: service.paymentType.scheduling.endDateData.billingCycles
                    },
                ]
            });
        }

        return {subscription}
    } catch(error) {
        throw 'Error creating subscription in Stripe.';
    }
}
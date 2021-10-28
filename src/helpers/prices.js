const calculateGST = (price, inclusive = true, percentage = 10) => {    
    if(inclusive) {
        const gst = Number((price / 11).toFixed(3));
        const subtotal = Number((gst * percentage).toFixed(3));
        const total = Number((gst + subtotal).toFixed(2));
        
        return {
            gst, subtotal, total
        }
    } else if(!inclusive) {
        const gst = (percentage / 100) * price;
        const subtotal = price;
        const total = Number((gst + subtotal).toFixed(2));

        return {
            gst, subtotal, total
        }
    }
}

export const calculateTotals = (services, cartCount) => {
    if(services.length === 0) {
        return calculateGST(0);
    } else {
        const totals = services.map(service => {
            const qty = (service.paymentType.subscription) ? 1 : cartCount[service._id];
            return (service.price.discounted) ? Number(service.price.discountedPrice * qty).toFixed(2) : Number(service.price.price * qty).toFixed(2);
        });
    
        return calculateGST(totals.reduce((runningTotal, value) => Number(runningTotal) + Number(value)));
    }
}
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
    const total = services.map(service => (service.price.discounted) ? Number(service.price.discountedPrice * cartCount[service._id]).toFixed(2) : Number(service.price.price * cartCount[service._id]).toFixed(2));
    return calculateGST(total);
}
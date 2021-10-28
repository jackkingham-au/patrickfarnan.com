export const getCart = () => {
    try {
        const cart = document.cookie.split(';').find(item => item.trim().startsWith('cart')).split('=')[1];
        return JSON.parse(cart);
    } catch (err) { // Return False on Error - Cart Cookie Not Found
        return false;
    }
}

export const setCart = addedServices => {
    const services = addedServices.map(service => service._ref);

    const prevCart = getCart();
    
    if(!prevCart) {
        document.cookie = `cart=${JSON.stringify(services)}`;
    } else {
        const newCart = [
            ...services,
            ...prevCart
        ];

        document.cookie = `cart=${JSON.stringify(newCart)}`;
    }

}

export const countCart = cart => {
    let count = {};

    if(cart) {
        cart.map(item => {
            count[item] = (count[item] || 0) + 1;
        });

        return count;
    } else {
        return false;
    }
}

export const clearCart = () => {
    const cart = document.cookie.split(';').find(item => item.trim().startsWith('cart'));
    document.cookie = 'cart=empty; expires=0';
    window.location.reload();
}
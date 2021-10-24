// Card Options
export const cardStyles = {
    base: {
        iconColor: '#FF6600',
        color: '#424242',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        textTransform: 'capitalize',
        '::placeholder': {
            color: '#424242',
        },   
    }
}

export const handleCardElement = (event, setCardError, setCardInputBorder) => {
    if(event.error) {
        setCardError(event.error.message);
        setCardInputBorder({color: '#d32f2f', width: 1});
    } else {
        setCardError('');
        setCardInputBorder({color: '#00e676', width: 2});
    }
}
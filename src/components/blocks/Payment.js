import React, { useState, useEffect } from 'react';
import CustomButton from '../core/CustomButton';
import { getPageReference, urlToTitle } from '../../helpers/sanity';
import { useHistory  } from 'react-router-dom';
import { setCart } from '../../helpers/cart';

const Payment = ({block}) => {
    // Handles Setting the Next Page
    const [pageRef, setPageRef] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if(!block.nextStep.directToCheckout) {
            getPageReference(block.nextStep.directToPage._ref, setPageRef);
        }
    }, []);
 
    const nextPage = () => {
        const url = (block.nextStep.directToCheckout) ? 'checkout' : urlToTitle(pageRef.title);
        setCart(block.addedServices);
        if(url === 'checkout') {
            history.push(`/${url}`);
        } else {
            history.push(`/${url}`);
            window.location.reload();
        }
    }

    return (
        <CustomButton
            onClick={nextPage} 
            fullWidth
            size={block.button.size}
        >{block.button.text}</CustomButton>
    );
}

export default Payment;

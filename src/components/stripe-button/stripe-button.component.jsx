import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import Crown from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KbGbhIYil7LrtGjDALA0TRRPIVRNKmf525cWLZBxxWChto3RoUB1iuNBeAsYFiabT9KOxFRdi0GtQGeojHaYPV800tusmLVMO';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Modern Wear'
        billingAddress
        shippingAddress
        image={Crown}               
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
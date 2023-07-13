/*
GOAL OF CHECKOUT:
[x] write return() with html for page
[ ] When they click checkout, the user information, order total and array of pizzas should be sent to the server.
    [x] create click handler for checkout
    [x] show a confirmation dialog (confirm html element)
    [ ] POST data to the server
[ ] After the checkout is complete, navigate the user back to the select pizza page AND clear out the reducers as appropriate.
    [ ] .then() should link user back to <PizzaList />
    [ ] clear reducers for cart and Checkout
[ ] Each order should begin with "clean" order data (cart, address, etc).
    [ ] clear all user inputs everywhere?
*/


// imports
import React from 'react';
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';

// function for our Checkout component
function Checkout() {
    const dispatch = useDispatch();
    // useSelector hook goes here (grabbing cart data from Redux store)
    function handleCheckoutClick() {
        console.log('Checkout button clicked! 💰🤑🍕');
        if(confirm('Would you like that pizza? 🍕👀')){
            text = 'You want that pizza 🤤';
            // POST function goes here
            axios.post({

            })
            // after post, we will clear the cart and other user inputs
                // use dispatch to communicate with Redux store!
        }else{
            text = 'You cannot handle the pizza 😤';
        }
    }
    
    return(
        //HTML to display
        <>
            <h1>Prime Pizza</h1>
            <h2>Step 3: Checkout</h2>
            <div>User Name</div>
            <div>Address</div>
            <div>city, state</div>
            <div>For Delivery</div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                <tr>
                    <td>Pizza</td>
                    <td>Pizza Cost</td>
                </tr>
                <tr>
                    <td>Pizza</td>
                    <td>Pizza Cost</td>
                </tr>
            </table>
            <button onClick={handleCheckoutClick}>CHECKOUT</button>
        </>
    )
}

export default Checkout;
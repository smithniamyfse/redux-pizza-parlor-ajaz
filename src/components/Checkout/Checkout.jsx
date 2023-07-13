/*
GOAL OF CHECKOUT:
[x] write return() with html for page
[x] test with front-end route
[ ] Populate the page with user data => useSelector!
[ ] When they click checkout, the user information, order total and array of pizzas should be sent to the server.
    [x] create click handler for checkout
    [x] show a confirmation dialog (confirm html element)
    [ ] POST data to the server
[ ] After the checkout is complete, navigate the user back to the select pizza page AND clear out the reducers as appropriate.
    [x] .then() should link user back to <PizzaList />
    [ ] clear reducers for cart and Checkout
[ ] Each order should begin with "clean" order data (cart, address, etc).
    [ ] clear all user inputs everywhere?
*/


// imports
import React from 'react';
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';

// function for our Checkout component
function Checkout() {
    const dispatch = useDispatch();
    const history = useHistory();
    // useSelector hook goes here (grabbing cart data from Redux store)
    const cartList = useSelector(store => store.cart)

    function handleCheckoutClick() {
        console.log('Checkout button clicked! 💰🤑🍕');
        // POST function goes here
        if (confirm('Would you like that pizza? 🍕👀')) {


            axios.post('/api/order', {
                price: price,
                name: name
                }).then(response => {
                // after post, we will clear the cart and other user inputs
                // use dispatch to communicate with Redux store!
                dispatch({type: 'CHECKOUT'})
                // navigate the user back to the select pizza page
                history.push('./');
                // haha what a weinie
                }).catch(error => {
                console.log('error POSTing product: ', error);
                })
            }
    }
    
    return(
            // HTML to display 
            <>
                <h1>Prime Pizza</h1>
                <h2>Step 3: Checkout</h2>
                <div>User Name</div>
                <div>Address</div>
                <div>city, state</div>
                <div>For Delivery</div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pizza</td>
                            <td>Pizza Cost</td>
                        </tr>
                        {/* MAP DATA HERE
                        {
                        cartList.map((product) => {
                            return
                            <>
                                <td> {product.name}</td>
                                <td> {product.price}</td>
                            </>
                        })
                        } */}</tbody>
                </table>
                <button onClick={handleCheckoutClick}>CHECKOUT</button>
            </>
        )
    }

    export default Checkout;

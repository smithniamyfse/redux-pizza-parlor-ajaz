/*
GOAL OF CHECKOUT:
[x] write return() with html for page
[x] test with front-end route
[x] Populate the page with user data => useSelector!
[ ] When they click checkout, the user information, order total and array of pizzas should be sent to the server.
    [x] create click handler for checkout
    [x] show a confirmation dialog (confirm html element)
    [ ] POST data to the server
[ ] After the checkout is complete, navigate the user back to the select pizza page AND clear out the reducers as appropriate.
    [x] .then() should link user back to <PizzaList />
    [ ] send dispatch actions to clear reducers for cart and Checkout
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
    const cartList = useSelector(store => store.cartList)
    const userInfo = useSelector(store => store.custInfo)

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
                }).catch(error => {
                console.log('error POSTing product: ', error);
                })
            }
        }
    
    return(
            // HTML to display 
            <>
                <h2>Step 3: Checkout</h2>
                <pre>{JSON.stringify(userInfo)}</pre>
                {/* { customer_name, street_address, city, zip, type } */}
                <div>{userInfo.customer_name}</div>
                <div>{userInfo.street_address}</div>
                <div>{userInfo.city}</div>
                <div>{userInfo.type}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        cartList.map((product) => {
                            return(
                            <>
                            <tr>
                                <td> {product.name}</td>
                                <td> {product.price}</td>
                            </tr>
                            </>
                            )
                        })
                        }
                        </tbody>
                </table>
                <button onClick={handleCheckoutClick}>CHECKOUT</button>
            </>
        )
    }

    export default Checkout;

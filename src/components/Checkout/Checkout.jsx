/*
GOAL OF CHECKOUT:
[x] write return() with html for page
[ ] When they click checkout, the user information, order total and array of pizzas should be sent to the server.
    [x] create click handler for checkout
    [ ] POST data to the server
[ ] After the checkout is complete, navigate the user back to the select pizza page AND clear out the reducers as appropriate.
    [ ] .then() should link user back to <PizzaList />
    [ ] clear reducers for cart and Checkout
[ ] Each order should begin with "clean" order data (cart, address, etc).
    [ ] clear all user inputs everywhere?
*/


// imports


// function for our Checkout component
function Checkout() {

    function handleCheckoutClick() {
        console.log('Checkout button clicked! 💰🤑🍕');
    }
    
    return(
        //HTML to display
        <>
            <h1>Prime Pizza</h1>
            <button onClick={handleCheckoutClick}>CHECKOUT</button>
        </>
    )
}
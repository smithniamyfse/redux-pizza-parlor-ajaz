import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector(state => state.cartList);
  // Get total, add up all the prices from cartList

  const getTotal = () => {
    // Starting total at 0
    let total = 0;
    cart.forEach((item) => {
      // Add up the prices to total
      total += Number(item.price)
      console.log('Price:',item.price);
    })
    return total.toFixed(2);
  }
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <h4 className="shopping-cart"><ShoppingCartIcon /><span className="total">Total:{getTotal()}</span></h4>
   
    </header>
  );
};

export default Header;

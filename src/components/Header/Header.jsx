import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
const Header = () => {
  const total = useSelector(state => state.cartList.price);
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      {/* NEED TO USE SELECTOR FOR TOTAL BUT NEED TO WAIT FOR SHOPPING LIST */}
      <h4 className="shopping-cart"><ShoppingCartIcon /><span className="total">Total:{subtotal}</span></h4>
   
    </header>
  );
};

export default Header;

import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      {/* NEED TO USE SELECTOR FOR TOTAL BUT NEED TO WAIT FOR SHOPPING LIST */}
      <h4 className="shopping-cart"><ShoppingCartIcon /><span className="total">Total:12</span></h4>
   
    </header>
  );
};

export default Header;

import React from 'react';
import axios from 'axios';
import './App.css';

// importing PizzaList
import PizzaList from '../PizzaList/PizzaList';

// importing Checkout
import Checkout from '../Checkout/Checkout'

// importing Router to use
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function App() {

    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <h1 className='App-title'>Prime Pizza</h1>
                </header>

                <img src='images/pizza_photo.png'/>
                <p>Pizza is great.</p>
                <Route path="/pizza">
                    <PizzaList/>
                </Route>
                <Route path="/checkout">
                  <Checkout />
                </Route>
        <Route path="/custinfo">
          <CustInfo />
        </Route>
            </div>
        </Router>
    );
}

export default App;

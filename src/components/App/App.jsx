import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';

// importing PizzaList
import PizzaList from '../PizzaList/PizzaList';

// importing Router to use
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='App'>
      <Header/>

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Route path="/pizza">
          <PizzaList />
        </Route>
      </div></Router>
  );
}

export default App;

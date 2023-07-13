import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// importing REDUX
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// adding REDUCER to STORE information
const pizzaList = (state = [], action) => {
    if (action.type === 'GET_PIZZA') {
        return action.payload;
    }

    return state;
}

// Customer Information REDUCER
// When Next is clicked on, store the customer information to the redux store's `custinfo`.
const custInfo = (state = [], action) => {
    // Save customer information to the custinfo array
    if (action.type === "COLLECT_CUST_INFO") {
      console.log('Customer information added: ', action.payload)
    //   return [...state, action.payload];
      return action.payload;
    }
    return state;
  };



// STORE to keep information
const store = createStore(
    combineReducers({
        pizzaList,
        custInfo,
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

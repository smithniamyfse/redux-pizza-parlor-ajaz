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
        return  action.payload;
    }
    return state;
}


const cartList = ( state = [], action) => {
    if(action.type === 'ADD_CART') {
        return [...state, action.payload]
    }else if(action.type === 'TOTAL'){
        return [...state, action.payload];
    }
    return state;
}

// STORE to keep information
const store = createStore(
    combineReducers({
        pizzaList,
        cartList,
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

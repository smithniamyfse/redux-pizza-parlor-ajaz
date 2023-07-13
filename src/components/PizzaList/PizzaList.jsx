import React from "react";
import { useState, useEffect } from "react";
import "./PizzaList.css";
import axios from "axios";
// import { get } from "../../../server/routes/pizza.router";
import { useHistory } from "react-router-dom";

// Importing MaterialUI items
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// Importing useSelector to pull information from STORE
import { useSelector } from "react-redux";

// Importing dispatch to send to STORE
import { useDispatch } from "react-redux";

function PizzaList() {
    const [ showButton, setShowButton ] = useState(false);

    // sourcing dispatch to use later
    const dispatch = useDispatch();

    // sourcing history
    const history = useHistory();

    // sourcing pizza list information
    const pizzaList = useSelector(store => store.pizzaList);

    // testing cartlist
    const cartList = useSelector(store => store.cartList);

    const getPizza = () => {
        axios({
            method: "GET",
            url: "/api/pizza",
        })
            .then(response => {
                // dispatch to sent to store on index.js
                dispatch({
                    type: "GET_PIZZA",
                    payload: response.data,
                });
            })
            .catch(error => {
                console.log("Error in the GET request of PizzaList: ", error);
            });
    };
    // on load, fetching pizza list from server
    useEffect(() => {
        console.log("in useEffect");
        getPizza();
    }, []);

    console.log("Current cartlist is: ", cartList);

    const handleAdd = pizza => {
        dispatch({
            type: "ADD_CART",
            payload: {
                id: pizza.id,
            },
        });
    }


    const handleClick = (pizza) => {
    
        setShowButton(!showButton)

        if( !showButton ) {
            dispatch({
                type: 'ADD_CART',
                payload: pizza.id
            })
        } else if (showButton){
            dispatch({
                type: 'REMOVE_CART',
                payload: pizza.id
            })
        }
    }

    let buttonText;
    if(!showButton) {
        buttonText = ( <Button size="small" color="primary" variant='contained' onClick={handleClick} > Add </ Button>)
    } 
    if (showButton) {
        buttonText = ( <Button size="small" color="primary" variant='contained' onClick={ handleClick} > Remove </ Button>)
    }

      
        const handleNext = () => {
            history.push('/custinfo')
        }

        console.log('Current cartlist is: ', cartList)





        return (
            <>
                <div className="pizzaList">
                    {
                        pizzaList.map(pizza =>
                            <div className="single-card" key={pizza.id}>
                                <Card sx={{
                                    width: 345,
                                    height: 400,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }} elevation={4}>

                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={pizza.image_path}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {pizza.name}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {pizza.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignSelf: 'flex-end', justifyContent: 'flex-end' }}>

                                        </Box>
                                    </CardContent>

                                    <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        ${pizza.price}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <CardActions>
                                           {buttonText}
                                        </CardActions>
                                    </Box>



                                </Card>
                            </div>


                        )
                    }


                </div>
                <div className="checkout-button-div">
                    <Button onClick={handleNext}>Next</Button>
                </div>
            </>
        );
    }


export default PizzaList;

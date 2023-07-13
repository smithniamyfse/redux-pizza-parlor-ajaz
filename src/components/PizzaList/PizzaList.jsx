import React from "react";
import { useState, useEffect } from "react";
import './PizzaList.css';
import axios from 'axios';
// import { get } from "../../../server/routes/pizza.router";

// Importing MaterialUI items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Importing useSelector to pull information from STORE
import { useSelector } from "react-redux";

// Importing dispatch to send to STORE
import { useDispatch } from "react-redux";

function PizzaList() {
    // sourcing dispatch to use later
    const dispatch = useDispatch();

    // sourcing pizza list information
    const pizzaList = useSelector(store => store.pizzaList)

    // on load, fetching pizza list from server
    useEffect(() => {
        console.log('in useEffect');
        getPizza();
    }, []);

    const getPizza = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
            .then(response => {
                // dispatch to sent to store on index.js
                dispatch({
                    type: 'GET_PIZZA',
                    payload: response.data
                });
            })
            .catch(error => {
                console.log('Error in the GET request of PizzaList: ', error);
            })
    }
    console.log(pizzaList)
    return (
        <div className="pizzaList">
            {
                pizzaList.map(pizza => 
                    <div className="single-card" key={pizza.id}>
                    
                    <Card sx={{
                        width: 345,
                        height: 400,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }} elevation={4}>
                        <CardActionArea>
                 
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
                            </CardContent>
                            <CardContent sx={{alignItems: 'bottom'}}>
                                <Button size="small">Add</Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>

                )
            }

        </div>
    )





}

export default PizzaList;
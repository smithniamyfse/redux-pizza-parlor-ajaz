import React from "react";
import { useState, useEffect } from "react";
import './PizzaList.css';
import axios from 'axios';
import { get } from "../../../server/routes/pizza.router";
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

function PizzaList() {
    let [pizzaList, setPizzaList] = useState([]);

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
        .then( response => {
            setPizzaList(response.data);
            console.log(pizzaList);
        })
        .catch( error => {
            console.log('Error in the GET request of PizzaList: ', error);
        })
    }

    return ( 
        <div className="pizzaList">
            {
                pizzaList.map(pizza => {
                    <Card sx={{maxWidth: 345}}>
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
                            </CardContent>
                        </CardActionArea>
                    </Card>
                })
            }

        </div>
    )





}

export default PizzaList;
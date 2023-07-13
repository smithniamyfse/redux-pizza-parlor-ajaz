import React from "react";
import { useState, useEffect } from "react";
import "./PizzaList.css";
import axios from "axios";
// import { get } from "../../../server/routes/pizza.router";

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
  // sourcing dispatch to use later
  const dispatch = useDispatch();

  // sourcing pizza list information
  const pizzaList = useSelector(store => store.pizzaList);

  // testing cartlist
  const cartList = useSelector(store => store.cartList);

  // on load, fetching pizza list from server
  useEffect(() => {
    console.log("in useEffect");
    getPizza();
  }, []);

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

  const handleAdd = pizza => {
      let sum = 0;
    dispatch({
      type: "ADD_CART",
      payload: {
        name: pizza.name,
        price: pizza.price,
      },
    });

  };

  console.log("Current cartlist is: ", cartList);

  return (
    <div className="pizzaList">
      {pizzaList.map(pizza => (
        <div className="single-card" key={pizza.id}>
          <Card
            sx={{
              width: 345,
              height: 400,
              display: "flex",
            }}
            elevation={4}
          >
            <CardActionArea onClick={() => handleAdd(pizza)}>
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
                <Box
                  sx={{
                    display: "flex",
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
                  }}
                ></Box>
              </CardContent>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                ${pizza.price}
              </Typography>
              <Button size="small" onClick={handleAdd}>Add</Button>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default PizzaList;

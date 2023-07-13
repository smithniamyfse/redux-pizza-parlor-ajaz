import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./CustInfo.css";

// http://localhost:3000/#/custinfo

function CustInfo() {
  const dispatch = useDispatch();

  const [customer_name, setCustomerName] = useState("");
  const [street_address, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [type, setType] = useState("");

  const collectCustInfo = (event) => {
    event.preventDefault();

    console.log(
      "Collecting customer information: ",
      customer_name,
      street_address,
      city,
      zip,
      type
    );

    dispatch({
      type: "COLLECT_CUST_INFO",
      payload: { customer_name, street_address, city, zip, type },
    });
  } // end collectCustInfo function

  const handleOrderType = () => {

  }

    return (
      <>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={collectCustInfo} className="add-cust-info-form">
          <input
            required
            placeholder="Name"
            value={customer_name}
            onChange={(event) => setCustomerName(event.target.value)}
          />
          <input
            required
            placeholder="Street Address"
            value={street_address}
            onChange={(event) => setStreetAddress(event.target.value)}
          />
          <input
            required
            placeholder="City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            required
            placeholder="Zip"
            value={zip}
            onChange={(event) => setZip(event.target.value)}
          />
          <div>
            <input
              type="radio"
              id="typeChoice1"
              name="pickup"
              value={type}
              onClick={(event) => setType(event.target.value)}
            />
            <label for="typeChoice1">Pickup</label>
          </div>
          <div>
            <input
              type="radio"
              id="typeChoice2"
              name="delivery"
              value={type}
              onClick={(event) => setType(event.target.value)}
            />
            <label for="typeChoice2">Delivery</label>
          </div>
          <div>
            <button type="submit">Next</button>
          </div>
        </form>
      </>
    );
  } // end CustInfo component


export default CustInfo;

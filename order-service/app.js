const express = require('express');
const axios = require('axios');
const app = express();

app.get('/orders', async (req, res) => {
  try {
    const users = await axios.get('http://user-service:3001/users');
    const products = await axios.get('http://product-service:3002/products');

    res.json({
      orders: [
        {
          user: users.data[0],
          product: products.data[0]
        }
      ]
    });
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(3003, () => console.log("Order Service running on 3003"));


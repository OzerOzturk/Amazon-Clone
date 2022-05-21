/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51L13cHG4kBrUuDAHPFFfPBHo4uvcd26jJGNg0xVnP9G5wxucqiO3cVBsfT4Uss5nx27mWSvMSzgYf18qj6Aehnt500wwX5LEHi"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved! for this amount --> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // ok -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http function initialized (http://127.0.0.1:5001/amaznclone2022/us-central1/api).

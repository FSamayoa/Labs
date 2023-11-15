const express = require("express");
const server = express();
const morgan = require("morgan");
const {createOrder, successfulPurchase} = require("./handlers");

server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.post("/purchase", createOrder);
server.get("/success", successfulPurchase);

module.exports = server;

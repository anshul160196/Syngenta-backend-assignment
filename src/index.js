const express = require("express");
const restaurantController = require("./controllers/restourant.controller");
const userController = require("./controllers/user.controller");
const dishController = require("./controllers/dishes.controller");
const orderController = require("./controllers/order.controller");
const app = express();

app.use(express.json());

app.use("/api/restaurants", restaurantController);
app.use("/api/users", userController);
app.use("/api/dishes", dishController);
app.use("/api/orders", orderController);
module.exports = app;

const express = require("express");

const Order = require("../models/order.model");

const router = express.Router();

//-----------------------create user-------------------
router.post("", async (req, res) => {
  try {
    let order = await Order.create(req.body);
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:orderid", async (req, res) => {
  try {
    let order = await Order.findById(req.params.orderid).populate({
      path: "dishID",
    });
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

const express = require("express");

const Dish = require("../models/dishes.model");

const router = express.Router();

//---------------------create dish -----------------------

router.post("/", async (req, res) => {
  try {
    let dish = await Dish.create(req.body);
    res.status(200).send(dish);
  } catch (error) {
    res.status(400).send(error);
  }
});

//-----------------get all dishes ----------------
router.get("/all", async (req, res) => {
  try {
    let dish = await Dish.find();
    res.status(200).send(dish);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

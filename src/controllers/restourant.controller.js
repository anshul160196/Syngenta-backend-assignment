const express = require("express");

const Restaurant = require("../models/restaurant.model");

const router = express.Router();

//----------------create restaurant--------------

router.post("/", async (req, res) => {
  try {
    let restaurant = await Restaurant.create(req.body);
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
});

// -----------------List all dishes based on location and restaurant ----------------------------
router.get("/:id/:location", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let restaurant = await Restaurant.find({
      $and: [{ _id: id }, { location: req.params.location }],
    }).populate({
      path: "dishID",
    });

    res.status(200).send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
});

//-------------------add dishes into restaurant -------------
router.put("/res/:id", async (req, res) => {
  try {
    let resid = req.params.id;
    console.log(resid);
    let dishid = req.body.dishID;
    let restaurant = await Restaurant.findById(resid);
    if (!restaurant.dishID.includes(dishid)) {
      await restaurant.updateOne({ $push: { dishID: dishid } });
      res.status(200).send("dish added successfully");
    } else {
      res.status(200).send("dish alreay present in list");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

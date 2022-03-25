const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

//-----------------------create user-------------------
router.post("/", async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//----------add dish to cart -------------
router.put("/:id/cart", async (req, res) => {
  try {
    let dishid = req.params.id;
    let userId = req.body.userID;
    let user = await User.findById(userId);
    await user.updateOne({ $push: { cart: dishid } });
    res.status(200).send("dish added to cart");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

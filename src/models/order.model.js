const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  dishID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "dish",
  },
});

module.exports = mongoose.model("order", orderSchema);

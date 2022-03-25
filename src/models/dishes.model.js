const mongoose = require("mongoose");

const dishesSchema = mongoose.Schema({
  dishName: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("dish", dishesSchema);

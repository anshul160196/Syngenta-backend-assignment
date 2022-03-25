const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  resName: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: Array },
  dishID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dish",
    },
  ],
});

module.exports = mongoose.model("restaurant", restaurantSchema);

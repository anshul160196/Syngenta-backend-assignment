const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "dish",
  },
});

module.exports = mongoose.model("user", userSchema);

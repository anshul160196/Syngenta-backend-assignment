const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://anshul351:1234@cluster0.lrxwi.mongodb.net/assignment"
  );
};

const mongoose = require("mongoose");
const keys = require("../../config/keys");

module.exports = async () => {
  try {
    await mongoose.connect(keys.MONGOURI, { useNewUrlParser: true });
    console.log("Connected to Database");
  } catch (err) {
    console.error(err);
  }
};

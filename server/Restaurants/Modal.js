const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
  menu: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Restaurants", restaurantSchema);

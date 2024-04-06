// car.model.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  // Add more fields as needed
});

module.exports = mongoose.model('Car', carSchema);

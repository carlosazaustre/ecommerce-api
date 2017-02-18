const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  availability: Number,
  deliveryStimate: String,
  category: String
});

module.exports = mongoose.model('Product', ProductSchema);

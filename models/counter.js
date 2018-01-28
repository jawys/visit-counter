const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  name: String,
  count: Number,
});

module.exports = mongoose.model('Counter', counterSchema);

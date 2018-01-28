const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  name: String,
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Counter', counterSchema);

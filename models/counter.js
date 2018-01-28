const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  name: String,
  count: Number,
});

counterSchema.static('updateCount', function (name, callback) {
  return this.findAndUpdate({ name }, { $inc: { count: 1 } }, callback);
});

module.exports = mongoose.model('Counter', counterSchema);

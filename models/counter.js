const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  name: String,
  count: {
    type: Number,
    default: 0,
  },
});

counterSchema.static('updateCount', function (name, callback) {
  return this.findOneAndUpdate({ name }, { $inc: { count: 1 } }, callback);
});

module.exports = mongoose.model('Counter', counterSchema);

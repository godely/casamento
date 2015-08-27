var mongoose = require('mongoose');

var giftSchema = mongoose.Schema({
  name: String,
  value: Number,
  url: String,
  code: String,
  category: String,
  bought: {type: Boolean, default: false}
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Gift', giftSchema);

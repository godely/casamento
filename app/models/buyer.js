var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var buyerSchema = mongoose.Schema({
  name: String,
  message: String,
  gift: {type: ObjectId, ref: 'Gift'},
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Buyer', buyerSchema);

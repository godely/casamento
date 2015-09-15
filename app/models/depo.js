var mongoose = require('mongoose');

var depoSchema = mongoose.Schema({
  name: String,
  text: String,
  active: {type: Boolean, default: false}
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Depo', depoSchema);

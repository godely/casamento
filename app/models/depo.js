var mongoose = require('mongoose');

var depoSchema = mongoose.Schema({
  name: String,
  text: String
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Depo', depoSchema);

var mongoose = require('mongoose');

var rsvpSchema = mongoose.Schema({
  name: String,
  count: {type: Number, default: 0},
  rsvp: {type: Boolean, default: true}
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('RSVP', rsvpSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: String,
  password: {
    type: String,
    required: true
  },
  profile_fig: String
});

const User = mongoose.model('User', userSchema);
// can hash the password here

module.exports = User;

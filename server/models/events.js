const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const eventSchema = new Schema({
  name: String,
  description: String,
  picture: [
    {type: String}
  ],
  num_of_people: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  created_at: Date,
  updated_at: Date,
  location: String,
  creator: {
    type: ObjectId,
    ref: 'User'
  }
});

eventSchema.pre('save', function (next) {
  console.log('am i here in presave', this);
  const currentDate = new Date();
  this.updated_at = currentDate;
  if(!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

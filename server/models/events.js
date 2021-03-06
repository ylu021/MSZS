const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    unique: true,
    index: true,
    required: true
  },
  description: String,
  fig: [
    {type: String}
  ],
  num_of_people: {
    type: Number,
    required: true
  },
  total_num_of_people: {
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
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

eventSchema.pre('save', function (next) {
  // console.log('am i here in presave', this);
  const currentDate = new Date();
  this.updated_at = currentDate;
  if(!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

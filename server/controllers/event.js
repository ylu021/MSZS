const mongoose = require('mongoose');
const User = require('../models/users');
const Event = require('../models/events');
exports.list = (req, res) => {
  (async() => {
    let events = await Event.find({}, { _id: 0}).lean();
    for (let idx in events) {
      let _id = mongoose.Types.ObjectId(events[idx].creator);
      const user = await User.findOne({_id: _id});
      // console.log(events[idx], user.name);
      events[idx]['creator'] = user.name;
      events[idx]['created_at'] = events[idx]['created_at'].toISOString().slice(0, 10);
    }
    res.render('events', {title: 'Express', events});
  })().catch(e => console.error(e));
};

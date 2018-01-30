const mongoose = require('mongoose');
const User = require('../models/users');
const Event = require('../models/events');
exports.list = (req, res) => {
  (async() => {
    const id = req.params.id;
    let events = [];
    if(id) {
      events = await Event.find({_id: mongoose.Types.ObjectId(id)}).lean();
    }else {
      events = await Event.find({}).lean();
    }
    for (let idx in events) {
      const id = mongoose.Types.ObjectId(events[idx].host);
      console.log(id);
      const user = await User.findOne({_id: id});
      console.log(user);
      events[idx]['host'] = {
        name: user.name,
        profile_fig: user.profile_fig
      };
      events[idx]['created_at'] = events[idx]['created_at'].toISOString().slice(0, 10);
    }
    res.json({events: events});
    // res.render('events', {title: 'Express', events});
  })().catch(e => console.error(e));
};

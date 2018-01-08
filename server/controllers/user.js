const mongoose = require('mongoose');
const User = require('../models/users');
exports.list = (req, res) => {
  (async() => {
    const id = req.params.id;
    let users = [];
    if(id) {
      users = await User.find({_id: mongoose.Types.ObjectId(id)}).lean();
    }else {
      users = await User.find({}, { _id: 0}).lean();
    }
    res.render('index', {title: 'Express', users});
  })().catch(e => console.error(e));
};

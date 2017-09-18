const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/users');

const Event = require('../models/events');

/* GET home page. */
/* app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

module.exports = (app) => {
	app.get('/', (req, res) => {
		(async() => {
			const users = await User.find({});
			// console.log(users);
			res.render('index', {title: 'Express', users});
		})().catch(e => console.error(e));
	});

	app.get('/events', (req, res) => {
		(async() => {
			let events = await Event.find({}, { _id: 0}).lean();
			for (let idx in events) {
				let _id = mongoose.Types.ObjectId(events[idx].creator);
				const user = await User.findOne({_id: _id});
				// console.log(events[idx], user.name);
				events[idx]['creator'] = user.name;
				events[idx]['created_at'] = events[idx]['created_at'].toISOString().slice(0, 10);
			}
			console.log('changed', events);
			res.render('events', {title: 'Express', events});
		})().catch(e => console.error(e));
	});
};

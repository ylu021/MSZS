const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/users');

const Event = require('../models/events');

const userController =  require('../controllers/user');
const eventController = require('../controllers/event');
/* GET home page. */
/* app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

module.exports = (app) => {
	app.get('/', (req, res) => {
		(async() => {
			const users = await User.find({});
			res.render('index', {title: 'Express', users});
		})().catch(e => console.error(e));
	});
	app.get('/users', userController.list);
	app.get('/users/:id', userController.list);
	app.get('/events', eventController.list);
	app.get('/events/:id', eventController.list);
};

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/users');
const Event = require('../models/events');

const userController =  require('../controllers/user');
const eventController = require('../controllers/event');
const authenticationController = require('../controllers/authentication');
const passportService = require('../config/passport');
const passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

// Constants for role types
const REQUIRE_ADMIN = "Admin",
      REQUIRE_OWNER = "Owner",
      REQUIRE_CLIENT = "Client",
      REQUIRE_MEMBER = "Member";

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
	const apiRoutes = router;
	const authRoutes = router;
	apiRoutes.get('/users', userController.list);
	apiRoutes.get('/users/:id', userController.list);
	apiRoutes.get('/events', eventController.list);
	apiRoutes.get('/events/:id', eventController.list);
	apiRoutes.use('/auth', authRoutes);
	authRoutes.post('/register', authenticationController.register);
	authRoutes.post('/login', requireLogin, authenticationController.login);
	app.use('/api', apiRoutes);
};

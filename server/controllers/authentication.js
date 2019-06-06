const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../config/main');
const crypto = require('crypto');
const passportService = require('../config/passport');
const passport = require('passport');

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080 // in seconds
  });
}

function setUserInfo(request) {
  return {
    _id: request._id,
    name: request.name,
    email: request.email,
    role: request.role,
    profile_fig: request.profile_fig
  };
}

//========================================
// Login Route
//========================================
exports.login = function(req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) { return next(err); }
      if (!user) { return res.status(401).json( { message: info.message }); }
      let userInfo = setUserInfo(user);
      let token = 'JWT ' + generateToken(userInfo);
      res.cookie('Authentication', token, { HttpOnly: true});
      res.status(200).json({
        user: userInfo
      });
  })(req, res, next);
};

//========================================
// Registration Route
//========================================
exports.register = function(req, res, next) {
  // Check for registration errors
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  // Return error if no email provided
  if (!email) {
    return res.status(422).send({ error: 'You must enter an email address.'});
  }
  // Return error if full name not provided
  if (!name) {
    return res.status(422).send({ error: 'You must enter your name.'});
  }
  // Return error if no password provided
  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' });
  }
  User.findOne({ email: email }, function(err, existingUser) {
      if (err) { return next(err); }
      // If user is not unique, return error
      if (existingUser) {
        return res.status(422).send({ error: 'That email address is already in use.' });
      }
      // If email is unique and password was provided, create account
      let user = new User({
        email: email,
        password: password,
        name: name
      });

      user.save(function(err, user) {
        if (err) { return next(err); }
        // Subscribe member to Mailchimp list
        // mailchimp.subscribeToNewsletter(user.email);
        // Respond with JWT if user was created
        let userInfo = setUserInfo(user);
        res.status(201).json({
          token: 'JWT ' + generateToken(userInfo),
          user: userInfo
        });
      });
  });
};

//========================================
// Authorization Middleware
//========================================

// Role authorization check
exports.roleAuthorization = function(role) {
  return function(req, res, next) {
    const user = req.user;

    User.findById(user._id, function(err, foundUser) {
      if (err) {
        res.status(422).json({ error: 'No user was found.' });
        return next(err);
      }

      // If user is found, check role.
      if (foundUser.role == role) {
        return next();
      }

      res.status(401).json({ error: 'You are not authorized to view this content.' });
      return next('Unauthorized');
    });
  };
};

// forgot password
// reset password

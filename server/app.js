const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
// using promise
mongoose.Promise = require('bluebird');
// connect database
mongoose.connect('mongodb://localhost/meishizhaoshi');
const db = mongoose.connection;

const User = require('./models/users');
const Event = require('./models/events');

const dummyUsers = [
  {
    name: 'Chris',
    email: 'chris@gmail.com',
    password: '12345'
  },
  {
    name: 'Bob',
    email: 'bob@gmail.com',
    password: '12345'
  }
];

dummyEvents = [
  {
    name: "dummy event 1",
    description: "",
    location: "",
    num_of_people: 4,
    time: new Date(),
    creator: 'Chris'
  },
  {
    name: "dummy event 2",
    description: "",
    location: "",
    num_of_people: 4,
    time: new Date(),
    creator: 'Chris'
  },
  {
    name: "dummy event 3",
    description: "",
    location: "",
    num_of_people: 4,
    time: new Date(),
    creator: 'Bob'
  }
];

dummyUsers.map((user) => {
  (async() => {
    let newUser = User(user);
    const res = await newUser.save();
    // console.log(res);
  })().catch(e => console.error(e));
});

dummyEvents.map((event) => {
  (async() => {
    const user = await User.findOne({name: event.creator});
    event.creator = user._id;
    let newEvent = Event(event);
    const res = await newEvent.save();
    // console.log(res);
  })().catch(e => console.error(e));
});

// view engine setup
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

routes(app);
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var config = require('./config.js').get(process.env.NODE_ENV);
var db = require('./db');

// Routers
var routerManager = require('./routes/routeManager.js');

var app = express();

console.log("environment: " + process.env.NODE_ENV);

// Connect to Mongo on start
db.connect(config.database, config.databaseName, function (err) {
  if (err) {
    console.log('Unable to connect to MongoDb!');
    process.exit(1);
  } else {
    console.log('Connected to MongoDb!');
  }
});


// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* This will be our Angular folder:
 * we put in this folder the angular generated dist folder files.
 * With this statement Angular can async load the static files and 
 * do his stuff.
 */
app.use(express.static(path.join(__dirname, 'angularApp')));

// Controller and url mapping
app.use('/filmRentalNodeJs',routerManager);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

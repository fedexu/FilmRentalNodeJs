var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var config = require('./config.js').get(process.env.NODE_ENV);
var db = require('./db');

// Routers
var indexRouter = require('./routes/index');
var filmRouter = require('./routes/film');

var app = express();

console.log("environment: " + process.env.NODE_ENV);

// Connect to Mongo on start
db.connect(config.database, config.databaseName, function (err) {
  if (err) {
    console.log('Unable to connect to MongoDb!.');
    process.exit(1);
  } else {
    console.log('Connected to MongoDb!.');
  }
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// URL mapping
app.use('/', indexRouter);
app.use('/film',filmRouter);

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
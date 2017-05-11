var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var dbUrl = 'mongodb://localhost/bchang-spotify';
var dbHeroku = 'mongodb://heroku_n7gnhzpc:v40709mc50122j2cfava108ntl@ds129651.mlab.com:29651/heroku_n7gnhzpc';

mongoose.connect(dbUrl, function(err, res){
  if(err){
    console.log('DB CONNECTION FAILED', err);
  } else {
    console.log('DB CONNECTION SUCCESS', dbUrl);
  }
});

var index = require('./routes/index');
var api = require('./routes/api');
var login = require('./routes/login');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// create a static path for linking css files in node modules
app.use('/style', express.static(__dirname + '/node_modules/'));

app.use('/', index);
app.use('/api', api);
app.use('/', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');});



module.exports = app;

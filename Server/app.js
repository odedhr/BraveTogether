var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var initDB = require('./db/dbInit');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser =require( 'body-parser')
var app = express();
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
initDB.initDB()
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*bodyparser setup
  allowing bodyparser to pares the request that are comming 
  and make them readble by the api
*/



module.exports = app;

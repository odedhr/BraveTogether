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


const{google} = require('googleapis');
const keys = require('./keys.json');

const client = new google.auth.JWT(
  keys.client_email,
  null, 
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err,tokens){
  if(err){
    console.log(err);
    return;
  }else{
    console.log('Connected!');
    gsrun(client);
  }
});


async function gsrun(cl){
  const gsapi = google.sheets({version:'v4', auth: cl });

  const options = {
    spreadsheetId: '1dXiQOeqbLORhQ8XTROrN-GSpn4DOR2nOJblKM_eH1Ws',
    range: 'Data!A1:E5'
  };

  let data = await gsapi.spreadsheets.values.get(options);
  let dataArray = data.data.values; //reads sheet values
  
  console.log(dataArray);
  
  
  
  let newDataArray = dataArray.map(function(r){
    r.push(r[0] + '-' + r[1]);
    return r;
  });
  console.log(newDataArray);
}
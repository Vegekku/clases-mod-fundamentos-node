var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Conexión a la base de datos
 */
require('./lib/connectMongoose');
require('./models/Agente');

app.use((request, response, next) => {
  // tengo que responder o llamar a next
  // console.log('recibimos una petición');
  // response.send('hola');
  // next(new Error('Chungo')); // esto saltará hasta error handler
  next();
})

/**
 * Variables goblales de vistas
 */
app.locals.titulo = 'NodeApp';

/**
 * Rutas de nuestro API
 */
app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));

/**
 * Rutas de nuestra aplicación web
 */
app.use('/', require('./routes/index'));
//app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // error de validación
  if (err.array) {
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true})[0];
    isAPIRequest(req);
    //console.log(errInfo);
    err.message = isAPIRequest(req) ?
      { message: 'Not valid', errors: err.mapped() } :
      `Not valid - ${errInfo.param} ${errInfo.msg}`;
  }

  // render the error page
  res.status(err.status || 500);

  // si es una petición de API respondo con JSON
  if (isAPIRequest(req)) {
    res.json({ success: false, error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.render('error');
});

function isAPIRequest(req) {
  return req.originalUrl.indexOf('/apiv1') === 0;
  //console.log(req.originalUrl);
}

module.exports = app;

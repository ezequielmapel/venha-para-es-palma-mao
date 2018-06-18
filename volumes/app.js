var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./config/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var functionDb = require('./config/functionDb');
var app = express();
database.initializeMongo();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// GET's para a pesquisa no banco
app.get('/buscar-cpf', function(req, res){
    functionDb.acharConcurso(req.query.cpf, res);
});

app.get('/buscar-cod', function(req, res){
    functionDb.acharCandidato(req.query.cod, res);
});


var port = 80;
app.listen(port, function(){
  console.log('Listen on '+port);
});

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var leiturasRouter = require('./routes/leituras');
var relatoriosRouter = require('./routes/relatorios');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.use('/relatorio', relatoriosRouter);

module.exports = app;

const banco = require("./app-banco");

banco.connection.connect(function (erro){
    if (!erro) {
        console.log("Conexão com banco funcionando corretamente");
    } else {
        console.log("Conexão com banco falhou");
    }
});
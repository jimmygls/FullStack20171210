"use strict";
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http');
var port = process.env.port || 1337;

mongoose.connect('mongodb://pruebas:pruebas@ds117615.mlab.com:17615/directorio');

app.use('/', express.static('./'));
app.get('/', function (req, res) {
    res.sendFile('default.html', { root: __dirname });
});
app.listen(port);
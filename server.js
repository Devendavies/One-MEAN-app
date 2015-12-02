'use strict';
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:12345'); // Suppose to be different from server listener?

/* check if connected to mongoose */
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('mongoose connected');
});

const routes = require('./config/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* add angular static route */
app.use('/', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'))
app.use(routes);

const server = app.listen(3000, () => {
  console.log('server running')
})

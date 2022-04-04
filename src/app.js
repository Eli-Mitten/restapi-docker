const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));

app.use(require('./routes/index.js'))

module.exports = app;
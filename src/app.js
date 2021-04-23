const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// routes
const indexRouter = require('./routes/index');

// attach utilities to application
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/v1', indexRouter);

module.exports = app;

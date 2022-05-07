require('express-async-errors');
require('dotenv').config()

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var path = require('path');
var createError = require('http-errors');

var app = express();

const indexRoute = require("./routes/index");
const productRoute = require("./routes/product");
const evolutionRoute = require("./routes/evolution");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// Appel des routes
app.use('/api', indexRoute);
app.use('/api/product', productRoute);
app.use('/api/evolution', evolutionRoute);

// catch 404 and forward to error handlers
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	console.log(err);
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.send(err.message || 'error');
});

module.exports = app;

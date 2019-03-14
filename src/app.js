// Dependencies
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const errorHandler = require('errorhandler');
const cookieparser = require('cookie-parser');
const mysql = require('mysql');
const MySQLStore = require('express-mysql-session')(session);
const myConnection = require('express-myconnection');
const configurePassport = require('./utils/initpassport');

// Config
const config = require('../config/config');

// Router import
const appRouter = require('./routes');

// Set up MySQL connection for session storage
const mySqlSessionStore = new MySQLStore(config.databaseConfig);
config.sessionConfig.store = mySqlSessionStore;

// Middleware for


const isProduction = process.env.NODE_ENV === 'production';

// Initialise express
const app = express();

// Middleware
app.use(cookieparser());
app.use(session(config.sessionConfig));
app.use(myConnection(mysql, config.databaseConfig, 'single'));
app.use(passport.initialize());
app.use(passport.session());

// Configure authentication handling passport.js
configurePassport();

if (!isProduction) {
  app.use(errorHandler());
}

app.use(appRouter);

app.listen(process.env.PORT || 8080);

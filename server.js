#!/usr/bin/env node

/**
 * Module dependencies.
 */
var express = require('express');
// var app = require('./app');
// var debug = require('debug')('foodies-backend:server');
// var http = require('http');
var cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config();

/**
 * Get port from environment and store in Express.
 */
var app = express();
var port = process.env.PORT || '3000';

app.use(cors());
app.use(express.json());


var uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.createConnection(uri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);


var connection = mongoose.connection;
connection.once('open', () => {
  console.log("MDB connected");
})

// var recipesRouter = require('/routes/recipes');
//var usersRouter = require('./routes/users');
// var favRouter = require('/routes/fav');

// app.use('/recipes', recipesRouter);
//app.use('/users', usersRouter);
// app.use('/fav', favRouter);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});


// /**
//  * Create HTTP server.
//  */

// var server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// /**
//  * Normalize a port into a number, string, or false.
//  */

// function normalizePort(val) {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// }

// /**
//  * Event listener for HTTP server "error" event.
//  */

// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   var bind = typeof port === 'string'
//     ? 'Pipe ' + port
//     : 'Port ' + port;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */

// function onListening() {
//   var addr = server.address();
//   var bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;
//   debug('Listening on ' + bind);
// }

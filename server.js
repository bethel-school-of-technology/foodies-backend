
var express = require('express');
var app = require('./app');
// var debug = require('debug')('foodies-backend:server');
// var http = require('http');
var cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config();

/**
 * Get port from environment and store in Express.
 */
var app = express();
var port = process.env.PORT || '3001';

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

var recipesRouter = require('/routes/recipes');
var usersRouter = require('./routes/users');
var favRouter = require('/routes/fav');

app.use('/recipes', recipesRouter)
app.use('/users', usersRouter);
app.use('/fav', favRouter);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

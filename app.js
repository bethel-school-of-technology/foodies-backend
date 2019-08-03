// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// import mongoose from 'mongoose';
// import cors from 'cors';
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var recipesRouter = require('./routes/recipes');
// var usersRouter = require('./routes/users');
// var favRouter = require('./routes/fav');

// var app = express();
// //var router = express.Router();

// //var db = process.env.MongoDB_PW;

// mongoose.connect(db, {
//     useNewUrlParser: true
//  })
//  .then(() => {
//     console.log('MB Connected ')
//    },
//   error => {
//      console.log('Could not connected to database : ' + error)
//    }
//  )

//  mongoose.set('useCreateIndex', true);
//  //const connection = mongoose.connection;

// // view engine setup
// //app.set('views', path.join(__dirname, 'views'));
// //app.set('view engine', 'jade');

// // allow CORS:
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next();
// });

// app.use(logger('dev'));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



// var port = process.env.PORT || 3000;
// var server = app.listen(port, () => {
//   console.log('Connected to port ' + port)
//  })

//  app.use('/recipes', recipesRouter);
//  app.use('/users', usersRouter);
//  app.use('/fav', favRouter);

// //catch 404 and forward to error handler
// app.use(function(req, res, next) {
// next(createError(404));
// });

//  // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//    res.locals.message = err.message;
//    res.locals.error = req.app.get('env') === 'development' ? err : {};

//    // render the error page
//    res.status(err.status || 500);
//    res.render('error');
//  });


//  module.exports = app;
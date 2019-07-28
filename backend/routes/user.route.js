const express = require('express');
const app = express();
const userRoute = express.Router();

let Recipe = require('../model/Recipes');

userRoute.route('/:id').get(req, res, next) 
  res.json({
    user_id: '1234',
    password: '1234',
  });

userRoute.route('/add-recipe').post((req, res, next) => {
  Recipe.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

userRoute.route('/:id').get((req, res) => {
  Recipe.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
})

userRoute.route('/read-recipe/:id').get((req, res) => {
  Recipe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


userRoute.route('/update-recipe/:id').put((req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Recipe updated!')
    }
  })
})

userRoute.route('/delete-recipe/:id').delete((req, res, next) => {
  Recipe.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;

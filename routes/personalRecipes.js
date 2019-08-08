var express = require('express');
var router = express.Router();


const PersonalRecipes = require('../models/Recipes');

//GET list of Personal Recipes

router.get('/api/myrecipes', function(req, res, next) {
  res.send('respond with a resource');
});

//CREATE a personal recipe

router.post("/api/personalRecipes", (req, res, next) => {
  const PersonalRecipe = new PersonalRecipes({
    title: req.body.title,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  });
  PersonalRecipe.save();
  res.status(201).json({
    message: 'Recipe added successfully'
  });
});

//Get one personal Recipe

router.get("/api/personalRecipes", (req, res, next) => {
  PersonalRecipe.findOneById()
});

//DELETE a personal recipe

router.delete('/api/personalRecipes', function (req, res) {
  res.send('Deleted');
})


module.exports = router;
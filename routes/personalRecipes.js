var express = require('express');
var router = express.Router();


const PersonalRecipes = require('../models/Recipes');

//GET list of Personal Recipes

router.get('/all', (req, res, next) => {
  PersonalRecipes.find().then(documents => {
    res.status(200).json({
      message: "Recipes fetched successfully",
      recipes: documents
    });
  });
});

//CREATE a personal recipe

router.post("/createRecipe", (req, res, next) => {
  const PersonalRecipe = new PersonalRecipes({
    title: req.body.title,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  });
  PersonalRecipe.save().then(createdRecipe => {
    res.status(201).json({
      message: "Recipe added successfully",
      recipeId: createdRecipe._id
    });
  });
});

//Get one personal Recipe

router.get("/:id", (req, res, next) => {
  PersonalRecipe.findById(req.params._id).then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({message: "Recipe not found!"});
    }
  });
});

//DELETE a personal recipe

router.delete('/:id', (req, res) => {
  PersonalRecipes.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Recipe Deleted!" });
  });
})


module.exports = router;
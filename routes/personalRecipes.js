var express = require('express');
var router = express.Router();

const checkAuth = require("../middleware/check-auth");

const PersonalRecipes = require('../models/Recipes');

//GET list of Personal Recipes

router.get('/all', checkAuth, (req, res, next) => {
  PersonalRecipes.find().then(documents => {
    res.status(200).json({
      message: "Recipes fetched successfully",
      recipes: documents
    });
  });
});

//CREATE a personal recipe

// router.post("/createdRecipe", (req, res, next) => {
//   const PersonalRecipe = new PersonalRecipes({
//     title: req.body.title,
//     ingredients: req.body.ingredients,
//     directions: req.body.directions
//   });
//   PersonalRecipe.save().then(createdRecipe => {
//     res.status(201).json({
//       message: "Recipe added successfully",
//       recipeId: createdRecipe._id
//     });
//   });
// });

router.post("/createdRecipe", (req, res, next) => {
  const PersonalRecipe = new PersonalRecipes({
    title: req.body.title,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  });
  PersonalRecipe.save((err, response)=>{
    if(err) res.status(400).send(err)
    res.status(200).send(response)
});
console.log(PersonalRecipe);
});

//Get one personal Recipe

// router.get("/:id", checkAuth, (req, res, next) => {
//   PersonalRecipe.findById(req.params._id).then(recipe => {
//     if (recipe) {
//       res.status(200).json(recipe);
//     } else {
//       res.status(404).json({message: "Recipe not found!"});
//     }
//   });
// });

router.get("/:id", (req, res, next) => {
  PersonalRecipe.findById(req.params._id).then(recipe => {
    if (recipe) {
      console.log(recipe);
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
});


module.exports = router;
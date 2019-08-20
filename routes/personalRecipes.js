var express = require('express');
var router = express.Router();

const checkAuth = require("../middleware/check-auth");

const PersonalRecipes = require('../models/Recipes');


//CREATE a personal recipe 

router.post("/createdRecipe", checkAuth, (req, res, next) => {
  const PersonalRecipe = new PersonalRecipes({
    title: req.body.title,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    userId: req.userData.userId
  });
  PersonalRecipe.save((err, response)=>{
    if(err) res.status(400).send(err)
    res.status(200).send(response)
});
console.log(PersonalRecipe);
});

//GET list of Personal Recipes 

router.get('/all', checkAuth, (req, res, next) => {
  PersonalRecipes.find({userId: req.userData.userId}).then(documents => {
    res.status(200).json({
      message: "Recipes fetched successfully",
      recipes: documents
    });
  });
});

//GET one personal Recipe 

router.get("/:_id", checkAuth, (req, res, next) => {
  PersonalRecipes.findById(req.params._id).then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({message: "Recipe not found!"});
    }
  });
});

//DELETE a personal recipe 

router.delete('/:id', checkAuth, (req, res) => {
  PersonalRecipes.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Recipe Deleted!" });
  });
});


module.exports = router;
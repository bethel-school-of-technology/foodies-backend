var express = require('express');
var router = express.Router();
const checkAuth = require("../middleware/check-auth");

const FavoriteRecipes = require('../models/favoriteRecipes');

//CREATE a favorite recipe or "favorite" a recipe

router.post("/favorite", checkAuth, (req, res, next) => {
  const FavoriteRecipe = new FavoriteRecipes({
    recipeId: req.body.recipe_id,
    userId: req.userData.userId
  });
  FavoriteRecipe.save((err, response)=>{
    if(err) res.status(400).send(err)
    res.status(200).send(response)
});
console.log(FavoriteRecipe);
});

//GET list of favorited recipes

router.get('/all', checkAuth, (req, res, next) => {
    FavoriteRecipes.find({userId: req.userData.userId}).then(documents => {
      res.status(200).json({
        message: "Recipes fetched successfully",
        recipes: documents
      });
    });
  });

//GET one favorite recipe 

router.get("/:_id", checkAuth, (req, res, next) => {
  FavoriteRecipes.findById(req.params._id).then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({message: "Recipe not found!"});
    }
  });
});

//DELETE/clear a favorited recipe 

router.delete('/:id', checkAuth, (req, res) => {
  FavoriteRecipes.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Recipe Deleted!" });
  });
});


module.exports = router;
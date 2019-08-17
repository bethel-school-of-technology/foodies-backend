var express = require('express');
var router = express.Router();
const checkAuth = require("../middleware/check-auth");

const FavoriteRecipes = require('../models/favoriteRecipes');

//CREATE a favorite recipe "favorite a recipe"
// how do i get recipe_id from frontend? 
// needed: recipe_id from the frontend. 

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

  // you have the authenticated user id. 
  // the frontend need to send the recipe id. recipe_id= 123
  // save the user_id, recipe_id in the favoriteRecipies document. 

//GET list of favorited recipes

router.get('/all', checkAuth, (req, res, next) => {
    FavoriteRecipes.find({userId: req.userData.userId}).then(documents => {
      res.status(200).json({
        message: "Recipes fetched successfully",
        recipes: documents
      });
    });
  });

      // you know who's the authenticated user. --> you can get the user id
    // query the likedrecicpies document, where the user_id = authenticated user. 
    // let favs = [{user_id: userId, RecipeId = recipe_id}, {user_id, recipe_id}]
    // loop over "favs", for each recipe_id, make an api call to the public recipes endpoint. 
    // save all the values in some array or collection. 
    // return the array/collection 
  
  
    // frontend: 
    // RecipiesListComponent: list all recipies. 

//GET one favorite recipe where user ==== auth user from jwt?

router.get("/:_id", checkAuth, (req, res, next) => {
  FavoriteRecipes.findById(req.params._id).then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({message: "Recipe not found!"});
    }
  });
});

module.exports = router;
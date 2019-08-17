var express = require('express');
var router = express.Router();
const checkAuth = require("../middleware/check-auth");

const favoriteRecipes = require('../models/favoriteRecipes');

//CREATE a favorite recipe "favorite a recipe" recipe_id ; user._id
// how do i get recipe_id from frontend? How do I get userid from jwt?

router.post("/favorite", (request, response, next) => {
  const FavoriteRecipe = new favoriteRecipes({
    recipeId: req.params.recipe_id,
    userId: req.params.user._id // use jwt token for this instead of req.params...
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

router.get('/all', (req, res, next) => {
    FavoriteRecipes.find().then(documents => {
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

router.get("/:_id", (req, res, next) => {
  favoriteRecipes.findById(req.params._id).then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({message: "Recipe not found!"});
    }
  });
});

module.exports = router;
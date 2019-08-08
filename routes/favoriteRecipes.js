var express = require('express');
var router = express.Router();

const favoriteRecipes = require('../models/favoriteRecipes');

//GET list of favorited recipes

router.get("/all", (request, response, next) => {
    // you know who's the authenticated user. --> you can get the user id
    // query the likedrecicpies document, where the user_id = authenticated user. 
    // let favs = [{user_id, recipe_id}, {user_id, recipe_id}]
    // loop over "favs", for each recipe_id, make an api call to the public reciupies endpoint. 
    // save all the values in some array or collection. 
    // return the array/collection 
  
  
    // frontend: 
    // RecipiesListComponent: list all recipies. 
  });

//GET one favorite recipe
router.get("/:id", (req, res, next) => {

});

//CREATE a favorite recipe "favorite a recipe"

router.post("/favorite", (request, response, next) => {
    // you have the authenticated user id. 
    // the frontend need to send the recipe id. recipe_id= 123
    // save the user_id, recipe_id in the likedRecipies document. 
  });

module.exports = router;
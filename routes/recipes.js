var router = require('express');
var Recipes = require('./models/recipes.model');

router.route('/').get((req, res) => {
Recipes.find()
  .then(recipes => res.json(recipes))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  var rectitle = req.body.rectitle;
  var ingredients = req.body.ingredients;
 // var directions = req.body.directions;
    
  var newRecipes = new Recipe ({
    rectitle,
    ingredients,
  });

    newRecipes.save()
    .then(() => res.json('Recipe added'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});
  
  

module.exports = router;
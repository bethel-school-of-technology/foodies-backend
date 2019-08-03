var router = require('express');
var Recipes = require('./models/recipes.model');

router.route('/').get((req, res) => {
Recipes.find()
  .then(recipes => res.json(recipes))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  var title = req.body.title;
  var ingredients = req.body.ingredients;
 // var directions = req.body.directions;
    
  var newRecipes = new Recipe ({
    title,
    ingredients,
  });

    newRecipes.save()
    .then(() => res.json('Recipe added'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});
  
router.route('/:id').get((req, res) => {
  Recipes.findById(req.params.id)
  .then(recipes => res.json(exercise))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Recipes.findByIdAndDelete(req.params.id)
  .then(() => res.json('Recipe deleted'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipes.findById(req.params.id)
  .then(recipes => {
    recipes.title = req.body.title;
    recipes.ingredients = req.body.ingredients;

    recipes.save()
    .then(() => res.json('Recipe updated'))
    .catch(err => res.status(400).json('Error: ' + err));
  })

  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
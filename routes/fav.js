var router = require('express');
var Favorite = require('./models/fav.model');

router.route('/').get((req, res) => {
Favorite.find()
  .then(favorites => res.json(favorites))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
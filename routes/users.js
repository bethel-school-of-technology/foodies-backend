var router = require('express');
var Users = require('./models/users.model');

router.route('/').get((req, res) => {
  Users.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  var username = req.body.username;
  var newUser = new Users({username});
  newUser.save()
  .then(() => res.json('User added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
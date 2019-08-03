var express = require('express');
var router = express.Router();
//var router = require('express').Router;
let Users = require('../models/users.model');

router.get('/').get((req, res) => {
  Users.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
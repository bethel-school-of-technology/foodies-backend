var express = require('express');
var router = express.Router();

var Users = require('../models/users');

//Sign up (CREATE user)

router.post('/signup', function(req, res, next) {
    const user = new Users({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
  });

//Log in 

router.post('/login', function(req, res, next) {
    res.send('respond with a resource');
  });

//GET profile page
router.get('/profile/:id', function(req, res, next) {
    res.send('respond with a resource');
  });

//log out

router.post('/logout', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;
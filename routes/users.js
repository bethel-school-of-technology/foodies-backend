var express = require('express');
var router = express.Router();

//Sign up (CREATE user)

router.post('/api/users', function(req, res, next) {
    res.send('respond with a resource');
  });

//Log in 

router.post('/api/users/login', function(req, res, next) {
    res.send('respond with a resource');
  });

//GET profile page
router.get('/api/users/profile', function(req, res, next) {
    res.send('respond with a resource');
  });

//log out

router.post('/api/users/logout', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;
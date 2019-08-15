var express = require('express');
require('dotenv').config();
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require("../middleware/check-auth");

var Users = require('../models/users');

//Sign up (CREATE user)

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new Users({
            username: req.body.username,
            password: hash,
            email: req.body.email
        });
        user.save((err, response)=>{
            if(err) res.status(400).send(err)
            res.status(200).send(response)
        });
        console.log(user);
        });
    });

//Log in 

  router.post('/login', function(req, res, next) {
    Users.findOne({ email: req.body.email, username: req.body.username}).then(user => {
        if (!user) {
            return res.status(401).json({
                message:"Auth Failed"
            });
        };
        if (bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign(
                {username: user.username, userId: user._id}, 
                process.env.SECRET,
            { expiresIn: '1h' }
            );
            res.status(200).json({
                token: token
            });
        } else {
            return res.status(401).json({
                message: "auth failed"
            });
        }
    });
  });

//GET profile page
// router.get('/profile/:id', checkAuth function(req, res, next) 
//     res.send('respond with a resource');
//   });

router.get("/profile/:_id", (req, res, next) => {
    Users.findById(req.params._id).then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({message: "User not found!"});
      }
    });
  });

//log out

// router.post('/logout', function(req, res, next) {
//     res.send('respond with a resource');
//   });

router.get('/', function(req, res) {
    console.log('You successfully created a GET route!');
  });

module.exports = router;
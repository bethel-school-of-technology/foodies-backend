var express = require('express');
require('dotenv').config();
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var Users = require('../models/users');

//Sign up (CREATE user)

router.post('/test', (req, res) => {
    const user = new Users({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    user.save((err, response)=>{
        if(err) res.status(400).send(err)
        res.status(200).send(response)
    });
    console.log(user);
})

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

// router.post('/signup', (req, res, next) => {
//     bcrypt.hash(req.body.password, 10)
//     .then(hash => {
//         const user = new Users({
//             username: req.body.username,
//             password: hash,
//             email: req.body.email
//         });
//         user.save()
//         .then(result => {
//             res.status(201).json({
//                 message: 'user created!',
//                 result: result
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             });
//         });
//     });
//   });

//Log in 

router.post('/login', function(req, res, next) {
    let fetchedUser;
    Users.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(401).json({
                message:"Auth Failed"
            });
        }
        let fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
        if (!result) {
            return res.status(401).json({
                message: "Auth Failed"
             });
        }
        const token = jwt.sign(
            {username: fetchedUser.username, userId: fetchedUser._id}, 
            process.env.SECRET,
        { expiresIn: '1h' }
        );
        res.status(200).json({
            token: token
        });
    })
    .catch(err => {
        return res.status(401).json({
            message: "Auth Failed"
        });
    });
  });

//GET profile page
// router.get('/profile/:id', function(req, res, next) {
//     res.send('respond with a resource');
//   });

//log out

// router.post('/logout', function(req, res, next) {
//     res.send('respond with a resource');
//   });

router.get('/', function(req, res) {
    console.log('You successfully created a GET route!');
  });

module.exports = router;
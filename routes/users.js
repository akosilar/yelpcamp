const express = require('express')
const router = express.Router()
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')
const users = require('../controllers/users')


router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))


router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local',{failureFlash: true, failureRedirect: '/login',keepSessionInfo:true}), users.login)
    
// router.get('/register', users.renderRegister)

// router.post('/register',catchAsync(users.register))

// router.get('/login', users.renderLogin)

// router.post('/login', passport.authenticate('local',{failureFlash: true, failureRedirect: '/login',keepSessionInfo:true}), users.login)

router.get('/logout', users.logout)
module.exports = router;
const express = require('express')
const router = express.Router()
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')
const users = require('../controllers/users')

router.get('/register', users.renderRegister)

router.post('/register',catchAsync(users.register))

router.get('/login', users.renderLogin)

router.post('/login', passport.authenticate('local',{failureFlash: true, failureRedirect: '/login',keepSessionInfo:true}), users.login)

router.get('/logout', (req,res) => {
    req.logout(function(err) {
        if(err) {return next(err)}
        req.flash('success', 'goodbye!')
        res.redirect('/campgrounds')
    })
    
})
module.exports = router;
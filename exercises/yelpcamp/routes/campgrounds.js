const express = require('express')
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const Campground = require('../models/campground')
const {isLoggedIn,isAuthor,validateCampground} = require('../middleware');
const campground = require('../models/campground');
const campgrounds = require('../controllers/campgrounds');
const { route } = require('./users');
const multer  = require('multer')
const {storage} = require('../cloudinary')
const upload = multer({storage})

router.route('/')
    .get(catchAsync(campgrounds.index)) //show a list of campgrounds
    // .post(isLoggedIn,validateCampground,catchAsync(campgrounds.createCampground)) //add the new campground to db
    .post(upload.array('image'),(req,res)=> {
        console.log(req.body,req.files)
        res.send('it works')
    })


//show add new campground page
router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground)) //show campground detail
    .put(isLoggedIn,isAuthor,validateCampground,catchAsync(campgrounds.updateCampground)) //submit the campground edit to db
    .delete(isLoggedIn,isAuthor,catchAsync(campgrounds.delete)) //delete the campground from db



//show a list of campgrounds
// router.get('/', catchAsync(campgrounds.index))



//add the new campground to db
// router.post('/', isLoggedIn,validateCampground,catchAsync(campgrounds.createCampground))

//show campground detail
// router.get('/:id',catchAsync(campgrounds.showCampground))

//show edit campground
router.get('/:id/edit',isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))

//submit the campground edit to db
// router.put('/:id',isLoggedIn,isAuthor,validateCampground,catchAsync(campgrounds.updateCampground))

//delete the campground from db
// router.delete('/:id', isLoggedIn,isAuthor,catchAsync(campgrounds.delete))

module.exports = router
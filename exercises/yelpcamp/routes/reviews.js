const express = require('express')
const router = express.Router({mergeParams: true}); //mergeParams: true allows us to use the :id from app.js
const Campground = require('../models/campground')
const Review = require('../models/review')
const reviews = require('../controllers/reviews')

const ExpressError = require('../utils/ExpressError')
const catchAsync = require('../utils/catchAsync')

const {reviewSchema} = require('../schemas.js')

const {validateReview,isLoggedIn,isReviewAuthor} = require('../middleware');




router.post('/',isLoggedIn,validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn,isReviewAuthor,catchAsync(reviews.deleteReview))

module.exports = router;
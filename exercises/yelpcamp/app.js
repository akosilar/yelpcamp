// import { createRequire } from "module";
// import nodeFetch from 'node-fetch';

// const require = createRequire(import.meta.url);
// import { createApi } from 'unsplash-js';


const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')
const catchAsync = require('./utils/catchAsync')
const ExpressError = require('./utils/ExpressError')
const Campground = require('./models/campground')
const Review = require('./models/review')
const {campgroundSchema,reviewSchema} = require('./schemas.js')

require('dotenv').config();

// const {createApi} = require('unsplash-js')


// const unsplash = createApi({
//     accessKey: '-rzil0-EoZN5be0YoX4LeViR-fJCnP0gdW4pDk5VrPU',
//     fetch: nodeFetch,

// });

// const randomPhoto = unsplash.photos.getRandom({
//     collectionIds: ['483251']
// })

const dbURI = process.env.dbURI
mongoose.connect(dbURI)

const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error'))
db.once('open', () => {
    console.log('db connected')
})

//middleware for ejs, and directory
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method')) //for routes other than get and post
app.engine('ejs', ejsMate)

//server db validation
const validateCampground = (req,res,next) => {
  
    const {error} = campgroundSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg,400)
    } else {
        next()
    }
    // console.log(result)
}

const validateReview = (req,res,next) => {

    const {error} = reviewSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg,400)
    } else {
        next()
    }
}


//show a list of campgrounds
app.get('/campgrounds', async (req,res) => {
   const campgrounds = await Campground.find({})
   res.render('campgrounds/index',{campgrounds})
})

//show add new campground page
app.get('/campgrounds/new', (req,res) => {
    res.render('campgrounds/new')
})
//add the new campground to db
app.post('/campgrounds', validateCampground,catchAsync(async (req,res,next) => {
    // if(!req.body.campground) throw new ExpressError('invalid campground data', 400)

    const campground = new Campground(req.body.campground)
    await campground.save()
    res.redirect(`/campgrounds/${campground._id}`)

}))

//show campground detail
app.get('/campgrounds/:id', catchAsync(async (req,res) => {
    const search = await Campground.findById(req.params.id).populate('reviews')
    res.render('campgrounds/show',{search})
}))

//show edit campground
app.get('/campgrounds/:id/edit',catchAsync(async(req,res) => {
    const search = await Campground.findById(req.params.id)
    res.render('campgrounds/edit',{search})
}))
//submit the campground edit to db
app.put('/campgrounds/:id',validateCampground,catchAsync(async(req,res) => {
    const {id} = req.params
    const update = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    res.redirect(`/campgrounds/${update._id}`)
}))

//delete the campground from db
app.delete('/campgrounds/:id', catchAsync(async(req,res) => {
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')
}))

app.post('/campgrounds/:id/reviews',validateReview, catchAsync(async(req,res) => {
    const campground = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    res.redirect(`/campgrounds/${campground._id}`)
}))

app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async(req,res) => {
    const {id, reviewId} = req.params
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId)
    res.redirect(`/campgrounds/${id}`)
}))

app.all('*', (req,res,next) => {
    next(new ExpressError('Page not found', 404))
})

app.use((err,req,res,next) => {
    const {statusCode = 500,message ='something went wrong'} = err
    if(!err.message) err.message = 'oh noes, something went wrong'
    res.status(statusCode).render('error', {err})
    // res.send('something went wrong')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})


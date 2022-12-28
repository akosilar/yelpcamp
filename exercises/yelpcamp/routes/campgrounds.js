const express = require('express')
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError')
const Campground = require('../models/campground')
const {campgroundSchema} = require('../schemas.js')


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



//show a list of campgrounds
router.get('/', async (req,res) => {
   const campgrounds = await Campground.find({})
   res.render('campgrounds/index',{campgrounds})
})

//show add new campground page
router.get('/new', (req,res) => {
    res.render('campgrounds/new')
})
//add the new campground to db
router.post('/', validateCampground,catchAsync(async (req,res,next) => {
    // if(!req.body.campground) throw new ExpressError('invalid campground data', 400)

    const campground = new Campground(req.body.campground)
    await campground.save()
    req.flash('success', 'Successfully made a new campground!')
    res.redirect(`/campgrounds/${campground._id}`)

}))

//show campground detail
router.get('/:id', catchAsync(async (req,res) => {
    const search = await Campground.findById(req.params.id).populate('reviews')
    res.render('campgrounds/show',{search})
}))

//show edit campground
router.get('/:id/edit',catchAsync(async(req,res) => {
    const search = await Campground.findById(req.params.id)
    res.render('campgrounds/edit',{search})
}))

//submit the campground edit to db
router.put('/:id',validateCampground,catchAsync(async(req,res) => {
    const {id} = req.params
    const update = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    req.flash('success', 'Successfully updated campground!')
    res.redirect(`/campgrounds/${update._id}`)
}))

//delete the campground from db
router.delete('/:id', catchAsync(async(req,res) => {
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    req.flash('success', 'Successfully deleted campground!')
    res.redirect('/campgrounds')
}))
module.exports = router
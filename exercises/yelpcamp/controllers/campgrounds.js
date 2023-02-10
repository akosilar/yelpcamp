const Campground = require('../models/campground')


module.exports.index = async (req,res) => {
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
 }

 module.exports.renderNewForm = (req,res) => {
    res.render('campgrounds/new')
}

module.exports.createCampground = async (req,res,next) => {
    // if(!req.body.campground) throw new ExpressError('invalid campground data', 400)

    const campground = new Campground(req.body.campground)
    campground.author = req.user._id;
    await campground.save()
    req.flash('success', 'Successfully made a new campground!')
    res.redirect(`/campgrounds/${campground._id}`)

}

module.exports.showCampground = async (req,res) => {
    const search = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author')
    console.log(search)
    if(!search) {
        req.flash('error', 'Cannot find that campground!')
        res.redirect('/campgrounds')
    }else{
        res.render('campgrounds/show',{search})

    }
}

module.exports.renderEditForm = async(req,res) => {
    const {id} = req.params
    const search = await Campground.findById(id)
    if(!search) {
        req.flash('error', 'Cannot find that campground!')
        res.redirect('/campgrounds')
    }
    else {
        
        res.render('campgrounds/edit',{search})

    }
}

module.exports.updateCampground = async(req,res) => {

    const {id} = req.params
    const camp = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    req.flash('success', 'Successfully updated campground!')
    res.redirect(`/campgrounds/${camp._id}`)
}

module.exports.delete = async(req,res) => {
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    req.flash('success', 'Successfully deleted campground!')
    res.redirect('/campgrounds')
}
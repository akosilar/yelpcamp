const Campground = require('../models/campground')
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
const mapBoxToken = process.env.MAPBOX_TOKEN
const geocoder = mbxGeocoding({accessToken: mapBoxToken})
const {cloudinary} = require("../cloudinary")


module.exports.index = async (req,res) => {
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
 }

 module.exports.renderNewForm = (req,res) => {
    res.render('campgrounds/new')
}

module.exports.createCampground = async (req,res,next) => {
    // if(!req.body.campground) throw new ExpressError('invalid campground data', 400)
    const geoData = await geocoder.forwardGeocode({
        query: req.body.campground.location ,
        limit: 1
    }).send()
    // res.send(geoData.body.features[0].geometry.coordinates)

    const campground = new Campground(req.body.campground)
    campground.geometry = geoData.body.features[0].geometry
    campground.images = req.files.map(f => ({url: f.path, filename: f.filename}))
    campground.author = req.user._id;
    await campground.save()
    console.log(campground)
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
    console.log(req.body)
    const camp = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    const imgs = req.files.map(f => ({url: f.path, filename: f.filename}))
    camp.images.push(...imgs)
    await camp.save()
    if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename)
        }
       await camp.updateOne({$pull: {images: {filename: {$in: req.body.deleteImages}}}})
        console.log(camp)
    }
    req.flash('success', 'Successfully updated campground!')
    res.redirect(`/campgrounds/${camp._id}`)
}

module.exports.delete = async(req,res) => {
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    req.flash('success', 'Successfully deleted campground!')
    res.redirect('/campgrounds')
}
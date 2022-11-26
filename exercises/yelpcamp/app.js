const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')
const Campground = require('./models/campground')
require('dotenv').config();


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
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate)


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
app.post('/campgrounds', async (req,res) => {
    const campground = new Campground(req.body.campground)
    await campground.save()
    res.redirect(`/campgrounds/${campground._id}`)
})

//show campground detail
app.get('/campgrounds/:id', async (req,res) => {
    const search = await Campground.findById(req.params.id)
    res.render('campgrounds/show',{search})
})

//show edit campground
app.get('/campgrounds/:id/edit', async(req,res) => {
    const search = await Campground.findById(req.params.id)
    res.render('campgrounds/edit',{search})
})
//submit the campground edit to db
app.put('/campgrounds/:id', async(req,res) => {
    const {id} = req.params
    const update = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    res.redirect(`/campgrounds/${update._id}`)
})

//delete the campground from db
app.delete('/campgrounds/:id', async(req,res) => {
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})


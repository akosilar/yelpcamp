const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
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

//show a list of campgrounds
app.get('/campgrounds', async (req,res) => {
   const campgrounds = await Campground.find({})
   res.render('campgrounds/index',{campgrounds})
})

//show campground detail
app.get('/campgrounds/:id', async (req,res) => {
    const search = await Campground.findById(req.params.id)
    res.render('campgrounds/show',{search})
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})


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


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/campgrounds', async (req,res) => {
   const campgrounds = await Campground.find({})
   res.render('campgrounds/index',{campgrounds})
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})


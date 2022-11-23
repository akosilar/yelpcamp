const mongoose = require('mongoose')

const Campground = require('../models/campground')

require('dotenv').config();


const dbURI = process.env.dbURI
mongoose.connect(dbURI)

const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error'))
db.once('open', () => {
    console.log('db connected')
})

const seedDB = async () => {
    await Campground.deleteMany({});
    const c = new Campground({title: 'purple field'})
    await c.save()
}

seedDB()
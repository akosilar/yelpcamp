const mongoose = require('mongoose')
const cities = require('./cities')
const {places,descriptors} = require('./seedHelpers')
const Campground = require('../models/campground')
const axios = require('axios')

require('dotenv').config();


const dbURI = process.env.dbURI
mongoose.connect(dbURI)

const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error'))
db.once('open', () => {
    console.log('db connected')
})

//pick a random element in an array
const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

  // call unsplash and return small image
  async function seedImg() {
    try {
        
      const resp = await axios.get('https://api.unsplash.com/photos/random', {
        headers: { 
            Accept: 'application/json', 
            'Accept-Encoding': 'identity' },
        params: {
          client_id: '-rzil0-EoZN5be0YoX4LeViR-fJCnP0gdW4pDk5VrPU',
          collections: '483251',
          count       : 15 //max count allowed by unsplash API

        },
      })
      console.log(resp.data[0].urls)
      return resp.data[0].urls.small
    } catch (err) {
      console.error(err)
    }
  }

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i<15; i++) {
        const random1000 = Math.floor(Math.random()* 1000);
        const price = Math.floor(Math.random()* 20)+10;

        const camp = new Campground({
            author: '63ddfcecced5fee816858606',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: await seedImg(),
            description: 'lorem',
            price

        })
        await camp.save()
    }
    // const c = new Campground({title: 'purple field'})
    // await c.save()
}

seedDB().then(() => {
    mongoose.connection.close()
})



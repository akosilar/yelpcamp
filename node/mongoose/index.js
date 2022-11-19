const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(() => {
    console.log('connection to db open')
})
.catch(err => {
    console.log('oh noes errors')
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
const sukob = new Movie({
    title: 'Sukob', 
    year: 2000,
    score: 10,
    rating: 'wow'
})


console.log(sukob)
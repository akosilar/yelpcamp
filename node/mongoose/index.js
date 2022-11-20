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
// const sukob = new Movie({
//     title: 'Sukob', 
//     year: 2000,
//     score: 10,
//     rating: 'wow'
// })

// Movie.insertMany([
//         {title: 'amelie', year: 2081, score: 8.3, rating: 'R' },
//         {title: 'alien', year: 1979, score: 8.1, rating: 'R'},
//         {title: 'the iron giant', year: 1999, score: 7.5, rating: 'PG'},
//         {title: 'stand by me', year: 1986, score: 8.6, rating: 'R'},
//         {title: 'moonrise kingdom', year: 2012, score: 7.3, rating: 'PG-13'}   
// ])
// .then(data => {
//     console.log('it worked')
//     console.log(data)
// })

// console.log(sukob)
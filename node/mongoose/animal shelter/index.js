const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/animalShelter')
.then(() => {
    console.log('connection to db open')
})
.catch(err => {
    console.log('oh noes errors')
    console.log(err)
})

const petSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    catFriendly: Boolean,
    isAvailable: Boolean
})

const Dog = new mongoose.model('Dog', petSchema)

const cooper = new Dog({
    name: 'cooper',
    breed: 'mut',
    age: 3,
    catFriendly: false,
    isAvailable: false
})

// cooper.save()

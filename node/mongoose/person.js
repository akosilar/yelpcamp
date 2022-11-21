const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
    console.log('connection to db open')
})
.catch(err => {
    console.log('oh noes errors')
    console.log(err)
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//virtual property which does not exist within the db
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
}) 


//middleware functions
personSchema.pre('save', async function() {
    this.first = 'YO'
    console.log('about to save')
})

personSchema.post('save', async function() {
    this.last = 'MAMA'
    console.log('just saved')
})


const Person = mongoose.model('Person', personSchema)


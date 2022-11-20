const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
    console.log('connection to db open')
})
.catch(err => {
    console.log('oh noes errors')
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    
})

const Product = mongoose.model('Product', productSchema)

//validation ignored color
// const bike = new Product({name: "Mountain Bike", price: '999', color: 'red'})

bike.save()
.then(data => {
    console.log('it worked')
    console.log(data)
})
.catch(err => {
    console.log('oh noes error')
    console.log(err)
    // console.log(err.errors.name.properties.message)
})
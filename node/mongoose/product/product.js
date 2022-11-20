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
        required: true,
        maxLength:  20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
    
})

const Product = mongoose.model('Product', productSchema)

//validation ignored color
// const bike = new Product({name: "Mountain Bike", price: '999', color: 'red'})

const bike = new Product({name: 'Tire Pump', price: 19.50, categories: ['Cycling']})

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
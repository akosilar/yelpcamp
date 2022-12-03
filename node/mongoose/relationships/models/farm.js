const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log('mongo connection open')
    })
    .catch(err => {
        console.log('oh no, mongo connection error')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})
const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     {name: 'goddess mellon', price: 4.99, season: 'Summer'},
//     {name: 'sugar baby water melon', price: 4.99, season: 'Summer'},
//     {name: 'asparagus', price: 3.99, season: 'Spring'},

// ])

// const makeFarm = async () => {
//     const farm = new Farm({name: 'full belly farms', city: 'guinda, ca'})
//     const melon = await Product.findOne({name: 'goddess mellon'})
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm)
// }

// makeFarm()

// const addProduct = async () => {
//     const farm = await Farm.findOne({name: 'full belly farms'})
//     const watermelon = await Product.findOne({name: 'sugar baby water melon'})
//     farm.products.push(watermelon)
//     await farm.save()
//     console.log(farm)
// }


// addProduct()

Farm.findOne({name: 'full belly farms'})
.populate('products')
.then(farm => console.log(farm))
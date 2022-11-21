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
        min: [0, 'price must be positive']
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
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
    
})

//custom instance method typically for updating an individual product
productSchema.methods.greet = function () {
    console.log('hello hola hi')
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save()
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat)
    return this.save()
}

//static method typically for updating models/products
productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale:true, price: 0})
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Mountain Bike'})
    // foundProduct.greet()
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)

}
//validation ignored color
// const bike = new Product({name: "Mountain Bike", price: '999', color: 'red'})

//triggers price validation min should be positive
// const bike = new Product({name: 'Tire Pump', price: -10, categories: ['Cycling']})

//triggers size validation one of the possible array values in enum
// const bike = new Product({name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS'})


// bike.save()
// .then(data => {
//     console.log('it worked')
//     console.log(data)
// })
// .catch(err => {
//     console.log('oh noes error')
//     console.log(err)
//     // console.log(err.errors.name.properties.message)
// })

// findProduct()

Product.fireSale().then(res => console.log(res))
const express = require('express')
const app = express ();
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')
const methodOverride = require('method-override')
const AppError = require('./appError')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log('mongo connection open')
})
.catch(err => {
    console.log('oh noes. Mongo connection problem')
    console.log(err)
})




app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy', 'mushrooms']

//display all products
app.get('/products', async (req,res,next) => {
    try {
    const {category} = req.query
    if(category){
        const products = await Product.find({category})
        res.render('./products/index', {products, category})

    } else {
        const products = await Product.find({})
        res.render('./products/index', {products, category: 'All'})

    }
    } catch (e) {
    next(e)
    }
    // console.log(products)
})

//show create a product
app.get('/products/new', (req,res) => {
    // throw new AppError('Not allowed', 401)
    res.render('./products/new', {categories})
})

//show product detail
app.get('/products/:id', async (req,res,next) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product) {
        throw next(new AppError('product not found', 404))
        }
        res.render('./products/detail', {product})
        console.log(product)
    }catch (e) {
        next(e)
        }
})

//show edit product
app.get('/products/:id/edit', async (req,res,next) => {
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product) {
            throw next(new AppError('product not found', 404))
        }
        res.render('./products/edit', {product, categories})
        console.log(product)
    } catch(e) {
        next(e)
    }
})

//add the new product to the db
app.post('/products', async (req,res,next) => {
    try {
        const {name, price, category} = req.body
        const newProduct = new Product({name, price, category})
        await newProduct.save()
        console.log(name, price, category)
        res.redirect(`/products/${newProduct.id}`)
    } catch(e){
        next(e)
    }
    
})

//edit the product in the db
app.put('/products/:id', async (req,res,next) => {
    // console.log(req.body)

    try {
        const {id} = req.params
        const {name, price, category} = req.body
        const productUpdate = await Product.findByIdAndUpdate(id, {name,price,category}, {runValidators: true, new: true})
        res.redirect(`/products/${productUpdate._id}`)
    } catch (e) {
        next(e)
    }
    
})

//delete the product in the db
app.delete('/products/:id', async (req,res) => {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products')

})

app.use((err,req,res,next) => {
    const {status = 500, message = 'something went wrong'} = err
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("app is listening on 3000")
})


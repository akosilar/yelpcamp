const express = require('express')
const app = express ();
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')
const methodOverride = require('method-override')


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
app.get('/products', async (req,res) => {
    const products = await Product.find({})
    // console.log(products)
    res.render('./products/index', {products})
})

//show create a product
app.get('/products/new', (req,res) => {
    res.render('./products/new', {categories})
})

//show product detail
app.get('/products/:id', async (req,res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('./products/detail', {product})
    console.log(product)
})

//show edit product
app.get('/products/:id/edit', async (req,res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('./products/edit', {product, categories})
    console.log(product)
})

//add the new product to the db
app.post('/products', async (req,res) => {
    const {name, price, category} = req.body
    const newProduct = new Product({name, price, category})
    await newProduct.save()
    console.log(name, price, category)
    res.redirect(`/products/${newProduct.id}`)
})

//edit the product in the db
app.put('/products/:id', async (req,res) => {
    // console.log(req.body)
    const {id} = req.params
    const {name, price, category} = req.body
    const productUpdate = await Product.findByIdAndUpdate(id, {name,price,category}, {runValidators: true, new: true})
    res.redirect(`/products/${productUpdate._id}`)
})

//delete the product in the db
app.delete('/products/:id', async (req,res) => {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products')

})

app.listen(3000, () => {
    console.log("app is listening on 3000")
})


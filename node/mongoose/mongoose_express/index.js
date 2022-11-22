const express = require('express')
const app = express ();
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')

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

//display all products
app.get('/products', async (req,res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('./products/index', {products})
})

app.get('/products/:id', async (req,res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    res.render('./products/detail', {product})
    console.log(product)
})

app.listen(3000, () => {
    console.log("app is listening on 3000")
})


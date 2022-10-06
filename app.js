const express = require('express');
const mongoose = require('mongoose')
const addProductController = require('./controller/addProduct.controller');
const getAllProductsController = require('./controller/getAllProduct.controller');
const getPublishedProductsController = require('./controller/getPublishedProducts.controller');
const getProductByIdController = require('./controller/getProductById.controller');
const deleteController = require('./controller/delete.controller');
const updateController = require('./controller/update.controller');
const getProductsByNameController = require('./controller/getProductsByName.controller');


//express app
const app = express();


const dbURI = 'mongodb+srv://kai:kai123@cluster0.jpzx00u.mongodb.net/test';

mongoose.connect(dbURI)
    .then((result) => {

        app.listen(3000);
        console.log('connected to the database');
    })
    .catch((err) => {
        console.log(err);
    })


//register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


//middleware & static files
app.use(express.urlencoded());
app.use(express.json());


//-----APIs-------//

//---all products

app.get('/api/products', getAllProductsController.getAllProducts);


//---get product by id

app.get('/api/product/:id', getProductByIdController.getProductById);


//---add new product

app.post('/api/products', addProductController.createProduct);


//---update product

app.put('/api/products/:id', updateController.updateProduct)


//---delete method

app.delete('/api/products/:id', deleteController.deleteOne);


//---delete all

app.delete('/api/products', deleteController.deleteAll);


//---find all published products

app.get('/api/products/published', getPublishedProductsController.getPublishedProducts);


//---find all products by name

app.get('/api/productsbyname', getProductsByNameController.getProductsByName);


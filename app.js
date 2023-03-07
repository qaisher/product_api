const express = require('express');
const mongoose = require('mongoose');


//user authentication middleware
const Auth = require('./auth/token_validation');


//-------------controllers start-------------------

const addProductController = require('./controller/addProduct.controller');
const getAllProductsController = require('./controller/getAllProduct.controller');
const getPublishedProductsController = require('./controller/getPublishedProducts.controller');
const getProductByIdController = require('./controller/getProductById.controller');
const deleteController = require('./controller/delete.controller');
const updateController = require('./controller/update.controller');
const getProductsByNameController = require('./controller/getProductsByName.controller');
const addUserController = require('./controller/addUser.controller');
const userLoginController = require('./controller/userLogin.controller');
const updateUserController = require('./controller/updateUser.controller');
const  getProductsByUserIdController = require('./controller/getProductsByUserId.controller');
const deleteMyProductController = require('./controller/deleteMyProduct.controller');
const addProductByUserIdController = require('./controller/addProductByUserId.controller');
const updateProductByUserIdController = require('./controller/updateProductByUserId.controller');

//--------------controllers end---------------------


//express app
const app = express();


//database uri
const dbURI = 'mongodb+srv://kai:kai123@cluster0.jpzx00u.mongodb.net/test';


//connection
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



//------APIs-------//

//---all products

app.get('/api/products', Auth.checkToken, getAllProductsController.getAllProducts);



//---get product by id

app.get('/api/product/:id', Auth.checkToken, getProductByIdController.getProductById);



//---add new product

app.post('/api/products', Auth.checkToken, addProductController.createProduct);



//---update product

app.put('/api/products/:id', Auth.checkToken, updateController.updateProduct)



//---delete method

app.delete('/api/products/:id', Auth.checkToken, deleteController.deleteOne);



//---delete all

app.delete('/api/products', Auth.checkToken, deleteController.deleteAll);



//---find all published products

app.get('/api/products/published', Auth.checkToken, getPublishedProductsController.getPublishedProducts);



//---find all products by name

app.get('/api/productsbyname', Auth.checkToken, getProductsByNameController.getProductsByName);





//---------user based APIs--------//

//---user login - done

app.post('/api/login', userLoginController.userLogin);



//---add user - done

app.post('/api/users', addUserController.addUser);



//---update user - auth table not done

app.put('/api/users/:id', Auth.checkToken, updateUserController.updateUser);



//---add products by userId - done

app.post('/api/addmyproducts', Auth.checkToken, addProductByUserIdController.createProduct);



//---get products by userId - done

app.get('/api/myproducts/:userId', Auth.checkToken, getProductsByUserIdController.getProductsByUserId); //for products of logged in user, use all products api (line 64)



//---remove products by product id and user id - done

app.delete('/api/deletemyproducts/:id', Auth.checkToken, deleteMyProductController.deleteMyProduct);



//---update products by product id and user id

app.put('/api/editmyproducts/:id', Auth.checkToken, updateProductByUserIdController.updateMyProduct);
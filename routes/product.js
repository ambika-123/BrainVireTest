const path = require('path');

const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

// /admin/products => GET
router.get('/products', productController.getProducts);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

router.post('/edit-product', productController.postEditProduct);

router.post('/delete-product', productController.postDeleteProduct);

module.exports = router;

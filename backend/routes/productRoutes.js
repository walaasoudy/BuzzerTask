const express = require('express');
const upload = require('../middleware/upload');
const ProductController = require('../controllers/productController');
const router = express.Router();

// Route to add a new product
router.post('/', upload.single('image'), ProductController.addProduct);

// Route to fetch all products
router.get('/', ProductController.getProducts);

module.exports = router;

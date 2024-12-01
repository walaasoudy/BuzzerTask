const ProductModel = require('../models/productModel');

exports.addProduct = (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const productData = [title, image, description];
  ProductModel.insertProduct(productData, (err, result) => {
    if (err) {
      console.error('Error inserting product:', err);
      return res.status(500).json({ message: 'Error inserting product' });
    }
    res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
  });
};

exports.getProducts = (req, res) => {
  ProductModel.getAllProducts((err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      return res.status(500).json({ message: 'Error fetching products' });
    }
    res.json(results);
  });
};

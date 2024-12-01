const db = require('../config/db');

// Insert a product into the database
const insertProduct = (productData, callback) => {
  const query = `
    INSERT INTO Products (title, image, description)
    VALUES (?, ?, ?)
  `;
  db.query(query, productData, callback);
};

// Retrieve all products from the database
const getAllProducts = (callback) => {
  const query = 'SELECT * FROM Products';
  db.query(query, callback);
};

module.exports = { insertProduct, getAllProducts };

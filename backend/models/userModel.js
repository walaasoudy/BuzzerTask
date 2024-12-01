const db = require('../config/db');

exports.insertUser = (userData, callback) => {
  const query = `
    INSERT INTO Users (type, full_name, email, mobile_number, password, address, city, image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, userData, callback);
};

const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

exports.registerUser = (req, res) => {
  const { type, full_name, email, mobile_number, password, address, city } = req.body;
  const image = req.file ? req.file.path : null;

  if (!type || !full_name || !email || !mobile_number || !password || !address || !city) {
    return res.status(400).json({ message: 'All fields are required except image' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    userModel.insertUser([type, full_name, email, mobile_number, hashedPassword, address, city, image], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ message: 'Error inserting user' });
      }
      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
  });
};

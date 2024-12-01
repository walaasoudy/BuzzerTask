const restaurantModel = require('../models/restaurantModel');

exports.addRestaurant = (req, res) => {
  const { title, type, location } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : '';

  if (!title || !type || !location || !image_url) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  restaurantModel.insertRestaurant([title, type, location, image_url], (err, result) => {
    if (err) {
      console.error('Error inserting restaurant:', err);
      return res.status(500).json({ message: 'Error inserting restaurant' });
    }
    res.status(201).json({ message: 'Restaurant added successfully', restaurantId: result.insertId });
  });
};

exports.getAllRestaurants = (req, res) => {
  restaurantModel.getAllRestaurants((err, results) => {
    if (err) {
      console.error('Error fetching restaurants:', err);
      return res.status(500).json({ message: 'Error fetching restaurants' });
    }
    res.json(results);
  });
};

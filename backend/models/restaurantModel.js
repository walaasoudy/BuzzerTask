const db = require('../config/db');

exports.insertRestaurant = (restaurantData, callback) => {
  const query = `
    INSERT INTO Restaurants (title, type, location, image_url)
    VALUES (?, ?, ?, ?)
  `;
  db.query(query, restaurantData, callback);
};

exports.getAllRestaurants = (callback) => {
  const query = 'SELECT * FROM Restaurants';
  db.query(query, callback);
};

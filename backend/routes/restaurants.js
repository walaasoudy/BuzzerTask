const express = require('express');
const upload = require('../middleware/upload');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

router.post('/', upload.single('image'), restaurantController.addRestaurant);
router.get('/', restaurantController.getAllRestaurants);

module.exports = router;

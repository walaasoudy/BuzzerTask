const express = require('express');
const upload = require('../middleware/upload');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', upload.single('image'), userController.registerUser);

module.exports = router;

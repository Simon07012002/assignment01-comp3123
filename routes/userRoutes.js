// routes/userRoutes.js
const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const router = express.Router();

// Get all users
router.get('/', getUsers);

// Create a new user
router.post('/', createUser); // This line should be present

module.exports = router;

// controllers/userController.js
const User = require('../models/User');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new user
const createUser = async (req, res) => {
    const { name, email, password } = req.body; // Extract user details from the request body

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new user instance
    const user = new User({
        name,
        email,
        password, // You may want to hash the password before saving
    });

    try {
        const savedUser = await user.save(); // Save the user to the database
        res.status(201).json(savedUser); // Return the created user with a 201 status
    } catch (error) {
        // Handle duplicate email error or other validation errors
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists.' });
        }
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUsers, createUser };

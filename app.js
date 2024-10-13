const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Use the user routes
app.use('/api/users', userRoutes); // This should match your POST request

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/test', (req, res) => {
    res.send('Test POST endpoint working!');
});

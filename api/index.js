const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Adjust the path as needed
const empRoutes = require('./routes/employeeRoutes'); // Adjust the path as needed

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://simonvu:Minhcuong123@cluster0.nwkj6.mongodb.net/yourDBName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define your routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

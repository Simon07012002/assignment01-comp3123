const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const empRoutes = require('./routes/empRoutes');

// Load environment variables
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

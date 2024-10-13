const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace the following with your actual connection string
        await mongoose.connect('mongodb+srv://simonvu:Minhcuong123@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false); // Set to false to suppress the warning
        await mongoose.connect(process.env.MONGODB_URI, {
            // No need for useNewUrlParser and useUnifiedTopology as they are deprecated
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

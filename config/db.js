// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://simonvu:Minhcuong123@cluster0.nwkj6.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0", {
            // useNewUrlParser: true, // Deprecated
            // useUnifiedTopology: true, // Deprecated
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB; // Ensure this line is present

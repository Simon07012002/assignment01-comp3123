// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    position: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    dateOfJoining: {
        type: Date,
        default: Date.now,
    },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

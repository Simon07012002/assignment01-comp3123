// routes/employeeRoutes.js
const express = require('express');
const { 
    createEmployee, 
    getEmployees, 
    getEmployeeById, 
    updateEmployee, 
    deleteEmployee 
} = require('../controllers/employeeController');

const router = express.Router();

// Define your routes here
router.post('/', createEmployee);            // Create a new employee
router.get('/', getEmployees);                // Get all employees
router.get('/:id', getEmployeeById);         // Get an employee by ID
router.put('/:id', updateEmployee);          // Update an employee
router.delete('/:id', deleteEmployee);       // Delete an employee

module.exports = router; // Ensure this line is present

const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// Get Employee by Query Parameter
router.get('/employees', async (req, res) => {
    const { eid } = req.query; // Extract eid from query parameters
    try {
        if (eid) {
            // Find employee by eid
            const employee = await Employee.findOne({ eid });
            if (employee) {
                return res.status(200).json(employee);
            } else {
                return res.status(404).json({ message: 'Employee not found' });
            }
        }
        // If no eid, return all employees
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

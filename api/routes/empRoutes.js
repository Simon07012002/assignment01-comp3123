const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

// Get All Employees
router.get('/employees', async (req, res) => {
    const { eid } = req.query;

    try {
      
        if (eid) {
            const employee = await Employee.findById(eid);
            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            return res.status(200).json(employee);
        }


        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Employee by EID using URL parameter
router.get('/employees/:eid', async (req, res) => {
    const { eid } = req.params;

    try {
        const employee = await Employee.findById(eid);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create Employee
router.post('/employees', async (req, res) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully.', employee_id: employee._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update Employee by EID
router.put('/employees/:eid', async (req, res) => {
    const { eid } = req.params;
    try {
        const employee = await Employee.findByIdAndUpdate(eid, req.body, { new: true });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee details updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Employee by EID
router.delete('/employees', async (req, res) => {
    const { eid } = req.query; 
    if (!eid) {
        return res.status(400).json({ message: 'Employee ID (eid) is required' });
    }
    try {
        const result = await Employee.deleteOne({ _id: eid });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
      
        res.status(200).json({ message: 'Employee deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;

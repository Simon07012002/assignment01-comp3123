// middlewares/validationMiddleware.js
const { body, validationResult } = require('express-validator');

// User validation
const validateUser = [
    body('username').isString().withMessage('Username must be a string').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email format').notEmpty().withMessage('Email is required'),
    body('password').isString().withMessage('Password must be a string').notEmpty().withMessage('Password is required'),
];

// Employee validation
const validateEmployee = [
    body('firstName').isString().withMessage('First name must be a string').notEmpty().withMessage('First name is required'),
    body('lastName').isString().withMessage('Last name must be a string').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email format').notEmpty().withMessage('Email is required'),
    body('position').isString().withMessage('Position must be a string').notEmpty().withMessage('Position is required'),
    body('department').isString().withMessage('Department must be a string').notEmpty().withMessage('Department is required'),
];

// Middleware to check validation results
const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUser,
    validateEmployee,
    checkValidation,
};

// controller/arithmeticOperator.js

// Function to perform arithmetic operations
const performOperation = (a, b, operation) => {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'division':
            // if (b === 0) {
            //     throw new Error('Division by zero is not allowed');
            // }
            // return a / b;
            return a / b;
        default:
            throw new Error('Unsupported operation');
    }
};

// Controller function for addition
const add = (req, res, next) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b should be numbers' });
    }

    const result = performOperation(a, b, 'add');
    res.json({ result });
};

// Controller function for subtraction
const subtract = (req, res, next) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b should be numbers' });
    }

    const result = performOperation(a, b, 'subtract');
    res.json({ result });
};

// Controller function for multiplication
const multiply = (req, res, next) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b should be numbers' });
    }

    const result = performOperation(a, b, 'multiply');
    res.json({ result });
};

// Controller function for division
const division = (req, res, next) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b should be numbers' });
    }

    try {
        const result = performOperation(a, b, 'division');
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    add,
    subtract,
    multiply,
    division
};

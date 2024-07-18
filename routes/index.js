const express = require('express');
const router = express.Router();
const arithmeticOperationRouter = require('./arithmeticoperation');

router.use('/arithmetic-operation', arithmeticOperationRouter);

module.exports = router;

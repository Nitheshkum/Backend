const express = require('express');
const router = express.Router();
const arithmeticOperationController = require('../crontroller/arithmeticOperator'); // Corrected import path

router.post('/add', arithmeticOperationController.add);
router.post('/subtract', arithmeticOperationController.subtract);
router.post('/multiply', arithmeticOperationController.multiply);
router.post('/division', arithmeticOperationController.division);


module.exports = router;

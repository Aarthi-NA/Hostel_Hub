const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { register, getAll } = require('../controllers/requestController');

// @route   POST api/request/register
// @desc    Register request
// @access  Public
router.post('/register', [
    check('roll_no', 'ROLL NUMBER is required and must be alphanumeric').isAlphanumeric().not().isEmpty()
], register);

// @route   GET api/request/getall
// @desc    Get all requests
// @access  Public
router.get('/getall', getAll);

module.exports = router;
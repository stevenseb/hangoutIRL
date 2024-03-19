const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const validateSignup = require('../../utils/validation');
const { Member } = require('../../db/models');
const router = express.Router();




module.exports = router;

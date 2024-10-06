const express = require('express');
const { subscribe } = require('../controllers/newsletterController');
const router = express.Router();

// POST route to subscribe
router.post('/subscribe', subscribe);

module.exports = router;

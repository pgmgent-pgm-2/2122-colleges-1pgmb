const express = require('express');

// Import the controllers
const publicController = require('../controllers/public.controller');

// Make an express router
const router = express.Router();

// Make the routes
router.get('/', publicController.getHome);

// Exports the router
module.exports = router;
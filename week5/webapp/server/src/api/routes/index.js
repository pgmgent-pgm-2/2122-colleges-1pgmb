const express = require('express');

// Import the controllers
const homeController = require('../controllers/home.controller');
const casesController = require('../controllers/cases.controller');

// Make an express router
const router = express.Router();

// Make the routes
router.get('/', homeController.getIndex);
router.get('/cases', casesController.getIndex);
router.get('/cases/:caseSlug', casesController.getCaseBySlug);

// Exports the router
module.exports = router;
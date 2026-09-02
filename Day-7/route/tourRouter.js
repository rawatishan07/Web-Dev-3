// Router layer mapping routes to tour controllers

const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.get('/', tourController.getAllTour);
router.get('/:id', tourController.getTourById);

module.exports = router;

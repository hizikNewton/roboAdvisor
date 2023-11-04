const express = require('express');
const router = express.Router();
const IWController = require('../controllers/instrumentWeightController');

router.post('/createWeight', IWController.createInstrumentWeight);

module.exports = router;

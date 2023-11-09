const express = require('express');
const router = express.Router();
const IWController = require('../controllers/instrumentWeightController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/instrument-weight', IWController.createInstrumentWeight);
router.get('/instrument-weight', IWController.getInstrumentWeight);
router.post(
  '/bulk-load',
  upload.single('file'),
  IWController.createBulkInstrumentWeight
);

router.delete('/instrument-weight', IWController.deleteAllInstrumentWeight);
module.exports = router;

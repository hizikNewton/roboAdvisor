const express = require("express");
const router = express.Router();
const IWController = require("../controllers/instrumentWeightController");

router.post("/instrument-weight", IWController.createInstrumentWeight);
router.get("/instrument-weight", IWController.getInstrumentWeight);

module.exports = router;

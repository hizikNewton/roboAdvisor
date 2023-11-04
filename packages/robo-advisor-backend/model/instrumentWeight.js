const mongoose = require("mongoose");

const instrumentWeightSchema = new mongoose.Schema({
  riskScore: {
    type: number,
    required: true,
  },
  nigerianStocks: {
    type: number,
    required: true,
  },
  foriegnStocks: {
    type: number,
    required: true,
  },
  techStocks: {
    type: number,
    required: true,
  },
  emergingStocks: {
    type: number,
    required: true,
  },
  nigerianBonds: {
    type: number,
    required: true,
  },
  foriegnBonds: {
    type: number,
    required: true,
  },
  commodities: {
    type: number,
    required: true,
  },
  realEstate: {
    type: number,
    required: true,
  },
  tBills: {
    type: number,
    required: true,
  },
  alternative: {
    type: number,
    required: true,
  },
});

module.exports = mongoose.model("instrumentWeight", instrumentWeightSchema);

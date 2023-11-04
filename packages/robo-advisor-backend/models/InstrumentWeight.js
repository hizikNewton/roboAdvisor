const mongoose = require('mongoose');

const instrumentWeightSchema = new mongoose.Schema(
  {
    riskScore: {
      type: Number,
      required: true,
    },
    nigerianStocks: {
      type: Number,
      required: true,
    },
    foriegnStocks: {
      type: Number,
      required: true,
    },
    techStocks: {
      type: Number,
      required: true,
    },
    emergingStocks: {
      type: Number,
      required: true,
    },
    nigerianBonds: {
      type: Number,
      required: true,
    },
    foriegnBonds: {
      type: Number,
      required: true,
    },
    commodities: {
      type: Number,
      required: true,
    },
    realEstate: {
      type: Number,
      required: true,
    },
    tBills: {
      type: Number,
      required: true,
    },
    alternative: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

instrumentWeightSchema.methods.tocreateIWResponse = function () {
  return {
    riskScore: this.riskScore,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model('InstrumentWeight', instrumentWeightSchema);

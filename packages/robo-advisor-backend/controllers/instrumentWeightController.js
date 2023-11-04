const InstrumentWeight = require('../models/InstrumentWeight');
const asyncHandler = require('express-async-handler');

const createInstrumentWeight = asyncHandler(async (req, res) => {
  const {
    riskScore,
    nigerianStocks,
    foriegnStocks,
    techStocks,
    emergingStocks,
    nigerianBonds,
    foriegnBonds,
    commodities,
    realEstate,
    tBills,
    alternative,
  } = req.body.instrumentWeight;

  const iwData = {
    riskScore,
    nigerianStocks,
    foriegnStocks,
    techStocks,
    emergingStocks,
    nigerianBonds,
    foriegnBonds,
    commodities,
    realEstate,
    tBills,
    alternative,
  };
  const instrumentWeight = await InstrumentWeight.create(iwData);

  instrumentWeight.save();

  return await res.status(200).json({
    article: await instrumentWeight.tocreateIWResponse(),
  });
});

module.exports = {
  createInstrumentWeight,
};

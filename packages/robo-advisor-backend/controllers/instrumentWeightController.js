const InstrumentWeight = require("../models/InstrumentWeight");
const asyncHandler = require("express-async-handler");

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
    instrumentWeight: await instrumentWeight.tocreateIWResponse(),
  });
});

const getInstrumentWeight = asyncHandler(async (req, res) => {
  InstrumentWeight.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
module.exports = {
  createInstrumentWeight,
  getInstrumentWeight,
};

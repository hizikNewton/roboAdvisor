const InstrumentWeight = require("../models/InstrumentWeight");
const asyncHandler = require("express-async-handler");
const csv = require("csvtojson");

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
  const { score } = req.query;
  if (score) {
    InstrumentWeight.find({ riskScore: score }).then((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  } else {
    InstrumentWeight.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
});

const createBulkInstrumentWeight = asyncHandler(async (req, res) => {
  csv()
    .fromFile(req.file.path)
    .then((jsonObj) => {
      console.log(jsonObj);
      InstrumentWeight.insertMany(jsonObj)
        .then(function () {
          res.status(200).send({
            message: "Successfully Uploaded!",
          });
        })
        .catch(function (error) {
          res.status(500).send({
            message: "failure",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "failure",
        error,
      });
    });
});

module.exports = {
  createInstrumentWeight,
  getInstrumentWeight,
  createBulkInstrumentWeight,
};

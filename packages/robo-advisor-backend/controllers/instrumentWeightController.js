const InstrumentWeight = require('../models/InstrumentWeight');
const asyncHandler = require('express-async-handler');
const csv = require('csvtojson');

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
    InstrumentWeight.find({ riskScore: score })
      .then((data) => {
        if (data.length === 0) {
          res.status(200).send([{}]);
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    InstrumentWeight.find()
      .then((data) => {
        if (data.length === 0) {
          res.status(200).send([{}]);
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send(err);
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
            message: 'Successfully Uploaded!',
          });
        })
        .catch(function (error) {
          res.status(500).send({
            message: 'failure',
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'failure',
        error,
      });
    });
});

const deleteAllInstrumentWeight = asyncHandler(async (req, res) => {
  InstrumentWeight.deleteMany({})
    .then((data) => {
      res.status(200).send([{}]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = {
  createInstrumentWeight,
  getInstrumentWeight,
  createBulkInstrumentWeight,
  deleteAllInstrumentWeight,
};

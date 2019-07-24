/**
 * InsuranceInfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let request = require('request');
module.exports = {
  create: function (req, res) {
    let insuranceInfo = {
        mortgageAppId: req.body.mortgageAppId,
        msid: req.body.msid,
        insuredValue: req.body.insuredValue,
        deductibleValue: req.body.deductibleValue,
        customerName: req.body.customerName,
        appraisalValue: req.body.appraisalValue
      };
      InsuranceInfo.create(insuranceInfo)
      .fetch()
      .exec(function (err, insInfo) {
        if (err) {
          return res.json(err);
        }
        return res.json(insInfo);
      });
  }

};


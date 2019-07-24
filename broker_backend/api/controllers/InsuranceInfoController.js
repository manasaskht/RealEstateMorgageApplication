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

  },
  updateInsuranceinfo: function (req, res) {
    let baseQuery = "UPDATE broker_db.insuranceinfo SET status ='Approved' WHERE id =" + req.body.id;
    sails.log(baseQuery);
  
    Insurancequote.getDatastore().sendNativeQuery(baseQuery, function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
     // let results = JSON.parse(JSON.stringify(rawResult.rows))
      return res.send("Success");
    });
  
  
  },

};


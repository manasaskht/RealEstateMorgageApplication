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
        //Sources:
        //https://stackoverflow.com/questions/30523872/make-a-http-request-in-your-controller-sails-js
        var options = {
          method: 'POST',
          uri: req.baseUrl + '/api/updateInsuranceInfoReference',
          body: {
            insuranceInfoID: insInfo.id,
            applicationID: req.body.mortgageAppId
          },
          json: true // Automatically stringifies the body to JSON
        };
        request(options, function (error, response, body) {
          if (error) {
            return console.error('Error occurred while updating insurance information', error);
          }
          console.log('Insurance information updated successfully:', body);
        });
        return res.json(insInfo);
      });
  }

};


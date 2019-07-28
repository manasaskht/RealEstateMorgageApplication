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

          var getUserEmailReq = {
            method: 'POST',
            uri: req.baseUrl + '/api/getUserEmail',
            body: {
            appId: insInfo.mortgageAppId
            },
            json: true
          }
          request(getUserEmailReq, function (emailRetrieveError, emailRes, emailResBody) {
            if (emailRetrieveError) {
              console.error('Error occurred while retrieving user email. Mail will not be sent!', error);
            }
          var logicAppReq = {
            method: 'POST',
            uri: 'https://prod-27.canadaeast.logic.azure.com:443/workflows/698c09f11b714203bda7044c3398b4ce/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rX_UNs8SgoR9SIoVHvVR9Tq0eHX0TJDDeUcKok1GDDs',
            body: {
            applicationPostedMail: 0,
            experience: 0,
            salary: 0,
            employeeInfoID: 0,
            applicationID: insInfo.mortgageAppId,
            insuredValue: insInfo.insuredValue,
            deductibleValue: insInfo.deductibleValue,
            insuranceInfoID: insInfo.id,
            email: emailResBody.email,
            //postbackUrl: req.baseUrl
            postbackUrl: "http://35.244.251.62"
            },
            json: true
          };
          request(logicAppReq, function (err, res, bdy) {
            if (err) {
              console.error('Error occurred while processing insurance info in logic app', error);
            }
          });
          console.log('Insurance information updated successfully:', body);
        });
        });

        return res.json(insInfo);
      });

  },
  updateInsuranceinfo: function (req, res) {
    let baseQuery = "CALL updateMortgageStatusOnInsInfoUpdate(" + req.body.applicationID + ", " + req.body.id + ", '" + req.body.decision + "');";
    sails.log(baseQuery);

    InsuranceInfo.getDatastore().sendNativeQuery(baseQuery, function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
     // let results = JSON.parse(JSON.stringify(rawResult.rows))
      return res.send("Success");
    });


  },

};


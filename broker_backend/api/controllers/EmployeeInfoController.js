/**
 * EmployeeInfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let request = require('request');

module.exports = {
  create: function (req, res) {
    let values = {
      employeeID: req.body.employeeID,
      applicationID: req.body.applicationID,
      brokerURL: req.body.brokerURL,
      name: req.body.name,
      lastname: req.body.lastname,
      emailId: req.body.emailId,
      experience: req.body.experience,
      salary: req.body.salary
    };

    // employeeid, name, lastname, emailId, experience and salary

    EmployeeInfo.create(values)
      .fetch()
      .exec(function (err, empInfo) {
        if (err) {
          return res.json(err);
        }

        //Sources:
        //https://stackoverflow.com/questions/30523872/make-a-http-request-in-your-controller-sails-js
        var reqOptions = {
          method: 'POST',
          uri: req.baseUrl + '/api/updateEmployeeInfoReference',
          body: {
            employeeInfoID: empInfo.id,
            applicationID: req.body.applicationID
          },
          json: true // Automatically stringifies the body to JSON
        };
        request(reqOptions, function (error, response, body) {
          if (error) {
            return console.error('Error occurred while updating employee information', error);
          }
          console.log('Employee information updated successfully:', body);
        });
        //Sources:
        //https://stackoverflow.com/questions/30523872/make-a-http-request-in-your-controller-sails-js
        //https://www.npmjs.com/package/request-promise
        //https://www.npmjs.com/package/request
        var logicAppReq = {
          method: 'POST',
          uri: 'https://prod-27.canadaeast.logic.azure.com:443/workflows/698c09f11b714203bda7044c3398b4ce/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rX_UNs8SgoR9SIoVHvVR9Tq0eHX0TJDDeUcKok1GDDs',
          body: {
          applicationPostedMail: 0,
          experience: empInfo.experience,
          salary: empInfo.salary,
          employeeInfoID: empInfo.id,
          applicationID: empInfo.applicationID,
          insuredValue: 0,
          deductibleValue: 0,
          insuranceInfoID: 0,
          email: req.body.email_id,
          postbackUrl: req.baseUrl
          },
          json: true
        };
        request(logicAppReq, function (err, res, bdy) {
          if (err) {
            console.error('Error occurred while processing insurance info in logic app', error);
          }
        });

        return res.json(mortgage);
      });
  },

  receiveInfoFromWorkload: function (req, res) {
    let baseQuery = "UPDATE broker_db2.mortgage SET status ='" + req.body.status +"' WHERE application_id =" + req.body.applicationID;
    sails.log(baseQuery);

    Mortgage.getDatastore().sendNativeQuery(baseQuery, function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
     // let results = JSON.parse(JSON.stringify(rawResult.rows))
      return res.send("Success");
    });


  },
  updateEmployeeInfo: function (req, res) {
    let baseQuery = "CALL updateMortgageStatusOnEmpInfoUpdate(" + req.body.applicationID + ", " + req.body.id + ", '" + req.body.decision + "');";
    sails.log(baseQuery);
  
    EmployeeInfo.getDatastore().sendNativeQuery(baseQuery, function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
     // let results = JSON.parse(JSON.stringify(rawResult.rows))
      return res.send("Success");
    });
  
  
  },

};


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
            applicationID: req.body.mortgageAppId
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
        var options = {
          method: 'POST',
          uri: 'https://prod-15.eastus.logic.azure.com:443/workflows/c7ab53042b71469ea296a9285c2a8888/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=PzCP3UmYy9VPgp_Kg7s82farusDmGb7j1x2p4fNfx20',
          body: {
            name: values.name,
            emailId: values.emailId,
            lastname: values.lastname,
            applicationID: values.applicationID,
            employeeID: values.employeeID,
            salary: values.salary,
            experience: values.experience,
            brokerURL: "http://localhost:1336/api/employeeinfo/receive"
          },
          json: true // Automatically stringifies the body to JSON
        };

        request(options, function (error, response, body) {
          if (error) {
            return console.error('upload failed:', error);
          }
          console.log('Upload successful!  Server responded with:', body);
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


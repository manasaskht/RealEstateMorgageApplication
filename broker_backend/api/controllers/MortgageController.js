/**
 * MortgageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let request = require('request');
module.exports = {
  mortgageinsert: function (req, res) {
    var values = {
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      address: req.body.address,
      contact_number: req.body.contact_number,
      company_name: req.body.company_name,
      company_address: req.body.company_address,
      company_contact: req.body.company_contact,
      email_id: req.body.email_id,
      mortgage_value: req.body.mortgageValue,
      msid: req.body.msid,
      status: "Pending"
    };

    Mortgage.create(values)
      .fetch()
      .exec(function (err, mortgage) {
        if (err) {
          return res.json(err);
        }
        var pwd = req.body.last_name.substring(0,4) + req.body.first_name.substring(0,4)

        //Sources:
        //https://stackoverflow.com/questions/30523872/make-a-http-request-in-your-controller-sails-js
        var options = {
          method: 'POST',
          uri: req.baseUrl + '/api/createUser',
          body: {
            username: req.body.email_id,
            password: pwd
          },
          json: true // Automatically stringifies the body to JSON
        };

        request(options, function (error, response, body) {
          if (error) {
            return console.error('User not created', error);
          }
          console.log('User created successfully:', body);
        });
        return res.json(mortgage);
      });
  },
  fetchApplicationDetail: function (req, res) {
    //Reference URL: https://sailsjs.com/documentation/concepts/models-and-orm/associations/one-to-one  
    var allRecord;
    var paramValue = req.param('param1');

    var searchQuery = {};
    searchQuery['id'] = paramValue;
    allRecord = Mortgage.findOne(searchQuery)
    .populate('employeeInfo')
    .populate('insuranceInfo')
      .then(
        function (result) {
          return res.json(result)
        }
      )
      .catch(function (e) {
        return e
      });
  },

  fetchMortgageApplications: function (req, res) {
    let usrname = req.param('username');
    sails.log('----------------------Username: ' + usrname);
    Mortgage.find({'email_id': usrname}).then((appln) => {
      if (!appln) {
        return res.notFound();
      }

      return res.json(appln);
    })
      .catch((err) => {
        return res.serverError(err);
      });
  }
};

/**
 * MortgageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

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
      status: "Pending"
    };

    Mortgage.create(values)
      .fetch()
      .exec(function (err, mortgage) {
        if (err) {
          return res.json(err);
        }
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

/**
 * AppraisalRequestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  //This function is to create a user
 appraisalrequest: function(req, res) {
    var values = {
      Name: req.body.Name,
      M1sID: req.body.M1sID,
      MortID: req.body.MortID,
      Status: 'pending'
    };

    //creates an employer
    //sails.log(values);
    AppraisalRequest.create(values)
	.exec(function(err, broker) {
    //sails.log(values);
      if (err) {
        return res.json(err);
      }
      return res.json(broker);
    });

  }
};

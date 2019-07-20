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
      custFirstName: req.body.custFirstName,
      custLastName: req.body.custLastName,
      MlsID: req.body.MlsID,
      MortID: req.body.MortID
    };

    //creates an employer
    AppraisalRequest.create(values)
	.exec(function(err, broker) {
      if (err) {
        return res.json(err);
      }
      return res.json(broker);
    });

  }
};

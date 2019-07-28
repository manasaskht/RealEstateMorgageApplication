/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//Requires the below modules
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {
  //This function is just to test authentication
  test: function(req, res) {
    var temp = "Test";
    res.send({
      temp
    });
  },

  //This function is to create a user
  signup: function(req, res) {
    //Requires insurerID and password
    var values = {
      insurerid: req.body.insurerid,
      password: req.body.password,
      emailId:req.body.emailId,
      firstName:req.body.firstName,
      lastName:req.body.lastName
    };

    //creates an insurer
    Login.create(values).exec(function(err, broker) {
      if (err) {
        return res.json(err);
      }
      return res.json(broker);
    });
  },

  //login to the system
  login: function(req, res) {
    //check if both params are provided
    if (!_.has(req.body, "insurerid") || !_.has(req.body, "password")) {
      return res.serverError("The required details are not provided");
    }

    //check if an employeeid  exists
    Login.findOne({
      insurerid: req.body.insurerid
    }).exec(function callback(err, user) {
      if (err) return res.serverError(err);
      if (!user) return res.serverError("insurer not found");

      //check password matches or not
      bcrypt.compare(req.body.password, user.password, function(
        error,
        matched
      ) {
        if (error) return res.serverError(error);

        if (!matched) return res.serverError("Insurer ID or password are incorrect.");

        //add the token
        var token = jwt.sign(
          user.toJSON(),
          "5B6125F888E4C7306012D2AD542DDB9BBE31B07F9D5E794E78DE8CD89D3CEFD6",
          {
            expiresIn: "10m"
          }
        );

        //return the token here
        res.ok(token);
      });
    });
  }
};

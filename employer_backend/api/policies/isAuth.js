//

//requires the jsonwebtoken module
var jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  //Stores the authorization token
  var authToken;

  //The header needs to be passed as authorization only
  var authHeader = req.headers["authorization"];

  //if we find a header
  if (typeof authHeader !== "undefined") {
    var bearer = authHeader.split(" ");
    authToken = bearer[1];

    //The token should be sent as Bearer <token value>
    if (bearer[0] !== "Bearer") {
      return res.forbidden("bearer not understood");
    }

    //Verify the token
    jwt.verify(
      authToken,
      "5B6125F888E4C7306012D2AD542DDB9BBE31B07F9D5E794E78DE8CD89D3CEFD6",
      function(err, decoded) {
        if (err) {
          sails.log("verification error", err);
          if (err.name === "TokenExpiredError")
            return res.forbidden("Session timed out, please login again");
          else return res.forbidden("Error authenticating, please login again");
        }

        //Verify that the user with the token exists
        EmployerLogin.findOne(decoded.id).exec(function callback(error, user) {
          if (error) return res.serverError(err);

          if (!user) return res.serverError("User not found");

          req.user = user;

          //This allows the next api call to be made
          next();
        });
      }
    );
  } else {
    return res.forbidden("No token provided");
  }
};

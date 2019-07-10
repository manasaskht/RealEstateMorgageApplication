/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  validateLogin: function(req, res) {
      var usrname = req.body.username;
      var pwd = req.body.password;
      UserLogin.find({username: usrname, password: pwd}).then((login) => {
        if (!login) {
          return res.notFound();
        }
        else if(login.length == 1) {
            return res.json({ isValidUser: true});
        }
        return res.json(login);
      })
      .catch((err) => {
        return res.serverError(err);
      });
  }

};


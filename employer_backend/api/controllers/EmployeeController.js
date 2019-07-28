/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: function (req, res) {
    var param = {
      name: req.param('name'),
      lastName: req.param('lastName'),
      address: req.param('address'),
      age: req.param('age'),
      phoneNumber: req.param('phoneNumber')
    }
    return new Promise(function (resolve, reject) {
      Employee.create(param).fetch().exec(function (err, adopter) {
        if (err) {
          return reject({error: true, message: "Internal server error", status: 500});
        }
        return resolve(res.json(adopter));
      });
    });
  },
  getAllEmployees: function (req, res) {
    return new Promise(function (resolve, reject) {
      Employee.find().exec(function (err, employees) {
        if (err) {
          return reject({error: true, message: "Internal server error", status: 500});
        }
        return resolve(res.json(employees));
      });
    });
  },

  health: function(req,res){
    return res.status(200).send('ok');
  }

};


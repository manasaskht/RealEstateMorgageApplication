let request = require('request');
module.exports = {
 
  getEmployeeDetails: function (req, res) {
    let employeeid = req.body.employeeid;
    let applicationID=req.body.applicationID;
    let brokerURL=req.body.brokerURL;
    sails.log(applicationID);

    if (!_.has(req.body, "employeeid")) {
      return res.serverError("The required details are not provided");
    }

    EmployerLogin.findOne({
      where: {'employeeid': req.body.employeeid},
      select: ['employeeid', 'salary', 'experience','name','lastName','emailId']
    }).exec(function callback(err, user) {
      if (err) return res.serverError(err);
      if (!user) return res.serverError("Employee not found");
      else {
        var options = {
          method: 'POST',
          uri: brokerURL+'/api/employeeinfo/create',
          body: {
            name: user.name,
            emailId: user.emailId,
            lastname:user.lastName,
            salary:user.salary,
            employeeID:user.employeeid,
            experience:user.experience,
            applicationID:applicationID,
            brokerURL:brokerURL
          },
          json: true // Automatically stringifies the body to JSON
        };
        request(options, function (error, response, body) {
          if (error) {
            return console.error('upload failed:', error);
          }
          sails.log('Upload successful!  Server responded with:', body);
          
        }); 
        return res.ok(user.toJSON());
    }
    });

  }

};

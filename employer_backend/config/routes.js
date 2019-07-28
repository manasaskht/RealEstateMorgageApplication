/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //Health check for GCE
  'get /_ah/health': 'EmployeeController.health',

  "get /api/employee/create": "EmployeeController.create",
  "get /api/employees": "EmployeeController.getAllEmployees",

  //Route to login
  "post /api/employee/login": "EmployerLoginController.login",

  //This was done just to test whether authentication is working
  "get /api/employee/test": "EmployerLoginController.test",

  //Route to create a user
  "post /api/employee/signup": "EmployerLoginController.signup",
   
  "post /api/employee/details": "EmployeeBrokerController.getEmployeeDetails"

};

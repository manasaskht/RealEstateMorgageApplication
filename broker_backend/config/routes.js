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

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {view: 'pages/homepage'},

  'get /api/employee/create': 'EmployeeController.create',
  'get /api/employees': 'EmployeeController.getAllEmployees',
  "post /api/validateUser": "LoginController.validateLogin",
  'POST /api/mortgage/create': {controller: 'mortgage', action: 'mortgageinsert'},
  'POST /api/employeeinfo/create': {controller: 'employeeinfo', action: 'create'},
  'POST /api/employeeinfo/receive': {controller: 'employeeinfo', action: 'receiveInfoFromWorkload'},
  'get /api/applicationDetail': 'MortgageController.fetchApplicationDetail',
  'get /api/mortgageapplications': 'MortgageController.fetchMortgageApplications',
  'post /api/logreqres': 'RequestresponselogController.logReqRes'

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
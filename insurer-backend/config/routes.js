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

  '/': { view: 'pages/homepage' },

  //Health check for GCE
  'get /_ah/health': 'LoginController.health',

  //Route to create an insurer
  "post /api/insurer/signup": "LoginController.signup",


  //Route to login
  "post /api/insurer/login": "LoginController.login",

  "POST /api/validateUser": "LoginController.validateLogin",
  "POST /api/insertInsuranceDetails": "InsurancequoteController.insertInsuranceDetails",
  "GET /api/getpendingRequests": "InsurancequoteController.fetchAllPendingRequest",
  "GET /api/quoteDetailsById/:mortgageId": "InsurancequoteController.fetchInsuranceDetailsByMortgageId",
  "POST /api/updateInsuranceDetails": "InsurancequoteController.updateInsuranceDetails"

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

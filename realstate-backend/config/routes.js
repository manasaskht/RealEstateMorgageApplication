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

  //Route to login
  "post /api/reappraiser/login": "REAppraiserLoginController.login",

  //This was done just to test whether authentication is working
  "get /api/reappraiser/test": "REAppraiserLoginController.test",

  //Route to create a broker
  "post /api/reappraiser/signup": "REAppraiserLoginController.signup",

  //Route to request an appraisal
  "post /api/requestappraisal": "AppraisalRequestController.appraisalrequest",
//pending requests
  "get /api/getpendingRequests": "PendingRequestController.fetchAllPendingRequest",
  "post /api/updateAppraisalDetails" : "PendingRequestController.updateAppraisalDetails",
  "get /api/quoteDetailsById/:mortgageId": "PendingRequestController.fetchAppraisalDetailsByMortgageId",

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

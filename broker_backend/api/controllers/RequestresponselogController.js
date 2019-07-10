/**
 * RequestresponselogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    logReqRes: function (req, res) {
        var values = {
          request: req.body.request,
          response: req.body.response
        };
    
        Requestresponselog.create(values)
          .fetch()
          .exec(function (err, log) {
            if (err) {
              return res.json(err);
            }
            return res.json(log);
          });
      }
};


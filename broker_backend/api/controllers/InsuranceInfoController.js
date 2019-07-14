/**
 * InsuranceInfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        let values = {
            mortgageAppId: req.body.mortgageAppId,
            msid: req.body.msid,
            insuredValue: req.body.insuredValue,
            deductibleValue: req.body.deductibleValue,
            customerName: req.body.customerName
        };
    
        InsuranceInfo.create(values)
          .fetch()
          .exec(function (err, insuranceInfo) {
            if (err) {
              return res.json(err);
            }    
            return res.json(insuranceInfo);
          });
      }
};


/**
 * InsurancequoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

insertInsuranceDetails: function(req, res) 
{
    let values =  
    {
        MortID : req.body.MortID,
        appraisalValue : req.body.appraisalValue,
        MisId : req.body.MisId,
        insuredValue: req.body.insuredValue,
        deductibleValue: req.body.deductibleValue,
        customerName: req.body.customerName 
    };
Insurancequote.create(values)
.fetch()
.exec(function(err,insuranceDetails){
    if (err)
    {
        res.json(err);
    }
    return res.json(insuranceDetails);
})
},
fetchAllPendingRequest : function (req, res)
{
//Reference URL: https://sailsjs.com/documentation/concepts/models-and-orm/associations/one-to-one  
 var allStudent
    
    allInsuranceRequest =   Insurancequote.find().then(
    function(result) { return res.json(result)}
    ).catch( function(e) {return e} );   
},  

};


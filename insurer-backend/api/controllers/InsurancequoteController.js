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
        customerName: req.body.customerName,
        status:'Pending' 
    };
Insurancequote.create(values)
.exec(function(err,insuranceDetails){
    if (err)
    {
        res.json(err);
    }
    return res.json(insuranceDetails);
});
},
fetchAllPendingRequest : function (req, res)
{
//Reference URL: https://sailsjs.com/documentation/concepts/models-and-orm/associations/one-to-one  
 var allStudent
    
    allInsuranceRequest =   Insurancequote.find().then(
    function(result) { return res.json(result)}
    ).catch( function(e) {return e} );   
},  
fetchInsuranceDetailsByMortgageId: function(req, res)
{
    let mortgageId = req.param('mortgageId');
    var searchQuery = {};
    searchQuery['MortID'] = mortgageId;
    allRecord = Insurancequote.findOne(searchQuery)
    .then(
      function (result) {
        return res.json(result)
      }
    )
    .catch(function (e) {
      return e
    });

},
updateInsuranceDetails: function (req, res) {
  let baseQuery = "UPDATE insurer_db.insurancequote SET insuredValue ='" + req.body.insuredValue +"',deductibleValue='" + req.body.deductibleValue +"',status='completed' WHERE MortID =" + req.body.MortID;
  sails.log(baseQuery);

  Insurancequote.getDatastore().sendNativeQuery(baseQuery, function (err, rawResult) {
    if (err) {
      return res.serverError(err);
    }
   // let results = JSON.parse(JSON.stringify(rawResult.rows))
    return res.send("Success");
  });


},
};


module.exports = {
    fetchAllPendingRequest : async function (req, res)
{
//Reference URL: https://sailsjs.com/documentation/concepts/models-and-orm/associations/one-to-one  
    allRequest =  await AppraisalRequest.find({
        where: {Status: 'pending'},
        select: ['Name', 'M1sID', 'MortID']
      }).then(
    function(result) { return res.json(result)}
    ).catch( function(e) {return res.json(e)} );   
},  
fetchAppraisalDetailsByMortgageId: async function(req, res)
{
    let mortgageId = req.param('mortgageId');
    //sails.log(mortgageId);
    allRecord = await AppraisalRequest.find({
        where: {MortID: mortgageId},
        select: ['Name', 'M1sID', 'MortID']
    })
    .then(
      function (result) {
        return res.json(result)
      }
    )
    .catch(function (e) {
      return res.json(e)
    });

},
updateAppraisalDetails: async function (req, res) {
  let baseQuery = "UPDATE realstate_db.appraisalrequest SET AppraisalValue ='" + req.body.AppraisalValue +"',status='completed' WHERE MortID =" + req.body.MortID;
  await AppraisalRequest.getDatastore().sendNativeQuery(baseQuery, function (err, rawResult) {
    if (err) {
      return res.serverError(err);
    }
   // let results = JSON.parse(JSON.stringify(rawResult.rows))
    return res.send("Successfully approved and updated");
  });
}
    
}
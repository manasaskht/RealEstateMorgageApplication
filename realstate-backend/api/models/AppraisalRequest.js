/**
 * AppraisalRequest.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //holds the userid
    Name: {
      type: "string",
      required: true
    },
    M1sID: {
      type: "string",
      required: true,
      unique: true
    },
    MortID: {
      type: "string",
      required: true,
      unique: true
    },
    Status: {
      type:"string"
    },
    AppraisalValue:
    {
      type:"string" 
    }
  }
};

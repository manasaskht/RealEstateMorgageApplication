/**
 * AppraisalRequest.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //holds the userid
    custFirstName: {
      type: "string",
      required: true
    },
    custLastName: {
      type: "string",
      required: true
    },
    MlsID: {
      type: "string",
      required: true,
      unique: true
    },
    MortID: {
      type: "string",
      required: true,
      unique: true
    },
    hasBeenAppraised: {
      type: "string"
    },
    apprFirstName: {
      type: "string"
    },
    apprLastName: {
      type: "string"
    },
    appraisalValue: {
      type: "string"
    }
  }
};

/**
 * AppraisalRequest.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //holds the userid
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
    custfirstName: {
      type: "string",
      required: true
    },
    custlastName: {
      type: "string",
      required: true
    },
    hasbeenappraised: {
      type: "string"
    },
    apprfirstName: {
      type: "string"
    },
    apprlastName: {
      type: "string"
    },
    appraisalvalue: {
      type: "string"
    }
  }
};

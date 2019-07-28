/**
 * REAppraiserLogin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

//Requires the bcrypt package
var bcrypt = require("bcryptjs");

module.exports = {
  attributes: {
    //holds the userid
    insurerid: {
      type: "string",
      required: true,
      unique: true
    },
    firstName: {
      type: "string",
      required: true,

    },
    lastName: {
      type: "string",
      required: true,

    },
    emailId: {
      type: "string",
      required: true,
      unique: true
    },
    //holds the encrypted password
    password: {
      type: "string",
      minLength: 6,
      required: true
    }
  },

  //password is never returned
  customToJSON: function() {
    // Return a shallow copy of this record with the password
    return _.omit(this, ["password"]);
  },

  //Encrypts the password
  beforeCreate: function(values, hpass) {
    // Hashing using bcrypt
    bcrypt.hash(values.password, 10, function(err, hash) {
      if (err) return hpass(err);
      values.password = hash;
      hpass();
    });

  }
};

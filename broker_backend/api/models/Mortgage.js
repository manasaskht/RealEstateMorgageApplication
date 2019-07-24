/**
 * Mortgage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    first_name: {
      type: "string",
      required: true
    },
    last_name: {
      type: "string",
      required: true
    },
    address: {
      type: "string",
      required: true
    },
    contact_number: {
      type: "string",
      required: true
    },
    company_name: {
      type: "string",
      required: true
    },
    company_address: {
      type: "string",
      required: true
    },
    company_contact: {
      type: "string",
      required: true
    },
    email_id: {
      type: "string",
      required: true
    },
    status: {
      type: "string",
    },
    mortgage_value: {
      type: "number",
    },
    msid: {
      type: "string",
    },
    id: {
      type: "number",
      columnName: "application_id",
      autoIncrement: true
    },
    employeeInfo: {
      model: 'EmployeeInfo'
    },
    insuranceInfo: {
      model: 'InsuranceInfo'
    }
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  }
};

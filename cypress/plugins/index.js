/// <reference types="cypress" />

const truncateTables = require("../../test/truncate-tables")


/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {

  on("task", {
    taskTruncateTables() {
      console.log("Here");
      truncateTables();
      return null;
    }
  })
}


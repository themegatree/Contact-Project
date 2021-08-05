require("dotenv").config(s)
const { models } = require("../models")

const truncateTables = async () => {
    await models.Contacts.destroy({truncate: true})
}

module.exports = truncateTables;
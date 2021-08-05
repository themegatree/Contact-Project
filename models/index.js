const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {dialect: "postgres",},
);

const models = {
    Contacts: require("./contacts")(sequelize, DataTypes),
};

module.exports = {
    sequelize: sequelize,
    models: models
};

//missed commas everywhere here - return ifd errors occur
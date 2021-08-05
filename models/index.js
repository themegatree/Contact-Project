const { Sequelize, DataTypes } = require("sequelize/types");


const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {dialect: "postgres"}
);

const models = {
    Contacts: require("./contacts")(sequelize, DataTypes)
};

modole.exports = {
    sequelize: sequelize,
    models: models
};

//missed commas everywhere here - return ifd errors occur
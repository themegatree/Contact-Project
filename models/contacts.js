const contacts = (sequelize, Datatype) => {
    const Contacts = sequelize.define("contacts", {
        name: {type: DataTypes.STRING(60)},
        email: {type: DataTypes.STRING(60)},
        dofb: {type: DataTypes.STRING(60)},
    }, {timestamps: false}
    );
    return Contacts;
};

module.exports = contacts;
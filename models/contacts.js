const contacts = (sequelize, DataTypes) => {
    const Contacts = sequelize.define("contact_list", {
        name: {type: DataTypes.STRING(60)},
        email: {type: DataTypes.STRING(60)},
        dofb: {type: DataTypes.STRING(60)},
    }, {timestamps: false}
    );
    return Contacts;
};

module.exports = contacts;
const relations = (sequelize, DataTypes) => {
    const Relations = sequelize.define("contacts~tag", {
        contactid: {type: INT},
        tagid: {type: INT}
    }, {timestamps: false}
    );
    return Contacts;
};

module.exports = contacts;
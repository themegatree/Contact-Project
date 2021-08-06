const tags = (sequelize, DataTypes) => {
    const Tags = sequelize.define("tag", {
        name: {type: DataTypes.STRING(60)}
    }, {timestamps: false}
    );
    return Tags;
};

module.exports = tags;
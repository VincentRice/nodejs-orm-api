const { Datatypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: { type: Datatypes.STRING, allowNull: false },
        passwordHash: { type: Datatypes.STRING, allowNull: false },
        title: { type: Datatypes.STRING, allowNull: false },
        firstName: { type: Datatypes.STRING, allowNull: false },
        lastName: { type: Datatypes.STRING, allowNull: false },
        role: { type: Datatypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}
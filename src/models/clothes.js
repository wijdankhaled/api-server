'use strict';

// id column will be added by default with datatibe SERIAL
const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
    },
});

module.exports = clothes;
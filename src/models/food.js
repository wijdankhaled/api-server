'use strict';

// id column will be added by default with datatibe SERIAL
const food = (sequelize, DataTypes) => sequelize.define('food', {
    foodname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodtype: {
        type: DataTypes.STRING,
    },
});

module.exports = food;

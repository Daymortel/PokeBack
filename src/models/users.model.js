const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/databases');

const User = sequelize.define('users', {
    email: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = { User }

const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/databases');

const Team = sequelize.define('teams', {
    pokeId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

module.exports = { Team }
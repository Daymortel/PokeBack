const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/databases');

const Pokemon = sequelize.define('pokemons', {
    name: {
        type: DataTypes.STRING
    },
    type1: {
        type: DataTypes.STRING
    },
    type2: {
        type: DataTypes.STRING
    },
    move1: {
        type: DataTypes.STRING
    },
    move2: {
        type: DataTypes.STRING
    },
    move3: {
        type: DataTypes.STRING
    },
    move4: {
        type: DataTypes.STRING
    },
    hp: {
        type: DataTypes.INTEGER
    },
    attack: {
        type: DataTypes.INTEGER
    },
    defense: {
        type: DataTypes.INTEGER
    },
    "special-attack": {
        type: DataTypes.INTEGER
    },
    "special-defense": {
        type: DataTypes.INTEGER
    },
    speed: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

module.exports = { Pokemon }
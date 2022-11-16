const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:dev@localhost:5432/pokemons');

module.exports = { sequelize }
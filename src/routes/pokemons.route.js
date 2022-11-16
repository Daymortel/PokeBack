const express = require('express');
const router = express.Router();
const { findAll, create, destroy } = require('../controllers/pokemons.controller');

router.get('/', findAll);
router.post('/', create);
router.delete('/:id', destroy)

module.exports = router;
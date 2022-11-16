const express = require('express');
const router = express.Router();
const { findAll, create, destroy } = require('../controllers/teams.controller');

router.get('/', findAll);
router.post('/', create);
router.delete('/:id', destroy)

module.exports = router;
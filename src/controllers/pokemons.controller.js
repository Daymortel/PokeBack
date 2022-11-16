const { Pokemon } = require('../models/pokemons.model');

exports.findAll = async (req, res) => {
    try {
        return res.json(await Pokemon.findAll());
    } catch(e) {
        console.log('ERROR', e);
        return res.status(500).send(e);
    }
}

exports.create = async (req, res) => {
    try {
        return res.json(await Pokemon.create(req.body));
    } catch(e) {
        console.log('ERROR', e);
        return res.status(500).send(e);
    }
}

exports.destroy = async (req, res) => {
    try {
        const id = req.params.id;
        return res.json(await Pokemon.destroy({
            where: { id }
        }));
    } catch(e) {
        console.log('ERROR', e);
        return res.status(500).send(e);
    }
}

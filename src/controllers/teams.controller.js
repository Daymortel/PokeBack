const { Team } = require('../models/teams.model');

exports.findAll = async (req, res) => {
    try {
        return res.json(await Team.findOne({
            where: {
                userId: req.user
            }
        }));
    } catch(e) {
        console.log('ERROR', e);
        return res.status(500).send(e);
    }
}

exports.create = async (req, res) => {
    try {
        return res.json(await Team.create(req.body));
    } catch(e) {
        console.log('ERROR', e);
        return res.status(500).send(e);
    }
}

exports.destroy = async (req, res) => {
    try {
        const id = req.params.id;
        return res.json(await Team.destroy({
            where: { id }
        }));
    } catch(e) {
        console.log('ERROR', e);
        return res.status(500).send(e);
    }
}

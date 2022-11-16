const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { User } = require('../models/users.model');

exports.signup = async (req, res) => {
    try {
        await User.create({
            "username": req.body.username,
            "email": req.body.email,
            "password": crypto.createHash('sha256').update(req.body.password).digest('hex'),
        })
        res.send('Compte créé !');
    } catch(e) {
        console.log(e)
    }
}

exports.signin = async (req, res) => {
    try {
        const result = await User.findOne({
            where: { 
                username: req.body.username,
                password: crypto.createHash('sha256').update(req.body.password).digest('hex')
            }
        });
        console.log('start : ' + result.dataValues)
        if(result.length === 0) {
            res.status(404).send('Account not found !');
        } else {
            const token = jwt.sign(result.dataValues, "secretkey");
            const user = result.dataValues;
            res.send({user, token});
        }
    } catch(e) {
        console.log(User)
        console.log(e)
    }
}

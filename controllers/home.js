const models = require('../models');
const mongoose = require('mongoose');

exports.all = async (req, res) => {
    let all = await models.Anime.find({}.sort({ _id: -1 }), (err, result) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(200).json(result);
    });

};
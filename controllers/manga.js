const models = require('../models');
const mongoose = require('mongoose');

exports.allMangas = async (req, res) => {
    let allMangas = await models.Anime.find({type: "Manga"}.sort({ _id: -1 }), (err, result) => {
        if (err) {
            res.status(500).send(err);
        };
        res.status(200).json(result);
    });

};
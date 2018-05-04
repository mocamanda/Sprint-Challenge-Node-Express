const express = require('express');

const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');

// /api/projects
router.get('/', (req, res) => {
    projectModel
        .get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json(`There was an error getting projects: ${error}`);
        });
});

module.exports = router;
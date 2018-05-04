const express = require('express');

const router = express.Router();

const actionModel = require('../data/helpers/actionModel.js');

// /api/actions
// GET/Read Actions
router.get('/', (req, res) => {
    actionModel
        .get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json(`There was an error getting actions: ${error}`);
        });
});

module.exports = router;
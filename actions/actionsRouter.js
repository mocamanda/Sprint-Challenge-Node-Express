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

// GET/Read specific Action
router.get(':id', (req, res) => {
    const { id } = req.params;

    actionModel
        .get(id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json(`There was an error getting that action: ${error}`);
        });
});

// POST/Create Action
router.post('/', (req, res) => {
    actionModel
        .insert(req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(`There was an error posting action: ${error}`);
        });
});

// PUT/Update Action
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const update = req.body;
    actionModel
        .update(id, update)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json(`There was an error updating action: ${error}`);
        });
});

// DELETE/Delete Action
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    actionModel
        .get(id)
        .then(response => {
            action = { ...response[0] };
            actionModel
                .remove(id)
                .then(response => {
                    res.status(200).json(action);
                })
        })
                .catch(err => {
                    res.status(500).json(`There was an error deleting project: ${error}`);
                });
});

module.exports = router;
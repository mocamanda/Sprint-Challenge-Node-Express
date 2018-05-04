const express = require('express');

const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');

// /api/projects
// GET/Read Project
router.get('/', (req, res) => {
    projectModel
        .get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(`There was an error getting projects: ${error}`);
        });
});

// GET/Read specific Project
router.get('/:id', (req, res) => {
    const { id } = req.params;

    projectModel
        .get(id)
        .then(project => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(`There was an error getting that project: ${error}`);
        });
});

// POST/Create Project
router.post('/', (req, res) => {
    projectModel
        .insert(req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(`There was an error posting project: ${error}`);
        });
});

// PUT/Update Project
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const update = req.body;
    projectModel
        .update(id, update)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(`There was an error updating project: ${error}`);
        });
});

// DELETE/Delete Project
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    projectModel
        .get(id)
        .then(response => {
            project = { ...response[0] };
            projectModel
                .remove(id)
                .then(response => {
                    res.status(200).json(project);
                })
                .catch(err => {
                    res.status(500).json(`There was an error deleting project: ${error}`);
                });
            })
            .catch(err => {
                res.status(404).json(`Project not found: ${error}`);
            });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const  { projects } = require('../data/data.json');

//Route setup
router.get('/', function(req, res, next) {
    res.render('index', { projects })
})

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/project/:id', function (req, res, next) {
    const projectID = req.params.id;
    const project = projects.find( ({ id }) => id === +projectID );

    if (project) {
        res.render('project', { project });
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;
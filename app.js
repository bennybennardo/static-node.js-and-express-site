const express = require('express');
const  { projects } = require('../data/data.json');
const path = require('path');

//Middleware setup
app.set('view engine', 'pug');
append.use('/static', express.static('public'))

//Route setup
app.get('/', function(req, res, next) {
    res.render('../routes/index.js', { projects })
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/project/:id', function (req, res, next) {
    const projectID = req.params.id;
    const project = projects.find( ({ id }) => id === +projectID );

    if (project) {
        res.render('project', { project });
    } else {
        res.sendStatus(404);
    }
})

app.listen(3000, ( () => {
    console.log('This application is running on localhost:3000')
}))
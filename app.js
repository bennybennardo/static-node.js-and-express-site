const express = require('express');
const path = require('path');
const app = express();

// const router = require('./routes/index');
// app.use('/', router);

//Middleware setup
app.set('view engine', 'pug');
app.use('/static', express.static('public'))

//Route setup
const routes = require('./routes');
app.use (routes);

app.listen(3000, ( () => {
    console.log('This application is running on localhost:3000')
}))

module.exports = app;
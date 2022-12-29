const express = require('express');
const path = require('path');
const app = express();

// const router = require('./routes/index');
// app.use('/', router);

/*MIDDLEWARE SETUP*/
app.set('view engine', 'pug');
app.use('/static', express.static('public'))

/*ROUTE SETUP*/
const routes = require('./routes');
app.use (routes);

app.listen(3000, ( () => {
    console.log('This application is running on localhost:3000')
}))

/*ERROR HANDLERS*/

//404 Handler

// app.use((req, res, next) => {

//     console.log('404 error handler called');

//     res.status(404).render('not-found');

// })

// //Global Handler

//     if (err.status === 404) {
//         res.status(404).render('not-found', { err });
//     } else {
//         err.message = err.message || `Oops! It looks like something went wrong on the server.`
//         res.status(err.status || 500).render('error', { err })
//     }

module.exports = app;
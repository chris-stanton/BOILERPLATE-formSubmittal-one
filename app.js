
// requiring dependancies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


// defining server side routes
const email = require('./server/routes/email.js');
const hummus = require('./server/routes/hummus.js');

// server back static files
app.use(express.static(path.join(__dirname, './public')));
//initializing body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// handles index file separately
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// server side routes
app.use('/email', email);
app.use('/hummus', hummus);

// port listening
app.listen(port, () => {
    console.log('Listening on port: ', port);
});




// npm install hummus
// https://github.com/galkahana/HummusJS/

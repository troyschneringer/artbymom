require('babel-register');

// load environment from file
require('dotenv').config();

// express
const express = require('express');
const app = express();

// auth
const jwt = require('express-jwt');
app.use('/api', jwt(
    { 
        secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
        audience: process.env.AUTH0_CLIENT_ID,
        issuer: 'https://artbymom.auth0.com/' 
    }));

// json body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ui
app.use('/', express.static('www'));

// api
var projects = require('./src/server/routes/projects.js');
app.use('/api/projects', projects);

app.listen(process.env.PORT || 3000);
require('babel-register');

var express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var projects = require('./routes/projects.js');

app.use('/', express.static('www'));
app.use('/api/projects', projects);

app.listen(process.env.PORT || 3000);
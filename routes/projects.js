var express = require('express');
var router = express.Router();
var db = require('./database.js')

router.delete('/:id', function(req, res){
    db.deleteProject(req.params.id)
        .then(function(data) {
            res.statusCode = 204;
            res.end();
        })
        .catch(function(error){
            res.statusCode = 500;
            res.send('Error 500: ' + error);
        });
});

router.get('/', function(req, res){
    db.getAllProjects()
        .then(function(data) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ projects: data });
        })
        .catch(function(error){
            res.statusCode = 500;
            res.send('Error 500: ' + error);
        });
});

router.post('/', function(req, res) {
    if (!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('description')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }

    var project = {
        name : req.body.name,
        description : req.body.description,
        thumbnail: req.body.thumbnail
    };

    db.insertProject(project)
        .then(function(data) {
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch(function(error){
            res.statusCode = 500;
            res.send('Error 500: ' + error);
        });;
});

module.exports = router;
var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var databaseUrl = process.env.DATABASE_URL;
var pgp = require('pg-promise')(options);
var db = pgp(databaseUrl);

// Projects
function deleteProject(id) {
    return db.none('delete from projects where id = $1', [ id ]);
}

function getAllProjects() {
    return db.any('select * from projects');
}

function insertProject(project) {
    return db.one('insert into projects (name, description, thumbnail) values ($1, $2, $3) returning id', 
        [ project.name, project.description, project.thumbnail ])
        .then(function (data) {
            project.id = data.id;
            return project;
        });
}

module.exports = {
    deleteProject: deleteProject,
    getAllProjects: getAllProjects,
    insertProject: insertProject
};
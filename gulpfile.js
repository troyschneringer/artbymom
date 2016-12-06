const gulp = require('gulp');
const exec = require('child_process').exec;
const nodemon = require('nodemon');

gulp.task('dev', () =>
    exec('heroku config:get DATABASE_URL -a artbymom', (err, stdout, stderr) => {
        nodemon({
            script: './app.js',
            watch: ['./src', './app.js'],
            env: { 
                'DATABASE_URL': stdout,
                'NODE_ENV': 'development',
                'PGSSLMODE': 'require' 
            }
            //,
            // tasks: function (changedFiles) {
            //     var tasks = []
            //     if (!changedFiles) return tasks;
            //     changedFiles.forEach(function (file) {
            //         console.info(path.dirname(file));
            //         if (path.extname(file) === '.js' && !~tasks.indexOf('webpack')) tasks.push('webpack');
            //         if (path.extname(file) === '.js' && !~tasks.indexOf('js')) tasks.push('js');
            //     })
            //     return tasks
            // }
        });
    })
);
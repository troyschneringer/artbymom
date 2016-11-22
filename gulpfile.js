const babel = require('gulp-babel');
const concat = require('gulp-concat');
const exec = require('child_process').exec;
const ghPages = require('gulp-gh-pages');
const gulp = require('gulp');
const inject = require('gulp-inject-string');
const jsoncombine = require("gulp-jsoncombine");
const jsonTransform = require('gulp-json-transform');
const less = require('gulp-less');
const minify = require('gulp-minify');
const nodemon = require('gulp-nodemon');
const path = require('path');
const webpack = require('webpack-stream');


// Databases
gulp.task('data', function() {
    gulp.src('./data/projects/*.json')
        .pipe(gulp.dest('./www/data/projects'))
        .pipe(jsonTransform(function(data, file) {
            return {
                id: data.id,
                name: data.name,
                age: data.age,
                categories: data.categories || [],
                description: data.description,
                images: data.images
            };
        }))
        .pipe(concat('index.json', {newLine: ',\n    '}))
        .pipe(inject.wrap('{\n  "projects": [\n    ', '\n  ]\n}'))
        .pipe(gulp.dest('./www/data/projects'));
});

// Dev
gulp.task('dev', function () {
    exec('heroku config:get DATABASE_URL -a artbymom', function (err, stdout, stderr) {
        nodemon({
            script: 'server.js',
            env: { 
                'DATABASE_URL': stdout,
                'NODE_ENV': 'development',
                'PGSSLMODE': 'require' 
            }
        });
    });
});

// GH pages
gulp.task('gh-pages', function(){
    return gulp.src('./www/**/*')
        .pipe(ghPages());
});

// Less
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('artbymom.css'))
    .pipe(gulp.dest('./www/css'));
});

// React
gulp.task('react', () =>
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(concat('artbymom.js'))
        .pipe(gulp.dest('./www/js'))
);

// Watch
gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('./data/**/*.json', ['data']);
    gulp.watch('./src/**/*.js', ['webpack']);
});

// Webpack
gulp.task('webpack', function() {
  return gulp.src('src/app.js')
    .pipe(webpack({
        output: {
            filename: 'app.js',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader?presets[]=es2015&presets[]=react'
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                }
            ]
        }
    }))
    .pipe(minify({
        ext: {
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('./www/js'));
});

// Target tasks
gulp.task('default', ['data', 'less', 'watch', 'webpack']);
gulp.task('deploy', ['less', 'webpack', 'gh-pages']);
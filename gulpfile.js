const babel = require('gulp-babel');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const exec = require('child_process').exec;
const gulp = require('gulp');
const less = require('gulp-less');
const minify = require('gulp-minify');
const nodemon = require('gulp-nodemon');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

// build tasks
gulp.task('clean', function() {
    gulp.src('./www/css', {read: false})
        .pipe(clean());
    gulp.src('./www/js', {read: false})
        .pipe(clean());
});

gulp.task('js', () =>
    gulp.src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./www/js'))
);

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('artbymom.css'))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('webpack', () =>
    gulp.src('./src/app.js')
        .pipe(webpack({
            output: {
                filename: 'app.js',
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader?presets[]=latest&presets[]=react'
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
        .pipe(gulp.dest('./www/js'))
);

// Dev
gulp.task('dev', ['build'], () =>
    exec('heroku config:get DATABASE_URL -a artbymom', (err, stdout, stderr) => {
        nodemon({
            script: './app.js',
            watch: ['./less', './src', './app.js'],
            env: { 
                'DATABASE_URL': stdout,
                'NODE_ENV': 'development',
                'PGSSLMODE': 'require' 
            },
            tasks: function (changedFiles) {
                var tasks = []
                if (!changedFiles) return tasks;
                changedFiles.forEach(function (file) {
                    console.info(path.dirname(file));
                    //if (path.extname(file) === '.js' && !~tasks.indexOf('webpack')) tasks.push('webpack');
                    if (path.extname(file) === '.js' && !~tasks.indexOf('js')) tasks.push('js');
                    if (path.extname(file) === '.less' && !~tasks.indexOf('less')) tasks.push('less');
                })
                return tasks
            }
        });
    })
);

// Target tasks
gulp.task('build', ['less', 'js']);
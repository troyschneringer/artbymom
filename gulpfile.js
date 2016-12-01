// const babel = require('gulp-babel');
// const clean = require('gulp-clean');
// const concat = require('gulp-concat');
// const exec = require('child_process').exec;
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const webpack = require('webpack');
const wpcookbook = require('webpack-cookbook');
const wpmerge = require('webpack-merge');

const WebpackDevServer = require("webpack-dev-server");

var paths = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    style: path.join(__dirname, 'src/css', 'main.css')
};

// build tasks
gulp.task('build', function(callback) {

    var config = wpmerge(
        wpcookbook.common(paths),
        //wpcookbook.sourcemaps
        wpcookbook.chunkhash(),
        wpcookbook.clean(paths.build),
        wpcookbook.setFreeVariable(
          'process.env.NODE_ENV',
          'production'
        ),
        wpcookbook.extractBundle('vendor', [
            'auth0-lock',
            'react',
            'react-bootstrap',
            'react-dom',
            'react-ga',
            'react-router'
        ]),
        wpcookbook.minify(),
        wpcookbook.extractCss(paths.style)
    );

    webpack(config, function(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('dev', function(callback) {
    
    var config = wpmerge(
         wpcookbook.common(paths),
         wpcookbook.setupCss(paths.style),
         wpcookbook.devServer({ host: 'localhost', port: 8080 })
    );
    var compiler = webpack(config);

    new WebpackDevServer(compiler, {
            // server and middleware options
        })
        .listen(8080, 'localhost', function(err) {
            if (err) throw new gutil.PluginError('webpack-dev-server', err);
            // Server listening
            gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

            // keep the server alive or continue?
            // callback();
        });
});

// gulp.task('webpack2', () =>
//     gulp.src('./src/app.js')
//         .pipe(webpack({
//             output: {
//                 filename: 'app.js',
//             },
//             module: {
//                 loaders: [
//                     {
//                         test: /\.js$/,
//                         exclude: /node_modules/,
//                         loader: 'babel-loader?presets[]=latest&presets[]=react'
//                     }
//                 ]
//             }
//         }))
//         .pipe(minify({
//             ext: {
//                 src:'.js',
//                 min:'.min.js'
//             }
//         }))
//         .pipe(gulp.dest('./www/js'))
// );

// Dev
// gulp.task('dev', () =>
//     exec('heroku config:get DATABASE_URL -a artbymom', (err, stdout, stderr) => {
//         nodemon({
//             script: './app.js',
//             watch: ['./less', './src', './app.js'],
//             env: { 
//                 'DATABASE_URL': stdout,
//                 'NODE_ENV': 'development',
//                 'PGSSLMODE': 'require' 
//             },
//             tasks: function (changedFiles) {
//                 var tasks = []
//                 if (!changedFiles) return tasks;
//                 changedFiles.forEach(function (file) {
//                     console.info(path.dirname(file));
//                     //if (path.extname(file) === '.js' && !~tasks.indexOf('webpack')) tasks.push('webpack');
//                     if (path.extname(file) === '.js' && !~tasks.indexOf('js')) tasks.push('js');
//                     if (path.extname(file) === '.less' && !~tasks.indexOf('less')) tasks.push('less');
//                 })
//                 return tasks
//             }
//         });
//     })
// );

// // Target tasks
// gulp.task('build', ['less', 'js']);
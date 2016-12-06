const path = require('path');
const wpcookbook = require('webpack-cookbook');
const wpmerge = require('webpack-merge');

var paths = {
    app: path.join(__dirname, 'src/client'),
    build: path.join(__dirname, 'www'),
    style: path.join(__dirname, 'src/client/css', 'main.css')
};

var config;

switch(process.env.NODE_ENV) {
  case 'production':
    config = wpmerge(
      wpcookbook.common(paths),
      wpcookbook.sourcemaps,
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
    break;

  default:
    config = wpmerge(
      wpcookbook.common(paths),
      wpcookbook.setupCss(paths.style),
      wpcookbook.devServer({ host: 'localhost', port: 8080 })
    );
}

//module.exports = wpcookbook.validate(config);
module.exports = config;
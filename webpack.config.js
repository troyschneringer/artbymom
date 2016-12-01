const path = require('path');
const cookbook = require('webpack-cookbook');

var options = {
    paths: {
      app: path.join(__dirname, 'src'),
      build: path.join(__dirname, 'build'),
      style: path.join(__dirname, 'src/css', 'main.css')
    },
    title: 'art by mom'
};

module.exports = cookbook(options);
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config            = require('../config');

const ENTRY_POINTS = config.entry_point_settings.entry_points;
const COMMONS      = config.entry_point_settings.commons;
const BASE_DIR     = config.entry_point_settings.src_dir;
const DIST_DIR     = config.entry_point_settings.dist_dir;

/**
 * 影响webpack.base.conf.js
 */

const ENTRY = ENTRY_POINTS.reduce((x, y)=>{x[y] = "./" + path.join('.', BASE_DIR, y + '.js'); return x; }, {});

const JS_ENTRY_POINTS = ENTRY_POINTS.map(x=>path.join('.', BASE_DIR, x));

/**
 * 影响webpack.prod.conf.js
 */

const HTML_SETTINGS_PROD = ENTRY_POINTS.map( x =>{
  return new HtmlWebpackPlugin({
    filename       : path.resolve(__dirname, path.join('../dist', x + '.html')),
    template       : path.join('.', BASE_DIR, x + '.html'),
    inject         : true,
    chunks         : [x, ...COMMONS],
    chunksSortMode : 'dependency',
    minify         : {
      removeComments        : true,
      collapseWhitespace    : true,
      removeAttributeQuotes : true,
    },
  });
});

/**
 * 影响webpack.dev.conf.js
 */
const HTML_SETTINGS_DEV = ENTRY_POINTS.map( x =>{
  return new HtmlWebpackPlugin({
    filename       : x + '.html',
    template       : path.join('.', BASE_DIR, x + '.html'),
    inject         : true,
    chunks         : [x, ...COMMONS],
    chunksSortMode : 'dependency',
  });
});

module.exports = {
  ENTRY,
  JS_ENTRY_POINTS,
  HTML_SETTINGS_PROD,
  HTML_SETTINGS_DEV,
}

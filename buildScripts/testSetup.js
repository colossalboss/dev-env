// this file isn't transpiled, so must use commonJS and ES5

//register babel to transpile before our tests runs
require('babel-register')();

//disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};

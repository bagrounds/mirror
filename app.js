/**
 *
 */
;(function(){
  "use strict";

  var express = require('express');
  var path = require('path');
  var logger = require('morgan');
  var bodyParser = require('body-parser');
  var stylus = require('stylus');

  var routes = require('./routes/index');

  var app = express();

  var PUBLIC = path.join(__dirname, 'public');

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(stylus.middleware(PUBLIC));

  app.use(express.static(PUBLIC));


  app.use(routes);


  module.exports = app;
})();

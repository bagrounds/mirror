/**
 *
 */
(function(){
  "use strict";

  var express = require('express');
  var router = express.Router();
  var VIEW = {
    INDEX: "index"
  };

  router.get('/', function(req, res) {
    res.render(VIEW.INDEX);
  });

  module.exports = router;

})();

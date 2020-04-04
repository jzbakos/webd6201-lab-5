/**
 * File: index.js
 * Author: Josh Bakos
 * Student ID: 100652490
 * Date: 2020-04-04
 */

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

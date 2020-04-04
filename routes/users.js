/**
 * File: users.js
 * Author: Josh Bakos
 * Student ID: 100652490
 * Date: 2020-04-04
 */

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

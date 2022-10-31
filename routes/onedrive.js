const express = require('express');
const router = express.Router();

require('isomorphic-fetch');
const { client } = require('../onedrive/client');

console.log(client.id);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

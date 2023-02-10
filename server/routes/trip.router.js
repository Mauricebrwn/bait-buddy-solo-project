const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM "trip";`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all trips', err);
      res.sendStatus(500)
    })

});

  module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    pool
      .query(`
      SELECT * FROM "trip";` )
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log('Error making SELECT for trip:', error);
        res.sendStatus(500);
      }); 
  });

  module.exports = router;